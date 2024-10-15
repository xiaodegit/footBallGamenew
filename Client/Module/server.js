const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const { Server } = require('socket.io');

app.use(cors()); // 允许所有来源的跨域请求
// 创建 HTTP 服务器
module.exports = function createServer() {
    const httpServer = http.createServer(app);  // 创建 HTTP 服务器
    const io = new Server(httpServer, {
        cors: {
            origin: "http://localhost:7456", // 客户端的来源
            methods: ["GET", "POST"],        // 允许的方法
            credentials: true                // 如果需要传递凭证
        }
    });
    io.on('connection', (socket) => {
        console.log('用户已连接:', socket.id);

        socket.on('disconnect', () => {
            console.log('用户连接已断开:', socket.id);

        });
    });

    return { io, httpServer };
}
