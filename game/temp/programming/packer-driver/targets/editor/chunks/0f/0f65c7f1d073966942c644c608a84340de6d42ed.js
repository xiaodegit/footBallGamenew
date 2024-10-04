System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var ERROR_PACKET, PACKET_TYPES_REVERSE, decodePacket, mapBinary;
  return {
    setters: [function (_unresolved_) {
      ERROR_PACKET = _unresolved_.ERROR_PACKET;
      PACKET_TYPES_REVERSE = _unresolved_.PACKET_TYPES_REVERSE;
    }],
    execute: function () {
      _export("decodePacket", decodePacket = (encodedPacket, binaryType) => {
        if (typeof encodedPacket !== "string") {
          return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
          };
        }

        const type = encodedPacket.charAt(0);

        if (type === "b") {
          const buffer = Buffer.from(encodedPacket.substring(1), "base64");
          return {
            type: "message",
            data: mapBinary(buffer, binaryType)
          };
        }

        if (!PACKET_TYPES_REVERSE[type]) {
          return ERROR_PACKET;
        }

        return encodedPacket.length > 1 ? {
          type: PACKET_TYPES_REVERSE[type],
          data: encodedPacket.substring(1)
        } : {
          type: PACKET_TYPES_REVERSE[type]
        };
      });

      mapBinary = (data, binaryType) => {
        switch (binaryType) {
          case "arraybuffer":
            if (data instanceof ArrayBuffer) {
              // from WebSocket & binaryType "arraybuffer"
              return data;
            } else if (Buffer.isBuffer(data)) {
              // from HTTP long-polling
              return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
            } else {
              // from WebTransport (Uint8Array)
              return data.buffer;
            }

          case "nodebuffer":
          default:
            if (Buffer.isBuffer(data)) {
              // from HTTP long-polling or WebSocket & binaryType "nodebuffer" (default)
              return data;
            } else {
              // from WebTransport (Uint8Array)
              return Buffer.from(data);
            }

        }
      };
    }
  };
});
//# sourceMappingURL=0f65c7f1d073966942c644c608a84340de6d42ed.js.map