//道路全局管理器
import { Prefab, Vec3, instantiate, Node } from "cc";
import { obstacleManager } from "./ObstacleManager";
import { PlayerManager } from "./PlayerManager";
import { RoadController } from "../controllers/RoadController";

export class RoadManager {
    private static instance: RoadManager;
    obstaclemanager: obstacleManager;
    private thisroadName: String;
    private playerManager: PlayerManager;
    //生成三个或四个道路
    private currentRoad: Array<Node> = [];//当前道路 把第一个拿出来变成可复用道路
    private multiplexRoad;//可复用道路
    public cloneName: String;
    private leftRoad;
    private rightRoad;
    IsMoving: Boolean;
    RoadController: RoadController;

    constructor() {
        this.obstaclemanager = obstacleManager.getInstance();
        this.IsMoving = false

    }
    public static getInstance(): RoadManager {
        if (!RoadManager.instance) {
            RoadManager.instance = new RoadManager();
        }
        return RoadManager.instance;
    }

    public set setRoadControllerClass(e) {
        this.RoadController = e;
    }
    public setIsMoving(n) {
        if (this.RoadController) {
            this.RoadController.setIsMoving(n);
        }
        this.IsMoving = this.RoadController.setIsMoving(n);
    }
    public get isMoving() {
        return this.IsMoving;
    }
    public set leftR(e) {
        this.leftRoad = e;
    }
    public set rightR(e) {
        this.rightRoad = e;
    }
    public get leftR() {
        return this.leftRoad;
    }
    public get rightR() {
        return this.rightRoad;
    }


    // 开局初始化并分配所有道路
    initSetRoad(prefab: Prefab, segmentCount: number, isCharacterPosition: Vec3, parentNode: Node) {
        for (let i = 0; i < segmentCount; i++) {
            const segment = instantiate(prefab);
            parentNode.addChild(segment);
            segment.setPosition(0, 0, isCharacterPosition.z + i * 384);
            this.currentRoad.push(segment);
            if (i > 0) {
                this.obstaclemanager.randomoObstacle(segment);
            }
        }
    }

    setRoads() {
        //玩家每走到第二个道就删掉第一个放入到复用里
        this.multiplexRoad = this.currentRoad[0];
        this.currentRoad.shift();
        this.multiplexRoad.setPosition(0, 0, this.currentRoad[0].worldPosition.z + 1152);
        this.currentRoad.push(this.multiplexRoad);
        let children = this.multiplexRoad.children[3];
        if (children) {
            children.removeAllChildren()
        }
        this.obstaclemanager.randomoObstacle(this.multiplexRoad);
        
    }

    

    public get currentroad(): Array<Node> {
        return this.currentRoad;
    }

    setRoadName(name: String = null) {
        if (name) { this.RoadName = name };
        if (this.RoadName == 'road') {
            this.leftR = this.currentroad[0].children[1];
            this.rightR = this.currentroad[0].children[2];
        } else if (this.RoadName == 'roadLeft') {
            this.leftR = null;
            this.rightR = this.currentroad[0].children[0];
        } else if (this.RoadName == 'roadRight') {
            this.leftR = this.currentroad[0].children[0];
            this.rightR = null;
        }
    }

    saveName(e) {
        this.cloneName = this.thisroadName;
        this.thisroadName = e.name;
    }

    public get RoadName() {
        return this.thisroadName;
    }
    public set RoadName(e) {
        this.thisroadName = e;
    }
}