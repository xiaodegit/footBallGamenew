// 导入自定义模块
const sql = require('./mysql/sql');
const createServer = require('./module/server');
const authModule = require('./module/auth');
const roomModule = require('./rooms/room');

// 创建并启动服务器
const { io, httpServer } = createServer();

// 注册所有模块的逻辑
sql.initialize();
authModule(io);
roomModule(io);

// 启动服务器
httpServer.listen(process.env.PORT || 3000, () => {
    console.log('开始启动服务器 http://localhost:3000');
});