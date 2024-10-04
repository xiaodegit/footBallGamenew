System.register([], function (_export, _context) {
  "use strict";

  // imported from https://github.com/galkn/querystring

  /**
   * Compiles a querystring
   * Returns string representation of the object
   *
   * @param {Object}
   * @api private
   */
  function encode(obj) {
    let str = '';

    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (str.length) str += '&';
        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
      }
    }

    return str;
  }
  /**
   * Parses a simple querystring into an object
   *
   * @param {String} qs
   * @api private
   */


  function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');

    for (let i = 0, l = pairs.length; i < l; i++) {
      let pair = pairs[i].split('=');
      qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }

    return qry;
  }

  _export({
    encode: encode,
    decode: decode
  });

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=7fc9dd9332aa1f0ffc3b4148074a658c9f15283f.js.map