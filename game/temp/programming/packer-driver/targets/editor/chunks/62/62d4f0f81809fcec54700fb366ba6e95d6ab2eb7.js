System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, registerClient;

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
      EditBox = _cc.EditBox;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f160ZOLElDy6BGC6RBm4Ty", "registerClient", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("registerClient", registerClient = (_dec = ccclass('registerClient'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec(_class = (_class2 = class registerClient extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "usernameregisterInput", _descriptor, this);

          _initializerDefineProperty(this, "passwordregisterInput", _descriptor2, this);

          this.socket = void 0;
        }

        // 使用 any 类型以避免类型错误
        start() {
          // 使用全局变量 io 进行连接
          this.socket = window.io('http://localhost:3000');
        }

        update(deltaTime) {}

        onRegisterButtonClicked() {
          if (this.usernameregisterInput && this.passwordregisterInput) {
            const username = this.usernameregisterInput.string;
            const password = this.passwordregisterInput.string;
            console.log('用户名', username);
            console.log('密码', password); // 通过 Socket.io 发送登录请求

            this.socket.emit('login', {
              username,
              password
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "usernameregisterInput", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "passwordregisterInput", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=62d4f0f81809fcec54700fb366ba6e95d6ab2eb7.js.map