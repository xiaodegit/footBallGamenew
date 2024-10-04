import { _decorator, Collider2D, Component, Contact2DType, IPhysics2DContact } from 'cc';
const { ccclass, property } = _decorator;
import { PlayerManager } from '../managers/PlayerManager';

@ccclass('playerCollition')
export class playerCollition extends Component {
    private playerManager: PlayerManager;

    start() {
        this.playerManager = PlayerManager.getInstance();

        const collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D) {
        if (otherCollider.node) {
            this.playerManager.jump = false;

        }
    }

    onEndContact(contact: IPhysics2DContact, selfCollider: Collider2D, otherCollider: Collider2D) {
        // console.log('碰撞结束：', selfCollider.node.name, '和', otherCollider.node.name);
    }

    onPreSolve(contact: IPhysics2DContact, selfCollider: Collider2D, otherCollider: Collider2D) {
        // console.log('碰撞解决中：', selfCollider.node.name, '和', otherCollider.node.name);
    }
}


