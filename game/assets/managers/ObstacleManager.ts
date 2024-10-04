//障碍物全局管理器
import { Vec3, Prefab, instantiate } from "cc";
import { RoadManager } from "./RoadManager";

export class obstacleManager {
    private static instance: obstacleManager;
    private obstacles = [];

    public static getInstance(): obstacleManager {
        if (!obstacleManager.instance) {
            obstacleManager.instance = new obstacleManager();
        }
        return obstacleManager.instance;
    }

    setobstaclePrefab(prefab) {
        for (let i = 0; i < 4; i++) {
            this.obstacles.push(prefab[i]);
        }
    }
    //随机分配障碍物
    randomoObstacle(segment) {

        //随机位置 前 中 后 5   0  -5  ,  0  ,  20  0  -20
        let randomx = [5.6, 0, -5.6];
        let randomz = [20, 0, -20];
        let positions: Array<Vec3> = [];

        // 生成所有位置组合
        for (let x of randomx) {
            for (let z of randomz) {
                positions.push(new Vec3(x, 0, z));  // 假设 Y 轴为 0
            }
        }

        // 打乱位置
        function shuffle(array: Array<any>) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        shuffle(positions);
        for (let i = 0; i < 4; i++) {
            let array: Array<Prefab> = this.obstacles;

            if (array) {
                let instantArray = instantiate(array[i]);
                segment.children[3].addChild(instantArray);
                instantArray.setPosition(positions[i]);  // 设置随机位置

            }
        }
    }
    
}