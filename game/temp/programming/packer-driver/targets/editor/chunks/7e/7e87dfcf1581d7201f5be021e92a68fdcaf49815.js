System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Layers, Node, UITransform, Vec3, PlayerController, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, onTouchStick;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "../../PlayerController", _context.meta, extras);
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
      Layers = _cc.Layers;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      PlayerController = _unresolved_2.PlayerController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ed92wLG/pBr6JpaWEGwr+2", "onTouchStick", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Component', 'EventTouch', 'Layers', 'log', 'Node', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("onTouchStick", onTouchStick = (_dec = ccclass('onTouchStick'), _dec2 = property(Node), _dec(_class = (_class2 = class onTouchStick extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "player", _descriptor, this);

          this.currentPosition = void 0;
          this.isSingleTouch = false;
          this.playerController = void 0;
          this.isMoveBoolean = false;
        }

        start() {
          // 注册触摸事件监听
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this); // 设置节点层级和层

          this.node.setSiblingIndex(this.node.parent.children.length - 1);
          this.node.layer = Layers.Enum.UI_2D;
          this.playerController = this.player.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController) : PlayerController);
        }

        update(dt) {
          if (this.isMoveBoolean) {
            this.updatePlayerMovement();
          }
        }

        onTouchStart(event) {
          this.singleTouch(event);
          this.isMoveBoolean = true; // 激活操纵杆背景节点

          this.node.children[0].active = true; // 将操纵杆背景节点移动到触摸位置

          this.setPositionToTouch(event, this.node.children[0]);
        }

        onTouchMove(event) {
          if (this.isSingleTouch) {
            // 更新操纵杆手柄的位置
            this.setPositionToTouch(event, this.node.children[0].children[0]); //限制摇杆操作，模拟真实摇杆

            this.updateStickMove();
          }
        }

        onTouchEnd(event) {
          this.node.children[0].children[0].setPosition(new Vec3(0, 0, 0)); // 隐藏操纵杆背景节点

          this.node.children[0].active = false;
          this.isMoveBoolean = false;
          this.isSingleTouch = false;
        }

        onTouchCancel(event) {
          // 触摸取消时，与触摸结束相同的处理
          this.onTouchEnd(event);
        }

        setPositionToTouch(event, targetNode) {
          var _targetNode$parent;

          // 获取手指触摸位置的 UI 坐标
          const touchLocation = event.getUILocation(); // 将 UI 坐标转换为世界坐标

          const uiPoint = new Vec3(touchLocation.x, touchLocation.y, 0); // 将世界坐标转换为操纵杆父节点的局部坐标

          const parentUITransform = (_targetNode$parent = targetNode.parent) == null ? void 0 : _targetNode$parent.getComponent(UITransform);

          if (!parentUITransform) {
            return;
          }

          const localPosition = parentUITransform.convertToNodeSpaceAR(uiPoint); // 更新节点的局部位置

          targetNode.setPosition(localPosition);
        }

        updateStickMove() {
          const handle = this.node.children[0].children[0];
          if (!handle) return; // 获取手柄的当前局部坐标

          this.currentPosition = handle.position; // 限制 X 轴的范围在 -100 到 100 之间

          const maxX = 100;
          const minX = -100; // 限制 X 轴的位置

          const clampedX = Math.min(Math.max(this.currentPosition.x, minX), maxX); // Y 轴保持不变（如果需要固定在 0，可以将 currentPosition.y 设置为 0）

          const fixedY = 0; // 更新手柄的位置，只改变 X 轴，保持 Y 和 Z 轴不变

          handle.setPosition(new Vec3(clampedX, fixedY, this.currentPosition.z));
        }

        updatePlayerMovement() {
          if (!this.currentPosition) return;
          let moveSpeed = this.currentPosition.x / 20;
          this.playerController.addMovement(moveSpeed);
        } // 单点触摸


        singleTouch(event) {
          // 获取当前屏幕上所有触摸点
          const touches = event.getTouches(); // 只有当触摸点数量为1时，才标识为单点触摸

          if (touches.length === 1) {
            this.isSingleTouch = true;
          } else {
            this.isSingleTouch = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
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
//# sourceMappingURL=7e87dfcf1581d7201f5be021e92a68fdcaf49815.js.map