const mysql = require('../db/dbManager');

let roomdata = {

};

class startGame{

    gamePoolRun(roomId,playerArr,io){
        console.log('进入游戏');
        playerArr.forEach(e => {
            console.log('e=',e);
            
            io.to(e).emit('gameStart', { message: '游戏开始了！' });
        });

    }
}
module.exports = new startGame();