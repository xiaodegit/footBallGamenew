module.exports = function authModule(io) {
    io.on('connection', (socket) => {
        socket.on('login', (credentials) => {
            console.log('Player attempting to login:', credentials.username);
            if (credentials.username && credentials.password) {
                socket.emit('loginSuccess', { playerID: socket.id });
                console.log('Player logged in successfully:', socket.id);
            } else {
                socket.emit('loginFailure', { reason: 'Invalid credentials' });
            }
        });
    });
};
