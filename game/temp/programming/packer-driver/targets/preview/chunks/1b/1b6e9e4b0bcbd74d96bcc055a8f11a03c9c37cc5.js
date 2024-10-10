System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, HingeJoint2D, _dec, _class, _crd, ccclass, property, FootMotorController;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      HingeJoint2D = _cc.HingeJoint2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "551f7GRXg1NJbfB/NHk/wlD", "FootMotorController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'HingeJoint2D', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FootMotorController", FootMotorController = (_dec = ccclass('FootMotorController'), _dec(_class = class FootMotorController extends Component {
        constructor() {
          super(...arguments);
          this.hingeJoint = null;
          this.bool = false;
        }

        start() {
          this.hingeJoint = this.getComponent(HingeJoint2D);
        }

        update(deltaTime) {}

        rotateHeadTo90Degrees() {
          // if (this.bool) return;
          // if (this.hingeJoint) {
          //     this.bool = true;
          // 设置马达速度进行旋转
          var rotationSpeed = -80 * Math.PI / 10; // 每秒旋转 90 度，单位是弧度/秒

          this.hingeJoint.motorSpeed = rotationSpeed; // }
        } // 停止马达


        stopMotor() {
          // 计算旋转所需时间（假设需要 1 秒旋转到 90 度）
          var rotationDuration = 0.1; // 1 秒旋转 90 度，您可以根据需要调整
          // 使用 scheduleOnce 在旋转结束后停止马达

          this.scheduleOnce(() => {
            var rotationSpeed = 80 * Math.PI / 30; // 每秒旋转 90 度，单位是弧度/秒

            this.hingeJoint.motorSpeed = rotationSpeed;
          }, rotationDuration);
          this.hingeJoint.motorSpeed = 0; // 停止马达旋转

          this.bool = false;
        } // 示例：点击按钮时调用该方法


        onRotateButtonPressed() {
          this.rotateHeadTo90Degrees();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b6e9e4b0bcbd74d96bcc055a8f11a03c9c37cc5.js.map