System.register([], function (_export, _context) {
  "use strict";

  var value, hasCORS;
  return {
    setters: [],
    execute: function () {
      // imported from https://github.com/component/has-cors
      value = false;

      try {
        value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
      } catch (err) {// if XMLHttp support is disabled in IE then it will throw
        // when trying to create
      }

      _export("hasCORS", hasCORS = value);
    }
  };
});
//# sourceMappingURL=d3f2074c0551ad761f070b3d0c7a538619ced10a.js.map