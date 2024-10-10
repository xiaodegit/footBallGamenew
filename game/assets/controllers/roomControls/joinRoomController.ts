import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { clientManager } from '../../managers/clientManager';

@ccclass('joinRoomController')
export class joinRoomController extends Component {
    clientmanager!:clientManager;
    start() {

    }

    update(deltaTime: number) {
    }

    onTouchStartGame() {
        //开始匹配，发送自己的唯一id到服务器
        this.clientmanager.Socket.emit('joinRoom',)

    }
    
}


