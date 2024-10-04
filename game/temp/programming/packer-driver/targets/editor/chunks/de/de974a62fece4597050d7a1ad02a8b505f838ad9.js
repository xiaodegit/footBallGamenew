System.register(["__unresolved_0", "cc", "socket.io-client"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, EditBox, io, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, socketClient;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfio(extras) {
    _reporterNs.report("io", "socket.io-client", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocket(extras) {
    _reporterNs.report("Socket", "socket.io-client", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
    }, function (_socketIoClient) {
      io = _socketIoClient.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "243d1MjEkxLwbEvDsqVtvju", "loginClient", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EditBox']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("socketClient", socketClient = (_dec = ccclass('socketClient'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(Button), _dec(_class = (_class2 = class socketClient extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "usernameInput", _descriptor, this);

          _initializerDefineProperty(this, "passwordInput", _descriptor2, this);

          _initializerDefineProperty(this, "loginButton", _descriptor3, this);

          this.socket = void 0;
        }

        start() {
          this.socket = (_crd && io === void 0 ? (_reportPossibleCrUseOfio({
            error: Error()
          }), io) : io)('http://localhost:3000');
          this.socket.emit('joinGame', {
            playerName: 'Player1'
          });
        }

        update(deltaTime) {}

        onLoginButtonClicked() {
          if (this.usernameInput && this.passwordInput) {
            const username = this.usernameInput.string;
            const password = this.passwordInput.string;
            console.log('username', username);
            console.log('password', password); // 通过 Socket.io 发送登录请求

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
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "passwordInput", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loginButton", [_dec4], {
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
//# sourceMappingURL=de974a62fece4597050d7a1ad02a8b505f838ad9.js.map