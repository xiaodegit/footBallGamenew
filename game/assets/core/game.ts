// 游戏入口文件，初始化全局文件
import { _decorator, Component } from 'cc';
import { PlayerManager } from "../managers/PlayerManager";
import { obstacleManager } from "../managers/ObstacleManager";
import { RoadManager } from "../managers/RoadManager";

const { ccclass } = _decorator;
@ccclass('game')
export class game extends Component {

    protected start(): void {

        PlayerManager.getInstance();
        obstacleManager.getInstance();
        RoadManager.getInstance();

    }
    
    update(deltaTime: number) {

    }
}

