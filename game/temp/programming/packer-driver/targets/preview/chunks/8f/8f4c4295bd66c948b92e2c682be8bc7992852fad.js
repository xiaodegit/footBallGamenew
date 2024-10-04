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
//# sourceMappingURL=8f4c4295bd66c948b92e2c682be8bc7992852fad.js.map