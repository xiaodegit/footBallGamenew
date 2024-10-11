const http = require('http');
const { Server } = require('socket.io');

// 创建 HTTP 服务器
module.exports = function createServer() {
    const httpServer = http.createServer();
    const io = new Server(httpServer, {
        cors: {
            origin: "*", // 允许跨域请求
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
