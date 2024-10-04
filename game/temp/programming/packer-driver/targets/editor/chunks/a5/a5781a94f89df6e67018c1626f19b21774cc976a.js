System.register(["__unresolved_0", "__unresolved_1", "engine.io-parser"], function (_export, _context) {
  "use strict";

  var Transport, nextTick, createPacketDecoderStream, createPacketEncoderStream, WT;

  _export("WT", void 0);

  return {
    setters: [function (_unresolved_) {
      Transport = _unresolved_.Transport;
    }, function (_unresolved_2) {
      nextTick = _unresolved_2.nextTick;
    }, function (_engineIoParser) {
      createPacketDecoderStream = _engineIoParser.createPacketDecoderStream;
      createPacketEncoderStream = _engineIoParser.createPacketEncoderStream;
    }],
    execute: function () {
      /**
       * WebTransport transport based on the built-in `WebTransport` object.
       *
       * Usage: browser, Node.js (with the `@fails-components/webtransport` package)
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
       * @see https://caniuse.com/webtransport
       */
      _export("WT", WT = class WT extends Transport {
        get name() {
          return "webtransport";
        }

        doOpen() {
          try {
            // @ts-ignore
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
          } catch (err) {
            return this.emitReserved("error", err);
          }

          this._transport.closed.then(() => {
            this.onClose();
          }).catch(err => {
            this.onError("webtransport error", err);
          }); // note: we could have used async/await, but that would require some additional polyfills


          this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then(stream => {
              const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
              const reader = stream.readable.pipeThrough(decoderStream).getReader();
              const encoderStream = createPacketEncoderStream();
              encoderStream.readable.pipeTo(stream.writable);
              this._writer = encoderStream.writable.getWriter();

              const read = () => {
                reader.read().then(({
                  done,
                  value
                }) => {
                  if (done) {
                    return;
                  }

                  this.onPacket(value);
                  read();
                }).catch(err => {});
              };

              read();
              const packet = {
                type: "open"
              };

              if (this.query.sid) {
                packet.data = `{"sid":"${this.query.sid}"}`;
              }

              this._writer.write(packet).then(() => this.onOpen());
            });
          });
        }

        write(packets) {
          this.writable = false;

          for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;

            this._writer.write(packet).then(() => {
              if (lastPacket) {
                nextTick(() => {
                  this.writable = true;
                  this.emitReserved("drain");
                }, this.setTimeoutFn);
              }
            });
          }
        }

        doClose() {
          var _a;

          (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
        }

      });
    }
  };
});
//# sourceMappingURL=a5781a94f89df6e67018c1626f19b21774cc976a.js.map