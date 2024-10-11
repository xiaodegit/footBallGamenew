System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, clientManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, joinRoomController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfclientManager(extras) {
    _reporterNs.report("clientManager", "../../managers/clientManager", _context.meta, extras);
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
      clientManager = _unresolved_2.clientManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25a769tCxNAoq5j2b5ebqXv", "joinRoomController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("joinRoomController", joinRoomController = (_dec = ccclass('joinRoomController'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class joinRoomController extends Component {
        constructor() {
          super(...arguments);
          this.clientmanager = void 0;
          this.roomID = '001';

          _initializerDefineProperty(this, "joinRoom", _descriptor, this);

          _initializerDefineProperty(this, "leaveRoom", _descriptor2, this);
        }

        start() {
          this.clientmanager = (_crd && clientManager === void 0 ? (_reportPossibleCrUseOfclientManager({
            error: Error()
          }), clientManager) : clientManager).getInstance();
        }

        update(deltaTime) {}

        onTouchStartGame() {
          //开始匹配，发送房间id到服务器
          this.clientmanager.Socket.emit('joinRoom', this.roomID);
        }

        onTouchLeaveRoom() {
          this.clientmanager.Socket.emit('leaveRoom', this.roomID);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "joinRoom", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "leaveRoom", [_dec3], {
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
//# sourceMappingURL=6867d6b9b3340437727720bcee74fa7f99b15eec.js.map