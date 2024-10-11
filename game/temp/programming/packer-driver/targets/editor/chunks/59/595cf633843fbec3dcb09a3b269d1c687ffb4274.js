System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, clientManager, _crd;

  _export("clientManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5264UN4PNKIKO8BwM+OAm+", "clientManager", undefined);

      _export("clientManager", clientManager = class clientManager {
        constructor() {
          this.socket = void 0;
        }

        static getInstance() {
          if (!clientManager.instance) {
            clientManager.instance = new clientManager();
          }

          return clientManager.instance;
        }

        set Socket(e) {
          this.socket = e;
        }

        get Socket() {
          return this.socket;
        }

      });

      clientManager.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=595cf633843fbec3dcb09a3b269d1c687ffb4274.js.map