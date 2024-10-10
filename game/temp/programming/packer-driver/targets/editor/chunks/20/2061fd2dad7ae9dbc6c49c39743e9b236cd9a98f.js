System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SkeletalAnimation, RigidBody2D, Vec2, ERigidBody2DType, PlayerManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PlayerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerManager(extras) {
    _reporterNs.report("PlayerManager", "../managers/PlayerManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SkeletalAnimation = _cc.SkeletalAnimation;
      RigidBody2D = _cc.RigidBody2D;
      Vec2 = _cc.Vec2;
      ERigidBody2DType = _cc.ERigidBody2DType;
    }, function (_unresolved_2) {
      PlayerManager = _unresolved_2.PlayerManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26424W95AlOMZgOTpoyn4BP", "PlayerController", undefined); //角色控制器


      __checkObsolete__(['_decorator', 'Component', 'SkeletalAnimation', 'RigidBody2D', 'Vec2', 'ERigidBody2DType', 'BoxCollider2D', 'PhysicsSystem2D', 'EPhysics2DDrawFlags']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerController", PlayerController = (_dec = ccclass('PlayerController'), _dec2 = property(RigidBody2D), _dec3 = property({
        tooltip: "跳跃力"
      }), _dec(_class = (_class2 = class PlayerController extends Component {
        constructor(...args) {
          super(...args);
          this.movementSpeed = 1;

          _initializerDefineProperty(this, "rb", _descriptor, this);

          _initializerDefineProperty(this, "jumpForce", _descriptor2, this);

          this.playerManager = void 0;
          this.savePlayerVec3 = void 0;
          this.moveBoolean = false;
        }

        start() {
          this.playerManager = (_crd && PlayerManager === void 0 ? (_reportPossibleCrUseOfPlayerManager({
            error: Error()
          }), PlayerManager) : PlayerManager).getInstance();
          this.rb = this.getComponent(RigidBody2D);
          this.rb.type = ERigidBody2DType.Dynamic;
          this.rb.gravityScale = 9.8; // // 启用物理系统的调试绘制
          // PhysicsSystem2D.instance.debugDrawFlags =
          //     EPhysics2DDrawFlags.Aabb |
          //     EPhysics2DDrawFlags.Pair |
          //     EPhysics2DDrawFlags.CenterOfMass |
          //     EPhysics2DDrawFlags.Joint |
          //     EPhysics2DDrawFlags.Shape;
        } //向前推加速度-开跑 


        runStart() {
          const skeletalAnimation = this.getComponent(SkeletalAnimation);
        }

        update() {
          if (!this.moveBoolean) {// this.stopMovement()
          }
        } //向左


        addMovement(e) {
          let vec = new Vec2(e, 0);
          this.LinearVelocity(vec);
        } //跳跃


        jumpMovement() {
          if (!this.playerManager.jump) {
            this.playerManager.jump = true;
            let Impulse = new Vec2(0, this.jumpForce);
            this.applyImpulseToRigidbody(Impulse);
            console.log('跳');
          }
        } //线性加速度


        LinearVelocity(e) {
          if (this.rb) {
            this.rb.linearVelocity = e;
            this.moveBoolean = true;
          }
        } //瞬间加速度


        applyImpulseToRigidbody(m) {
          this.rb.linearDamping = 0.0;
          this.rb.angularDamping = 0.0;
          let point = new Vec2(0, 0);
          this.rb.applyLinearImpulse(m, point, true);
        } //持续加速度


        applyForceToRigidbody(m) {
          if (!this.rb) return;
          console.log('持续加速度');
          let point = new Vec2(0, 0);
          this.rb.applyForce(m, point, true);
        } //是否播放跑步动画


        playerState() {
          if (this.playerManager.jump) {
            this.getComponent(SkeletalAnimation).stop();
          } else {
            this.getComponent(SkeletalAnimation).play();
          }
        } // 清除物体的速度和角速度，停止运动


        stopMovement() {
          this.rb.linearVelocity = new Vec2(0, 0);
          this.rb.angularVelocity = 0;
          this.rb.linearDamping = 10;
          this.rb.angularDamping = 10; // this.rb.sleep();
        }

        setMovementSpeed(e) {
          this.movementSpeed = e;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jumpForce", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2061fd2dad7ae9dbc6c49c39743e9b236cd9a98f.js.map