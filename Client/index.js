// 导入自定义模块
const createServer = require('./Module/server');
const authModule = require('./Module/auth');
const roomModule = require('./Module/room');

// 创建并启动服务器
const { io, httpServer } = createServer();

// 注册所有模块的逻辑
authModule(io);
roomModule(io);

// 启动服务器
httpServer.listen(process.env.PORT || 3000, () => {
    console.log('开始启动服务器 http://localhost:3000');
});