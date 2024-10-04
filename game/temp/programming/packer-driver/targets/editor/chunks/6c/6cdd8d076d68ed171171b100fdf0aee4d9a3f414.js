System.register(["__unresolved_0", "__unresolved_1", "engine.io-parser", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var Transport, pick, randomString, encodePacket, globalThis, nextTick, BaseWS, WS, isReactNative, WebSocketCtor;

  _export({
    BaseWS: void 0,
    WS: void 0
  });

  return {
    setters: [function (_unresolved_) {
      Transport = _unresolved_.Transport;
    }, function (_unresolved_2) {
      pick = _unresolved_2.pick;
      randomString = _unresolved_2.randomString;
    }, function (_engineIoParser) {
      encodePacket = _engineIoParser.encodePacket;
    }, function (_unresolved_3) {
      globalThis = _unresolved_3.globalThisShim;
      nextTick = _unresolved_3.nextTick;
    }],
    execute: function () {
      // detect ReactNative environment
      isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";

      _export("BaseWS", BaseWS = class BaseWS extends Transport {
        get name() {
          return "websocket";
        }

        doOpen() {
          const uri = this.uri();
          const protocols = this.opts.protocols; // React Native only supports the 'headers' option, and will print a warning if anything else is passed

          const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");

          if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
          }

          try {
            this.ws = this.createSocket(uri, protocols, opts);
          } catch (err) {
            return this.emitReserved("error", err);
          }

          this.ws.binaryType = this.socket.binaryType;
          this.addEventListeners();
        }
        /**
         * Adds event listeners to the socket
         *
         * @private
         */


        addEventListeners() {
          this.ws.onopen = () => {
            if (this.opts.autoUnref) {
              this.ws._socket.unref();
            }

            this.onOpen();
          };

          this.ws.onclose = closeEvent => this.onClose({
            description: "websocket connection closed",
            context: closeEvent
          });

          this.ws.onmessage = ev => this.onData(ev.data);

          this.ws.onerror = e => this.onError("websocket error", e);
        }

        write(packets) {
          this.writable = false; // encodePacket efficient as it uses WS framing
          // no need for encodePayload

          for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            encodePacket(packet, this.supportsBinary, data => {
              // Sometimes the websocket has already been closed but the browser didn't
              // have a chance of informing us about it yet, in that case send will
              // throw an error
              try {
                this.doWrite(packet, data);
              } catch (e) {}

              if (lastPacket) {
                // fake drain
                // defer to next tick to allow Socket to clear writeBuffer
                nextTick(() => {
                  this.writable = true;
                  this.emitReserved("drain");
                }, this.setTimeoutFn);
              }
            });
          }
        }

        doClose() {
          if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
          }
        }
        /**
         * Generates uri for connection.
         *
         * @private
         */


        uri() {
          const schema = this.opts.secure ? "wss" : "ws";
          const query = this.query || {}; // append timestamp to URI

          if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = randomString();
          } // communicate binary support capabilities


          if (!this.supportsBinary) {
            query.b64 = 1;
          }

          return this.createUri(schema, query);
        }

      });

      WebSocketCtor = globalThis.WebSocket || globalThis.MozWebSocket;
      /**
       * WebSocket transport based on the built-in `WebSocket` object.
       *
       * Usage: browser, Node.js (since v21), Deno, Bun
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
       * @see https://caniuse.com/mdn-api_websocket
       * @see https://nodejs.org/api/globals.html#websocket
       */

      _export("WS", WS = class WS extends BaseWS {
        createSocket(uri, protocols, opts) {
          return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
        }

        doWrite(_packet, data) {
          this.ws.send(data);
        }

      });
    }
  };
});
//# sourceMappingURL=6cdd8d076d68ed171171b100fdf0aee4d9a3f414.js.map