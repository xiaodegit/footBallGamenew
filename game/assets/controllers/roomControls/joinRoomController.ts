import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { clientManager } from '../../managers/clientManager';

@ccclass('joinRoomController')
export class joinRoomController extends Component {
    clientmanager:clientManager;
    start() {

    }

    update(deltaTime: number) {
    }

    onTouchStartGame() {
        this.clientmanager.Socket.on('joinRoom',)

    }
}


