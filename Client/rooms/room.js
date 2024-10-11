const redis = require('redis');
const client = redis.createClient();

const rooms = {}; // 房间数据
let socket;
let IO;

// 创建房间
async function createRoom() {
    const roomId = `room_${Date.now()}`;
    console.log(roomId);
    
    await client.hset(roomId, 'status', 'waiting', 'players', JSON.stringify([]));
    await client.sadd('active_rooms', roomId);
    return roomId;
}

const joinRoom = function (roomID) {
    siftRoomID(roomID);
    if (!rooms[roomID]) {
        rooms[roomID] = [];
    }
    rooms[roomID].push(socket.id);
    createRoom()
    console.log(socket);
    console.log(socket.join);
    
    socket.join(roomID);
    console.log(`玩家 ${socket.id} 进入房间 ${roomID}`);
    IO.to(roomID).emit('playerJoined', socket.id);
}

const leaveRoom = function (roomID) {
    console.log('离开了房间');
    if (rooms[roomID]) {
        rooms[roomID] = rooms[roomID].filter(id => id !== socket.id);
        socket.leave(roomID);
        console.log(`玩家 ${socket.id} 离开了房间 ${roomID}`);
        IO.to(roomID).emit('playerLeft', socket.id);
    }
}

const siftRoomID = async function (roomID) {
    try {
        //超过4个人的房间ID无法加入匹配
        console.log('筛选房间ID');
        //检查roomID是否有超过四个人的
        console.log('roomID =', roomID);


        if(roomID){

        }
        return true;
    } catch {
        console.log('没有房间');
        return false;
    }
}

const roomModule = function (io) {
    io.on('connection', (e) => {
        socket = e;
        IO = io;
        e.on('joinRoom', joinRoom);
        e.on('leaveRoom', leaveRoom);
    });
};

module.exports = roomModule;