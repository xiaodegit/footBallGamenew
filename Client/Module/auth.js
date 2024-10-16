const sql = require('../db/dbManager');

module.exports = function authModule(io) {


    io.on('connection', (socket) => {

        socket.on('login', (credentials) => {

            console.log('玩家尝试登录:', credentials.username, credentials.password);
            
            sql.bijiaomima(credentials.username, credentials.password, socket)
                .then((isValid) => {
                    if (isValid) {
                        console.log('用户验证成功:', socket.id);
                    } else {
                        console.log('用户验证失败:', socket.id);
                    }
                })
                .catch((error) => {
                    console.error('验证过程出错:', error);
                });
        });
    });
};
