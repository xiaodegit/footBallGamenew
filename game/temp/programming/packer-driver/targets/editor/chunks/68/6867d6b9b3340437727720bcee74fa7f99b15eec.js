System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, joinRoomController;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aeb1c7ttUNHrZDDxGKeno8e", "joinRoomController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("joinRoomController", joinRoomController = (_dec = ccclass('joinRoomController'), _dec(_class = class joinRoomController extends Component {
        constructor(...args) {
          super(...args);
          this.clientmanager = void 0;
        }

        start() {}

        update(deltaTime) {}

        onTouchStartGame() {
          this.clientmanager.Socket.on('joinRoom');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6867d6b9b3340437727720bcee74fa7f99b15eec.js.map