System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, PlayerController, FootMotorController, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, onTouchJump;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "../../PlayerController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFootMotorController(extras) {
    _reporterNs.report("FootMotorController", "../../jointControls/FootMotorController", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      PlayerController = _unresolved_2.PlayerController;
    }, function (_unresolved_3) {
      FootMotorController = _unresolved_3.FootMotorController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f2eccazspJNwbh4qd0Ms4hP", "onTouchJump", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("onTouchJump", onTouchJump = (_dec = ccclass('onTouchJump'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class onTouchJump extends Component {
        constructor(...args) {
          super(...args);
          this.playerController = void 0;
          this.touchLocationClone = void 0;
          this.footMotorController = void 0;

          _initializerDefineProperty(this, "player", _descriptor, this);

          _initializerDefineProperty(this, "footMotorNode", _descriptor2, this);

          this.boolean = false;
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.playerController = this.player.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController) : PlayerController);
          this.footMotorController = this.footMotorNode.getComponent(_crd && FootMotorController === void 0 ? (_reportPossibleCrUseOfFootMotorController({
            error: Error()
          }), FootMotorController) : FootMotorController);
        }

        onTouchStart(event) {
          let touchLocation = event.getLocation(); // 获取触摸的屏幕坐标

          this.touchLocationClone = touchLocation.clone();
          this.footMotorController.rotateHeadTo90Degrees();
        }

        onTouchMove(event) {
          let touchLocation = event.getLocation();
          let offset = touchLocation.y - this.touchLocationClone.y;
          if (this.boolean) return;

          if (offset > 100) {
            this.boolean = true;
            this.playerController.jumpMovement();
          }
        }

        onTouchEnd(event) {
          this.footMotorController.stopMotor();
          this.boolean = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "footMotorNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1a6427a88f650026605795485b94ba685d92ffe0.js.map