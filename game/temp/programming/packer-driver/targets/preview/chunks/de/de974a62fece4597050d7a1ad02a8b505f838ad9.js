System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, socketClient;

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

      _cclegacy._RF.push({}, "243d1MjEkxLwbEvDsqVtvju", "loginClient", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EditBox']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("socketClient", socketClient = (_dec = ccclass('socketClient'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec(_class = (_class2 = class socketClient extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "usernameInput", _descriptor, this);

          _initializerDefineProperty(this, "passwordInput", _descriptor2, this);

          this.socket = void 0;
        }

        // 使用 any 类型以避免类型错误
        start() {
          // 使用全局变量 io 进行连接
          this.socket = window.io('http://localhost:3000'); // 监听连接成功事件

          this.socket.on('connect', () => {
            console.log('连接到服务器成功'); // 可以在这里发送加入游戏的事件或其他初始化操作

            this.socket.emit('joinGame', {
              playerName: 'Player1'
            });
          }); // 监听登录成功事件

          this.socket.on('loginSuccess', data => {
            console.log('登录成功:', data);
          }); // 监听登录失败事件

          this.socket.on('loginFailure', data => {
            console.log('登录失败:', data);
          });
        }

        onLoginButtonClicked() {
          if (this.usernameInput && this.passwordInput) {
            var username = this.usernameInput.string;
            var password = this.passwordInput.string;
            console.log('用户名', username);
            console.log('密码', password); // 通过 Socket.io 发送登录请求

            this.socket.emit('login', {
              username,
              password
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "usernameInput", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "passwordInput", [_dec3], {
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
//# sourceMappingURL=de974a62fece4597050d7a1ad02a8b505f838ad9.js.map