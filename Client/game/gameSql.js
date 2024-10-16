const mysql = require('../db/dbManager');

let roomdata = {

};

class startGame{

    gamePoolRun(){
        console.log('进入游戏');
        
        console.log(mysql.gamePool);
    }
}
module.exports = new startGame();