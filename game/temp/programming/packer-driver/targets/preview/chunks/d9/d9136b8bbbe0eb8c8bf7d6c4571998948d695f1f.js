System.register([], function (_export, _context) {
  "use strict";

  function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
      obj.off(ev, fn);
    };
  }

  _export("on", on);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=d9136b8bbbe0eb8c8bf7d6c4571998948d695f1f.js.map