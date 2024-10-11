import { _decorator, Component, Node } from 'cc';
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
    }

    update(deltaTime: number) {

    }

    onTouchStartGame() {
        //开始匹配，发送房间id到服务器
        this.clientmanager.Socket.emit('joinRoom', this.roomID);
        this.leaveRoom.active = true;
    }

    onTouchLeaveRoom() {
        this.clientmanager.Socket.emit('leaveRoom', this.roomID);
        this.leaveRoom.active = false;
    }
    
    protected onDestroy(): void {
        this.clientmanager.Socket.emit('leaveRoom', this.roomID);
    }
}


