// 游戏入口文件，初始化全局文件
import { _decorator, Component } from 'cc';
import { clientManager } from '../managers/clientManager';
import { PlayerManager } from '../managers/PlayerManager';

const { ccclass } = _decorator;
@ccclass('game')
export class game extends Component {

    protected start(): void {
        PlayerManager.getInstance();
        clientManager.getInstance();
    }
    
    update(deltaTime: number) {

    }
}

