System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, clientManager, PlayerManager, _dec, _class, _crd, ccclass, game;

  function _reportPossibleCrUseOfclientManager(extras) {
    _reporterNs.report("clientManager", "../managers/clientManager", _context.meta, extras);
  }

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
    }, function (_unresolved_2) {
      clientManager = _unresolved_2.clientManager;
    }, function (_unresolved_3) {
      PlayerManager = _unresolved_3.PlayerManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c42f6MdobBBfIddETregmiL", "game", undefined); // 游戏入口文件，初始化全局文件


      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass
      } = _decorator);

      _export("game", game = (_dec = ccclass('game'), _dec(_class = class game extends Component {
        start() {
          (_crd && PlayerManager === void 0 ? (_reportPossibleCrUseOfPlayerManager({
            error: Error()
          }), PlayerManager) : PlayerManager).getInstance();
          (_crd && clientManager === void 0 ? (_reportPossibleCrUseOfclientManager({
            error: Error()
          }), clientManager) : clientManager).getInstance();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21d810c14cc6593111d78c29c59534da2a872cfe.js.map