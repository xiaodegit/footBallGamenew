let rooms = {}; // 房间数据

module.exports = function roomModule(io) {
    io.on('connection', (socket) => {
        socket.on('joinRoom', (roomID) => {

            if (!rooms[roomID]) {
                rooms[roomID] = [];
            }
            rooms[roomID].push(socket.id);
            socket.join(roomID);
            console.log(`玩家 ${socket.id} 进入房间 ${roomID}`);
            io.to(roomID).emit('playerJoined', socket.id);
        });

        socket.on('leaveRoom', (roomID) => {
            
            if (rooms[roomID]) {
                rooms[roomID] = rooms[roomID].filter(id => id !== socket.id);
                socket.leave(roomID);
                console.log(`玩家 ${socket.id} 创建了房间 ${roomID}`);
                io.to(roomID).emit('playerLeft', socket.id);
            }
        });
    });
};