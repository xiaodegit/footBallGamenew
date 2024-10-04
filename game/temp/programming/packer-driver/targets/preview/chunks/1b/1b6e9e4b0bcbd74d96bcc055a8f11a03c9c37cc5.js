System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, HingeJoint2D, Node, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, FootMotorController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      HingeJoint2D = _cc.HingeJoint2D;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "551f7GRXg1NJbfB/NHk/wlD", "FootMotorController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'HingeJoint2D', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FootMotorController", FootMotorController = (_dec = ccclass('FootMotorController'), _dec2 = property(Node), _dec(_class = (_class2 = class FootMotorController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "connectedNode", _descriptor, this);

          this.hingeJoint = null;
          this.bool = false;
        }

        start() {
          this.hingeJoint = this.getComponent(HingeJoint2D);
          this.rotateHeadTo90Degrees();
        }

        update(deltaTime) {}

        rotateHeadTo90Degrees() {
          if (this.bool) return;

          if (this.hingeJoint) {
            this.bool = true; // 设置马达速度进行旋转

            var rotationSpeed = -90 * Math.PI / 50; // 每秒旋转 90 度，单位是弧度/秒

            this.hingeJoint.motorSpeed = rotationSpeed; // 计算旋转所需时间（假设需要 1 秒旋转到 90 度）

            var rotationDuration = 0.3; // 1 秒旋转 90 度，您可以根据需要调整
            // 使用 scheduleOnce 在旋转结束后停止马达

            this.scheduleOnce(() => {
              var rotationSpeed = 90 * Math.PI / 50; // 每秒旋转 90 度，单位是弧度/秒

              this.hingeJoint.motorSpeed = rotationSpeed;
            }, rotationDuration);
            this.scheduleOnce(() => {
              this.stopMotor();
            }, rotationDuration * 2);
          }
        } // 停止马达


        stopMotor() {
          if (this.hingeJoint) {
            this.hingeJoint.motorSpeed = 0; // 停止马达旋转
          }

          this.bool = false;
        } // 示例：点击按钮时调用该方法


        onRotateButtonPressed() {
          this.rotateHeadTo90Degrees();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "connectedNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b6e9e4b0bcbd74d96bcc055a8f11a03c9c37cc5.js.map