import { _decorator, Component, EventTouch, Node, Vec2 } from 'cc';
import { PlayerController } from '../../PlayerController';
import { FootMotorController } from '../../jointControls/FootMotorController';
const { ccclass, property } = _decorator;

@ccclass('onTouchJump')
export class onTouchJump extends Component {
    playerController!: PlayerController;
    touchLocationClone!: Vec2;
    footMotorController!:FootMotorController;
    
    @property(Node)
    player!: Node;
    @property(Node)
    footMotorNode!: Node;

    start() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.playerController != this.player.getComponent(PlayerController);
        this.footMotorController != this.footMotorNode.getComponent(FootMotorController);
    }

    boolean = false;
    onTouchStart(event: EventTouch) {
        let touchLocation = event.getLocation(); // 获取触摸的屏幕坐标
        this.touchLocationClone = touchLocation.clone();
        this.footMotorController.rotateHeadTo90Degrees();

    }

    onTouchMove(event: EventTouch) {
        let touchLocation = event.getLocation();
        let offset = touchLocation.y - this.touchLocationClone.y;
        
        if(this.boolean)return;
        if (offset > 100) {
            this.boolean = true;
            this.playerController.jumpMovement();
        }
    }

    onTouchEnd(event: EventTouch) {
        
        this.footMotorController.stopMotor();
        this.boolean = false;

    }
}


