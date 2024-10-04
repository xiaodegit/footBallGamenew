System.register([], function (_export, _context) {
  "use strict";

  var withNativeArrayBuffer, isView, toString, withNativeBlob, withNativeFile;

  /**
   * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
   *
   * @private
   */
  function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
  }

  function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
      return false;
    }

    if (Array.isArray(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (hasBinary(obj[i])) {
          return true;
        }
      }

      return false;
    }

    if (isBinary(obj)) {
      return true;
    }

    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
      return hasBinary(obj.toJSON(), true);
    }

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
        return true;
      }
    }

    return false;
  }

  _export({
    isBinary: isBinary,
    hasBinary: hasBinary
  });

  return {
    setters: [],
    execute: function () {
      withNativeArrayBuffer = typeof ArrayBuffer === "function";

      isView = obj => {
        return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
      };

      toString = Object.prototype.toString;
      withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
      withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
    }
  };
});
//# sourceMappingURL=def8bf3f99587e05cd3136ff30e786c554855bcc.js.map