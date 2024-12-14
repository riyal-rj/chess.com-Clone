# Chess.com Clone (Basic) - Multiplayer Chess Game  

A real-time multiplayer chess game using **Node.js**, **Socket.IO**, and **Chess.js**. This project allows two players to play chess with full rules enforcement and allows additional users to spectate the ongoing match.
The main outcome of the project is to get hands on experince about **socket.io** library.

---

## 🚀 **Tech Stack**

- **Node.js**: Server-side JavaScript runtime for building the backend server.
- **Express.js**: Web framework for handling routes and views.
- **Socket.IO**: For real-time bidirectional communication between server and clients.
- **Chess.js**: Chess library to handle chess rules and board state.
- **EJS**: Templating engine for rendering dynamic content.
- **HTML/CSS/JS**: Frontend for rendering the chessboard UI.

---

## 🎮 **Features**

1. **Real-Time Multiplayer**  
   Two players can play chess with moves being synced in real-time.

2. **Chess Rules Enforcement**  
   Chess moves are validated using the `Chess.js` library, ensuring only legal moves are allowed.

3. **Spectator Mode**  
   Any additional users connecting to the server can spectate the game in real time.

4. **Automatic Role Assignment**  
   - The first user to connect is assigned **White** (`w`).
   - The second user is assigned **Black** (`b`).
   - All other users are assigned as **Spectators**.

5. **Move Validation**  
   Invalid moves are rejected, and the player is notified.

---

## ⚙️ **Setup Instructions**

### Prerequisites:
- Node.js installed (>= 14.0)
- Git installed  

### Steps to Run the Project:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/chess-com-clone.git
   cd chess-com-clone
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Start the Server**  
   ```bash
   node app.js
   ```

4. **Access the Game**  
   Open your browser and navigate to:  
   ```
   http://localhost:8000
   ```

---

## 💻 **Usage**

- The chessboard and pieces are rendered on the frontend.
- Two players can make moves sequentially.
- Spectators can observe the current state of the chessboard in real time.

---

## 💂️ **Project Structure**

```
chess-com-clone/
│-- public/          # Static assets (CSS, JS)
│-- views/           # EJS Templates
│-- app.js         # Server entry point
│-- package.json     # Project metadata
│-- README.md        # Documentation
```

---

## ⚖️ **How It Works**

1. When a player connects, the server assigns roles:
   - White (`w`)
   - Black (`b`)
   - Spectators (additional users).

2. Moves are validated using the `Chess.js` library.
3. Socket.IO ensures real-time synchronization of moves across all clients.
4. The current state of the board is broadcast to all connected clients.

---

## 🔗 **Dependencies**

- **express**: ^4.x
- **socket.io**: ^4.x
- **chess.js**: ^1.x
- **ejs**: ^3.x

Install these via:  
```bash
npm install express socket.io chess.js ejs
```

---

## 🎯 **Outcome**

A fully functional chess game clone where two players can play chess with spectators observing. It enforces the rules of chess, provides seamless communication, and ensures a great user experience.

---

## 🧑‍💻 **Future Enhancements**

- Add user authentication for players.
- Add persistent game states with a database.
- Include timers and move history for competitive play.
- Include ratings and player statistics through database 

---
 ## Layout
 ![image](https://github.com/riyal-rj/chess.com-Clone/blob/main/lookout.png)


Feel free to contribute to this project or provide feedback! 🎉
