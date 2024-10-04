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
//# sourceMappingURL=c539faa9c404b0c5612c9ad724dc78c833752782.js.map