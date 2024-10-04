import { _decorator, Component, HingeJoint2D, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FootMotorController')
export class FootMotorController extends Component {
    @property(Node)
    connectedNode: Node | null = null;
    private hingeJoint: HingeJoint2D | null = null;
    bool:Boolean = false;
    start() {
        this.hingeJoint = this.getComponent(HingeJoint2D);
        this.rotateHeadTo90Degrees();
    }

    update(deltaTime: number) {

    }
    rotateHeadTo90Degrees() {
        if(this.bool)return;
        if (this.hingeJoint) {
            this.bool = true;
            // 设置马达速度进行旋转
            const rotationSpeed = -90 * Math.PI / 50; // 每秒旋转 90 度，单位是弧度/秒
            this.hingeJoint.motorSpeed = rotationSpeed;

            // 计算旋转所需时间（假设需要 1 秒旋转到 90 度）
            const rotationDuration = 0.3; // 1 秒旋转 90 度，您可以根据需要调整

            // 使用 scheduleOnce 在旋转结束后停止马达
            this.scheduleOnce(() => {
                const rotationSpeed = 90 * Math.PI / 50; // 每秒旋转 90 度，单位是弧度/秒
                this.hingeJoint.motorSpeed = rotationSpeed;
            }, rotationDuration);

            this.scheduleOnce(() => {
                this.stopMotor();
            }, rotationDuration * 2);

        }
    }

    // 停止马达
    stopMotor() {
        if (this.hingeJoint) {
            this.hingeJoint.motorSpeed = 0; // 停止马达旋转
        }
        this.bool = false;
    }

    // 示例：点击按钮时调用该方法
    onRotateButtonPressed() {
        this.rotateHeadTo90Degrees();
    }
}


