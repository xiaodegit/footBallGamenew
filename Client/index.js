// 导入自定义模块
require('dotenv').config();
const sql = require('./db/dbManager');
const createServer = require('./module/server');
const authModule = require('./module/auth');
const roomModule = require('./rooms/room');

// 创建并启动服务器
const { io, httpServer } = createServer();

// 注册所有模块的逻辑
sql.initializeLogin();
authModule(io);
roomModule(io);

// 启动服务器
httpServer.listen(process.env.PORT || 3000, () => {
    console.log('服务器启动中: http://localhost:' + (process.env.PORT || 3000));
});