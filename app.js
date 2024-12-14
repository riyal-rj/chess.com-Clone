//import the required packages
const express=require('express');
const socket=require('socket.io');
const http=require('http');
const {Chess}=require('chess.js');

const path=require('path');

//create the express app
const app=express();

const server=http.createServer(app);
const io=socket(server);

const chess=new Chess();//we can incorporate all the rules with the help of this variable
let players={}
let currentPlayer='w';

app.set('view engine','ejs');
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render('index',{title:'chess.com - clone'});
});

io.on('connection',(uniqueSocket)=>{
    console.log('connected..');

    if(!players.white)
    {
        players.white=uniqueSocket.id;
        uniqueSocket.emit("playerRole",'w');
    }
    else if(!players.black)
    {
        players.black=uniqueSocket.id;
        uniqueSocket.emit("playerRole",'b');
    }
    else
    {
        uniqueSocket.emit('spectatorRole');
    }

    uniqueSocket.on('disconnect',()=>{
        if(uniqueSocket.id===players.white)
            delete players.white;
        else if(uniqueSocket.id===players.black)
            delete players.delete;
    })

    uniqueSocket.on('move',(move)=>{
        try {
            if(chess.turn() === 'w' && uniqueSocket.id !== players.white)
                return;
            if(chess.turn() === 'b' && uniqueSocket.id !== players.black)
                return;

            const result=chess.move(move);
            if(result)//check for valid move
            {
                currentPlayer=chess.turn();
                io.emit('move',move);//sending to all oponent player as well as spectators
                io.emit('boardState',chess.fen());
            }
            else
            {
                console.log('Invalid Move: ',move);
                uniqueSocket.emit('invalidMove',move);
            }
        } catch (error) {
            console.log(error);
            uniqueSocket.emit('Invalid Move: ',move);
        }
    })
});

server.listen(8000,()=>{
    console.log('Listening on port 8000');
});

