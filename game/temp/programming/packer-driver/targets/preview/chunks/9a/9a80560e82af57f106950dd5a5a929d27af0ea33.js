System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, PlayerManager, _crd;

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "../controllers/PlayerController", _context.meta, extras);
  }

  _export("PlayerManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf2538uRHhDs7Liet4Hr8da", "PlayerManager", undefined); //角色全局属性管理器


      __checkObsolete__(['_decorator', 'Node', 'director', 'Vec3']);

      _export("PlayerManager", PlayerManager = class PlayerManager {
        constructor() {
          this.jumpBoolean = void 0;
          this.Floor = null;
          this.over = void 0;
          this.force = void 0;
          this.playerController = void 0;
          this.jumpBoolean = false;
          this.force = 30;
        }

        static getInstance() {
          if (!PlayerManager.instance) {
            PlayerManager.instance = new PlayerManager();
          }

          return PlayerManager.instance;
        }

        set setPlayerControllerClass(e) {
          this.playerController = e;
        }

        changePlayerSpeed() {
          if (this.playerController) {
            this.playerController.stopMovement();
          }
        }

        set jump(e) {
          this.jumpBoolean = e;
        }

        get jump() {
          return this.jumpBoolean;
        }

        set floor(e) {
          this.Floor = e;
        }

        get floor() {
          return this.Floor;
        }

        set gameover(e) {
          this.over = e;
        }

        get Force() {
          return this.force;
        }

        set Force(e) {
          this.force = e;
        }

        ForceAdd1() {
          this.force++;
        }

        GameOverFunction() {
          this.over.active = true;
          return director.pause();
        } // 角色状态转换


        playerState(e) {
          if (e == 'jump') {
            this.jump = true;
          } else if (e == 'run') {
            this.jump = false;
          }
        }

      });

      PlayerManager.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a80560e82af57f106950dd5a5a929d27af0ea33.js.map