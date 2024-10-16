const AsyncLock = require('async-lock');
const sql = require('../game/gameSql');
const lock = new AsyncLock();

// 玩家数据
let players = new Set();

// 获取玩家数量的函数
function getPlayerCount() {
    return players.size;
}

// 创建房间
function createRoomID(playerArr) {
    let roomId = `room_${Date.now()}`;
    console.log('创建新的房间id',roomId);
    // playerArr 发送到数据库
    console.log('创建房间，玩家列表:', playerArr);
    sql.gamePoolRun();
    return roomId;
}

// 加入匹配
const playerCache = async function (socket) {
    await lock.acquire('playersLock', async () => {
        players.add(socket.id);
        console.log('玩家加入匹配', Array.from(players));
        console.log('当前玩家数量:', getPlayerCount());

        // 只要玩家到达四个后就加入匹配
        if (getPlayerCount() === 4) {
            let newArr = Array.from(players).slice(0, 4);
            newArr.forEach(player => players.delete(player)); // 从玩家列表中移除已加入房间的玩家
            createRoomID(newArr);
        }
    });
};

// 取消匹配
const playerExit = async function (socket) {
    await lock.acquire('playersLock', async () => {
        if (players.has(socket.id)) {
            players.delete(socket.id);
            console.log('玩家取消匹配', Array.from(players));
            console.log('当前玩家数量:', getPlayerCount());
        }
    });
};

// 房间模块
const roomModule = async function (io) {
    io.on('connection', (socket) => {
        socket.on('joinRoom', () => playerCache(socket));
        socket.on('leaveRoom', () => playerExit(socket));
    });
};

module.exports = roomModule;