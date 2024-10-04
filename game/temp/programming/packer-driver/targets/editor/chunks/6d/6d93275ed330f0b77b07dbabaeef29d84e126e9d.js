System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Collider2D, Component, Contact2DType, PlayerManager, _dec, _class, _crd, ccclass, property, playerCollition;

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
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      PlayerManager = _unresolved_2.PlayerManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "019ce9H3zZIEIeskE/fHskw", "playerCollition", undefined);

      __checkObsolete__(['_decorator', 'Collider2D', 'Component', 'Contact2DType', 'IPhysics2DContact']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("playerCollition", playerCollition = (_dec = ccclass('playerCollition'), _dec(_class = class playerCollition extends Component {
        constructor(...args) {
          super(...args);
          this.playerManager = void 0;
        }

        start() {
          this.playerManager = (_crd && PlayerManager === void 0 ? (_reportPossibleCrUseOfPlayerManager({
            error: Error()
          }), PlayerManager) : PlayerManager).getInstance();
          const collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
          }
        }

        onBeginContact(selfCollider, otherCollider) {
          if (otherCollider.node) {
            this.playerManager.jump = false;
          }
        }

        onEndContact(contact, selfCollider, otherCollider) {// console.log('碰撞结束：', selfCollider.node.name, '和', otherCollider.node.name);
        }

        onPreSolve(contact, selfCollider, otherCollider) {// console.log('碰撞解决中：', selfCollider.node.name, '和', otherCollider.node.name);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d93275ed330f0b77b07dbabaeef29d84e126e9d.js.map