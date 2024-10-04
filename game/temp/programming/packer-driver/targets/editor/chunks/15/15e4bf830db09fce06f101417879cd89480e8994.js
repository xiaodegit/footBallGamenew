System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var Polling, Fetch;

  _export("Fetch", void 0);

  return {
    setters: [function (_unresolved_) {
      Polling = _unresolved_.Polling;
    }],
    execute: function () {
      /**
       * HTTP long-polling based on the built-in `fetch()` method.
       *
       * Usage: browser, Node.js (since v18), Deno, Bun
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/fetch
       * @see https://caniuse.com/fetch
       * @see https://nodejs.org/api/globals.html#fetch
       */
      _export("Fetch", Fetch = class Fetch extends Polling {
        doPoll() {
          this._fetch().then(res => {
            if (!res.ok) {
              return this.onError("fetch read error", res.status, res);
            }

            res.text().then(data => this.onData(data));
          }).catch(err => {
            this.onError("fetch read error", err);
          });
        }

        doWrite(data, callback) {
          this._fetch(data).then(res => {
            if (!res.ok) {
              return this.onError("fetch write error", res.status, res);
            }

            callback();
          }).catch(err => {
            this.onError("fetch write error", err);
          });
        }

        _fetch(data) {
          var _a;

          const isPost = data !== undefined;
          const headers = new Headers(this.opts.extraHeaders);

          if (isPost) {
            headers.set("content-type", "text/plain;charset=UTF-8");
          }

          (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.appendCookies(headers);
          return fetch(this.uri(), {
            method: isPost ? "POST" : "GET",
            body: isPost ? data : null,
            headers,
            credentials: this.opts.withCredentials ? "include" : "omit"
          }).then(res => {
            var _a; // @ts-ignore getSetCookie() was added in Node.js v19.7.0


            (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(res.headers.getSetCookie());
            return res;
          });
        }

      });
    }
  };
});
//# sourceMappingURL=15e4bf830db09fce06f101417879cd89480e8994.js.map