import { _decorator, Camera, Component, EventTouch, Layers, log, Node, UITransform, Vec3 } from 'cc';
import { PlayerController } from '../../PlayerController';
const { ccclass, property } = _decorator;

@ccclass('onTouchStick')
export class onTouchStick extends Component {
    @property(Node)
    player: Node;
    currentPosition: Vec3;
    private isSingleTouch: boolean = false;
    playerController: PlayerController;
    isMoveBoolean: Boolean = false;;
    start() {
        // 注册触摸事件监听
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);

        // 设置节点层级和层
        this.node.setSiblingIndex(this.node.parent.children.length - 1);
        this.node.layer = Layers.Enum.UI_2D;

        this.playerController = this.player.getComponent(PlayerController);
    }

    protected update(dt: number): void {
        if (this.isMoveBoolean) {
            this.updatePlayerMovement();
        }
    }

    onTouchStart(event: EventTouch) {
        this.singleTouch(event);
        this.isMoveBoolean = true;

        // 激活操纵杆背景节点
        this.node.children[0].active = true;

        // 将操纵杆背景节点移动到触摸位置
        this.setPositionToTouch(event, this.node.children[0]);
    }

    onTouchMove(event: EventTouch) {
        if (this.isSingleTouch) {
            // 更新操纵杆手柄的位置
            this.setPositionToTouch(event, this.node.children[0].children[0]);
            //限制摇杆操作，模拟真实摇杆
            this.updateStickMove();
        }
    }

    onTouchEnd(event: EventTouch) {
        this.node.children[0].children[0].setPosition(new Vec3(0,0,0))
        // 隐藏操纵杆背景节点
        this.node.children[0].active = false;
        this.isMoveBoolean = false;

        this.isSingleTouch = false;
    }

    onTouchCancel(event: EventTouch) {
        // 触摸取消时，与触摸结束相同的处理
        this.onTouchEnd(event);
    }

    setPositionToTouch(event: EventTouch, targetNode: Node) {
        // 获取手指触摸位置的 UI 坐标
        const touchLocation = event.getUILocation();

        // 将 UI 坐标转换为世界坐标
        const uiPoint = new Vec3(touchLocation.x, touchLocation.y, 0);

        // 将世界坐标转换为操纵杆父节点的局部坐标
        const parentUITransform = targetNode.parent?.getComponent(UITransform);
        if (!parentUITransform) {
            return;
        }

        const localPosition = parentUITransform.convertToNodeSpaceAR(uiPoint);

        // 更新节点的局部位置
        targetNode.setPosition(localPosition);
    }



    updateStickMove() {
        const handle = this.node.children[0].children[0];
        if (!handle) return;

        // 获取手柄的当前局部坐标
        this.currentPosition = handle.position;

        // 限制 X 轴的范围在 -100 到 100 之间
        const maxX = 100;
        const minX = -100;

        // 限制 X 轴的位置
        const clampedX = Math.min(Math.max(this.currentPosition.x, minX), maxX);

        // Y 轴保持不变（如果需要固定在 0，可以将 currentPosition.y 设置为 0）
        const fixedY = 0;

        // 更新手柄的位置，只改变 X 轴，保持 Y 和 Z 轴不变
        handle.setPosition(new Vec3(clampedX, fixedY, this.currentPosition.z));

    }

    updatePlayerMovement() {
        if (!this.currentPosition) return;
        let moveSpeed = this.currentPosition.x / 20;
        this.playerController.addMovement(moveSpeed);

    }

    // 单点触摸
    singleTouch(event: EventTouch) {
        // 获取当前屏幕上所有触摸点
        const touches = event.getTouches();

        // 只有当触摸点数量为1时，才标识为单点触摸
        if (touches.length === 1) {
            this.isSingleTouch = true;
        } else {
            this.isSingleTouch = false;
        }
    }
}
