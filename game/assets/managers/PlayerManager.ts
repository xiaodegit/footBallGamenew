//角色全局属性管理器
import { _decorator, Node, director, Vec3 } from "cc";
import { PlayerController } from "../controllers/PlayerController";

export class PlayerManager {
    private static instance: PlayerManager;
    private jumpBoolean: Boolean;
    private Floor: Node;
    private over: Node;

    private force: number;

    private playerController: PlayerController;

    private constructor() {
        this.jumpBoolean = false;
        this.force = 30;
    }

    public static getInstance(): PlayerManager {
        if (!PlayerManager.instance) {
            PlayerManager.instance = new PlayerManager();
        }
        return PlayerManager.instance;
    }

    public set setPlayerControllerClass(e) {
        this.playerController = e;
    }

    public changePlayerSpeed() {
        if (this.playerController) {
            this.playerController.stopMovement();
        }
    }

    public set jump(e) {
        this.jumpBoolean = e;
    }
    public get jump() {
        return this.jumpBoolean;
    }

    public set floor(e) {
        this.Floor = e;
    }
    public get floor() {
        return this.Floor;
    }

    public set gameover(e) {
        this.over = e
    }

    public get Force() {
        return this.force;
    }
    public set Force(e) {
        this.force = e;
    }

    public ForceAdd1() {
        this.force++;
    }
    public GameOverFunction() {
        this.over.active = true;
        return director.pause();
    }

    // 角色状态转换
    playerState(e) {
        if (e == 'jump') {
            this.jump = true;
        } else if (e == 'run') {
            this.jump = false;

        }
    }
}






