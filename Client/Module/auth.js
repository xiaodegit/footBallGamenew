module.exports = function authModule(io) {
    
    io.on('connection', (socket) => {

        socket.on('login', (credentials) => {

            console.log('玩家尝试登录:', credentials.username);

            //将username和password进行数据库查询
            if (credentials.username && credentials.password) {

                socket.emit('loginSuccess', { playerID: socket.id });
                console.log('玩家登录成功:', socket.id);

            } else {

                socket.emit('loginFailure', { reason: 'Invalid credentials' });

            }
        });
    });
};
