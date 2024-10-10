//角色控制器
import { _decorator, Component, SkeletalAnimation, RigidBody2D, Vec2, ERigidBody2DType, BoxCollider2D, PhysicsSystem2D, EPhysics2DDrawFlags } from 'cc';
import { PlayerManager } from '../managers/PlayerManager';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
    private movementSpeed = 1;

    @property(RigidBody2D)
    rb: RigidBody2D | null = null;

    @property({
        tooltip: "跳跃力"
    })
    jumpForce: number = 1;

    private playerManager!: PlayerManager;
    public savePlayerVec3!: Vec2;
    private moveBoolean = false;
    start() {
        this.playerManager = PlayerManager.getInstance();
        this.rb = this.getComponent(RigidBody2D);
        this.rb!.type = ERigidBody2DType.Dynamic;
        this.rb!.gravityScale = 9.8;
        // // 启用物理系统的调试绘制
        // PhysicsSystem2D.instance.debugDrawFlags =
        //     EPhysics2DDrawFlags.Aabb |
        //     EPhysics2DDrawFlags.Pair |
        //     EPhysics2DDrawFlags.CenterOfMass |
        //     EPhysics2DDrawFlags.Joint |
        //     EPhysics2DDrawFlags.Shape;

    }

    //向前推加速度-开跑 
    runStart() {
        const skeletalAnimation = this.getComponent(SkeletalAnimation);
    }

    update() {
        if (!this.moveBoolean) {
            // this.stopMovement()
        }
    }


    //向左
    addMovement(e:number) {
        let vec = new Vec2(e, 0);
        this.LinearVelocity(vec)

    }

    //跳跃
    jumpMovement() {

        if (!this.playerManager.jump) {
            this.playerManager.jump = true;
            let Impulse = new Vec2(0, this.jumpForce);
            this.applyImpulseToRigidbody(Impulse);
            console.log('跳');

        }
    }

    //线性加速度
    LinearVelocity(e:Vec2) {

        if (this.rb) {
            this.rb.linearVelocity = e;
            this.moveBoolean = true;
        }
    }

    //瞬间加速度
    applyImpulseToRigidbody(m:Vec2) {
        this.rb!.linearDamping = 0.0;
        this.rb!.angularDamping = 0.0;
        let point = new Vec2(0, 0);
        this.rb!.applyLinearImpulse(m, point, true);
    }

    //持续加速度
    applyForceToRigidbody(m:Vec2) {
        if (!this.rb) return;
        console.log('持续加速度');
        let point = new Vec2(0, 0);
        this.rb.applyForce(m, point, true);
    }

    //是否播放跑步动画
    playerState() {
        if (this.playerManager.jump) {
            this.getComponent(SkeletalAnimation)!.stop();
        } else {
            this.getComponent(SkeletalAnimation)!.play();
        }
    }

    // 清除物体的速度和角速度，停止运动
    stopMovement() {
        if(!this.rb)return
        this.rb.linearVelocity = new Vec2(0, 0);
        this.rb.angularVelocity = 0;
        this.rb.linearDamping = 10;
        this.rb.angularDamping = 10;
        // this.rb.sleep();
    }

    setMovementSpeed(e:number){
        this.movementSpeed = e;
    }
}