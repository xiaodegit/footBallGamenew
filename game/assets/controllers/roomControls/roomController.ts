import { _decorator, Component, director, Node, Scene } from 'cc';
const { ccclass, property } = _decorator;
import { clientManager } from '../../managers/clientManager';

@ccclass('joinRoomController')
export class joinRoomController extends Component {
    clientmanager!: clientManager;
    roomID = '001';

    @property(Node)
    leaveRoom!:Node;

    start() {
        this.clientmanager = clientManager.getInstance();
        this.clientmanager.Socket.on('gameStart', this.gameStart);
    }

    update(deltaTime: number) {

    }
    gameStart(){
        console.log('开始游戏了');
        director.loadScene('game')
    }
    onTouchStartGame() {
        //开始匹配，发送房间id到服务器
        this.clientmanager.Socket.emit('joinRoom', this.roomID);
        this.leaveRoom.active = true;
        this.node.active = false;
    }

    onTouchLeaveRoom() {
        this.clientmanager.Socket.emit('leaveRoom', this.roomID);
        this.leaveRoom.active = false;
        this.node.active = true;

    }
    
    protected onDestroy(): void {
        this.clientmanager.Socket.emit('leaveRoom', this.roomID);
    }
}


