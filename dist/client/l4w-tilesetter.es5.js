"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e52) { throw _e52; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e53) { didErr = true; err = _e53; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! For license information please see l4w-tilesetter.js.LICENSE.txt */
var L4W_tilesetter;

(function () {
  var e = {
    201: function _(e, t, n) {
      var i = n(15),
          r = n(645)(i);
      r.push([e.id, "\n.root[data-v-08ab550b] {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div[data-v-08ab550b] {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon[data-v-08ab550b] {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading[data-v-08ab550b] {\n    width: 2em;\n    height: 2em;\n}\n", "", {
        version: 3,
        sources: ["webpack://./src/client/components/Login.vue"],
        names: [],
        mappings: ";AAyMA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;AACA;AACA;IACA,YAAA;IACA,kBAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;AACA;AACA;IACA,iBAAA;IACA,mBAAA;IACA,mBAAA;IACA,4BAAA;AACA;AACA;IACA,iBAAA;IACA,oBAAA;IACA,kBAAA;IACA,2BAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA",
        sourcesContent: ['<template>\n    <div class="root">\n        <script type="application/javascript" async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1885551381575204"><\/script>\n        <script type="application/javascript" async defer src="https://apis.google.com/js/platform.js?onload=gAsyncInit"><\/script>\n        <div v-show="!loginStatus">\n            \x3c!-- <img class="statusIcon unloggedIcon" src="/style/ui/unlogged.png" alt="Unlogged icon" title="You are not currently logged in"> --\x3e\n            \x3c!-- Google login --\x3e\n            <div class="g-signin2" data-onsuccess="gLoginCallback" data-theme="dark"></div>\n            \x3c!-- Facebook login --\x3e\n            <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false"\n                data-use-continue-as="false" data-width="" data-scope="email" ></div>\n            <br>\n            <slot name="unlogged"></slot>\n        </div>\n        <div v-if="loginStatus">\n            <img class="statusIcon loggedIcon" src="/style/ui/logged.png" alt="Logged icon" title="You are currently logged in!">\n            <br>\n            <div v-if="flagLoggingOut">\n                <img class="loading" src="/style/ui/spinner.gif" alt="logging out..." />\n            </div>\n            <div v-else>\n                <button v-on:click="logout">Logout</button>\n                <br><br>\n                <slot name="logged"></slot>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script lang="ts">\nimport Vue from "vue"\nimport { Resource } from "../core/util/Resource"\nimport { AuthService, IAuthRequest, IAuthResponse } from "../../common/ServerAPI"\nimport { Utils } from "../../common/Utils";\n\ndeclare let FB: any; // Loaded from Facebook script\ndeclare let gapi: any; // Loaded from Google script\n\ninterface FBLoginResponse {\n    status: "connected" | "not_authorized" | "unknown",\n    authResponse?: {\n        accessToken: string,\n        expiresIn: any,\n        signedRequest: any,\n        userID: string\n    }\n}\n\nexport default Vue.extend({\n    name: "login",\n    props: {\n        showIcons: {\n            type: Boolean,\n            required: false,\n            default: true\n        }\n    },\n    data: function (): {\n        loginStatus: boolean,\n        loginService?: AuthService,\n        fbToken?: string,\n        flagLoggingOut: boolean\n    } {\n        return {\n            loginStatus: false,\n            loginService: undefined,\n            fbToken: undefined,\n            flagLoggingOut: false\n       }\n    },\n    created: function() {\n        // Add Google login meta tags\n        let meta = document.createElement("meta");\n        meta.name = "google-signin-scope";\n        meta.content = "profile email";\n        document.head.appendChild(meta);\n\n        meta = document.createElement("meta");\n        meta.name = "google-signin-client_id";\n        meta.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com";\n        document.head.appendChild(meta);\n\n        // Init Facebook login\n        let vueScope = this;\n        window["fbAsyncInit"] = function() {\n            FB.init({\n                appId: "1885551381575204",\n                autoLogAppEvents: false,\n                cookie: true,\n                xfbml: false,\n                version : "v6.0"\n            });\n            FB.Event.subscribe("auth.statusChange", function(response: FBLoginResponse) {\n                vueScope.fbLoginStatusChangeCallback(response);\n            });\n            FB.getLoginStatus(function(response: FBLoginResponse) {\n                vueScope.fbLoginStatusChangeCallback(response);\n            });\n        };\n\n        // Init Google login\n        window["gAsyncInit"] = function() {\n            gapi.load("auth2", function() {\n                const authInstance = gapi.auth2.getAuthInstance();\n                if(authInstance.isSignedIn.get()) {\n                    Vue.set(vueScope, "loginStatus", true);\n                    Vue.set(vueScope, "loginService", "google");\n                }\n            });\n        };\n        window["gLoginCallback"] = this.gLoginCallback;\n    },\n    methods: {\n        logoutCallback: function() {\n            Vue.set(this, "loginStatus", false);\n            Vue.set(this, "loginService", undefined);\n            Vue.set(this, "flagLoggingOut", false);\n        },\n        logout: function logout() {\n            // Check which service is used, only logout from that service\n            if(this.loginStatus) {\n                switch(this.loginService) {\n                case "facebook":\n                    // Facebook logout\n                    if(this.fbToken !== undefined) {\n                        // Since Facebook logout is slow, display an animation and hide the buttons\n                        Vue.set(this, "flagLoggingOut", true);\n                        let vueScope = this;\n                        // Remove permission, so that the user is asked to authenticate the app again\n                        // (seems like FB.logout() isn\'t enough, if you refresh the page you are still logged)\n                        FB.api("/me/permissions", "delete", {\n                            access_token: vueScope.fbToken\n                        }, function(response: any) {\n                            if(response.success !== true) {\n                                console.error("Facebook permission revoking failed: ", response);\n                            }\n                            FB.logout(function(response: FBLoginResponse)  {\n                                vueScope.logoutCallback();\n                            });\n                        });\n                        this.fbToken = undefined;\n                    }\n                    break;\n                case "google":\n                    // Google logout\n                    let auth2 = gapi.auth2.getAuthInstance();\n                    auth2.signOut().then(this.logoutCallback());\n                    break;\n                default:\n                    console.error("Unexpected loginService: " + this.loginService);\n                }\n                Resource.sendGETRequest("logout", function(response?: string) {\n                    // Nothing to do\n                });\n            } else {\n                console.error("Cannot logout, user is not currently logged in")\n            }\n        },\n        fbLoginStatusChangeCallback: function(response: FBLoginResponse) {\n            if(response.status === "connected") {\n                this.fbToken = response.authResponse!.accessToken;\n                let request: IAuthRequest = {\n                    service: "facebook",\n                    token: response.authResponse!.accessToken,\n                    userId: response.authResponse!.userID\n                };\n                this.doLogin(request);\n            }\n        },\n        gLoginCallback: function(googleUser: any) {\n            let request: IAuthRequest = {\n                service: "google",\n                token: googleUser.getAuthResponse().id_token\n            };\n            this.doLogin(request);\n        },\n        doLogin(request: IAuthRequest) {\n            let vueScope = this;\n            Resource.sendPOSTRequest("/auth", JSON.stringify(request), function(response?: string) {\n                if(!Utils.isEmpty(response)) {\n                    try {\n                        let authResponse: IAuthResponse = JSON.parse(response!);\n                        if(authResponse.result) {\n                            Vue.set(vueScope, "loginStatus", true);\n                            Vue.set(vueScope, "loginService", request.service);\n                            return;\n                        }\n                    } catch(e) {\n                        console.error(e);\n                    }\n                }\n                Vue.set(vueScope, "loginStatus", false);\n                Vue.set(vueScope, "loginService", undefined);\n                console.warn("Login with " + request.service + " failed");\n            });\n        }\n    }\n});\n<\/script>\n\n<style scoped>\n.root {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading {\n    width: 2em;\n    height: 2em;   \n}\n</style>'],
        sourceRoot: ""
      }]), e.exports = r;
    },
    645: function _(e) {
      "use strict";

      e.exports = function (e) {
        var t = [];
        return t.toString = function () {
          return this.map(function (t) {
            var n = e(t);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }, t.i = function (e, n, i) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var r = {};
          if (i) for (var o = 0; o < this.length; o++) {
            var a = this[o][0];
            null != a && (r[a] = !0);
          }

          for (var s = 0; s < e.length; s++) {
            var l = [].concat(e[s]);
            i && r[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l));
          }
        }, t;
      };
    },
    15: function _(e) {
      "use strict";

      function t(e, t) {
        (null == t || t > e.length) && (t = e.length);

        for (var n = 0, i = new Array(t); n < t; n++) {
          i[n] = e[n];
        }

        return i;
      }

      e.exports = function (e) {
        var n,
            i,
            r = (i = 4, function (e) {
          if (Array.isArray(e)) return e;
        }(n = e) || function (e, t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;

            try {
              for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0) {
                ;
              }
            } catch (e) {
              r = !0, o = e;
            } finally {
              try {
                i || null == s["return"] || s["return"]();
              } finally {
                if (r) throw o;
              }
            }

            return n;
          }
        }(n, i) || function (e, n) {
          if (e) {
            if ("string" == typeof e) return t(e, n);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? t(e, n) : void 0;
          }
        }(n, i) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()),
            o = r[1],
            a = r[3];

        if ("function" == typeof btoa) {
          var s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
              l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),
              c = "/*# ".concat(l, " */"),
              u = a.sources.map(function (e) {
            return "/*# sourceURL=".concat(a.sourceRoot || "").concat(e, " */");
          });
          return [o].concat(u).concat([c]).join("\n");
        }

        return [o].join("\n");
      };
    },
    564: function _(e, t, n) {
      var i = n(201);
      i.__esModule && (i = i["default"]), "string" == typeof i && (i = [[e.id, i, ""]]), i.locals && (e.exports = i.locals), (0, n(346).Z)("56feccaa", i, !1, {});
    },
    346: function _(e, t, n) {
      "use strict";

      function i(e, t) {
        for (var n = [], i = {}, r = 0; r < t.length; r++) {
          var o = t[r],
              a = o[0],
              s = {
            id: e + ":" + r,
            css: o[1],
            media: o[2],
            sourceMap: o[3]
          };
          i[a] ? i[a].parts.push(s) : n.push(i[a] = {
            id: a,
            parts: [s]
          });
        }

        return n;
      }

      n.d(t, {
        Z: function Z() {
          return h;
        }
      });
      var r = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");

      var o = {},
          a = r && (document.head || document.getElementsByTagName("head")[0]),
          s = null,
          l = 0,
          c = !1,
          u = function u() {},
          d = null,
          f = "data-vue-ssr-id",
          p = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

      function h(e, t, n, r) {
        c = n, d = r || {};
        var a = i(e, t);
        return g(a), function (t) {
          for (var n = [], r = 0; r < a.length; r++) {
            var s = a[r];
            (l = o[s.id]).refs--, n.push(l);
          }

          for (t ? g(a = i(e, t)) : a = [], r = 0; r < n.length; r++) {
            var l;

            if (0 === (l = n[r]).refs) {
              for (var c = 0; c < l.parts.length; c++) {
                l.parts[c]();
              }

              delete o[l.id];
            }
          }
        };
      }

      function g(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
              i = o[n.id];

          if (i) {
            i.refs++;

            for (var r = 0; r < i.parts.length; r++) {
              i.parts[r](n.parts[r]);
            }

            for (; r < n.parts.length; r++) {
              i.parts.push(m(n.parts[r]));
            }

            i.parts.length > n.parts.length && (i.parts.length = n.parts.length);
          } else {
            var a = [];

            for (r = 0; r < n.parts.length; r++) {
              a.push(m(n.parts[r]));
            }

            o[n.id] = {
              id: n.id,
              refs: 1,
              parts: a
            };
          }
        }
      }

      function v() {
        var e = document.createElement("style");
        return e.type = "text/css", a.appendChild(e), e;
      }

      function m(e) {
        var t,
            n,
            i = document.querySelector("style[" + f + '~="' + e.id + '"]');

        if (i) {
          if (c) return u;
          i.parentNode.removeChild(i);
        }

        if (p) {
          var r = l++;
          i = s || (s = v()), t = b.bind(null, i, r, !1), n = b.bind(null, i, r, !0);
        } else i = v(), t = S.bind(null, i), n = function n() {
          i.parentNode.removeChild(i);
        };

        return t(e), function (i) {
          if (i) {
            if (i.css === e.css && i.media === e.media && i.sourceMap === e.sourceMap) return;
            t(e = i);
          } else n();
        };
      }

      var y,
          E = (y = [], function (e, t) {
        return y[e] = t, y.filter(Boolean).join("\n");
      });

      function b(e, t, n, i) {
        var r = n ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = E(t, r);else {
          var o = document.createTextNode(r),
              a = e.childNodes;
          a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
        }
      }

      function S(e, t) {
        var n = t.css,
            i = t.media,
            r = t.sourceMap;
        if (i && e.setAttribute("media", i), d.ssrId && e.setAttribute(f, t.id), r && (n += "\n/*# sourceURL=" + r.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;else {
          for (; e.firstChild;) {
            e.removeChild(e.firstChild);
          }

          e.appendChild(document.createTextNode(n));
        }
      }
    }
  },
      t = {};

  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var o = t[i] = {
      id: i,
      exports: {}
    };
    return e[i](o, o.exports, n), o.exports;
  }

  n.d = function (e, t) {
    for (var i in t) {
      n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
        enumerable: !0,
        get: t[i]
      });
    }
  }, n.g = function () {
    if ("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;

    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
    }
  }(), n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  };
  var i = {};
  (function () {
    "use strict";

    n.r(i), n.d(i, {
      TilesetterPage: function TilesetterPage() {
        return ul;
      }
    });
    var e = {};
    n.r(e), n.d(e, {
      Ann: function Ann() {
        return Zs;
      },
      Asgan: function Asgan() {
        return el;
      },
      BaseScript: function BaseScript() {
        return Xs;
      },
      DEFAULT_DIALOG: function DEFAULT_DIALOG() {
        return Js;
      },
      DEFAULT_MESSAGE: function DEFAULT_MESSAGE() {
        return Qs;
      },
      Script1: function Script1() {
        return nl;
      },
      Transports: function Transports() {
        return tl;
      }
    });
    var t = Object.freeze({});

    function r(e) {
      return null == e;
    }

    function o(e) {
      return null != e;
    }

    function a(e) {
      return !0 === e;
    }

    function s(e) {
      return "string" == typeof e || "number" == typeof e || "symbol" == _typeof(e) || "boolean" == typeof e;
    }

    function l(e) {
      return null !== e && "object" == _typeof(e);
    }

    var c = Object.prototype.toString;

    function u(e) {
      return "[object Object]" === c.call(e);
    }

    function d(e) {
      var t = parseFloat(String(e));
      return t >= 0 && Math.floor(t) === t && isFinite(e);
    }

    function f(e) {
      return o(e) && "function" == typeof e.then && "function" == typeof e["catch"];
    }

    function p(e) {
      return null == e ? "" : Array.isArray(e) || u(e) && e.toString === c ? JSON.stringify(e, null, 2) : String(e);
    }

    function h(e) {
      var t = parseFloat(e);
      return isNaN(t) ? e : t;
    }

    function g(e, t) {
      for (var n = Object.create(null), i = e.split(","), r = 0; r < i.length; r++) {
        n[i[r]] = !0;
      }

      return t ? function (e) {
        return n[e.toLowerCase()];
      } : function (e) {
        return n[e];
      };
    }

    var v = g("slot,component", !0),
        m = g("key,ref,slot,slot-scope,is");

    function y(e, t) {
      if (e.length) {
        var n = e.indexOf(t);
        if (n > -1) return e.splice(n, 1);
      }
    }

    var E = Object.prototype.hasOwnProperty;

    function b(e, t) {
      return E.call(e, t);
    }

    function S(e) {
      var t = Object.create(null);
      return function (n) {
        return t[n] || (t[n] = e(n));
      };
    }

    var w = /-(\w)/g,
        _ = S(function (e) {
      return e.replace(w, function (e, t) {
        return t ? t.toUpperCase() : "";
      });
    }),
        T = S(function (e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }),
        k = /\B([A-Z])/g,
        A = S(function (e) {
      return e.replace(k, "-$1").toLowerCase();
    }),
        C = Function.prototype.bind ? function (e, t) {
      return e.bind(t);
    } : function (e, t) {
      function n(n) {
        var i = arguments.length;
        return i ? i > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
      }

      return n._length = e.length, n;
    };

    function N(e, t) {
      t = t || 0;

      for (var n = e.length - t, i = new Array(n); n--;) {
        i[n] = e[n + t];
      }

      return i;
    }

    function x(e, t) {
      for (var n in t) {
        e[n] = t[n];
      }

      return e;
    }

    function M(e) {
      for (var t = {}, n = 0; n < e.length; n++) {
        e[n] && x(t, e[n]);
      }

      return t;
    }

    function I(e, t, n) {}

    var D = function D(e, t, n) {
      return !1;
    },
        O = function O(e) {
      return e;
    };

    function L(e, t) {
      if (e === t) return !0;
      var n = l(e),
          i = l(t);
      if (!n || !i) return !n && !i && String(e) === String(t);

      try {
        var r = Array.isArray(e),
            o = Array.isArray(t);
        if (r && o) return e.length === t.length && e.every(function (e, n) {
          return L(e, t[n]);
        });
        if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
        if (r || o) return !1;
        var a = Object.keys(e),
            s = Object.keys(t);
        return a.length === s.length && a.every(function (n) {
          return L(e[n], t[n]);
        });
      } catch (e) {
        return !1;
      }
    }

    function W(e, t) {
      for (var n = 0; n < e.length; n++) {
        if (L(e[n], t)) return n;
      }

      return -1;
    }

    function R(e) {
      var t = !1;
      return function () {
        t || (t = !0, e.apply(this, arguments));
      };
    }

    var j = "data-server-rendered",
        F = ["component", "directive", "filter"],
        P = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
        B = {
      optionMergeStrategies: Object.create(null),
      silent: !1,
      productionTip: !1,
      devtools: !1,
      performance: !1,
      errorHandler: null,
      warnHandler: null,
      ignoredElements: [],
      keyCodes: Object.create(null),
      isReservedTag: D,
      isReservedAttr: D,
      isUnknownElement: D,
      getTagNamespace: I,
      parsePlatformTagName: O,
      mustUseProp: D,
      async: !0,
      _lifecycleHooks: P
    },
        H = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

    function U(e) {
      var t = (e + "").charCodeAt(0);
      return 36 === t || 95 === t;
    }

    function G(e, t, n, i) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: !!i,
        writable: !0,
        configurable: !0
      });
    }

    var V,
        q = new RegExp("[^" + H.source + ".$_\\d]"),
        Y = ("__proto__" in {}),
        z = "undefined" != typeof window,
        K = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
        Q = K && WXEnvironment.platform.toLowerCase(),
        J = z && window.navigator.userAgent.toLowerCase(),
        X = J && /msie|trident/.test(J),
        Z = J && J.indexOf("msie 9.0") > 0,
        ee = J && J.indexOf("edge/") > 0,
        te = (J && J.indexOf("android"), J && /iphone|ipad|ipod|ios/.test(J) || "ios" === Q),
        ne = (J && /chrome\/\d+/.test(J), J && /phantomjs/.test(J), J && J.match(/firefox\/(\d+)/)),
        ie = {}.watch,
        re = !1;
    if (z) try {
      var oe = {};
      Object.defineProperty(oe, "passive", {
        get: function get() {
          re = !0;
        }
      }), window.addEventListener("test-passive", null, oe);
    } catch (e) {}

    var ae = function ae() {
      return void 0 === V && (V = !z && !K && void 0 !== n.g && n.g.process && "server" === n.g.process.env.VUE_ENV), V;
    },
        se = z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

    function le(e) {
      return "function" == typeof e && /native code/.test(e.toString());
    }

    var ce,
        ue = "undefined" != typeof Symbol && le(Symbol) && "undefined" != typeof Reflect && le(Reflect.ownKeys);
    ce = "undefined" != typeof Set && le(Set) ? Set : function () {
      function e() {
        this.set = Object.create(null);
      }

      return e.prototype.has = function (e) {
        return !0 === this.set[e];
      }, e.prototype.add = function (e) {
        this.set[e] = !0;
      }, e.prototype.clear = function () {
        this.set = Object.create(null);
      }, e;
    }();

    var de = I,
        fe = 0,
        pe = function pe() {
      this.id = fe++, this.subs = [];
    };

    pe.prototype.addSub = function (e) {
      this.subs.push(e);
    }, pe.prototype.removeSub = function (e) {
      y(this.subs, e);
    }, pe.prototype.depend = function () {
      pe.target && pe.target.addDep(this);
    }, pe.prototype.notify = function () {
      for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) {
        e[t].update();
      }
    }, pe.target = null;
    var he = [];

    function ge(e) {
      he.push(e), pe.target = e;
    }

    function ve() {
      he.pop(), pe.target = he[he.length - 1];
    }

    var me = function me(e, t, n, i, r, o, a, s) {
      this.tag = e, this.data = t, this.children = n, this.text = i, this.elm = r, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    },
        ye = {
      child: {
        configurable: !0
      }
    };

    ye.child.get = function () {
      return this.componentInstance;
    }, Object.defineProperties(me.prototype, ye);

    var Ee = function Ee(e) {
      void 0 === e && (e = "");
      var t = new me();
      return t.text = e, t.isComment = !0, t;
    };

    function be(e) {
      return new me(void 0, void 0, void 0, String(e));
    }

    function Se(e) {
      var t = new me(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
      return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
    }

    var we = Array.prototype,
        _e = Object.create(we);

    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
      var t = we[e];
      G(_e, e, function () {
        for (var n = [], i = arguments.length; i--;) {
          n[i] = arguments[i];
        }

        var r,
            o = t.apply(this, n),
            a = this.__ob__;

        switch (e) {
          case "push":
          case "unshift":
            r = n;
            break;

          case "splice":
            r = n.slice(2);
        }

        return r && a.observeArray(r), a.dep.notify(), o;
      });
    });
    var Te = Object.getOwnPropertyNames(_e),
        ke = !0;

    function Ae(e) {
      ke = e;
    }

    var Ce = function Ce(e) {
      this.value = e, this.dep = new pe(), this.vmCount = 0, G(e, "__ob__", this), Array.isArray(e) ? (Y ? function (e, t) {
        e.__proto__ = t;
      }(e, _e) : function (e, t, n) {
        for (var i = 0, r = n.length; i < r; i++) {
          var o = n[i];
          G(e, o, t[o]);
        }
      }(e, _e, Te), this.observeArray(e)) : this.walk(e);
    };

    function Ne(e, t) {
      var n;
      if (l(e) && !(e instanceof me)) return b(e, "__ob__") && e.__ob__ instanceof Ce ? n = e.__ob__ : ke && !ae() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (n = new Ce(e)), t && n && n.vmCount++, n;
    }

    function xe(e, t, n, i, r) {
      var o = new pe(),
          a = Object.getOwnPropertyDescriptor(e, t);

      if (!a || !1 !== a.configurable) {
        var s = a && a.get,
            l = a && a.set;
        s && !l || 2 !== arguments.length || (n = e[t]);
        var c = !r && Ne(n);
        Object.defineProperty(e, t, {
          enumerable: !0,
          configurable: !0,
          get: function get() {
            var t = s ? s.call(e) : n;
            return pe.target && (o.depend(), c && (c.dep.depend(), Array.isArray(t) && De(t))), t;
          },
          set: function set(t) {
            var i = s ? s.call(e) : n;
            t === i || t != t && i != i || s && !l || (l ? l.call(e, t) : n = t, c = !r && Ne(t), o.notify());
          }
        });
      }
    }

    function Me(e, t, n) {
      if (Array.isArray(e) && d(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
      if (t in e && !(t in Object.prototype)) return e[t] = n, n;
      var i = e.__ob__;
      return e._isVue || i && i.vmCount ? n : i ? (xe(i.value, t, n), i.dep.notify(), n) : (e[t] = n, n);
    }

    function Ie(e, t) {
      if (Array.isArray(e) && d(t)) e.splice(t, 1);else {
        var n = e.__ob__;
        e._isVue || n && n.vmCount || b(e, t) && (delete e[t], n && n.dep.notify());
      }
    }

    function De(e) {
      for (var t = void 0, n = 0, i = e.length; n < i; n++) {
        (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && De(t);
      }
    }

    Ce.prototype.walk = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) {
        xe(e, t[n]);
      }
    }, Ce.prototype.observeArray = function (e) {
      for (var t = 0, n = e.length; t < n; t++) {
        Ne(e[t]);
      }
    };
    var Oe = B.optionMergeStrategies;

    function Le(e, t) {
      if (!t) return e;

      for (var n, i, r, o = ue ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < o.length; a++) {
        "__ob__" !== (n = o[a]) && (i = e[n], r = t[n], b(e, n) ? i !== r && u(i) && u(r) && Le(i, r) : Me(e, n, r));
      }

      return e;
    }

    function We(e, t, n) {
      return n ? function () {
        var i = "function" == typeof t ? t.call(n, n) : t,
            r = "function" == typeof e ? e.call(n, n) : e;
        return i ? Le(i, r) : r;
      } : t ? e ? function () {
        return Le("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e);
      } : t : e;
    }

    function $e(e, t) {
      var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
      return n ? function (e) {
        for (var t = [], n = 0; n < e.length; n++) {
          -1 === t.indexOf(e[n]) && t.push(e[n]);
        }

        return t;
      }(n) : n;
    }

    function Re(e, t, n, i) {
      var r = Object.create(e || null);
      return t ? x(r, t) : r;
    }

    Oe.data = function (e, t, n) {
      return n ? We(e, t, n) : t && "function" != typeof t ? e : We(e, t);
    }, P.forEach(function (e) {
      Oe[e] = $e;
    }), F.forEach(function (e) {
      Oe[e + "s"] = Re;
    }), Oe.watch = function (e, t, n, i) {
      if (e === ie && (e = void 0), t === ie && (t = void 0), !t) return Object.create(e || null);
      if (!e) return t;
      var r = {};

      for (var o in x(r, e), t) {
        var a = r[o],
            s = t[o];
        a && !Array.isArray(a) && (a = [a]), r[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s];
      }

      return r;
    }, Oe.props = Oe.methods = Oe.inject = Oe.computed = function (e, t, n, i) {
      if (!e) return t;
      var r = Object.create(null);
      return x(r, e), t && x(r, t), r;
    }, Oe.provide = We;

    var je = function je(e, t) {
      return void 0 === t ? e : t;
    };

    function Fe(e, t, n) {
      if ("function" == typeof t && (t = t.options), function (e, t) {
        var n = e.props;

        if (n) {
          var i,
              r,
              o = {};
          if (Array.isArray(n)) for (i = n.length; i--;) {
            "string" == typeof (r = n[i]) && (o[_(r)] = {
              type: null
            });
          } else if (u(n)) for (var a in n) {
            r = n[a], o[_(a)] = u(r) ? r : {
              type: r
            };
          }
          e.props = o;
        }
      }(t), function (e, t) {
        var n = e.inject;

        if (n) {
          var i = e.inject = {};
          if (Array.isArray(n)) for (var r = 0; r < n.length; r++) {
            i[n[r]] = {
              from: n[r]
            };
          } else if (u(n)) for (var o in n) {
            var a = n[o];
            i[o] = u(a) ? x({
              from: o
            }, a) : {
              from: a
            };
          }
        }
      }(t), function (e) {
        var t = e.directives;
        if (t) for (var n in t) {
          var i = t[n];
          "function" == typeof i && (t[n] = {
            bind: i,
            update: i
          });
        }
      }(t), !t._base && (t["extends"] && (e = Fe(e, t["extends"], n)), t.mixins)) for (var i = 0, r = t.mixins.length; i < r; i++) {
        e = Fe(e, t.mixins[i], n);
      }
      var o,
          a = {};

      for (o in e) {
        s(o);
      }

      for (o in t) {
        b(e, o) || s(o);
      }

      function s(i) {
        var r = Oe[i] || je;
        a[i] = r(e[i], t[i], n, i);
      }

      return a;
    }

    function Pe(e, t, n, i) {
      if ("string" == typeof n) {
        var r = e[t];
        if (b(r, n)) return r[n];

        var o = _(n);

        if (b(r, o)) return r[o];
        var a = T(o);
        return b(r, a) ? r[a] : r[n] || r[o] || r[a];
      }
    }

    function Be(e, t, n, i) {
      var r = t[e],
          o = !b(n, e),
          a = n[e],
          s = Ge(Boolean, r.type);
      if (s > -1) if (o && !b(r, "default")) a = !1;else if ("" === a || a === A(e)) {
        var l = Ge(String, r.type);
        (l < 0 || s < l) && (a = !0);
      }

      if (void 0 === a) {
        a = function (e, t, n) {
          if (b(t, "default")) {
            var i = t["default"];
            return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof i && "Function" !== He(t.type) ? i.call(e) : i;
          }
        }(i, r, e);

        var c = ke;
        Ae(!0), Ne(a), Ae(c);
      }

      return a;
    }

    function He(e) {
      var t = e && e.toString().match(/^\s*function (\w+)/);
      return t ? t[1] : "";
    }

    function Ue(e, t) {
      return He(e) === He(t);
    }

    function Ge(e, t) {
      if (!Array.isArray(t)) return Ue(t, e) ? 0 : -1;

      for (var n = 0, i = t.length; n < i; n++) {
        if (Ue(t[n], e)) return n;
      }

      return -1;
    }

    function Ve(e, t, n) {
      ge();

      try {
        if (t) for (var i = t; i = i.$parent;) {
          var r = i.$options.errorCaptured;
          if (r) for (var o = 0; o < r.length; o++) {
            try {
              if (!1 === r[o].call(i, e, t, n)) return;
            } catch (e) {
              Ye(e, i, "errorCaptured hook");
            }
          }
        }
        Ye(e, t, n);
      } finally {
        ve();
      }
    }

    function qe(e, t, n, i, r) {
      var o;

      try {
        (o = n ? e.apply(t, n) : e.call(t)) && !o._isVue && f(o) && !o._handled && (o["catch"](function (e) {
          return Ve(e, i, r + " (Promise/async)");
        }), o._handled = !0);
      } catch (e) {
        Ve(e, i, r);
      }

      return o;
    }

    function Ye(e, t, n) {
      if (B.errorHandler) try {
        return B.errorHandler.call(null, e, t, n);
      } catch (t) {
        t !== e && ze(t);
      }
      ze(e);
    }

    function ze(e, t, n) {
      if (!z && !K || "undefined" == typeof console) throw e;
      console.error(e);
    }

    var Ke,
        Qe = !1,
        Je = [],
        Xe = !1;

    function Ze() {
      Xe = !1;
      var e = Je.slice(0);
      Je.length = 0;

      for (var t = 0; t < e.length; t++) {
        e[t]();
      }
    }

    if ("undefined" != typeof Promise && le(Promise)) {
      var et = Promise.resolve();
      Ke = function Ke() {
        et.then(Ze), te && setTimeout(I);
      }, Qe = !0;
    } else if (X || "undefined" == typeof MutationObserver || !le(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Ke = "undefined" != typeof setImmediate && le(setImmediate) ? function () {
      setImmediate(Ze);
    } : function () {
      setTimeout(Ze, 0);
    };else {
      var tt = 1,
          nt = new MutationObserver(Ze),
          it = document.createTextNode(String(tt));
      nt.observe(it, {
        characterData: !0
      }), Ke = function Ke() {
        tt = (tt + 1) % 2, it.data = String(tt);
      }, Qe = !0;
    }

    function rt(e, t) {
      var n;
      if (Je.push(function () {
        if (e) try {
          e.call(t);
        } catch (e) {
          Ve(e, t, "nextTick");
        } else n && n(t);
      }), Xe || (Xe = !0, Ke()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
        n = e;
      });
    }

    var ot = new ce();

    function at(e) {
      st(e, ot), ot.clear();
    }

    function st(e, t) {
      var n,
          i,
          r = Array.isArray(e);

      if (!(!r && !l(e) || Object.isFrozen(e) || e instanceof me)) {
        if (e.__ob__) {
          var o = e.__ob__.dep.id;
          if (t.has(o)) return;
          t.add(o);
        }

        if (r) for (n = e.length; n--;) {
          st(e[n], t);
        } else for (n = (i = Object.keys(e)).length; n--;) {
          st(e[i[n]], t);
        }
      }
    }

    var lt = S(function (e) {
      var t = "&" === e.charAt(0),
          n = "~" === (e = t ? e.slice(1) : e).charAt(0),
          i = "!" === (e = n ? e.slice(1) : e).charAt(0);
      return {
        name: e = i ? e.slice(1) : e,
        once: n,
        capture: i,
        passive: t
      };
    });

    function ct(e, t) {
      function n() {
        var e = arguments,
            i = n.fns;
        if (!Array.isArray(i)) return qe(i, null, arguments, t, "v-on handler");

        for (var r = i.slice(), o = 0; o < r.length; o++) {
          qe(r[o], null, e, t, "v-on handler");
        }
      }

      return n.fns = e, n;
    }

    function ut(e, t, n, i, o, s) {
      var l, c, u, d;

      for (l in e) {
        c = e[l], u = t[l], d = lt(l), r(c) || (r(u) ? (r(c.fns) && (c = e[l] = ct(c, s)), a(d.once) && (c = e[l] = o(d.name, c, d.capture)), n(d.name, c, d.capture, d.passive, d.params)) : c !== u && (u.fns = c, e[l] = u));
      }

      for (l in t) {
        r(e[l]) && i((d = lt(l)).name, t[l], d.capture);
      }
    }

    function dt(e, t, n) {
      var i;
      e instanceof me && (e = e.data.hook || (e.data.hook = {}));
      var s = e[t];

      function l() {
        n.apply(this, arguments), y(i.fns, l);
      }

      r(s) ? i = ct([l]) : o(s.fns) && a(s.merged) ? (i = s).fns.push(l) : i = ct([s, l]), i.merged = !0, e[t] = i;
    }

    function ft(e, t, n, i, r) {
      if (o(t)) {
        if (b(t, n)) return e[n] = t[n], r || delete t[n], !0;
        if (b(t, i)) return e[n] = t[i], r || delete t[i], !0;
      }

      return !1;
    }

    function pt(e) {
      return s(e) ? [be(e)] : Array.isArray(e) ? gt(e) : void 0;
    }

    function ht(e) {
      return o(e) && o(e.text) && !1 === e.isComment;
    }

    function gt(e, t) {
      var n,
          i,
          l,
          c,
          u = [];

      for (n = 0; n < e.length; n++) {
        r(i = e[n]) || "boolean" == typeof i || (c = u[l = u.length - 1], Array.isArray(i) ? i.length > 0 && (ht((i = gt(i, (t || "") + "_" + n))[0]) && ht(c) && (u[l] = be(c.text + i[0].text), i.shift()), u.push.apply(u, i)) : s(i) ? ht(c) ? u[l] = be(c.text + i) : "" !== i && u.push(be(i)) : ht(i) && ht(c) ? u[l] = be(c.text + i.text) : (a(e._isVList) && o(i.tag) && r(i.key) && o(t) && (i.key = "__vlist" + t + "_" + n + "__"), u.push(i)));
      }

      return u;
    }

    function vt(e, t) {
      if (e) {
        for (var n = Object.create(null), i = ue ? Reflect.ownKeys(e) : Object.keys(e), r = 0; r < i.length; r++) {
          var o = i[r];

          if ("__ob__" !== o) {
            for (var a = e[o].from, s = t; s;) {
              if (s._provided && b(s._provided, a)) {
                n[o] = s._provided[a];
                break;
              }

              s = s.$parent;
            }

            if (!s && "default" in e[o]) {
              var l = e[o]["default"];
              n[o] = "function" == typeof l ? l.call(t) : l;
            }
          }
        }

        return n;
      }
    }

    function mt(e, t) {
      if (!e || !e.length) return {};

      for (var n = {}, i = 0, r = e.length; i < r; i++) {
        var o = e[i],
            a = o.data;
        if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== t && o.fnContext !== t || !a || null == a.slot) (n["default"] || (n["default"] = [])).push(o);else {
          var s = a.slot,
              l = n[s] || (n[s] = []);
          "template" === o.tag ? l.push.apply(l, o.children || []) : l.push(o);
        }
      }

      for (var c in n) {
        n[c].every(yt) && delete n[c];
      }

      return n;
    }

    function yt(e) {
      return e.isComment && !e.asyncFactory || " " === e.text;
    }

    function Et(e, n, i) {
      var r,
          o = Object.keys(n).length > 0,
          a = e ? !!e.$stable : !o,
          s = e && e.$key;

      if (e) {
        if (e._normalized) return e._normalized;
        if (a && i && i !== t && s === i.$key && !o && !i.$hasNormal) return i;

        for (var l in r = {}, e) {
          e[l] && "$" !== l[0] && (r[l] = bt(n, l, e[l]));
        }
      } else r = {};

      for (var c in n) {
        c in r || (r[c] = St(n, c));
      }

      return e && Object.isExtensible(e) && (e._normalized = r), G(r, "$stable", a), G(r, "$key", s), G(r, "$hasNormal", o), r;
    }

    function bt(e, t, n) {
      var i = function i() {
        var e = arguments.length ? n.apply(null, arguments) : n({});
        return (e = e && "object" == _typeof(e) && !Array.isArray(e) ? [e] : pt(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
      };

      return n.proxy && Object.defineProperty(e, t, {
        get: i,
        enumerable: !0,
        configurable: !0
      }), i;
    }

    function St(e, t) {
      return function () {
        return e[t];
      };
    }

    function wt(e, t) {
      var n, i, r, a, s;
      if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), i = 0, r = e.length; i < r; i++) {
        n[i] = t(e[i], i);
      } else if ("number" == typeof e) for (n = new Array(e), i = 0; i < e; i++) {
        n[i] = t(i + 1, i);
      } else if (l(e)) if (ue && e[Symbol.iterator]) {
        n = [];

        for (var c = e[Symbol.iterator](), u = c.next(); !u.done;) {
          n.push(t(u.value, n.length)), u = c.next();
        }
      } else for (a = Object.keys(e), n = new Array(a.length), i = 0, r = a.length; i < r; i++) {
        s = a[i], n[i] = t(e[s], s, i);
      }
      return o(n) || (n = []), n._isVList = !0, n;
    }

    function _t(e, t, n, i) {
      var r,
          o = this.$scopedSlots[e];
      o ? (n = n || {}, i && (n = x(x({}, i), n)), r = o(n) || t) : r = this.$slots[e] || t;
      var a = n && n.slot;
      return a ? this.$createElement("template", {
        slot: a
      }, r) : r;
    }

    function Tt(e) {
      return Pe(this.$options, "filters", e) || O;
    }

    function kt(e, t) {
      return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
    }

    function At(e, t, n, i, r) {
      var o = B.keyCodes[t] || n;
      return r && i && !B.keyCodes[t] ? kt(r, i) : o ? kt(o, e) : i ? A(i) !== t : void 0;
    }

    function Ct(e, t, n, i, r) {
      if (n && l(n)) {
        var o;
        Array.isArray(n) && (n = M(n));

        var a = function a(_a2) {
          if ("class" === _a2 || "style" === _a2 || m(_a2)) o = e;else {
            var s = e.attrs && e.attrs.type;
            o = i || B.mustUseProp(t, s, _a2) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
          }

          var l = _(_a2),
              c = A(_a2);

          l in o || c in o || (o[_a2] = n[_a2], r && ((e.on || (e.on = {}))["update:" + _a2] = function (e) {
            n[_a2] = e;
          }));
        };

        for (var s in n) {
          a(s);
        }
      }

      return e;
    }

    function Nt(e, t) {
      var n = this._staticTrees || (this._staticTrees = []),
          i = n[e];
      return i && !t || Mt(i = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), i;
    }

    function xt(e, t, n) {
      return Mt(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
    }

    function Mt(e, t, n) {
      if (Array.isArray(e)) for (var i = 0; i < e.length; i++) {
        e[i] && "string" != typeof e[i] && It(e[i], t + "_" + i, n);
      } else It(e, t, n);
    }

    function It(e, t, n) {
      e.isStatic = !0, e.key = t, e.isOnce = n;
    }

    function Dt(e, t) {
      if (t && u(t)) {
        var n = e.on = e.on ? x({}, e.on) : {};

        for (var i in t) {
          var r = n[i],
              o = t[i];
          n[i] = r ? [].concat(r, o) : o;
        }
      }

      return e;
    }

    function Ot(e, t, n, i) {
      t = t || {
        $stable: !n
      };

      for (var r = 0; r < e.length; r++) {
        var o = e[r];
        Array.isArray(o) ? Ot(o, t, n) : o && (o.proxy && (o.fn.proxy = !0), t[o.key] = o.fn);
      }

      return i && (t.$key = i), t;
    }

    function Lt(e, t) {
      for (var n = 0; n < t.length; n += 2) {
        var i = t[n];
        "string" == typeof i && i && (e[t[n]] = t[n + 1]);
      }

      return e;
    }

    function Wt(e, t) {
      return "string" == typeof e ? t + e : e;
    }

    function $t(e) {
      e._o = xt, e._n = h, e._s = p, e._l = wt, e._t = _t, e._q = L, e._i = W, e._m = Nt, e._f = Tt, e._k = At, e._b = Ct, e._v = be, e._e = Ee, e._u = Ot, e._g = Dt, e._d = Lt, e._p = Wt;
    }

    function Rt(e, n, i, r, o) {
      var s,
          l = this,
          c = o.options;
      b(r, "_uid") ? (s = Object.create(r))._original = r : (s = r, r = r._original);
      var u = a(c._compiled),
          d = !u;
      this.data = e, this.props = n, this.children = i, this.parent = r, this.listeners = e.on || t, this.injections = vt(c.inject, r), this.slots = function () {
        return l.$slots || Et(e.scopedSlots, l.$slots = mt(i, r)), l.$slots;
      }, Object.defineProperty(this, "scopedSlots", {
        enumerable: !0,
        get: function get() {
          return Et(e.scopedSlots, this.slots());
        }
      }), u && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = Et(e.scopedSlots, this.$slots)), c._scopeId ? this._c = function (e, t, n, i) {
        var o = Gt(s, e, t, n, i, d);
        return o && !Array.isArray(o) && (o.fnScopeId = c._scopeId, o.fnContext = r), o;
      } : this._c = function (e, t, n, i) {
        return Gt(s, e, t, n, i, d);
      };
    }

    function jt(e, t, n, i, r) {
      var o = Se(e);
      return o.fnContext = n, o.fnOptions = i, t.slot && ((o.data || (o.data = {})).slot = t.slot), o;
    }

    function Ft(e, t) {
      for (var n in t) {
        e[_(n)] = t[n];
      }
    }

    $t(Rt.prototype);
    var Pt = {
      init: function init(e, t) {
        if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
          var n = e;
          Pt.prepatch(n, n);
        } else (e.componentInstance = function (e, t) {
          var n = {
            _isComponent: !0,
            _parentVnode: e,
            parent: t
          },
              i = e.data.inlineTemplate;
          return o(i) && (n.render = i.render, n.staticRenderFns = i.staticRenderFns), new e.componentOptions.Ctor(n);
        }(e, tn)).$mount(t ? e.elm : void 0, t);
      },
      prepatch: function prepatch(e, n) {
        var i = n.componentOptions;
        !function (e, n, i, r, o) {
          var a = r.data.scopedSlots,
              s = e.$scopedSlots,
              l = !!(a && !a.$stable || s !== t && !s.$stable || a && e.$scopedSlots.$key !== a.$key),
              c = !!(o || e.$options._renderChildren || l);

          if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = o, e.$attrs = r.data.attrs || t, e.$listeners = i || t, n && e.$options.props) {
            Ae(!1);

            for (var u = e._props, d = e.$options._propKeys || [], f = 0; f < d.length; f++) {
              var p = d[f],
                  h = e.$options.props;
              u[p] = Be(p, h, n, e);
            }

            Ae(!0), e.$options.propsData = n;
          }

          i = i || t;
          var g = e.$options._parentListeners;
          e.$options._parentListeners = i, en(e, i, g), c && (e.$slots = mt(o, r.context), e.$forceUpdate());
        }(n.componentInstance = e.componentInstance, i.propsData, i.listeners, n, i.children);
      },
      insert: function insert(e) {
        var t,
            n = e.context,
            i = e.componentInstance;
        i._isMounted || (i._isMounted = !0, sn(i, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = i)._inactive = !1, cn.push(t)) : on(i, !0));
      },
      destroy: function destroy(e) {
        var t = e.componentInstance;
        t._isDestroyed || (e.data.keepAlive ? an(t, !0) : t.$destroy());
      }
    },
        Bt = Object.keys(Pt);

    function Ht(e, n, i, s, c) {
      if (!r(e)) {
        var u = i.$options._base;

        if (l(e) && (e = u.extend(e)), "function" == typeof e) {
          var d;
          if (r(e.cid) && void 0 === (e = function (e, t) {
            if (a(e.error) && o(e.errorComp)) return e.errorComp;
            if (o(e.resolved)) return e.resolved;
            var n = Yt;
            if (n && o(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), a(e.loading) && o(e.loadingComp)) return e.loadingComp;

            if (n && !o(e.owners)) {
              var i = e.owners = [n],
                  s = !0,
                  c = null,
                  u = null;
              n.$on("hook:destroyed", function () {
                return y(i, n);
              });

              var d = function d(e) {
                for (var t = 0, n = i.length; t < n; t++) {
                  i[t].$forceUpdate();
                }

                e && (i.length = 0, null !== c && (clearTimeout(c), c = null), null !== u && (clearTimeout(u), u = null));
              },
                  p = R(function (n) {
                e.resolved = zt(n, t), s ? i.length = 0 : d(!0);
              }),
                  h = R(function (t) {
                o(e.errorComp) && (e.error = !0, d(!0));
              }),
                  g = e(p, h);

              return l(g) && (f(g) ? r(e.resolved) && g.then(p, h) : f(g.component) && (g.component.then(p, h), o(g.error) && (e.errorComp = zt(g.error, t)), o(g.loading) && (e.loadingComp = zt(g.loading, t), 0 === g.delay ? e.loading = !0 : c = setTimeout(function () {
                c = null, r(e.resolved) && r(e.error) && (e.loading = !0, d(!1));
              }, g.delay || 200)), o(g.timeout) && (u = setTimeout(function () {
                u = null, r(e.resolved) && h(null);
              }, g.timeout)))), s = !1, e.loading ? e.loadingComp : e.resolved;
            }
          }(d = e, u))) return function (e, t, n, i, r) {
            var o = Ee();
            return o.asyncFactory = e, o.asyncMeta = {
              data: t,
              context: n,
              children: i,
              tag: r
            }, o;
          }(d, n, i, s, c);
          n = n || {}, Nn(e), o(n.model) && function (e, t) {
            var n = e.model && e.model.prop || "value",
                i = e.model && e.model.event || "input";
            (t.attrs || (t.attrs = {}))[n] = t.model.value;
            var r = t.on || (t.on = {}),
                a = r[i],
                s = t.model.callback;
            o(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (r[i] = [s].concat(a)) : r[i] = s;
          }(e.options, n);

          var p = function (e, t, n) {
            var i = t.options.props;

            if (!r(i)) {
              var a = {},
                  s = e.attrs,
                  l = e.props;
              if (o(s) || o(l)) for (var c in i) {
                var u = A(c);
                ft(a, l, c, u, !0) || ft(a, s, c, u, !1);
              }
              return a;
            }
          }(n, e);

          if (a(e.options.functional)) return function (e, n, i, r, a) {
            var s = e.options,
                l = {},
                c = s.props;
            if (o(c)) for (var u in c) {
              l[u] = Be(u, c, n || t);
            } else o(i.attrs) && Ft(l, i.attrs), o(i.props) && Ft(l, i.props);
            var d = new Rt(i, l, a, r, e),
                f = s.render.call(null, d._c, d);
            if (f instanceof me) return jt(f, i, d.parent, s);

            if (Array.isArray(f)) {
              for (var p = pt(f) || [], h = new Array(p.length), g = 0; g < p.length; g++) {
                h[g] = jt(p[g], i, d.parent, s);
              }

              return h;
            }
          }(e, p, n, i, s);
          var h = n.on;

          if (n.on = n.nativeOn, a(e.options["abstract"])) {
            var g = n.slot;
            n = {}, g && (n.slot = g);
          }

          !function (e) {
            for (var t = e.hook || (e.hook = {}), n = 0; n < Bt.length; n++) {
              var i = Bt[n],
                  r = t[i],
                  o = Pt[i];
              r === o || r && r._merged || (t[i] = r ? Ut(o, r) : o);
            }
          }(n);
          var v = e.options.name || c;
          return new me("vue-component-" + e.cid + (v ? "-" + v : ""), n, void 0, void 0, void 0, i, {
            Ctor: e,
            propsData: p,
            listeners: h,
            tag: c,
            children: s
          }, d);
        }
      }
    }

    function Ut(e, t) {
      var n = function n(_n2, i) {
        e(_n2, i), t(_n2, i);
      };

      return n._merged = !0, n;
    }

    function Gt(e, t, n, i, r, c) {
      return (Array.isArray(n) || s(n)) && (r = i, i = n, n = void 0), a(c) && (r = 2), function (e, t, n, i, r) {
        if (o(n) && o(n.__ob__)) return Ee();
        if (o(n) && o(n.is) && (t = n.is), !t) return Ee();
        var a, s, c;
        (Array.isArray(i) && "function" == typeof i[0] && ((n = n || {}).scopedSlots = {
          "default": i[0]
        }, i.length = 0), 2 === r ? i = pt(i) : 1 === r && (i = function (e) {
          for (var t = 0; t < e.length; t++) {
            if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
          }

          return e;
        }(i)), "string" == typeof t) ? (s = e.$vnode && e.$vnode.ns || B.getTagNamespace(t), a = B.isReservedTag(t) ? new me(B.parsePlatformTagName(t), n, i, void 0, void 0, e) : n && n.pre || !o(c = Pe(e.$options, "components", t)) ? new me(t, n, i, void 0, void 0, e) : Ht(c, n, e, i, t)) : a = Ht(t, n, e, i);
        return Array.isArray(a) ? a : o(a) ? (o(s) && Vt(a, s), o(n) && function (e) {
          l(e.style) && at(e.style), l(e["class"]) && at(e["class"]);
        }(n), a) : Ee();
      }(e, t, n, i, r);
    }

    function Vt(e, t, n) {
      if (e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), o(e.children)) for (var i = 0, s = e.children.length; i < s; i++) {
        var l = e.children[i];
        o(l.tag) && (r(l.ns) || a(n) && "svg" !== l.tag) && Vt(l, t, n);
      }
    }

    var qt,
        Yt = null;

    function zt(e, t) {
      return (e.__esModule || ue && "Module" === e[Symbol.toStringTag]) && (e = e["default"]), l(e) ? t.extend(e) : e;
    }

    function Kt(e) {
      return e.isComment && e.asyncFactory;
    }

    function Qt(e) {
      if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
        var n = e[t];
        if (o(n) && (o(n.componentOptions) || Kt(n))) return n;
      }
    }

    function Jt(e, t) {
      qt.$on(e, t);
    }

    function Xt(e, t) {
      qt.$off(e, t);
    }

    function Zt(e, t) {
      var n = qt;
      return function i() {
        var r = t.apply(null, arguments);
        null !== r && n.$off(e, i);
      };
    }

    function en(e, t, n) {
      qt = e, ut(t, n || {}, Jt, Xt, Zt, e), qt = void 0;
    }

    var tn = null;

    function nn(e) {
      var t = tn;
      return tn = e, function () {
        tn = t;
      };
    }

    function rn(e) {
      for (; e && (e = e.$parent);) {
        if (e._inactive) return !0;
      }

      return !1;
    }

    function on(e, t) {
      if (t) {
        if (e._directInactive = !1, rn(e)) return;
      } else if (e._directInactive) return;

      if (e._inactive || null === e._inactive) {
        e._inactive = !1;

        for (var n = 0; n < e.$children.length; n++) {
          on(e.$children[n]);
        }

        sn(e, "activated");
      }
    }

    function an(e, t) {
      if (!(t && (e._directInactive = !0, rn(e)) || e._inactive)) {
        e._inactive = !0;

        for (var n = 0; n < e.$children.length; n++) {
          an(e.$children[n]);
        }

        sn(e, "deactivated");
      }
    }

    function sn(e, t) {
      ge();
      var n = e.$options[t],
          i = t + " hook";
      if (n) for (var r = 0, o = n.length; r < o; r++) {
        qe(n[r], e, null, e, i);
      }
      e._hasHookEvent && e.$emit("hook:" + t), ve();
    }

    var ln = [],
        cn = [],
        un = {},
        dn = !1,
        fn = !1,
        pn = 0,
        hn = 0,
        gn = Date.now;

    if (z && !X) {
      var vn = window.performance;
      vn && "function" == typeof vn.now && gn() > document.createEvent("Event").timeStamp && (gn = function gn() {
        return vn.now();
      });
    }

    function mn() {
      var e, t;

      for (hn = gn(), fn = !0, ln.sort(function (e, t) {
        return e.id - t.id;
      }), pn = 0; pn < ln.length; pn++) {
        (e = ln[pn]).before && e.before(), t = e.id, un[t] = null, e.run();
      }

      var n = cn.slice(),
          i = ln.slice();
      pn = ln.length = cn.length = 0, un = {}, dn = fn = !1, function (e) {
        for (var t = 0; t < e.length; t++) {
          e[t]._inactive = !0, on(e[t], !0);
        }
      }(n), function (e) {
        for (var t = e.length; t--;) {
          var n = e[t],
              i = n.vm;
          i._watcher === n && i._isMounted && !i._isDestroyed && sn(i, "updated");
        }
      }(i), se && B.devtools && se.emit("flush");
    }

    var yn = 0,
        En = function En(e, t, n, i, r) {
      this.vm = e, r && (e._watcher = this), e._watchers.push(this), i ? (this.deep = !!i.deep, this.user = !!i.user, this.lazy = !!i.lazy, this.sync = !!i.sync, this.before = i.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++yn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ce(), this.newDepIds = new ce(), this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
        if (!q.test(e)) {
          var t = e.split(".");
          return function (e) {
            for (var n = 0; n < t.length; n++) {
              if (!e) return;
              e = e[t[n]];
            }

            return e;
          };
        }
      }(t), this.getter || (this.getter = I)), this.value = this.lazy ? void 0 : this.get();
    };

    En.prototype.get = function () {
      var e;
      ge(this);
      var t = this.vm;

      try {
        e = this.getter.call(t, t);
      } catch (e) {
        if (!this.user) throw e;
        Ve(e, t, 'getter for watcher "' + this.expression + '"');
      } finally {
        this.deep && at(e), ve(), this.cleanupDeps();
      }

      return e;
    }, En.prototype.addDep = function (e) {
      var t = e.id;
      this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
    }, En.prototype.cleanupDeps = function () {
      for (var e = this.deps.length; e--;) {
        var t = this.deps[e];
        this.newDepIds.has(t.id) || t.removeSub(this);
      }

      var n = this.depIds;
      this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
    }, En.prototype.update = function () {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
        var t = e.id;

        if (null == un[t]) {
          if (un[t] = !0, fn) {
            for (var n = ln.length - 1; n > pn && ln[n].id > e.id;) {
              n--;
            }

            ln.splice(n + 1, 0, e);
          } else ln.push(e);

          dn || (dn = !0, rt(mn));
        }
      }(this);
    }, En.prototype.run = function () {
      if (this.active) {
        var e = this.get();

        if (e !== this.value || l(e) || this.deep) {
          var t = this.value;
          if (this.value = e, this.user) try {
            this.cb.call(this.vm, e, t);
          } catch (e) {
            Ve(e, this.vm, 'callback for watcher "' + this.expression + '"');
          } else this.cb.call(this.vm, e, t);
        }
      }
    }, En.prototype.evaluate = function () {
      this.value = this.get(), this.dirty = !1;
    }, En.prototype.depend = function () {
      for (var e = this.deps.length; e--;) {
        this.deps[e].depend();
      }
    }, En.prototype.teardown = function () {
      if (this.active) {
        this.vm._isBeingDestroyed || y(this.vm._watchers, this);

        for (var e = this.deps.length; e--;) {
          this.deps[e].removeSub(this);
        }

        this.active = !1;
      }
    };
    var bn = {
      enumerable: !0,
      configurable: !0,
      get: I,
      set: I
    };

    function Sn(e, t, n) {
      bn.get = function () {
        return this[t][n];
      }, bn.set = function (e) {
        this[t][n] = e;
      }, Object.defineProperty(e, n, bn);
    }

    var wn = {
      lazy: !0
    };

    function _n(e, t, n) {
      var i = !ae();
      "function" == typeof n ? (bn.get = i ? Tn(t) : kn(n), bn.set = I) : (bn.get = n.get ? i && !1 !== n.cache ? Tn(t) : kn(n.get) : I, bn.set = n.set || I), Object.defineProperty(e, t, bn);
    }

    function Tn(e) {
      return function () {
        var t = this._computedWatchers && this._computedWatchers[e];
        if (t) return t.dirty && t.evaluate(), pe.target && t.depend(), t.value;
      };
    }

    function kn(e) {
      return function () {
        return e.call(this, this);
      };
    }

    function An(e, t, n, i) {
      return u(n) && (i = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, i);
    }

    var Cn = 0;

    function Nn(e) {
      var t = e.options;

      if (e["super"]) {
        var n = Nn(e["super"]);

        if (n !== e.superOptions) {
          e.superOptions = n;

          var i = function (e) {
            var t,
                n = e.options,
                i = e.sealedOptions;

            for (var r in n) {
              n[r] !== i[r] && (t || (t = {}), t[r] = n[r]);
            }

            return t;
          }(e);

          i && x(e.extendOptions, i), (t = e.options = Fe(n, e.extendOptions)).name && (t.components[t.name] = e);
        }
      }

      return t;
    }

    function xn(e) {
      this._init(e);
    }

    function Mn(e) {
      return e && (e.Ctor.options.name || e.tag);
    }

    function In(e, t) {
      return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e, !("[object RegExp]" !== c.call(n)) && e.test(t));
      var n;
    }

    function Dn(e, t) {
      var n = e.cache,
          i = e.keys,
          r = e._vnode;

      for (var o in n) {
        var a = n[o];

        if (a) {
          var s = Mn(a.componentOptions);
          s && !t(s) && On(n, o, i, r);
        }
      }
    }

    function On(e, t, n, i) {
      var r = e[t];
      !r || i && r.tag === i.tag || r.componentInstance.$destroy(), e[t] = null, y(n, t);
    }

    !function (e) {
      e.prototype._init = function (e) {
        var n = this;
        n._uid = Cn++, n._isVue = !0, e && e._isComponent ? function (e, t) {
          var n = e.$options = Object.create(e.constructor.options),
              i = t._parentVnode;
          n.parent = t.parent, n._parentVnode = i;
          var r = i.componentOptions;
          n.propsData = r.propsData, n._parentListeners = r.listeners, n._renderChildren = r.children, n._componentTag = r.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
        }(n, e) : n.$options = Fe(Nn(n.constructor), e || {}, n), n._renderProxy = n, n._self = n, function (e) {
          var t = e.$options,
              n = t.parent;

          if (n && !t["abstract"]) {
            for (; n.$options["abstract"] && n.$parent;) {
              n = n.$parent;
            }

            n.$children.push(e);
          }

          e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
        }(n), function (e) {
          e._events = Object.create(null), e._hasHookEvent = !1;
          var t = e.$options._parentListeners;
          t && en(e, t);
        }(n), function (e) {
          e._vnode = null, e._staticTrees = null;
          var n = e.$options,
              i = e.$vnode = n._parentVnode,
              r = i && i.context;
          e.$slots = mt(n._renderChildren, r), e.$scopedSlots = t, e._c = function (t, n, i, r) {
            return Gt(e, t, n, i, r, !1);
          }, e.$createElement = function (t, n, i, r) {
            return Gt(e, t, n, i, r, !0);
          };
          var o = i && i.data;
          xe(e, "$attrs", o && o.attrs || t, null, !0), xe(e, "$listeners", n._parentListeners || t, null, !0);
        }(n), sn(n, "beforeCreate"), function (e) {
          var t = vt(e.$options.inject, e);
          t && (Ae(!1), Object.keys(t).forEach(function (n) {
            xe(e, n, t[n]);
          }), Ae(!0));
        }(n), function (e) {
          e._watchers = [];
          var t = e.$options;
          t.props && function (e, t) {
            var n = e.$options.propsData || {},
                i = e._props = {},
                r = e.$options._propKeys = [];
            e.$parent && Ae(!1);

            var o = function o(_o2) {
              r.push(_o2);
              var a = Be(_o2, t, n, e);
              xe(i, _o2, a), _o2 in e || Sn(e, "_props", _o2);
            };

            for (var a in t) {
              o(a);
            }

            Ae(!0);
          }(e, t.props), t.methods && function (e, t) {
            for (var n in e.$options.props, t) {
              e[n] = "function" != typeof t[n] ? I : C(t[n], e);
            }
          }(e, t.methods), t.data ? function (e) {
            var t = e.$options.data;
            u(t = e._data = "function" == typeof t ? function (e, t) {
              ge();

              try {
                return e.call(t, t);
              } catch (e) {
                return Ve(e, t, "data()"), {};
              } finally {
                ve();
              }
            }(t, e) : t || {}) || (t = {});

            for (var n = Object.keys(t), i = e.$options.props, r = (e.$options.methods, n.length); r--;) {
              var o = n[r];
              i && b(i, o) || U(o) || Sn(e, "_data", o);
            }

            Ne(t, !0);
          }(e) : Ne(e._data = {}, !0), t.computed && function (e, t) {
            var n = e._computedWatchers = Object.create(null),
                i = ae();

            for (var r in t) {
              var o = t[r],
                  a = "function" == typeof o ? o : o.get;
              i || (n[r] = new En(e, a || I, I, wn)), r in e || _n(e, r, o);
            }
          }(e, t.computed), t.watch && t.watch !== ie && function (e, t) {
            for (var n in t) {
              var i = t[n];
              if (Array.isArray(i)) for (var r = 0; r < i.length; r++) {
                An(e, n, i[r]);
              } else An(e, n, i);
            }
          }(e, t.watch);
        }(n), function (e) {
          var t = e.$options.provide;
          t && (e._provided = "function" == typeof t ? t.call(e) : t);
        }(n), sn(n, "created"), n.$options.el && n.$mount(n.$options.el);
      };
    }(xn), function (e) {
      Object.defineProperty(e.prototype, "$data", {
        get: function get() {
          return this._data;
        }
      }), Object.defineProperty(e.prototype, "$props", {
        get: function get() {
          return this._props;
        }
      }), e.prototype.$set = Me, e.prototype.$delete = Ie, e.prototype.$watch = function (e, t, n) {
        var i = this;
        if (u(t)) return An(i, e, t, n);
        (n = n || {}).user = !0;
        var r = new En(i, e, t, n);
        if (n.immediate) try {
          t.call(i, r.value);
        } catch (e) {
          Ve(e, i, 'callback for immediate watcher "' + r.expression + '"');
        }
        return function () {
          r.teardown();
        };
      };
    }(xn), function (e) {
      var t = /^hook:/;
      e.prototype.$on = function (e, n) {
        var i = this;
        if (Array.isArray(e)) for (var r = 0, o = e.length; r < o; r++) {
          i.$on(e[r], n);
        } else (i._events[e] || (i._events[e] = [])).push(n), t.test(e) && (i._hasHookEvent = !0);
        return i;
      }, e.prototype.$once = function (e, t) {
        var n = this;

        function i() {
          n.$off(e, i), t.apply(n, arguments);
        }

        return i.fn = t, n.$on(e, i), n;
      }, e.prototype.$off = function (e, t) {
        var n = this;
        if (!arguments.length) return n._events = Object.create(null), n;

        if (Array.isArray(e)) {
          for (var i = 0, r = e.length; i < r; i++) {
            n.$off(e[i], t);
          }

          return n;
        }

        var o,
            a = n._events[e];
        if (!a) return n;
        if (!t) return n._events[e] = null, n;

        for (var s = a.length; s--;) {
          if ((o = a[s]) === t || o.fn === t) {
            a.splice(s, 1);
            break;
          }
        }

        return n;
      }, e.prototype.$emit = function (e) {
        var t = this,
            n = t._events[e];

        if (n) {
          n = n.length > 1 ? N(n) : n;

          for (var i = N(arguments, 1), r = 'event handler for "' + e + '"', o = 0, a = n.length; o < a; o++) {
            qe(n[o], t, i, t, r);
          }
        }

        return t;
      };
    }(xn), function (e) {
      e.prototype._update = function (e, t) {
        var n = this,
            i = n.$el,
            r = n._vnode,
            o = nn(n);
        n._vnode = e, n.$el = r ? n.__patch__(r, e) : n.__patch__(n.$el, e, t, !1), o(), i && (i.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
      }, e.prototype.$forceUpdate = function () {
        this._watcher && this._watcher.update();
      }, e.prototype.$destroy = function () {
        var e = this;

        if (!e._isBeingDestroyed) {
          sn(e, "beforeDestroy"), e._isBeingDestroyed = !0;
          var t = e.$parent;
          !t || t._isBeingDestroyed || e.$options["abstract"] || y(t.$children, e), e._watcher && e._watcher.teardown();

          for (var n = e._watchers.length; n--;) {
            e._watchers[n].teardown();
          }

          e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), sn(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
        }
      };
    }(xn), function (e) {
      $t(e.prototype), e.prototype.$nextTick = function (e) {
        return rt(e, this);
      }, e.prototype._render = function () {
        var e,
            t = this,
            n = t.$options,
            i = n.render,
            r = n._parentVnode;
        r && (t.$scopedSlots = Et(r.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = r;

        try {
          Yt = t, e = i.call(t._renderProxy, t.$createElement);
        } catch (n) {
          Ve(n, t, "render"), e = t._vnode;
        } finally {
          Yt = null;
        }

        return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof me || (e = Ee()), e.parent = r, e;
      };
    }(xn);
    var Ln = [String, RegExp, Array],
        Wn = {
      KeepAlive: {
        name: "keep-alive",
        "abstract": !0,
        props: {
          include: Ln,
          exclude: Ln,
          max: [String, Number]
        },
        created: function created() {
          this.cache = Object.create(null), this.keys = [];
        },
        destroyed: function destroyed() {
          for (var e in this.cache) {
            On(this.cache, e, this.keys);
          }
        },
        mounted: function mounted() {
          var e = this;
          this.$watch("include", function (t) {
            Dn(e, function (e) {
              return In(t, e);
            });
          }), this.$watch("exclude", function (t) {
            Dn(e, function (e) {
              return !In(t, e);
            });
          });
        },
        render: function render() {
          var e = this.$slots["default"],
              t = Qt(e),
              n = t && t.componentOptions;

          if (n) {
            var i = Mn(n),
                r = this.include,
                o = this.exclude;
            if (r && (!i || !In(r, i)) || o && i && In(o, i)) return t;
            var a = this.cache,
                s = this.keys,
                l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
            a[l] ? (t.componentInstance = a[l].componentInstance, y(s, l), s.push(l)) : (a[l] = t, s.push(l), this.max && s.length > parseInt(this.max) && On(a, s[0], s, this._vnode)), t.data.keepAlive = !0;
          }

          return t || e && e[0];
        }
      }
    };
    !function (e) {
      var t = {
        get: function get() {
          return B;
        }
      };
      Object.defineProperty(e, "config", t), e.util = {
        warn: de,
        extend: x,
        mergeOptions: Fe,
        defineReactive: xe
      }, e.set = Me, e["delete"] = Ie, e.nextTick = rt, e.observable = function (e) {
        return Ne(e), e;
      }, e.options = Object.create(null), F.forEach(function (t) {
        e.options[t + "s"] = Object.create(null);
      }), e.options._base = e, x(e.options.components, Wn), function (e) {
        e.use = function (e) {
          var t = this._installedPlugins || (this._installedPlugins = []);
          if (t.indexOf(e) > -1) return this;
          var n = N(arguments, 1);
          return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this;
        };
      }(e), function (e) {
        e.mixin = function (e) {
          return this.options = Fe(this.options, e), this;
        };
      }(e), function (e) {
        e.cid = 0;
        var t = 1;

        e.extend = function (e) {
          e = e || {};
          var n = this,
              i = n.cid,
              r = e._Ctor || (e._Ctor = {});
          if (r[i]) return r[i];

          var o = e.name || n.options.name,
              a = function a(e) {
            this._init(e);
          };

          return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = t++, a.options = Fe(n.options, e), a["super"] = n, a.options.props && function (e) {
            var t = e.options.props;

            for (var n in t) {
              Sn(e.prototype, "_props", n);
            }
          }(a), a.options.computed && function (e) {
            var t = e.options.computed;

            for (var n in t) {
              _n(e.prototype, n, t[n]);
            }
          }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, F.forEach(function (e) {
            a[e] = n[e];
          }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = x({}, a.options), r[i] = a, a;
        };
      }(e), function (e) {
        F.forEach(function (t) {
          e[t] = function (e, n) {
            return n ? ("component" === t && u(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
              bind: n,
              update: n
            }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
          };
        });
      }(e);
    }(xn), Object.defineProperty(xn.prototype, "$isServer", {
      get: ae
    }), Object.defineProperty(xn.prototype, "$ssrContext", {
      get: function get() {
        return this.$vnode && this.$vnode.ssrContext;
      }
    }), Object.defineProperty(xn, "FunctionalRenderContext", {
      value: Rt
    }), xn.version = "2.6.12";

    var $n = g("style,class"),
        Rn = g("input,textarea,option,select,progress"),
        jn = function jn(e, t, n) {
      return "value" === n && Rn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e;
    },
        Fn = g("contenteditable,draggable,spellcheck"),
        Pn = g("events,caret,typing,plaintext-only"),
        Bn = g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
        Hn = "http://www.w3.org/1999/xlink",
        Un = function Un(e) {
      return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
    },
        Gn = function Gn(e) {
      return Un(e) ? e.slice(6, e.length) : "";
    },
        Vn = function Vn(e) {
      return null == e || !1 === e;
    };

    function qn(e, t) {
      return {
        staticClass: Yn(e.staticClass, t.staticClass),
        "class": o(e["class"]) ? [e["class"], t["class"]] : t["class"]
      };
    }

    function Yn(e, t) {
      return e ? t ? e + " " + t : e : t || "";
    }

    function zn(e) {
      return Array.isArray(e) ? function (e) {
        for (var t, n = "", i = 0, r = e.length; i < r; i++) {
          o(t = zn(e[i])) && "" !== t && (n && (n += " "), n += t);
        }

        return n;
      }(e) : l(e) ? function (e) {
        var t = "";

        for (var n in e) {
          e[n] && (t && (t += " "), t += n);
        }

        return t;
      }(e) : "string" == typeof e ? e : "";
    }

    var Kn = {
      svg: "http://www.w3.org/2000/svg",
      math: "http://www.w3.org/1998/Math/MathML"
    },
        Qn = g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
        Jn = g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        Xn = function Xn(e) {
      return Qn(e) || Jn(e);
    };

    function Zn(e) {
      return Jn(e) ? "svg" : "math" === e ? "math" : void 0;
    }

    var ei = Object.create(null),
        ti = g("text,number,password,search,email,tel,url");

    function ni(e) {
      return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e;
    }

    var ii = Object.freeze({
      createElement: function createElement(e, t) {
        var n = document.createElement(e);
        return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n;
      },
      createElementNS: function createElementNS(e, t) {
        return document.createElementNS(Kn[e], t);
      },
      createTextNode: function createTextNode(e) {
        return document.createTextNode(e);
      },
      createComment: function createComment(e) {
        return document.createComment(e);
      },
      insertBefore: function insertBefore(e, t, n) {
        e.insertBefore(t, n);
      },
      removeChild: function removeChild(e, t) {
        e.removeChild(t);
      },
      appendChild: function appendChild(e, t) {
        e.appendChild(t);
      },
      parentNode: function parentNode(e) {
        return e.parentNode;
      },
      nextSibling: function nextSibling(e) {
        return e.nextSibling;
      },
      tagName: function tagName(e) {
        return e.tagName;
      },
      setTextContent: function setTextContent(e, t) {
        e.textContent = t;
      },
      setStyleScope: function setStyleScope(e, t) {
        e.setAttribute(t, "");
      }
    }),
        ri = {
      create: function create(e, t) {
        oi(t);
      },
      update: function update(e, t) {
        e.data.ref !== t.data.ref && (oi(e, !0), oi(t));
      },
      destroy: function destroy(e) {
        oi(e, !0);
      }
    };

    function oi(e, t) {
      var n = e.data.ref;

      if (o(n)) {
        var i = e.context,
            r = e.componentInstance || e.elm,
            a = i.$refs;
        t ? Array.isArray(a[n]) ? y(a[n], r) : a[n] === r && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(r) < 0 && a[n].push(r) : a[n] = [r] : a[n] = r;
      }
    }

    var ai = new me("", {}, []),
        si = ["create", "activate", "update", "remove", "destroy"];

    function li(e, t) {
      return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && o(e.data) === o(t.data) && function (e, t) {
        if ("input" !== e.tag) return !0;
        var n,
            i = o(n = e.data) && o(n = n.attrs) && n.type,
            r = o(n = t.data) && o(n = n.attrs) && n.type;
        return i === r || ti(i) && ti(r);
      }(e, t) || a(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && r(t.asyncFactory.error));
    }

    function ci(e, t, n) {
      var i,
          r,
          a = {};

      for (i = t; i <= n; ++i) {
        o(r = e[i].key) && (a[r] = i);
      }

      return a;
    }

    var ui = {
      create: di,
      update: di,
      destroy: function destroy(e) {
        di(e, ai);
      }
    };

    function di(e, t) {
      (e.data.directives || t.data.directives) && function (e, t) {
        var n,
            i,
            r,
            o = e === ai,
            a = t === ai,
            s = pi(e.data.directives, e.context),
            l = pi(t.data.directives, t.context),
            c = [],
            u = [];

        for (n in l) {
          i = s[n], r = l[n], i ? (r.oldValue = i.value, r.oldArg = i.arg, gi(r, "update", t, e), r.def && r.def.componentUpdated && u.push(r)) : (gi(r, "bind", t, e), r.def && r.def.inserted && c.push(r));
        }

        if (c.length) {
          var d = function d() {
            for (var n = 0; n < c.length; n++) {
              gi(c[n], "inserted", t, e);
            }
          };

          o ? dt(t, "insert", d) : d();
        }

        if (u.length && dt(t, "postpatch", function () {
          for (var n = 0; n < u.length; n++) {
            gi(u[n], "componentUpdated", t, e);
          }
        }), !o) for (n in s) {
          l[n] || gi(s[n], "unbind", e, e, a);
        }
      }(e, t);
    }

    var fi = Object.create(null);

    function pi(e, t) {
      var n,
          i,
          r = Object.create(null);
      if (!e) return r;

      for (n = 0; n < e.length; n++) {
        (i = e[n]).modifiers || (i.modifiers = fi), r[hi(i)] = i, i.def = Pe(t.$options, "directives", i.name);
      }

      return r;
    }

    function hi(e) {
      return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
    }

    function gi(e, t, n, i, r) {
      var o = e.def && e.def[t];
      if (o) try {
        o(n.elm, e, n, i, r);
      } catch (i) {
        Ve(i, n.context, "directive " + e.name + " " + t + " hook");
      }
    }

    var vi = [ri, ui];

    function mi(e, t) {
      var n = t.componentOptions;

      if (!(o(n) && !1 === n.Ctor.options.inheritAttrs || r(e.data.attrs) && r(t.data.attrs))) {
        var i,
            a,
            s = t.elm,
            l = e.data.attrs || {},
            c = t.data.attrs || {};

        for (i in o(c.__ob__) && (c = t.data.attrs = x({}, c)), c) {
          a = c[i], l[i] !== a && yi(s, i, a);
        }

        for (i in (X || ee) && c.value !== l.value && yi(s, "value", c.value), l) {
          r(c[i]) && (Un(i) ? s.removeAttributeNS(Hn, Gn(i)) : Fn(i) || s.removeAttribute(i));
        }
      }
    }

    function yi(e, t, n) {
      e.tagName.indexOf("-") > -1 ? Ei(e, t, n) : Bn(t) ? Vn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Fn(t) ? e.setAttribute(t, function (e, t) {
        return Vn(t) || "false" === t ? "false" : "contenteditable" === e && Pn(t) ? t : "true";
      }(t, n)) : Un(t) ? Vn(n) ? e.removeAttributeNS(Hn, Gn(t)) : e.setAttributeNS(Hn, t, n) : Ei(e, t, n);
    }

    function Ei(e, t, n) {
      if (Vn(n)) e.removeAttribute(t);else {
        if (X && !Z && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
          var i = function i(t) {
            t.stopImmediatePropagation(), e.removeEventListener("input", i);
          };

          e.addEventListener("input", i), e.__ieph = !0;
        }

        e.setAttribute(t, n);
      }
    }

    var bi = {
      create: mi,
      update: mi
    };

    function Si(e, t) {
      var n = t.elm,
          i = t.data,
          a = e.data;

      if (!(r(i.staticClass) && r(i["class"]) && (r(a) || r(a.staticClass) && r(a["class"])))) {
        var s = function (e) {
          for (var t = e.data, n = e, i = e; o(i.componentInstance);) {
            (i = i.componentInstance._vnode) && i.data && (t = qn(i.data, t));
          }

          for (; o(n = n.parent);) {
            n && n.data && (t = qn(t, n.data));
          }

          return r = t.staticClass, a = t["class"], o(r) || o(a) ? Yn(r, zn(a)) : "";
          var r, a;
        }(t),
            l = n._transitionClasses;

        o(l) && (s = Yn(s, zn(l))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s);
      }
    }

    var wi,
        _i,
        Ti,
        ki,
        Ai,
        Ci,
        Ni = {
      create: Si,
      update: Si
    },
        xi = /[\w).+\-_$\]]/;

    function Mi(e) {
      var t,
          n,
          i,
          r,
          o,
          a = !1,
          s = !1,
          l = !1,
          c = !1,
          u = 0,
          d = 0,
          f = 0,
          p = 0;

      for (i = 0; i < e.length; i++) {
        if (n = t, t = e.charCodeAt(i), a) 39 === t && 92 !== n && (a = !1);else if (s) 34 === t && 92 !== n && (s = !1);else if (l) 96 === t && 92 !== n && (l = !1);else if (c) 47 === t && 92 !== n && (c = !1);else if (124 !== t || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || u || d || f) {
          switch (t) {
            case 34:
              s = !0;
              break;

            case 39:
              a = !0;
              break;

            case 96:
              l = !0;
              break;

            case 40:
              f++;
              break;

            case 41:
              f--;
              break;

            case 91:
              d++;
              break;

            case 93:
              d--;
              break;

            case 123:
              u++;
              break;

            case 125:
              u--;
          }

          if (47 === t) {
            for (var h = i - 1, g = void 0; h >= 0 && " " === (g = e.charAt(h)); h--) {
              ;
            }

            g && xi.test(g) || (c = !0);
          }
        } else void 0 === r ? (p = i + 1, r = e.slice(0, i).trim()) : v();
      }

      function v() {
        (o || (o = [])).push(e.slice(p, i).trim()), p = i + 1;
      }

      if (void 0 === r ? r = e.slice(0, i).trim() : 0 !== p && v(), o) for (i = 0; i < o.length; i++) {
        r = Ii(r, o[i]);
      }
      return r;
    }

    function Ii(e, t) {
      var n = t.indexOf("(");
      if (n < 0) return '_f("' + t + '")(' + e + ")";
      var i = t.slice(0, n),
          r = t.slice(n + 1);
      return '_f("' + i + '")(' + e + (")" !== r ? "," + r : r);
    }

    function Di(e, t) {
      console.error("[Vue compiler]: " + e);
    }

    function Oi(e, t) {
      return e ? e.map(function (e) {
        return e[t];
      }).filter(function (e) {
        return e;
      }) : [];
    }

    function Li(e, t, n, i, r) {
      (e.props || (e.props = [])).push(Ui({
        name: t,
        value: n,
        dynamic: r
      }, i)), e.plain = !1;
    }

    function Wi(e, t, n, i, r) {
      (r ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Ui({
        name: t,
        value: n,
        dynamic: r
      }, i)), e.plain = !1;
    }

    function $i(e, t, n, i) {
      e.attrsMap[t] = n, e.attrsList.push(Ui({
        name: t,
        value: n
      }, i));
    }

    function Ri(e, t, n, i, r, o, a, s) {
      (e.directives || (e.directives = [])).push(Ui({
        name: t,
        rawName: n,
        value: i,
        arg: r,
        isDynamicArg: o,
        modifiers: a
      }, s)), e.plain = !1;
    }

    function ji(e, t, n) {
      return n ? "_p(" + t + ',"' + e + '")' : e + t;
    }

    function Fi(e, n, i, r, o, a, s, l) {
      var c;
      (r = r || t).right ? l ? n = "(" + n + ")==='click'?'contextmenu':(" + n + ")" : "click" === n && (n = "contextmenu", delete r.right) : r.middle && (l ? n = "(" + n + ")==='click'?'mouseup':(" + n + ")" : "click" === n && (n = "mouseup")), r.capture && (delete r.capture, n = ji("!", n, l)), r.once && (delete r.once, n = ji("~", n, l)), r.passive && (delete r.passive, n = ji("&", n, l)), r["native"] ? (delete r["native"], c = e.nativeEvents || (e.nativeEvents = {})) : c = e.events || (e.events = {});
      var u = Ui({
        value: i.trim(),
        dynamic: l
      }, s);
      r !== t && (u.modifiers = r);
      var d = c[n];
      Array.isArray(d) ? o ? d.unshift(u) : d.push(u) : c[n] = d ? o ? [u, d] : [d, u] : u, e.plain = !1;
    }

    function Pi(e, t, n) {
      var i = Bi(e, ":" + t) || Bi(e, "v-bind:" + t);
      if (null != i) return Mi(i);

      if (!1 !== n) {
        var r = Bi(e, t);
        if (null != r) return JSON.stringify(r);
      }
    }

    function Bi(e, t, n) {
      var i;
      if (null != (i = e.attrsMap[t])) for (var r = e.attrsList, o = 0, a = r.length; o < a; o++) {
        if (r[o].name === t) {
          r.splice(o, 1);
          break;
        }
      }
      return n && delete e.attrsMap[t], i;
    }

    function Hi(e, t) {
      for (var n = e.attrsList, i = 0, r = n.length; i < r; i++) {
        var o = n[i];
        if (t.test(o.name)) return n.splice(i, 1), o;
      }
    }

    function Ui(e, t) {
      return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e;
    }

    function Gi(e, t, n) {
      var i = n || {},
          r = i.number,
          o = "$$v";
      i.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), r && (o = "_n(" + o + ")");
      var a = Vi(t, o);
      e.model = {
        value: "(" + t + ")",
        expression: JSON.stringify(t),
        callback: "function ($$v) {" + a + "}"
      };
    }

    function Vi(e, t) {
      var n = function (e) {
        if (e = e.trim(), wi = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < wi - 1) return (ki = e.lastIndexOf(".")) > -1 ? {
          exp: e.slice(0, ki),
          key: '"' + e.slice(ki + 1) + '"'
        } : {
          exp: e,
          key: null
        };

        for (_i = e, ki = Ai = Ci = 0; !Yi();) {
          zi(Ti = qi()) ? Qi(Ti) : 91 === Ti && Ki(Ti);
        }

        return {
          exp: e.slice(0, Ai),
          key: e.slice(Ai + 1, Ci)
        };
      }(e);

      return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")";
    }

    function qi() {
      return _i.charCodeAt(++ki);
    }

    function Yi() {
      return ki >= wi;
    }

    function zi(e) {
      return 34 === e || 39 === e;
    }

    function Ki(e) {
      var t = 1;

      for (Ai = ki; !Yi();) {
        if (zi(e = qi())) Qi(e);else if (91 === e && t++, 93 === e && t--, 0 === t) {
          Ci = ki;
          break;
        }
      }
    }

    function Qi(e) {
      for (var t = e; !Yi() && (e = qi()) !== t;) {
        ;
      }
    }

    var Ji;

    function Xi(e, t, n) {
      var i = Ji;
      return function r() {
        var o = t.apply(null, arguments);
        null !== o && tr(e, r, n, i);
      };
    }

    var Zi = Qe && !(ne && Number(ne[1]) <= 53);

    function er(e, t, n, i) {
      if (Zi) {
        var r = hn,
            o = t;

        t = o._wrapper = function (e) {
          if (e.target === e.currentTarget || e.timeStamp >= r || e.timeStamp <= 0 || e.target.ownerDocument !== document) return o.apply(this, arguments);
        };
      }

      Ji.addEventListener(e, t, re ? {
        capture: n,
        passive: i
      } : n);
    }

    function tr(e, t, n, i) {
      (i || Ji).removeEventListener(e, t._wrapper || t, n);
    }

    function nr(e, t) {
      if (!r(e.data.on) || !r(t.data.on)) {
        var n = t.data.on || {},
            i = e.data.on || {};
        Ji = t.elm, function (e) {
          if (o(e.__r)) {
            var t = X ? "change" : "input";
            e[t] = [].concat(e.__r, e[t] || []), delete e.__r;
          }

          o(e.__c) && (e.change = [].concat(e.__c, e.change || []), delete e.__c);
        }(n), ut(n, i, er, tr, Xi, t.context), Ji = void 0;
      }
    }

    var ir,
        rr = {
      create: nr,
      update: nr
    };

    function or(e, t) {
      if (!r(e.data.domProps) || !r(t.data.domProps)) {
        var n,
            i,
            a = t.elm,
            s = e.data.domProps || {},
            l = t.data.domProps || {};

        for (n in o(l.__ob__) && (l = t.data.domProps = x({}, l)), s) {
          n in l || (a[n] = "");
        }

        for (n in l) {
          if (i = l[n], "textContent" === n || "innerHTML" === n) {
            if (t.children && (t.children.length = 0), i === s[n]) continue;
            1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
          }

          if ("value" === n && "PROGRESS" !== a.tagName) {
            a._value = i;
            var c = r(i) ? "" : String(i);
            ar(a, c) && (a.value = c);
          } else if ("innerHTML" === n && Jn(a.tagName) && r(a.innerHTML)) {
            (ir = ir || document.createElement("div")).innerHTML = "<svg>" + i + "</svg>";

            for (var u = ir.firstChild; a.firstChild;) {
              a.removeChild(a.firstChild);
            }

            for (; u.firstChild;) {
              a.appendChild(u.firstChild);
            }
          } else if (i !== s[n]) try {
            a[n] = i;
          } catch (e) {}
        }
      }
    }

    function ar(e, t) {
      return !e.composing && ("OPTION" === e.tagName || function (e, t) {
        var n = !0;

        try {
          n = document.activeElement !== e;
        } catch (e) {}

        return n && e.value !== t;
      }(e, t) || function (e, t) {
        var n = e.value,
            i = e._vModifiers;

        if (o(i)) {
          if (i.number) return h(n) !== h(t);
          if (i.trim) return n.trim() !== t.trim();
        }

        return n !== t;
      }(e, t));
    }

    var sr = {
      create: or,
      update: or
    },
        lr = S(function (e) {
      var t = {},
          n = /:(.+)/;
      return e.split(/;(?![^(]*\))/g).forEach(function (e) {
        if (e) {
          var i = e.split(n);
          i.length > 1 && (t[i[0].trim()] = i[1].trim());
        }
      }), t;
    });

    function cr(e) {
      var t = ur(e.style);
      return e.staticStyle ? x(e.staticStyle, t) : t;
    }

    function ur(e) {
      return Array.isArray(e) ? M(e) : "string" == typeof e ? lr(e) : e;
    }

    var dr,
        fr = /^--/,
        pr = /\s*!important$/,
        hr = function hr(e, t, n) {
      if (fr.test(t)) e.style.setProperty(t, n);else if (pr.test(n)) e.style.setProperty(A(t), n.replace(pr, ""), "important");else {
        var i = vr(t);
        if (Array.isArray(n)) for (var r = 0, o = n.length; r < o; r++) {
          e.style[i] = n[r];
        } else e.style[i] = n;
      }
    },
        gr = ["Webkit", "Moz", "ms"],
        vr = S(function (e) {
      if (dr = dr || document.createElement("div").style, "filter" !== (e = _(e)) && e in dr) return e;

      for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < gr.length; n++) {
        var i = gr[n] + t;
        if (i in dr) return i;
      }
    });

    function mr(e, t) {
      var n = t.data,
          i = e.data;

      if (!(r(n.staticStyle) && r(n.style) && r(i.staticStyle) && r(i.style))) {
        var a,
            s,
            l = t.elm,
            c = i.staticStyle,
            u = i.normalizedStyle || i.style || {},
            d = c || u,
            f = ur(t.data.style) || {};
        t.data.normalizedStyle = o(f.__ob__) ? x({}, f) : f;

        var p = function (e, t) {
          for (var n, i = {}, r = e; r.componentInstance;) {
            (r = r.componentInstance._vnode) && r.data && (n = cr(r.data)) && x(i, n);
          }

          (n = cr(e.data)) && x(i, n);

          for (var o = e; o = o.parent;) {
            o.data && (n = cr(o.data)) && x(i, n);
          }

          return i;
        }(t);

        for (s in d) {
          r(p[s]) && hr(l, s, "");
        }

        for (s in p) {
          (a = p[s]) !== d[s] && hr(l, s, null == a ? "" : a);
        }
      }
    }

    var yr = {
      create: mr,
      update: mr
    },
        Er = /\s+/;

    function br(e, t) {
      if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(Er).forEach(function (t) {
        return e.classList.add(t);
      }) : e.classList.add(t);else {
        var n = " " + (e.getAttribute("class") || "") + " ";
        n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
      }
    }

    function Sr(e, t) {
      if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(Er).forEach(function (t) {
        return e.classList.remove(t);
      }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");else {
        for (var n = " " + (e.getAttribute("class") || "") + " ", i = " " + t + " "; n.indexOf(i) >= 0;) {
          n = n.replace(i, " ");
        }

        (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class");
      }
    }

    function wr(e) {
      if (e) {
        if ("object" == _typeof(e)) {
          var t = {};
          return !1 !== e.css && x(t, _r(e.name || "v")), x(t, e), t;
        }

        return "string" == typeof e ? _r(e) : void 0;
      }
    }

    var _r = S(function (e) {
      return {
        enterClass: e + "-enter",
        enterToClass: e + "-enter-to",
        enterActiveClass: e + "-enter-active",
        leaveClass: e + "-leave",
        leaveToClass: e + "-leave-to",
        leaveActiveClass: e + "-leave-active"
      };
    }),
        Tr = z && !Z,
        kr = "transition",
        Ar = "animation",
        Cr = "transition",
        Nr = "transitionend",
        xr = "animation",
        Mr = "animationend";

    Tr && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Cr = "WebkitTransition", Nr = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (xr = "WebkitAnimation", Mr = "webkitAnimationEnd"));
    var Ir = z ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
      return e();
    };

    function Dr(e) {
      Ir(function () {
        Ir(e);
      });
    }

    function Or(e, t) {
      var n = e._transitionClasses || (e._transitionClasses = []);
      n.indexOf(t) < 0 && (n.push(t), br(e, t));
    }

    function Lr(e, t) {
      e._transitionClasses && y(e._transitionClasses, t), Sr(e, t);
    }

    function Wr(e, t, n) {
      var i = Rr(e, t),
          r = i.type,
          o = i.timeout,
          a = i.propCount;
      if (!r) return n();

      var s = r === kr ? Nr : Mr,
          l = 0,
          c = function c() {
        e.removeEventListener(s, u), n();
      },
          u = function u(t) {
        t.target === e && ++l >= a && c();
      };

      setTimeout(function () {
        l < a && c();
      }, o + 1), e.addEventListener(s, u);
    }

    var $r = /\b(transform|all)(,|$)/;

    function Rr(e, t) {
      var n,
          i = window.getComputedStyle(e),
          r = (i[Cr + "Delay"] || "").split(", "),
          o = (i[Cr + "Duration"] || "").split(", "),
          a = jr(r, o),
          s = (i[xr + "Delay"] || "").split(", "),
          l = (i[xr + "Duration"] || "").split(", "),
          c = jr(s, l),
          u = 0,
          d = 0;
      return t === kr ? a > 0 && (n = kr, u = a, d = o.length) : t === Ar ? c > 0 && (n = Ar, u = c, d = l.length) : d = (n = (u = Math.max(a, c)) > 0 ? a > c ? kr : Ar : null) ? n === kr ? o.length : l.length : 0, {
        type: n,
        timeout: u,
        propCount: d,
        hasTransform: n === kr && $r.test(i[Cr + "Property"])
      };
    }

    function jr(e, t) {
      for (; e.length < t.length;) {
        e = e.concat(e);
      }

      return Math.max.apply(null, t.map(function (t, n) {
        return Fr(t) + Fr(e[n]);
      }));
    }

    function Fr(e) {
      return 1e3 * Number(e.slice(0, -1).replace(",", "."));
    }

    function Pr(e, t) {
      var n = e.elm;
      o(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
      var i = wr(e.data.transition);

      if (!r(i) && !o(n._enterCb) && 1 === n.nodeType) {
        for (var a = i.css, s = i.type, c = i.enterClass, u = i.enterToClass, d = i.enterActiveClass, f = i.appearClass, p = i.appearToClass, g = i.appearActiveClass, v = i.beforeEnter, m = i.enter, y = i.afterEnter, E = i.enterCancelled, b = i.beforeAppear, S = i.appear, w = i.afterAppear, _ = i.appearCancelled, T = i.duration, k = tn, A = tn.$vnode; A && A.parent;) {
          k = A.context, A = A.parent;
        }

        var C = !k._isMounted || !e.isRootInsert;

        if (!C || S || "" === S) {
          var N = C && f ? f : c,
              x = C && g ? g : d,
              M = C && p ? p : u,
              I = C && b || v,
              D = C && "function" == typeof S ? S : m,
              O = C && w || y,
              L = C && _ || E,
              W = h(l(T) ? T.enter : T),
              $ = !1 !== a && !Z,
              j = Ur(D),
              F = n._enterCb = R(function () {
            $ && (Lr(n, M), Lr(n, x)), F.cancelled ? ($ && Lr(n, N), L && L(n)) : O && O(n), n._enterCb = null;
          });
          e.data.show || dt(e, "insert", function () {
            var t = n.parentNode,
                i = t && t._pending && t._pending[e.key];
            i && i.tag === e.tag && i.elm._leaveCb && i.elm._leaveCb(), D && D(n, F);
          }), I && I(n), $ && (Or(n, N), Or(n, x), Dr(function () {
            Lr(n, N), F.cancelled || (Or(n, M), j || (Hr(W) ? setTimeout(F, W) : Wr(n, s, F)));
          })), e.data.show && (t && t(), D && D(n, F)), $ || j || F();
        }
      }
    }

    function Br(e, t) {
      var n = e.elm;
      o(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
      var i = wr(e.data.transition);
      if (r(i) || 1 !== n.nodeType) return t();

      if (!o(n._leaveCb)) {
        var a = i.css,
            s = i.type,
            c = i.leaveClass,
            u = i.leaveToClass,
            d = i.leaveActiveClass,
            f = i.beforeLeave,
            p = i.leave,
            g = i.afterLeave,
            v = i.leaveCancelled,
            m = i.delayLeave,
            y = i.duration,
            E = !1 !== a && !Z,
            b = Ur(p),
            S = h(l(y) ? y.leave : y),
            w = n._leaveCb = R(function () {
          n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), E && (Lr(n, u), Lr(n, d)), w.cancelled ? (E && Lr(n, c), v && v(n)) : (t(), g && g(n)), n._leaveCb = null;
        });
        m ? m(_) : _();
      }

      function _() {
        w.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), f && f(n), E && (Or(n, c), Or(n, d), Dr(function () {
          Lr(n, c), w.cancelled || (Or(n, u), b || (Hr(S) ? setTimeout(w, S) : Wr(n, s, w)));
        })), p && p(n, w), E || b || w());
      }
    }

    function Hr(e) {
      return "number" == typeof e && !isNaN(e);
    }

    function Ur(e) {
      if (r(e)) return !1;
      var t = e.fns;
      return o(t) ? Ur(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
    }

    function Gr(e, t) {
      !0 !== t.data.show && Pr(t);
    }

    var Vr = function (e) {
      var t,
          n,
          i = {},
          l = e.modules,
          c = e.nodeOps;

      for (t = 0; t < si.length; ++t) {
        for (i[si[t]] = [], n = 0; n < l.length; ++n) {
          o(l[n][si[t]]) && i[si[t]].push(l[n][si[t]]);
        }
      }

      function u(e) {
        var t = c.parentNode(e);
        o(t) && c.removeChild(t, e);
      }

      function d(e, t, n, r, s, l, u) {
        if (o(e.elm) && o(l) && (e = l[u] = Se(e)), e.isRootInsert = !s, !function (e, t, n, r) {
          var s = e.data;

          if (o(s)) {
            var l = o(e.componentInstance) && s.keepAlive;
            if (o(s = s.hook) && o(s = s.init) && s(e, !1), o(e.componentInstance)) return f(e, t), p(n, e.elm, r), a(l) && function (e, t, n, r) {
              for (var a, s = e; s.componentInstance;) {
                if (o(a = (s = s.componentInstance._vnode).data) && o(a = a.transition)) {
                  for (a = 0; a < i.activate.length; ++a) {
                    i.activate[a](ai, s);
                  }

                  t.push(s);
                  break;
                }
              }

              p(n, e.elm, r);
            }(e, t, n, r), !0;
          }
        }(e, t, n, r)) {
          var d = e.data,
              g = e.children,
              v = e.tag;
          o(v) ? (e.elm = e.ns ? c.createElementNS(e.ns, v) : c.createElement(v, e), y(e), h(e, g, t), o(d) && m(e, t), p(n, e.elm, r)) : a(e.isComment) ? (e.elm = c.createComment(e.text), p(n, e.elm, r)) : (e.elm = c.createTextNode(e.text), p(n, e.elm, r));
        }
      }

      function f(e, t) {
        o(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, v(e) ? (m(e, t), y(e)) : (oi(e), t.push(e));
      }

      function p(e, t, n) {
        o(e) && (o(n) ? c.parentNode(n) === e && c.insertBefore(e, t, n) : c.appendChild(e, t));
      }

      function h(e, t, n) {
        if (Array.isArray(t)) for (var i = 0; i < t.length; ++i) {
          d(t[i], n, e.elm, null, !0, t, i);
        } else s(e.text) && c.appendChild(e.elm, c.createTextNode(String(e.text)));
      }

      function v(e) {
        for (; e.componentInstance;) {
          e = e.componentInstance._vnode;
        }

        return o(e.tag);
      }

      function m(e, n) {
        for (var r = 0; r < i.create.length; ++r) {
          i.create[r](ai, e);
        }

        o(t = e.data.hook) && (o(t.create) && t.create(ai, e), o(t.insert) && n.push(e));
      }

      function y(e) {
        var t;
        if (o(t = e.fnScopeId)) c.setStyleScope(e.elm, t);else for (var n = e; n;) {
          o(t = n.context) && o(t = t.$options._scopeId) && c.setStyleScope(e.elm, t), n = n.parent;
        }
        o(t = tn) && t !== e.context && t !== e.fnContext && o(t = t.$options._scopeId) && c.setStyleScope(e.elm, t);
      }

      function E(e, t, n, i, r, o) {
        for (; i <= r; ++i) {
          d(n[i], o, e, t, !1, n, i);
        }
      }

      function b(e) {
        var t,
            n,
            r = e.data;
        if (o(r)) for (o(t = r.hook) && o(t = t.destroy) && t(e), t = 0; t < i.destroy.length; ++t) {
          i.destroy[t](e);
        }
        if (o(t = e.children)) for (n = 0; n < e.children.length; ++n) {
          b(e.children[n]);
        }
      }

      function S(e, t, n) {
        for (; t <= n; ++t) {
          var i = e[t];
          o(i) && (o(i.tag) ? (w(i), b(i)) : u(i.elm));
        }
      }

      function w(e, t) {
        if (o(t) || o(e.data)) {
          var n,
              r = i.remove.length + 1;

          for (o(t) ? t.listeners += r : t = function (e, t) {
            function n() {
              0 == --n.listeners && u(e);
            }

            return n.listeners = t, n;
          }(e.elm, r), o(n = e.componentInstance) && o(n = n._vnode) && o(n.data) && w(n, t), n = 0; n < i.remove.length; ++n) {
            i.remove[n](e, t);
          }

          o(n = e.data.hook) && o(n = n.remove) ? n(e, t) : t();
        } else u(e.elm);
      }

      function _(e, t, n, i) {
        for (var r = n; r < i; r++) {
          var a = t[r];
          if (o(a) && li(e, a)) return r;
        }
      }

      function T(e, t, n, s, l, u) {
        if (e !== t) {
          o(t.elm) && o(s) && (t = s[l] = Se(t));
          var f = t.elm = e.elm;
          if (a(e.isAsyncPlaceholder)) o(t.asyncFactory.resolved) ? C(e.elm, t, n) : t.isAsyncPlaceholder = !0;else if (a(t.isStatic) && a(e.isStatic) && t.key === e.key && (a(t.isCloned) || a(t.isOnce))) t.componentInstance = e.componentInstance;else {
            var p,
                h = t.data;
            o(h) && o(p = h.hook) && o(p = p.prepatch) && p(e, t);
            var g = e.children,
                m = t.children;

            if (o(h) && v(t)) {
              for (p = 0; p < i.update.length; ++p) {
                i.update[p](e, t);
              }

              o(p = h.hook) && o(p = p.update) && p(e, t);
            }

            r(t.text) ? o(g) && o(m) ? g !== m && function (e, t, n, i, a) {
              for (var s, l, u, f = 0, p = 0, h = t.length - 1, g = t[0], v = t[h], m = n.length - 1, y = n[0], b = n[m], w = !a; f <= h && p <= m;) {
                r(g) ? g = t[++f] : r(v) ? v = t[--h] : li(g, y) ? (T(g, y, i, n, p), g = t[++f], y = n[++p]) : li(v, b) ? (T(v, b, i, n, m), v = t[--h], b = n[--m]) : li(g, b) ? (T(g, b, i, n, m), w && c.insertBefore(e, g.elm, c.nextSibling(v.elm)), g = t[++f], b = n[--m]) : li(v, y) ? (T(v, y, i, n, p), w && c.insertBefore(e, v.elm, g.elm), v = t[--h], y = n[++p]) : (r(s) && (s = ci(t, f, h)), r(l = o(y.key) ? s[y.key] : _(y, t, f, h)) ? d(y, i, e, g.elm, !1, n, p) : li(u = t[l], y) ? (T(u, y, i, n, p), t[l] = void 0, w && c.insertBefore(e, u.elm, g.elm)) : d(y, i, e, g.elm, !1, n, p), y = n[++p]);
              }

              f > h ? E(e, r(n[m + 1]) ? null : n[m + 1].elm, n, p, m, i) : p > m && S(t, f, h);
            }(f, g, m, n, u) : o(m) ? (o(e.text) && c.setTextContent(f, ""), E(f, null, m, 0, m.length - 1, n)) : o(g) ? S(g, 0, g.length - 1) : o(e.text) && c.setTextContent(f, "") : e.text !== t.text && c.setTextContent(f, t.text), o(h) && o(p = h.hook) && o(p = p.postpatch) && p(e, t);
          }
        }
      }

      function k(e, t, n) {
        if (a(n) && o(e.parent)) e.parent.data.pendingInsert = t;else for (var i = 0; i < t.length; ++i) {
          t[i].data.hook.insert(t[i]);
        }
      }

      var A = g("attrs,class,staticClass,staticStyle,key");

      function C(e, t, n, i) {
        var r,
            s = t.tag,
            l = t.data,
            c = t.children;
        if (i = i || l && l.pre, t.elm = e, a(t.isComment) && o(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
        if (o(l) && (o(r = l.hook) && o(r = r.init) && r(t, !0), o(r = t.componentInstance))) return f(t, n), !0;

        if (o(s)) {
          if (o(c)) if (e.hasChildNodes()) {
            if (o(r = l) && o(r = r.domProps) && o(r = r.innerHTML)) {
              if (r !== e.innerHTML) return !1;
            } else {
              for (var u = !0, d = e.firstChild, p = 0; p < c.length; p++) {
                if (!d || !C(d, c[p], n, i)) {
                  u = !1;
                  break;
                }

                d = d.nextSibling;
              }

              if (!u || d) return !1;
            }
          } else h(t, c, n);

          if (o(l)) {
            var g = !1;

            for (var v in l) {
              if (!A(v)) {
                g = !0, m(t, n);
                break;
              }
            }

            !g && l["class"] && at(l["class"]);
          }
        } else e.data !== t.text && (e.data = t.text);

        return !0;
      }

      return function (e, t, n, s) {
        if (!r(t)) {
          var l,
              u = !1,
              f = [];
          if (r(e)) u = !0, d(t, f);else {
            var p = o(e.nodeType);
            if (!p && li(e, t)) T(e, t, f, null, null, s);else {
              if (p) {
                if (1 === e.nodeType && e.hasAttribute(j) && (e.removeAttribute(j), n = !0), a(n) && C(e, t, f)) return k(t, f, !0), e;
                l = e, e = new me(c.tagName(l).toLowerCase(), {}, [], void 0, l);
              }

              var h = e.elm,
                  g = c.parentNode(h);
              if (d(t, f, h._leaveCb ? null : g, c.nextSibling(h)), o(t.parent)) for (var m = t.parent, y = v(t); m;) {
                for (var E = 0; E < i.destroy.length; ++E) {
                  i.destroy[E](m);
                }

                if (m.elm = t.elm, y) {
                  for (var w = 0; w < i.create.length; ++w) {
                    i.create[w](ai, m);
                  }

                  var _ = m.data.hook.insert;
                  if (_.merged) for (var A = 1; A < _.fns.length; A++) {
                    _.fns[A]();
                  }
                } else oi(m);

                m = m.parent;
              }
              o(g) ? S([e], 0, 0) : o(e.tag) && b(e);
            }
          }
          return k(t, f, u), t.elm;
        }

        o(e) && b(e);
      };
    }({
      nodeOps: ii,
      modules: [bi, Ni, rr, sr, yr, z ? {
        create: Gr,
        activate: Gr,
        remove: function remove(e, t) {
          !0 !== e.data.show ? Br(e, t) : t();
        }
      } : {}].concat(vi)
    });

    Z && document.addEventListener("selectionchange", function () {
      var e = document.activeElement;
      e && e.vmodel && Zr(e, "input");
    });
    var qr = {
      inserted: function inserted(e, t, n, i) {
        "select" === n.tag ? (i.elm && !i.elm._vOptions ? dt(n, "postpatch", function () {
          qr.componentUpdated(e, t, n);
        }) : Yr(e, t, n.context), e._vOptions = [].map.call(e.options, Qr)) : ("textarea" === n.tag || ti(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Jr), e.addEventListener("compositionend", Xr), e.addEventListener("change", Xr), Z && (e.vmodel = !0)));
      },
      componentUpdated: function componentUpdated(e, t, n) {
        if ("select" === n.tag) {
          Yr(e, t, n.context);
          var i = e._vOptions,
              r = e._vOptions = [].map.call(e.options, Qr);
          r.some(function (e, t) {
            return !L(e, i[t]);
          }) && (e.multiple ? t.value.some(function (e) {
            return Kr(e, r);
          }) : t.value !== t.oldValue && Kr(t.value, r)) && Zr(e, "change");
        }
      }
    };

    function Yr(e, t, n) {
      zr(e, t), (X || ee) && setTimeout(function () {
        zr(e, t);
      }, 0);
    }

    function zr(e, t, n) {
      var i = t.value,
          r = e.multiple;

      if (!r || Array.isArray(i)) {
        for (var o, a, s = 0, l = e.options.length; s < l; s++) {
          if (a = e.options[s], r) o = W(i, Qr(a)) > -1, a.selected !== o && (a.selected = o);else if (L(Qr(a), i)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
        }

        r || (e.selectedIndex = -1);
      }
    }

    function Kr(e, t) {
      return t.every(function (t) {
        return !L(t, e);
      });
    }

    function Qr(e) {
      return "_value" in e ? e._value : e.value;
    }

    function Jr(e) {
      e.target.composing = !0;
    }

    function Xr(e) {
      e.target.composing && (e.target.composing = !1, Zr(e.target, "input"));
    }

    function Zr(e, t) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(t, !0, !0), e.dispatchEvent(n);
    }

    function eo(e) {
      return !e.componentInstance || e.data && e.data.transition ? e : eo(e.componentInstance._vnode);
    }

    var to = {
      model: qr,
      show: {
        bind: function bind(e, t, n) {
          var i = t.value,
              r = (n = eo(n)).data && n.data.transition,
              o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
          i && r ? (n.data.show = !0, Pr(n, function () {
            e.style.display = o;
          })) : e.style.display = i ? o : "none";
        },
        update: function update(e, t, n) {
          var i = t.value;
          !i != !t.oldValue && ((n = eo(n)).data && n.data.transition ? (n.data.show = !0, i ? Pr(n, function () {
            e.style.display = e.__vOriginalDisplay;
          }) : Br(n, function () {
            e.style.display = "none";
          })) : e.style.display = i ? e.__vOriginalDisplay : "none");
        },
        unbind: function unbind(e, t, n, i, r) {
          r || (e.style.display = e.__vOriginalDisplay);
        }
      }
    },
        no = {
      name: String,
      appear: Boolean,
      css: Boolean,
      mode: String,
      type: String,
      enterClass: String,
      leaveClass: String,
      enterToClass: String,
      leaveToClass: String,
      enterActiveClass: String,
      leaveActiveClass: String,
      appearClass: String,
      appearActiveClass: String,
      appearToClass: String,
      duration: [Number, String, Object]
    };

    function io(e) {
      var t = e && e.componentOptions;
      return t && t.Ctor.options["abstract"] ? io(Qt(t.children)) : e;
    }

    function ro(e) {
      var t = {},
          n = e.$options;

      for (var i in n.propsData) {
        t[i] = e[i];
      }

      var r = n._parentListeners;

      for (var o in r) {
        t[_(o)] = r[o];
      }

      return t;
    }

    function oo(e, t) {
      if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
        props: t.componentOptions.propsData
      });
    }

    var ao = function ao(e) {
      return e.tag || Kt(e);
    },
        so = function so(e) {
      return "show" === e.name;
    },
        lo = {
      name: "transition",
      props: no,
      "abstract": !0,
      render: function render(e) {
        var t = this,
            n = this.$slots["default"];

        if (n && (n = n.filter(ao)).length) {
          var i = this.mode,
              r = n[0];
          if (function (e) {
            for (; e = e.parent;) {
              if (e.data.transition) return !0;
            }
          }(this.$vnode)) return r;
          var o = io(r);
          if (!o) return r;
          if (this._leaving) return oo(e, r);
          var a = "__transition-" + this._uid + "-";
          o.key = null == o.key ? o.isComment ? a + "comment" : a + o.tag : s(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key;
          var l = (o.data || (o.data = {})).transition = ro(this),
              c = this._vnode,
              u = io(c);

          if (o.data.directives && o.data.directives.some(so) && (o.data.show = !0), u && u.data && !function (e, t) {
            return t.key === e.key && t.tag === e.tag;
          }(o, u) && !Kt(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
            var d = u.data.transition = x({}, l);
            if ("out-in" === i) return this._leaving = !0, dt(d, "afterLeave", function () {
              t._leaving = !1, t.$forceUpdate();
            }), oo(e, r);

            if ("in-out" === i) {
              if (Kt(o)) return c;

              var f,
                  p = function p() {
                f();
              };

              dt(l, "afterEnter", p), dt(l, "enterCancelled", p), dt(d, "delayLeave", function (e) {
                f = e;
              });
            }
          }

          return r;
        }
      }
    },
        co = x({
      tag: String,
      moveClass: String
    }, no);

    function uo(e) {
      e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
    }

    function fo(e) {
      e.data.newPos = e.elm.getBoundingClientRect();
    }

    function po(e) {
      var t = e.data.pos,
          n = e.data.newPos,
          i = t.left - n.left,
          r = t.top - n.top;

      if (i || r) {
        e.data.moved = !0;
        var o = e.elm.style;
        o.transform = o.WebkitTransform = "translate(" + i + "px," + r + "px)", o.transitionDuration = "0s";
      }
    }

    delete co.mode;
    var ho = {
      Transition: lo,
      TransitionGroup: {
        props: co,
        beforeMount: function beforeMount() {
          var e = this,
              t = this._update;

          this._update = function (n, i) {
            var r = nn(e);
            e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, r(), t.call(e, n, i);
          };
        },
        render: function render(e) {
          for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), i = this.prevChildren = this.children, r = this.$slots["default"] || [], o = this.children = [], a = ro(this), s = 0; s < r.length; s++) {
            var l = r[s];
            l.tag && null != l.key && 0 !== String(l.key).indexOf("__vlist") && (o.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = a);
          }

          if (i) {
            for (var c = [], u = [], d = 0; d < i.length; d++) {
              var f = i[d];
              f.data.transition = a, f.data.pos = f.elm.getBoundingClientRect(), n[f.key] ? c.push(f) : u.push(f);
            }

            this.kept = e(t, null, c), this.removed = u;
          }

          return e(t, null, o);
        },
        updated: function updated() {
          var e = this.prevChildren,
              t = this.moveClass || (this.name || "v") + "-move";
          e.length && this.hasMove(e[0].elm, t) && (e.forEach(uo), e.forEach(fo), e.forEach(po), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
            if (e.data.moved) {
              var n = e.elm,
                  i = n.style;
              Or(n, t), i.transform = i.WebkitTransform = i.transitionDuration = "", n.addEventListener(Nr, n._moveCb = function e(i) {
                i && i.target !== n || i && !/transform$/.test(i.propertyName) || (n.removeEventListener(Nr, e), n._moveCb = null, Lr(n, t));
              });
            }
          }));
        },
        methods: {
          hasMove: function hasMove(e, t) {
            if (!Tr) return !1;
            if (this._hasMove) return this._hasMove;
            var n = e.cloneNode();
            e._transitionClasses && e._transitionClasses.forEach(function (e) {
              Sr(n, e);
            }), br(n, t), n.style.display = "none", this.$el.appendChild(n);
            var i = Rr(n);
            return this.$el.removeChild(n), this._hasMove = i.hasTransform;
          }
        }
      }
    };
    xn.config.mustUseProp = jn, xn.config.isReservedTag = Xn, xn.config.isReservedAttr = $n, xn.config.getTagNamespace = Zn, xn.config.isUnknownElement = function (e) {
      if (!z) return !0;
      if (Xn(e)) return !1;
      if (e = e.toLowerCase(), null != ei[e]) return ei[e];
      var t = document.createElement(e);
      return e.indexOf("-") > -1 ? ei[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : ei[e] = /HTMLUnknownElement/.test(t.toString());
    }, x(xn.options.directives, to), x(xn.options.components, ho), xn.prototype.__patch__ = z ? Vr : I, xn.prototype.$mount = function (e, t) {
      return function (e, t, n) {
        var i;
        return e.$el = t, e.$options.render || (e.$options.render = Ee), sn(e, "beforeMount"), i = function i() {
          e._update(e._render(), n);
        }, new En(e, i, I, {
          before: function before() {
            e._isMounted && !e._isDestroyed && sn(e, "beforeUpdate");
          }
        }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, sn(e, "mounted")), e;
      }(this, e = e && z ? ni(e) : void 0, t);
    }, z && setTimeout(function () {
      B.devtools && se && se.emit("init", xn);
    }, 0);

    var go,
        vo = /\{\{((?:.|\r?\n)+?)\}\}/g,
        mo = /[-.*+?^${}()|[\]\/\\]/g,
        yo = S(function (e) {
      var t = e[0].replace(mo, "\\$&"),
          n = e[1].replace(mo, "\\$&");
      return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
    }),
        Eo = {
      staticKeys: ["staticClass"],
      transformNode: function transformNode(e, t) {
        t.warn;
        var n = Bi(e, "class");
        n && (e.staticClass = JSON.stringify(n));
        var i = Pi(e, "class", !1);
        i && (e.classBinding = i);
      },
      genData: function genData(e) {
        var t = "";
        return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t;
      }
    },
        bo = {
      staticKeys: ["staticStyle"],
      transformNode: function transformNode(e, t) {
        t.warn;
        var n = Bi(e, "style");
        n && (e.staticStyle = JSON.stringify(lr(n)));
        var i = Pi(e, "style", !1);
        i && (e.styleBinding = i);
      },
      genData: function genData(e) {
        var t = "";
        return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t;
      }
    },
        So = g("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
        wo = g("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        _o = g("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
        To = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        ko = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Ao = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + H.source + "]*",
        Co = "((?:" + Ao + "\\:)?" + Ao + ")",
        No = new RegExp("^<" + Co),
        xo = /^\s*(\/?)>/,
        Mo = new RegExp("^<\\/" + Co + "[^>]*>"),
        Io = /^<!DOCTYPE [^>]+>/i,
        Do = /^<!\--/,
        Oo = /^<!\[/,
        Lo = g("script,style,textarea", !0),
        Wo = {},
        $o = {
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&amp;": "&",
      "&#10;": "\n",
      "&#9;": "\t",
      "&#39;": "'"
    },
        Ro = /&(?:lt|gt|quot|amp|#39);/g,
        jo = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
        Fo = g("pre,textarea", !0),
        Po = function Po(e, t) {
      return e && Fo(e) && "\n" === t[0];
    };

    function Bo(e, t) {
      var n = t ? jo : Ro;
      return e.replace(n, function (e) {
        return $o[e];
      });
    }

    var Ho,
        Uo,
        Go,
        Vo,
        qo,
        Yo,
        zo,
        Ko,
        Qo = /^@|^v-on:/,
        Jo = /^v-|^@|^:|^#/,
        Xo = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        Zo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        ea = /^\(|\)$/g,
        ta = /^\[.*\]$/,
        na = /:(.*)$/,
        ia = /^:|^\.|^v-bind:/,
        ra = /\.[^.\]]+(?=[^\]]*$)/g,
        oa = /^v-slot(:|$)|^#/,
        aa = /[\r\n]/,
        sa = /\s+/g,
        la = S(function (e) {
      return (go = go || document.createElement("div")).innerHTML = e, go.textContent;
    }),
        ca = "_empty_";

    function ua(e, t, n) {
      return {
        type: 1,
        tag: e,
        attrsList: t,
        attrsMap: va(t),
        rawAttrsMap: {},
        parent: n,
        children: []
      };
    }

    function da(e, t) {
      var n;
      !function (e) {
        var t = Pi(e, "key");
        t && (e.key = t);
      }(e), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length, function (e) {
        var t = Pi(e, "ref");
        t && (e.ref = t, e.refInFor = function (e) {
          for (var t = e; t;) {
            if (void 0 !== t["for"]) return !0;
            t = t.parent;
          }

          return !1;
        }(e));
      }(e), function (e) {
        var t;
        "template" === e.tag ? (t = Bi(e, "scope"), e.slotScope = t || Bi(e, "slot-scope")) : (t = Bi(e, "slot-scope")) && (e.slotScope = t);
        var n = Pi(e, "slot");

        if (n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || Wi(e, "slot", n, function (e, t) {
          return e.rawAttrsMap[":slot"] || e.rawAttrsMap["v-bind:slot"] || e.rawAttrsMap.slot;
        }(e))), "template" === e.tag) {
          var i = Hi(e, oa);

          if (i) {
            var r = ha(i),
                o = r.name,
                a = r.dynamic;
            e.slotTarget = o, e.slotTargetDynamic = a, e.slotScope = i.value || ca;
          }
        } else {
          var s = Hi(e, oa);

          if (s) {
            var l = e.scopedSlots || (e.scopedSlots = {}),
                c = ha(s),
                u = c.name,
                d = c.dynamic,
                f = l[u] = ua("template", [], e);
            f.slotTarget = u, f.slotTargetDynamic = d, f.children = e.children.filter(function (e) {
              if (!e.slotScope) return e.parent = f, !0;
            }), f.slotScope = s.value || ca, e.children = [], e.plain = !1;
          }
        }
      }(e), "slot" === (n = e).tag && (n.slotName = Pi(n, "name")), function (e) {
        var t;
        (t = Pi(e, "is")) && (e.component = t), null != Bi(e, "inline-template") && (e.inlineTemplate = !0);
      }(e);

      for (var i = 0; i < Go.length; i++) {
        e = Go[i](e, t) || e;
      }

      return function (e) {
        var t,
            n,
            i,
            r,
            o,
            a,
            s,
            l,
            c = e.attrsList;

        for (t = 0, n = c.length; t < n; t++) {
          if (i = r = c[t].name, o = c[t].value, Jo.test(i)) {
            if (e.hasBindings = !0, (a = ga(i.replace(Jo, ""))) && (i = i.replace(ra, "")), ia.test(i)) i = i.replace(ia, ""), o = Mi(o), (l = ta.test(i)) && (i = i.slice(1, -1)), a && (a.prop && !l && "innerHtml" === (i = _(i)) && (i = "innerHTML"), a.camel && !l && (i = _(i)), a.sync && (s = Vi(o, "$event"), l ? Fi(e, '"update:"+(' + i + ")", s, null, !1, 0, c[t], !0) : (Fi(e, "update:" + _(i), s, null, !1, 0, c[t]), A(i) !== _(i) && Fi(e, "update:" + A(i), s, null, !1, 0, c[t])))), a && a.prop || !e.component && zo(e.tag, e.attrsMap.type, i) ? Li(e, i, o, c[t], l) : Wi(e, i, o, c[t], l);else if (Qo.test(i)) i = i.replace(Qo, ""), (l = ta.test(i)) && (i = i.slice(1, -1)), Fi(e, i, o, a, !1, 0, c[t], l);else {
              var u = (i = i.replace(Jo, "")).match(na),
                  d = u && u[1];
              l = !1, d && (i = i.slice(0, -(d.length + 1)), ta.test(d) && (d = d.slice(1, -1), l = !0)), Ri(e, i, r, o, d, l, a, c[t]);
            }
          } else Wi(e, i, JSON.stringify(o), c[t]), !e.component && "muted" === i && zo(e.tag, e.attrsMap.type, i) && Li(e, i, "true", c[t]);
        }
      }(e), e;
    }

    function fa(e) {
      var t;

      if (t = Bi(e, "v-for")) {
        var n = function (e) {
          var t = e.match(Xo);

          if (t) {
            var n = {};
            n["for"] = t[2].trim();
            var i = t[1].trim().replace(ea, ""),
                r = i.match(Zo);
            return r ? (n.alias = i.replace(Zo, "").trim(), n.iterator1 = r[1].trim(), r[2] && (n.iterator2 = r[2].trim())) : n.alias = i, n;
          }
        }(t);

        n && x(e, n);
      }
    }

    function pa(e, t) {
      e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
    }

    function ha(e) {
      var t = e.name.replace(oa, "");
      return t || "#" !== e.name[0] && (t = "default"), ta.test(t) ? {
        name: t.slice(1, -1),
        dynamic: !0
      } : {
        name: '"' + t + '"',
        dynamic: !1
      };
    }

    function ga(e) {
      var t = e.match(ra);

      if (t) {
        var n = {};
        return t.forEach(function (e) {
          n[e.slice(1)] = !0;
        }), n;
      }
    }

    function va(e) {
      for (var t = {}, n = 0, i = e.length; n < i; n++) {
        t[e[n].name] = e[n].value;
      }

      return t;
    }

    var ma = /^xmlns:NS\d+/,
        ya = /^NS\d+:/;

    function Ea(e) {
      return ua(e.tag, e.attrsList.slice(), e.parent);
    }

    var ba,
        Sa,
        wa,
        _a = [Eo, bo, {
      preTransformNode: function preTransformNode(e, t) {
        if ("input" === e.tag) {
          var n,
              i = e.attrsMap;
          if (!i["v-model"]) return;

          if ((i[":type"] || i["v-bind:type"]) && (n = Pi(e, "type")), i.type || n || !i["v-bind"] || (n = "(" + i["v-bind"] + ").type"), n) {
            var r = Bi(e, "v-if", !0),
                o = r ? "&&(" + r + ")" : "",
                a = null != Bi(e, "v-else", !0),
                s = Bi(e, "v-else-if", !0),
                l = Ea(e);
            fa(l), $i(l, "type", "checkbox"), da(l, t), l.processed = !0, l["if"] = "(" + n + ")==='checkbox'" + o, pa(l, {
              exp: l["if"],
              block: l
            });
            var c = Ea(e);
            Bi(c, "v-for", !0), $i(c, "type", "radio"), da(c, t), pa(l, {
              exp: "(" + n + ")==='radio'" + o,
              block: c
            });
            var u = Ea(e);
            return Bi(u, "v-for", !0), $i(u, ":type", n), da(u, t), pa(l, {
              exp: r,
              block: u
            }), a ? l["else"] = !0 : s && (l.elseif = s), l;
          }
        }
      }
    }],
        Ta = {
      expectHTML: !0,
      modules: _a,
      directives: {
        model: function model(e, t, n) {
          var i = t.value,
              r = t.modifiers,
              o = e.tag,
              a = e.attrsMap.type;
          if (e.component) return Gi(e, i, r), !1;
          if ("select" === o) !function (e, t, n) {
            var i = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
            Fi(e, "change", i = i + " " + Vi(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0);
          }(e, i, r);else if ("input" === o && "checkbox" === a) !function (e, t, n) {
            var i = n && n.number,
                r = Pi(e, "value") || "null",
                o = Pi(e, "true-value") || "true",
                a = Pi(e, "false-value") || "false";
            Li(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + r + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), Fi(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (i ? "_n(" + r + ")" : r) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Vi(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Vi(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Vi(t, "$$c") + "}", null, !0);
          }(e, i, r);else if ("input" === o && "radio" === a) !function (e, t, n) {
            var i = n && n.number,
                r = Pi(e, "value") || "null";
            Li(e, "checked", "_q(" + t + "," + (r = i ? "_n(" + r + ")" : r) + ")"), Fi(e, "change", Vi(t, r), null, !0);
          }(e, i, r);else if ("input" === o || "textarea" === o) !function (e, t, n) {
            var i = e.attrsMap.type,
                r = n || {},
                o = r.lazy,
                a = r.number,
                s = r.trim,
                l = !o && "range" !== i,
                c = o ? "change" : "range" === i ? "__r" : "input",
                u = "$event.target.value";
            s && (u = "$event.target.value.trim()"), a && (u = "_n(" + u + ")");
            var d = Vi(t, u);
            l && (d = "if($event.target.composing)return;" + d), Li(e, "value", "(" + t + ")"), Fi(e, c, d, null, !0), (s || a) && Fi(e, "blur", "$forceUpdate()");
          }(e, i, r);else if (!B.isReservedTag(o)) return Gi(e, i, r), !1;
          return !0;
        },
        text: function text(e, t) {
          t.value && Li(e, "textContent", "_s(" + t.value + ")", t);
        },
        html: function html(e, t) {
          t.value && Li(e, "innerHTML", "_s(" + t.value + ")", t);
        }
      },
      isPreTag: function isPreTag(e) {
        return "pre" === e;
      },
      isUnaryTag: So,
      mustUseProp: jn,
      canBeLeftOpenTag: wo,
      isReservedTag: Xn,
      getTagNamespace: Zn,
      staticKeys: (wa = _a, wa.reduce(function (e, t) {
        return e.concat(t.staticKeys || []);
      }, []).join(","))
    },
        ka = S(function (e) {
      return g("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""));
    });

    function Aa(e, t) {
      e && (ba = ka(t.staticKeys || ""), Sa = t.isReservedTag || D, Ca(e), Na(e, !1));
    }

    function Ca(e) {
      if (e["static"] = function (e) {
        return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e["if"] || e["for"] || v(e.tag) || !Sa(e.tag) || function (e) {
          for (; e.parent;) {
            if ("template" !== (e = e.parent).tag) return !1;
            if (e["for"]) return !0;
          }

          return !1;
        }(e) || !Object.keys(e).every(ba))));
      }(e), 1 === e.type) {
        if (!Sa(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;

        for (var t = 0, n = e.children.length; t < n; t++) {
          var i = e.children[t];
          Ca(i), i["static"] || (e["static"] = !1);
        }

        if (e.ifConditions) for (var r = 1, o = e.ifConditions.length; r < o; r++) {
          var a = e.ifConditions[r].block;
          Ca(a), a["static"] || (e["static"] = !1);
        }
      }
    }

    function Na(e, t) {
      if (1 === e.type) {
        if ((e["static"] || e.once) && (e.staticInFor = t), e["static"] && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void (e.staticRoot = !0);
        if (e.staticRoot = !1, e.children) for (var n = 0, i = e.children.length; n < i; n++) {
          Na(e.children[n], t || !!e["for"]);
        }
        if (e.ifConditions) for (var r = 1, o = e.ifConditions.length; r < o; r++) {
          Na(e.ifConditions[r].block, t);
        }
      }
    }

    var xa = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
        Ma = /\([^)]*?\);*$/,
        Ia = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        Da = {
      esc: 27,
      tab: 9,
      enter: 13,
      space: 32,
      up: 38,
      left: 37,
      right: 39,
      down: 40,
      "delete": [8, 46]
    },
        Oa = {
      esc: ["Esc", "Escape"],
      tab: "Tab",
      enter: "Enter",
      space: [" ", "Spacebar"],
      up: ["Up", "ArrowUp"],
      left: ["Left", "ArrowLeft"],
      right: ["Right", "ArrowRight"],
      down: ["Down", "ArrowDown"],
      "delete": ["Backspace", "Delete", "Del"]
    },
        La = function La(e) {
      return "if(" + e + ")return null;";
    },
        Wa = {
      stop: "$event.stopPropagation();",
      prevent: "$event.preventDefault();",
      self: La("$event.target !== $event.currentTarget"),
      ctrl: La("!$event.ctrlKey"),
      shift: La("!$event.shiftKey"),
      alt: La("!$event.altKey"),
      meta: La("!$event.metaKey"),
      left: La("'button' in $event && $event.button !== 0"),
      middle: La("'button' in $event && $event.button !== 1"),
      right: La("'button' in $event && $event.button !== 2")
    };

    function $a(e, t) {
      var n = t ? "nativeOn:" : "on:",
          i = "",
          r = "";

      for (var o in e) {
        var a = Ra(e[o]);
        e[o] && e[o].dynamic ? r += o + "," + a + "," : i += '"' + o + '":' + a + ",";
      }

      return i = "{" + i.slice(0, -1) + "}", r ? n + "_d(" + i + ",[" + r.slice(0, -1) + "])" : n + i;
    }

    function Ra(e) {
      if (!e) return "function(){}";
      if (Array.isArray(e)) return "[" + e.map(function (e) {
        return Ra(e);
      }).join(",") + "]";
      var t = Ia.test(e.value),
          n = xa.test(e.value),
          i = Ia.test(e.value.replace(Ma, ""));

      if (e.modifiers) {
        var r = "",
            o = "",
            a = [];

        for (var s in e.modifiers) {
          if (Wa[s]) o += Wa[s], Da[s] && a.push(s);else if ("exact" === s) {
            var l = e.modifiers;
            o += La(["ctrl", "shift", "alt", "meta"].filter(function (e) {
              return !l[e];
            }).map(function (e) {
              return "$event." + e + "Key";
            }).join("||"));
          } else a.push(s);
        }

        return a.length && (r += function (e) {
          return "if(!$event.type.indexOf('key')&&" + e.map(ja).join("&&") + ")return null;";
        }(a)), o && (r += o), "function($event){" + r + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : i ? "return " + e.value : e.value) + "}";
      }

      return t || n ? e.value : "function($event){" + (i ? "return " + e.value : e.value) + "}";
    }

    function ja(e) {
      var t = parseInt(e, 10);
      if (t) return "$event.keyCode!==" + t;
      var n = Da[e],
          i = Oa[e];
      return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(i) + ")";
    }

    var Fa = {
      on: function on(e, t) {
        e.wrapListeners = function (e) {
          return "_g(" + e + "," + t.value + ")";
        };
      },
      bind: function bind(e, t) {
        e.wrapData = function (n) {
          return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")";
        };
      },
      cloak: I
    },
        Pa = function Pa(e) {
      this.options = e, this.warn = e.warn || Di, this.transforms = Oi(e.modules, "transformCode"), this.dataGenFns = Oi(e.modules, "genData"), this.directives = x(x({}, Fa), e.directives);
      var t = e.isReservedTag || D;
      this.maybeComponent = function (e) {
        return !!e.component || !t(e.tag);
      }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1;
    };

    function Ba(e, t) {
      var n = new Pa(t);
      return {
        render: "with(this){return " + (e ? Ha(e, n) : '_c("div")') + "}",
        staticRenderFns: n.staticRenderFns
      };
    }

    function Ha(e, t) {
      if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Ua(e, t);
      if (e.once && !e.onceProcessed) return Ga(e, t);
      if (e["for"] && !e.forProcessed) return Ya(e, t);
      if (e["if"] && !e.ifProcessed) return Va(e, t);

      if ("template" !== e.tag || e.slotTarget || t.pre) {
        if ("slot" === e.tag) return function (e, t) {
          var n = e.slotName || '"default"',
              i = Ja(e, t),
              r = "_t(" + n + (i ? "," + i : ""),
              o = e.attrs || e.dynamicAttrs ? es((e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
            return {
              name: _(e.name),
              value: e.value,
              dynamic: e.dynamic
            };
          })) : null,
              a = e.attrsMap["v-bind"];
          return !o && !a || i || (r += ",null"), o && (r += "," + o), a && (r += (o ? "" : ",null") + "," + a), r + ")";
        }(e, t);
        var n;
        if (e.component) n = function (e, t, n) {
          var i = t.inlineTemplate ? null : Ja(t, n, !0);
          return "_c(" + e + "," + za(t, n) + (i ? "," + i : "") + ")";
        }(e.component, e, t);else {
          var i;
          (!e.plain || e.pre && t.maybeComponent(e)) && (i = za(e, t));
          var r = e.inlineTemplate ? null : Ja(e, t, !0);
          n = "_c('" + e.tag + "'" + (i ? "," + i : "") + (r ? "," + r : "") + ")";
        }

        for (var o = 0; o < t.transforms.length; o++) {
          n = t.transforms[o](e, n);
        }

        return n;
      }

      return Ja(e, t) || "void 0";
    }

    function Ua(e, t) {
      e.staticProcessed = !0;
      var n = t.pre;
      return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Ha(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")";
    }

    function Ga(e, t) {
      if (e.onceProcessed = !0, e["if"] && !e.ifProcessed) return Va(e, t);

      if (e.staticInFor) {
        for (var n = "", i = e.parent; i;) {
          if (i["for"]) {
            n = i.key;
            break;
          }

          i = i.parent;
        }

        return n ? "_o(" + Ha(e, t) + "," + t.onceId++ + "," + n + ")" : Ha(e, t);
      }

      return Ua(e, t);
    }

    function Va(e, t, n, i) {
      return e.ifProcessed = !0, qa(e.ifConditions.slice(), t, n, i);
    }

    function qa(e, t, n, i) {
      if (!e.length) return i || "_e()";
      var r = e.shift();
      return r.exp ? "(" + r.exp + ")?" + o(r.block) + ":" + qa(e, t, n, i) : "" + o(r.block);

      function o(e) {
        return n ? n(e, t) : e.once ? Ga(e, t) : Ha(e, t);
      }
    }

    function Ya(e, t, n, i) {
      var r = e["for"],
          o = e.alias,
          a = e.iterator1 ? "," + e.iterator1 : "",
          s = e.iterator2 ? "," + e.iterator2 : "";
      return e.forProcessed = !0, (i || "_l") + "((" + r + "),function(" + o + a + s + "){return " + (n || Ha)(e, t) + "})";
    }

    function za(e, t) {
      var n = "{",
          i = function (e, t) {
        var n = e.directives;

        if (n) {
          var i,
              r,
              o,
              a,
              s = "directives:[",
              l = !1;

          for (i = 0, r = n.length; i < r; i++) {
            o = n[i], a = !0;
            var c = t.directives[o.name];
            c && (a = !!c(e, o, t.warn)), a && (l = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ",arg:" + (o.isDynamicArg ? o.arg : '"' + o.arg + '"') : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},");
          }

          return l ? s.slice(0, -1) + "]" : void 0;
        }
      }(e, t);

      i && (n += i + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');

      for (var r = 0; r < t.dataGenFns.length; r++) {
        n += t.dataGenFns[r](e);
      }

      if (e.attrs && (n += "attrs:" + es(e.attrs) + ","), e.props && (n += "domProps:" + es(e.props) + ","), e.events && (n += $a(e.events, !1) + ","), e.nativeEvents && (n += $a(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t, n) {
        var i = e["for"] || Object.keys(t).some(function (e) {
          var n = t[e];
          return n.slotTargetDynamic || n["if"] || n["for"] || Ka(n);
        }),
            r = !!e["if"];
        if (!i) for (var o = e.parent; o;) {
          if (o.slotScope && o.slotScope !== ca || o["for"]) {
            i = !0;
            break;
          }

          o["if"] && (r = !0), o = o.parent;
        }
        var a = Object.keys(t).map(function (e) {
          return Qa(t[e], n);
        }).join(",");
        return "scopedSlots:_u([" + a + "]" + (i ? ",null,true" : "") + (!i && r ? ",null,false," + function (e) {
          for (var t = 5381, n = e.length; n;) {
            t = 33 * t ^ e.charCodeAt(--n);
          }

          return t >>> 0;
        }(a) : "") + ")";
      }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
        var o = function (e, t) {
          var n = e.children[0];

          if (n && 1 === n.type) {
            var i = Ba(n, t.options);
            return "inlineTemplate:{render:function(){" + i.render + "},staticRenderFns:[" + i.staticRenderFns.map(function (e) {
              return "function(){" + e + "}";
            }).join(",") + "]}";
          }
        }(e, t);

        o && (n += o + ",");
      }

      return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + es(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n;
    }

    function Ka(e) {
      return 1 === e.type && ("slot" === e.tag || e.children.some(Ka));
    }

    function Qa(e, t) {
      var n = e.attrsMap["slot-scope"];
      if (e["if"] && !e.ifProcessed && !n) return Va(e, t, Qa, "null");
      if (e["for"] && !e.forProcessed) return Ya(e, t, Qa);
      var i = e.slotScope === ca ? "" : String(e.slotScope),
          r = "function(" + i + "){return " + ("template" === e.tag ? e["if"] && n ? "(" + e["if"] + ")?" + (Ja(e, t) || "undefined") + ":undefined" : Ja(e, t) || "undefined" : Ha(e, t)) + "}",
          o = i ? "" : ",proxy:true";
      return "{key:" + (e.slotTarget || '"default"') + ",fn:" + r + o + "}";
    }

    function Ja(e, t, n, i, r) {
      var o = e.children;

      if (o.length) {
        var a = o[0];

        if (1 === o.length && a["for"] && "template" !== a.tag && "slot" !== a.tag) {
          var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
          return "" + (i || Ha)(a, t) + s;
        }

        var l = n ? function (e, t) {
          for (var n = 0, i = 0; i < e.length; i++) {
            var r = e[i];

            if (1 === r.type) {
              if (Xa(r) || r.ifConditions && r.ifConditions.some(function (e) {
                return Xa(e.block);
              })) {
                n = 2;
                break;
              }

              (t(r) || r.ifConditions && r.ifConditions.some(function (e) {
                return t(e.block);
              })) && (n = 1);
            }
          }

          return n;
        }(o, t.maybeComponent) : 0,
            c = r || Za;
        return "[" + o.map(function (e) {
          return c(e, t);
        }).join(",") + "]" + (l ? "," + l : "");
      }
    }

    function Xa(e) {
      return void 0 !== e["for"] || "template" === e.tag || "slot" === e.tag;
    }

    function Za(e, t) {
      return 1 === e.type ? Ha(e, t) : 3 === e.type && e.isComment ? function (e) {
        return "_e(" + JSON.stringify(e.text) + ")";
      }(e) : "_v(" + (2 === (n = e).type ? n.expression : ts(JSON.stringify(n.text))) + ")";
      var n;
    }

    function es(e) {
      for (var t = "", n = "", i = 0; i < e.length; i++) {
        var r = e[i],
            o = ts(r.value);
        r.dynamic ? n += r.name + "," + o + "," : t += '"' + r.name + '":' + o + ",";
      }

      return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t;
    }

    function ts(e) {
      return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }

    function ns(e, t) {
      try {
        return new Function(e);
      } catch (n) {
        return t.push({
          err: n,
          code: e
        }), I;
      }
    }

    function is(e) {
      var t = Object.create(null);
      return function (n, i, r) {
        (i = x({}, i)).warn, delete i.warn;
        var o = i.delimiters ? String(i.delimiters) + n : n;
        if (t[o]) return t[o];
        var a = e(n, i),
            s = {},
            l = [];
        return s.render = ns(a.render, l), s.staticRenderFns = a.staticRenderFns.map(function (e) {
          return ns(e, l);
        }), t[o] = s;
      };
    }

    new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
    var rs,
        os,
        as = (rs = function rs(e, t) {
      var n = function (e, t) {
        Ho = t.warn || Di, Yo = t.isPreTag || D, zo = t.mustUseProp || D, Ko = t.getTagNamespace || D, t.isReservedTag, Go = Oi(t.modules, "transformNode"), Vo = Oi(t.modules, "preTransformNode"), qo = Oi(t.modules, "postTransformNode"), Uo = t.delimiters;
        var n,
            i,
            r = [],
            o = !1 !== t.preserveWhitespace,
            a = t.whitespace,
            s = !1,
            l = !1;

        function c(e) {
          if (u(e), s || e.processed || (e = da(e, t)), r.length || e === n || n["if"] && (e.elseif || e["else"]) && pa(n, {
            exp: e.elseif,
            block: e
          }), i && !e.forbidden) if (e.elseif || e["else"]) a = e, (c = function (e) {
            for (var t = e.length; t--;) {
              if (1 === e[t].type) return e[t];
              e.pop();
            }
          }(i.children)) && c["if"] && pa(c, {
            exp: a.elseif,
            block: a
          });else {
            if (e.slotScope) {
              var o = e.slotTarget || '"default"';
              (i.scopedSlots || (i.scopedSlots = {}))[o] = e;
            }

            i.children.push(e), e.parent = i;
          }
          var a, c;
          e.children = e.children.filter(function (e) {
            return !e.slotScope;
          }), u(e), e.pre && (s = !1), Yo(e.tag) && (l = !1);

          for (var d = 0; d < qo.length; d++) {
            qo[d](e, t);
          }
        }

        function u(e) {
          if (!l) for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) {
            e.children.pop();
          }
        }

        return function (e, t) {
          for (var n, i, r = [], o = t.expectHTML, a = t.isUnaryTag || D, s = t.canBeLeftOpenTag || D, l = 0; e;) {
            if (n = e, i && Lo(i)) {
              var c = 0,
                  u = i.toLowerCase(),
                  d = Wo[u] || (Wo[u] = new RegExp("([\\s\\S]*?)(</" + u + "[^>]*>)", "i")),
                  f = e.replace(d, function (e, n, i) {
                return c = i.length, Lo(u) || "noscript" === u || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Po(u, n) && (n = n.slice(1)), t.chars && t.chars(n), "";
              });
              l += e.length - f.length, e = f, A(u, l - c, l);
            } else {
              var p = e.indexOf("<");

              if (0 === p) {
                if (Do.test(e)) {
                  var h = e.indexOf("--\x3e");

                  if (h >= 0) {
                    t.shouldKeepComment && t.comment(e.substring(4, h), l, l + h + 3), _(h + 3);
                    continue;
                  }
                }

                if (Oo.test(e)) {
                  var g = e.indexOf("]>");

                  if (g >= 0) {
                    _(g + 2);

                    continue;
                  }
                }

                var v = e.match(Io);

                if (v) {
                  _(v[0].length);

                  continue;
                }

                var m = e.match(Mo);

                if (m) {
                  var y = l;
                  _(m[0].length), A(m[1], y, l);
                  continue;
                }

                var E = T();

                if (E) {
                  k(E), Po(E.tagName, e) && _(1);
                  continue;
                }
              }

              var b = void 0,
                  S = void 0,
                  w = void 0;

              if (p >= 0) {
                for (S = e.slice(p); !(Mo.test(S) || No.test(S) || Do.test(S) || Oo.test(S) || (w = S.indexOf("<", 1)) < 0);) {
                  p += w, S = e.slice(p);
                }

                b = e.substring(0, p);
              }

              p < 0 && (b = e), b && _(b.length), t.chars && b && t.chars(b, l - b.length, l);
            }

            if (e === n) {
              t.chars && t.chars(e);
              break;
            }
          }

          function _(t) {
            l += t, e = e.substring(t);
          }

          function T() {
            var t = e.match(No);

            if (t) {
              var n,
                  i,
                  r = {
                tagName: t[1],
                attrs: [],
                start: l
              };

              for (_(t[0].length); !(n = e.match(xo)) && (i = e.match(ko) || e.match(To));) {
                i.start = l, _(i[0].length), i.end = l, r.attrs.push(i);
              }

              if (n) return r.unarySlash = n[1], _(n[0].length), r.end = l, r;
            }
          }

          function k(e) {
            var n = e.tagName,
                l = e.unarySlash;
            o && ("p" === i && _o(n) && A(i), s(n) && i === n && A(n));

            for (var c = a(n) || !!l, u = e.attrs.length, d = new Array(u), f = 0; f < u; f++) {
              var p = e.attrs[f],
                  h = p[3] || p[4] || p[5] || "",
                  g = "a" === n && "href" === p[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
              d[f] = {
                name: p[1],
                value: Bo(h, g)
              };
            }

            c || (r.push({
              tag: n,
              lowerCasedTag: n.toLowerCase(),
              attrs: d,
              start: e.start,
              end: e.end
            }), i = n), t.start && t.start(n, d, c, e.start, e.end);
          }

          function A(e, n, o) {
            var a, s;
            if (null == n && (n = l), null == o && (o = l), e) for (s = e.toLowerCase(), a = r.length - 1; a >= 0 && r[a].lowerCasedTag !== s; a--) {
              ;
            } else a = 0;

            if (a >= 0) {
              for (var c = r.length - 1; c >= a; c--) {
                t.end && t.end(r[c].tag, n, o);
              }

              r.length = a, i = a && r[a - 1].tag;
            } else "br" === s ? t.start && t.start(e, [], !0, n, o) : "p" === s && (t.start && t.start(e, [], !1, n, o), t.end && t.end(e, n, o));
          }

          A();
        }(e, {
          warn: Ho,
          expectHTML: t.expectHTML,
          isUnaryTag: t.isUnaryTag,
          canBeLeftOpenTag: t.canBeLeftOpenTag,
          shouldDecodeNewlines: t.shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
          shouldKeepComment: t.comments,
          outputSourceRange: t.outputSourceRange,
          start: function start(e, o, a, u, d) {
            var f = i && i.ns || Ko(e);
            X && "svg" === f && (o = function (e) {
              for (var t = [], n = 0; n < e.length; n++) {
                var i = e[n];
                ma.test(i.name) || (i.name = i.name.replace(ya, ""), t.push(i));
              }

              return t;
            }(o));
            var p,
                h = ua(e, o, i);
            f && (h.ns = f), "style" !== (p = h).tag && ("script" !== p.tag || p.attrsMap.type && "text/javascript" !== p.attrsMap.type) || ae() || (h.forbidden = !0);

            for (var g = 0; g < Vo.length; g++) {
              h = Vo[g](h, t) || h;
            }

            s || (function (e) {
              null != Bi(e, "v-pre") && (e.pre = !0);
            }(h), h.pre && (s = !0)), Yo(h.tag) && (l = !0), s ? function (e) {
              var t = e.attrsList,
                  n = t.length;
              if (n) for (var i = e.attrs = new Array(n), r = 0; r < n; r++) {
                i[r] = {
                  name: t[r].name,
                  value: JSON.stringify(t[r].value)
                }, null != t[r].start && (i[r].start = t[r].start, i[r].end = t[r].end);
              } else e.pre || (e.plain = !0);
            }(h) : h.processed || (fa(h), function (e) {
              var t = Bi(e, "v-if");
              if (t) e["if"] = t, pa(e, {
                exp: t,
                block: e
              });else {
                null != Bi(e, "v-else") && (e["else"] = !0);
                var n = Bi(e, "v-else-if");
                n && (e.elseif = n);
              }
            }(h), function (e) {
              null != Bi(e, "v-once") && (e.once = !0);
            }(h)), n || (n = h), a ? c(h) : (i = h, r.push(h));
          },
          end: function end(e, t, n) {
            var o = r[r.length - 1];
            r.length -= 1, i = r[r.length - 1], c(o);
          },
          chars: function chars(e, t, n) {
            if (i && (!X || "textarea" !== i.tag || i.attrsMap.placeholder !== e)) {
              var r,
                  c,
                  u,
                  d = i.children;
              (e = l || e.trim() ? "script" === (r = i).tag || "style" === r.tag ? e : la(e) : d.length ? a ? "condense" === a && aa.test(e) ? "" : " " : o ? " " : "" : "") && (l || "condense" !== a || (e = e.replace(sa, " ")), !s && " " !== e && (c = function (e, t) {
                var n = t ? yo(t) : vo;

                if (n.test(e)) {
                  for (var i, r, o, a = [], s = [], l = n.lastIndex = 0; i = n.exec(e);) {
                    (r = i.index) > l && (s.push(o = e.slice(l, r)), a.push(JSON.stringify(o)));
                    var c = Mi(i[1].trim());
                    a.push("_s(" + c + ")"), s.push({
                      "@binding": c
                    }), l = r + i[0].length;
                  }

                  return l < e.length && (s.push(o = e.slice(l)), a.push(JSON.stringify(o))), {
                    expression: a.join("+"),
                    tokens: s
                  };
                }
              }(e, Uo)) ? u = {
                type: 2,
                expression: c.expression,
                tokens: c.tokens,
                text: e
              } : " " === e && d.length && " " === d[d.length - 1].text || (u = {
                type: 3,
                text: e
              }), u && d.push(u));
            }
          },
          comment: function comment(e, t, n) {
            if (i) {
              var r = {
                type: 3,
                text: e,
                isComment: !0
              };
              i.children.push(r);
            }
          }
        }), n;
      }(e.trim(), t);

      !1 !== t.optimize && Aa(n, t);
      var i = Ba(n, t);
      return {
        ast: n,
        render: i.render,
        staticRenderFns: i.staticRenderFns
      };
    }, function (e) {
      function t(t, n) {
        var i = Object.create(e),
            r = [],
            o = [];
        if (n) for (var a in n.modules && (i.modules = (e.modules || []).concat(n.modules)), n.directives && (i.directives = x(Object.create(e.directives || null), n.directives)), n) {
          "modules" !== a && "directives" !== a && (i[a] = n[a]);
        }

        i.warn = function (e, t, n) {
          (n ? o : r).push(e);
        };

        var s = rs(t.trim(), i);
        return s.errors = r, s.tips = o, s;
      }

      return {
        compile: t,
        compileToFunctions: is(t)
      };
    })(Ta),
        ss = (as.compile, as.compileToFunctions);

    function ls(e) {
      return (os = os || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', os.innerHTML.indexOf("&#10;") > 0;
    }

    var cs = !!z && ls(!1),
        us = !!z && ls(!0),
        ds = S(function (e) {
      var t = ni(e);
      return t && t.innerHTML;
    }),
        fs = xn.prototype.$mount;
    xn.prototype.$mount = function (e, t) {
      if ((e = e && ni(e)) === document.body || e === document.documentElement) return this;
      var n = this.$options;

      if (!n.render) {
        var i = n.template;
        if (i) {
          if ("string" == typeof i) "#" === i.charAt(0) && (i = ds(i));else {
            if (!i.nodeType) return this;
            i = i.innerHTML;
          }
        } else e && (i = function (e) {
          if (e.outerHTML) return e.outerHTML;
          var t = document.createElement("div");
          return t.appendChild(e.cloneNode(!0)), t.innerHTML;
        }(e));

        if (i) {
          var r = ss(i, {
            outputSourceRange: !1,
            shouldDecodeNewlines: cs,
            shouldDecodeNewlinesForHref: us,
            delimiters: n.delimiters,
            comments: n.comments
          }, this),
              o = r.render,
              a = r.staticRenderFns;
          n.render = o, n.staticRenderFns = a;
        }
      }

      return fs.call(this, e, t);
    }, xn.compile = ss;
    var ps = xn;

    var hs = function hs() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("div", {
        staticClass: "root"
      }, [n("script", {
        attrs: {
          type: "application/javascript",
          async: "",
          defer: "",
          crossorigin: "anonymous",
          src: "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1885551381575204"
        }
      }), e._v(" "), n("script", {
        attrs: {
          type: "application/javascript",
          async: "",
          defer: "",
          src: "https://apis.google.com/js/platform.js?onload=gAsyncInit"
        }
      }), e._v(" "), n("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.loginStatus,
          expression: "!loginStatus"
        }]
      }, [n("div", {
        staticClass: "g-signin2",
        attrs: {
          "data-onsuccess": "gLoginCallback",
          "data-theme": "dark"
        }
      }), e._v(" "), n("div", {
        staticClass: "fb-login-button",
        attrs: {
          "data-size": "large",
          "data-button-type": "login_with",
          "data-layout": "default",
          "data-auto-logout-link": "false",
          "data-use-continue-as": "false",
          "data-width": "",
          "data-scope": "email"
        }
      }), e._v(" "), n("br"), e._v(" "), e._t("unlogged")], 2), e._v(" "), e.loginStatus ? n("div", [n("img", {
        staticClass: "statusIcon loggedIcon",
        attrs: {
          src: "/style/ui/logged.png",
          alt: "Logged icon",
          title: "You are currently logged in!"
        }
      }), e._v(" "), n("br"), e._v(" "), e.flagLoggingOut ? n("div", [n("img", {
        staticClass: "loading",
        attrs: {
          src: "/style/ui/spinner.gif",
          alt: "logging out..."
        }
      })]) : n("div", [n("button", {
        on: {
          click: e.logout
        }
      }, [e._v("Logout")]), e._v(" "), n("br"), n("br"), e._v(" "), e._t("logged")], 2)]) : e._e()]);
    };

    hs._withStripped = !0;
    var gs = "state";
    var vs, ms, ys, Es;
    !function (e) {
      e[e.OK = 200] = "OK", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e[e.NOT_MODIFIED = 304] = "NOT_MODIFIED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", e[e.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED";
    }(vs || (vs = {})), function (e) {
      e.LOCATION = "Location";
    }(ms || (ms = {})), function (e) {
      e.AUTOTILE = "autotile", e.CHAR = "charset", e.FACE = "faceset", e.FAVICON = "favicon", e.SKIN = "skin", e.TILE = "tile", e.PICTURE = "picture", e.POINTER = "pointer", e.AUTOTILESET = "autotileset", e.MAP = "map", e.TREE = "tree", e.STRING = "string", e.TILESET = "tileset", e.DIALOG = "dialog", e.GENERIC_MESSAGE = "generic-message", e.CONFIGURATION = "configuration", e.SAVE = "save";
    }(ys || (ys = {})), function (e) {
      function t(e, t) {
        var n = e.memory.state,
            i = Number.parseInt(n);
        return !Number.isNaN(i) && i === t;
      }

      e.always = function (e) {
        return !0;
      }, e.isStateVar0 = function (e) {
        return t(e, 0);
      }, e.isStateVar1 = function (e) {
        return t(e, 1);
      }, e.isStateVar2 = function (e) {
        return t(e, 2);
      }, e.isStateVar3 = function (e) {
        return t(e, 3);
      }, e.isStateVar4 = function (e) {
        return t(e, 4);
      }, e.isStateVar5 = function (e) {
        return t(e, 5);
      }, e.isStateVar6 = function (e) {
        return t(e, 6);
      }, e.isStateVar7 = function (e) {
        return t(e, 7);
      }, e.isStateVar8 = function (e) {
        return t(e, 8);
      }, e.isStateVar9 = function (e) {
        return t(e, 9);
      };
    }(Es || (Es = {}));

    var bs = function bs() {
      _classCallCheck(this, bs);

      this.showGrid = !1, this.showEditorGrid = !1, this.showFPS = !1, this.showCellNumbers = !1, this.showFocus = !1, this.enableSelection = !1, this.showBlocks = !1, this.showOnTops = !1, this.enableAntialiasing = !0, this.fps = 0;
    };

    function Ss() {}

    var ws = function ws(e, t, n, i, r) {};

    var _s;

    !function (e) {
      var t = !1,
          n = [];

      var i = function i() {
        _classCallCheck(this, i);
      };

      i.UP = "ArrowUp", i.DOWN = "ArrowDown", i.LEFT = "ArrowLeft", i.RIGHT = "ArrowRight", i.CTRL = "Control", i.ALT = "Alt", i.ENTER = "Enter", i.SPACEBAR = " ", i.CAPS = "CapsLock", i.SHIFT = "Shift", i.W = "w", i.A = "a", i.D = "d", i.S = "s", i.P = "p", i.E = "e", i.F1 = "F1", i.F2 = "F2", i.F3 = "F3", i.F4 = "F4", i.F5 = "F5", i.F6 = "F6", i.N_0 = "0", i.N_1 = "1", i.N_2 = "2", i.N_3 = "3", i.N_4 = "4", i.N_5 = "5", i.N_6 = "6", i.N_7 = "7", i.N_8 = "8", i.N_9 = "9", e.Keys = i;

      var r = function r() {
        _classCallCheck(this, r);
      };

      function o() {
        var _iterator = _createForOfIteratorHelper(n),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _e2 = _step.value;

            try {
              _e2();
            } catch (e) {
              console.error("Error executing onAction callback:"), console.error(e);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        n = [];
      }

      r.LEFT = 1, r.RIGHT = 2, r.MIDDLE = 4, e.MouseButtons = r, e.init = function (e, n, r, a, s, l, c, u, d, f, p, h, g, v, m) {
        var y,
            E = !1;

        r[i.P] = function (e) {
          E ? (p(), E = !1) : (f(), E = !0);
        };

        var b = !1;

        function S(e) {
          var t = {
            x: e.clientX,
            y: e.clientY
          };
          return n.mapPositionToGrid(t);
        }

        e.addEventListener("click", function (e) {
          var n = S(e);
          t || s(n.i, n.j, n.x, n.y), o();
        }), e.addEventListener("mousemove", function (e) {
          var t = S(e);
          b ? u(t.i, t.j, e.buttons) : d(t.i, t.j);
        }), e.addEventListener("mousedown", function (e) {
          b = !0;
          var t = S(e);
          l(t.i, t.j, t.x, t.y, e.buttons), o();
        }), e.addEventListener("mouseup", function (e) {
          b = !1;
          var t = S(e);
          c(t.i, t.j, e.buttons);
        }), e.addEventListener("mouseout", function (e) {
          b ? u(void 0, void 0, e.buttons) : d(void 0, void 0);
        }), e.addEventListener("contextmenu", function (e) {
          e.preventDefault();
          var t = S(e);
          g(t.i, t.j);
        }), e.addEventListener("dblclick", function (e) {
          var t = S(e);
          v(t.i, t.j);
        }), e.addEventListener("wheel", function (e) {
          var t = S(e);
          m(t.i, t.j);
        }, {
          passive: !0
        }), e.addEventListener("touchstart", function (e) {
          var t = S(e);
          l(t.i, t.j, t.x, t.y), o();
        }, {
          passive: !0
        }), e.addEventListener("touchend", function (e) {
          var t = S(e);
          u(void 0, void 0), c(t.i, t.j);
        }, {
          passive: !0
        }), e.addEventListener("touchcancel", function (e) {
          var t = S(e);
          u(void 0, void 0), c(t.i, t.j);
        }, {
          passive: !0
        }), e.addEventListener("touchmove", function (e) {
          var t = S(e);
          u(t.i, t.j);
        }, {
          passive: !0
        }), document.addEventListener("keydown", function (e) {
          var t = r[e.key];
          void 0 !== t && t(e), y = e.key;
        }), document.addEventListener("keyup", function (e) {
          e.key === y && a();
        }), document.addEventListener("visibilitychange", function () {
          document.hidden ? (f(), E = !0) : (p(), E = !1);
        }), window.addEventListener("resize", function (e) {
          h();
        }), document.addEventListener("orientationchange", function () {
          h();
        });
      }, e.escapeText = function (e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      }, e.addActionCallback = function (e) {
        n.push(e);
      }, e.executeActionCallback = o, e.disableActionEvents = function () {
        t = !0;
      }, e.enableActionEvents = function () {
        t = !1;
      };
    }(_s || (_s = {}));
    var Ts = [];

    function ks(e, t) {
      var n;

      switch (e) {
        case 0:
          n = _s.Keys.N_0;
          break;

        case 1:
          n = _s.Keys.N_1;
          break;

        case 2:
          n = _s.Keys.N_2;
          break;

        case 3:
          n = _s.Keys.N_3;
          break;

        case 4:
          n = _s.Keys.N_4;
          break;

        case 5:
          n = _s.Keys.N_5;
          break;

        case 6:
          n = _s.Keys.N_6;
          break;

        case 7:
          n = _s.Keys.N_7;
          break;

        case 8:
          n = _s.Keys.N_8;
          break;

        case 9:
          n = _s.Keys.N_9;
          break;

        default:
          return void console.error("Unexpected numericKey: " + e);
      }

      var i = function i(e) {
        e.key === n && (t(e), function () {
          var _iterator2 = _createForOfIteratorHelper(Ts),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _e3 = _step2.value;
              document.removeEventListener("keydown", _e3);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          Ts = [];
        }());
      };

      Ts.push(i), document.addEventListener("keydown", i);
    }

    var As = function As() {
      _classCallCheck(this, As);
    };

    As.NONE = 0, As.UP = Math.pow(2, 0), As.DOWN = Math.pow(2, 1), As.LEFT = Math.pow(2, 2), As.RIGHT = Math.pow(2, 3), As.ALL = As.UP + As.DOWN + As.LEFT + As.RIGHT;

    var Cs = function Cs() {
      _classCallCheck(this, Cs);
    };

    Cs.NONE = 0, Cs.N = Math.pow(2, 0), Cs.S = Math.pow(2, 1), Cs.W = Math.pow(2, 2), Cs.E = Math.pow(2, 3), Cs.NE = Math.pow(2, 4), Cs.SE = Math.pow(2, 5), Cs.SW = Math.pow(2, 6), Cs.NW = Math.pow(2, 7), Cs.ALL = Math.pow(2, 8) - 1;
    var Ns = [Cs.N, Cs.NE, Cs.E, Cs.SE, Cs.S, Cs.SW, Cs.W, Cs.NW];
    var xs, Ms, Is, Ds;
    !function (e) {
      e.IT = "it", e.EN = "en";
    }(xs || (xs = {})), function (e) {
      e[e.BASIC = 0] = "BASIC", e[e.D_STAR_LITE = 1] = "D_STAR_LITE";
    }(Ms || (Ms = {})), function (e) {
      function t(e) {
        return null == e || void 0 === e || ("string" == typeof e ? "" === e : "object" == _typeof(e) && "size" in e ? 0 === e.size : e.constructor === Array || e.constructor === String ? 0 === e.length : e.constructor === Object && 0 === Object.keys(e).length);
      }

      e.isEmpty = t, e.unitTestIsEmpty = function () {
        var e = new Map();
        console.assert(t(e), "empty ES6 map"), e.set("a", "a"), console.assert(!t(e), "not empty ES6 map"), e["delete"]("a"), console.assert(t(e), "empty ES6 map (deleted key)"), e = [], console.assert(t(e), "empty array"), e[0] = 1, console.assert(!t(e), "not empty array"), e = new Array(), console.assert(t(e), "empty Array"), e = e.push("1"), console.assert(!t(e), "not empty Array"), e = "", console.assert(t(e), "empty string"), e = "a", console.assert(!t(e), "not empty string"), e = new Object(), console.assert(t(e), "empty Object"), e.a = 1, console.assert(!t(e), "not empty Object"), delete e.a, console.assert(t(e), "empty Object (deleted property)"), e = {}, console.assert(t(e), "empty {}"), e.a = 1, console.assert(!t(e), "not empty {}"), delete e.a, console.assert(t(e), "empty {} (deleted property)"), console.assert(!t(!0), "not empty boolean (true)"), console.assert(!t(!1), "not empty boolean (false)"), console.assert(!t(0), "not empty number"), console.assert(!t(0), "not empty float");
      }, e.mergeMaps = function (e, t) {
        var n = new Map();

        function i(e, t, i) {
          n.set(t, e);
        }

        return t.forEach(i), e.forEach(i), n;
      }, e.isNumeric = function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      }, e.convertStringToEnum = function (e, t) {
        return e[Object.keys(e).filter(function (n) {
          return e[n] === t;
        })[0]];
      };
      var n = "abcdefghijklmnopqrstuvwxyz0123456789";
      e.getRandomString = function (e) {
        return void 0 === e && (e = 8), _toConsumableArray(Array(e)).map(function (e) {
          return n[~~(Math.random() * n.length)];
        }).join("");
      }, e.now = function () {
        return new Date().getTime();
      };
    }(Is || (Is = {})), function (e) {
      function t(e, t) {
        return e.i + e.j * t;
      }

      function n(e, t) {
        var n = {
          i: e.i,
          j: e.j
        };

        switch (t) {
          case 0:
            n.j -= 1;
            break;

          case 2:
            n.j += 1;
            break;

          case 3:
            n.i -= 1;
            break;

          case 1:
            n.i += 1;
            break;

          case 4:
            break;

          default:
            console.error("Unexpected case: " + t);
        }

        return n;
      }

      function i(e, t) {
        return (e & t) === t && t !== As.NONE;
      }

      function r(e, t) {
        var n = As.NONE;

        switch (t) {
          case 0:
            n = As.UP;
            break;

          case 2:
            n = As.DOWN;
            break;

          case 3:
            n = As.LEFT;
            break;

          case 1:
            n = As.RIGHT;
        }

        return i(e, n);
      }

      function o(e, t, n, i) {
        var r = As.NONE;
        return n && void 0 !== e.blocks && t < e.blocks.length && (r |= e.blocks[t]), i && void 0 !== e.dynamicBlocks && t < e.dynamicBlocks.length && (r |= e.dynamicBlocks[t]), r;
      }

      function a(e) {
        switch (e) {
          case 0:
            return 2;

          case 2:
            return 0;

          case 3:
            return 1;

          case 1:
            return 3;

          default:
            return 4;
        }
      }

      function s(e) {
        switch (e) {
          case 0:
            return "˄ up";

          case 2:
            return "˅ down";

          case 3:
            return "˂ left";

          case 1:
            return "˃ right";

          default:
            return "  none";
        }
      }

      e.mergeRectangles = function (e, t) {
        if (void 0 === e) return t;
        if (void 0 === t) return e;
        var n, i, r, o;
        return n = e.x < t.x ? e.x : t.x, i = e.y < t.y ? e.y : t.y, o = e.x + e.w > t.x + t.w ? e.x + e.w - n : t.x + t.w - n, r = e.y + e.h > t.y + t.h ? e.y + e.h - i : t.y + t.h - i, {
          x: n,
          y: i,
          w: o,
          h: r
        };
      }, e.resetSelect = function (e) {
        for (var _t2 = e.length - 1; _t2 >= 0; _t2--) {
          e.remove(_t2);
        }
      }, e.gidToCell = function (e, t) {
        return {
          i: e % t,
          j: Math.floor(e / t)
        };
      }, e.cellToGid = t, e.getDirectionTarget = n, e.isBlockDirectionBlocked = i, e.isDirectionEnumBlocked = r, e.isMovementBlocked = function (i, o, s, l) {
        var c = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
        var u;
        u = t({
          i: o,
          j: s
        }, i.width);
        var d,
            f = e.getMapStaticBlock(i, u),
            p = t(n({
          i: o,
          j: s
        }, l), i.width);
        return d = c ? e.getMapStaticBlock(i, p) : e.getMapBlocks(i, p), r(f, l) || r(d, a(l));
      }, e.getBlock = function (e, t, n, i) {
        var r = 0;
        return r |= e ? As.UP : 0, r |= t ? As.DOWN : 0, r |= n ? As.LEFT : 0, r |= i ? As.RIGHT : 0, r;
      }, e.getMapBlocks = function (e, t) {
        return o(e, t, !0, !0);
      }, e.getMapStaticBlock = function (e, t) {
        return o(e, t, !0, !1);
      }, e.getMapDynamicBlock = function (e, t) {
        return o(e, t, !1, !0);
      }, e.isDirectionsOpposed = function (e, t) {
        return a(e) === t;
      }, e.getOpposedDirections = a, e.getNextAbsoluteDirection = function (e, t) {
        if (0 === t || 4 === e) return e;
        var n = [0, 1, 2, 3],
            i = 0;

        for (var _i2 = 0, _n3 = n; _i2 < _n3.length; _i2++) {
          var _t3 = _n3[_i2];
          if (e === _t3) break;
          i++;
        }

        switch (t) {
          case 3:
            i--;
            break;

          case 1:
            i++;
            break;

          case 2:
            i += 2;
        }

        return i < 0 ? i = n.length - 1 : i >= n.length && (i -= n.length), n[i];
      }, e.getDirection = function (e, t) {
        var n,
            i = e.i - t.i,
            r = e.j - t.j;
        return n = Math.abs(i) > Math.abs(r) ? i > 0 ? 1 : 3 : r > 0 ? 2 : r < 0 ? 0 : 4, n;
      }, e.moveToDirection = function (e, t) {
        var n = {
          i: e.i,
          j: e.j
        };

        switch (t) {
          case 0:
            n.j -= 1;
            break;

          case 2:
            n.j += 1;
            break;

          case 3:
            n.i -= 1;
            break;

          case 1:
            n.i += 1;
        }

        return n;
      }, e.getCellDistance = function (e, t) {
        return Math.abs(e.i - t.i) + Math.abs(e.j - t.j);
      }, e.getPointDistance = function (e, t) {
        return Math.abs(e.x - t.x) + Math.abs(e.y - t.y);
      }, e.getRandomInteger = function (e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e;
      }, e.normalizeZIndex = function (e) {
        return !Is.isEmpty(e) && !Number.isNaN(e) && e >= 0 && e <= 4 ? e : 0;
      }, e.getDirectionName = s, e.getBlockName = function (e) {
        var t = "free";
        return i(e, As.UP) && (t = s(0)), i(e, As.DOWN) && (t += s(2)), i(e, As.LEFT) && (t += s(3)), i(e, As.RIGHT) && (t += s(1)), t;
      }, e.getSelectionAreaName = function (e) {
        switch (e) {
          case 0:
            return "⬒ up";

          case 1:
            return "⬓ down";

          case 2:
            return "◧ left";

          case 3:
            return "◨ right";

          case 4:
            return "▣ center";

          default:
            return "  none";
        }
      }, e.getTargetGID = function (e, t, n) {
        switch (t) {
          case Cs.W:
          case Cs.SW:
          case Cs.NW:
            if (e % n.w == 0) return;
            break;

          case Cs.E:
          case Cs.NE:
          case Cs.SE:
            if (e % n.w == n.w - 1) return;
        }

        var i = e;

        switch (t) {
          case Cs.N:
            i -= n.w;
            break;

          case Cs.S:
            i += n.w;
            break;

          case Cs.W:
            i -= 1;
            break;

          case Cs.E:
            i += 1;
            break;

          case Cs.NE:
            i -= n.w - 1;
            break;

          case Cs.SE:
            i += n.w + 1;
            break;

          case Cs.SW:
            i += n.w - 1;
            break;

          case Cs.NW:
            i -= n.w + 1;
            break;

          default:
            console.error("Unexpected case: " + t);
        }

        return i >= 0 && i < n.w * n.h ? i : void 0;
      };
    }(Ds || (Ds = {}));
    var Os = {
      maps: {
        start: {
          map: "0",
          i: 2,
          j: 4
        }
      },
      hero: {
        name: "Fart",
        charaset: "fart.png"
      },
      ui: {
        lang: xs.EN,
        skin: "ld3-webskin1.png",
        enableCLI: !0
      },
      services: {
        facebook: {
          url: "https://graph.facebook.com",
          applicationId: "1885551381575204"
        },
        google: {
          oauth: {
            url: "https://www.googleapis.com",
            applicationId: "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com"
          },
          recaptcha: {
            url: "www.google.com"
          }
        },
        github: {
          url: "api.github.com"
        }
      }
    };
    var Ls, Ws, $s, Rs, js, Fs;
    !function (e) {
      function t() {
        return {
          id: Is.getRandomString(),
          height: 20,
          width: 25,
          layers: [{
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            type: "tilelayer",
            x: 0,
            y: 0
          }, {
            type: "tilelayer",
            x: 0,
            y: 0
          }, {
            type: "tilelayer",
            x: 0,
            y: 0
          }, {
            type: "tilelayer",
            x: 0,
            y: 0
          }],
          tileset: {
            image: "002-Woods01.png",
            blocks: [],
            onTop: [],
            maxGID: 199
          },
          events: []
        };
      }

      function n() {
        return {
          lang: Os.ui.lang,
          skin: Os.ui.skin,
          flagAntialiasing: !1,
          flagDouble: !1,
          flagNatural: !1
        };
      }

      function i() {
        return {
          id: -1,
          name: "NPC",
          i: 0,
          j: 0,
          states: [{
            direction: 2,
            condition: "always",
            trigger: 0
          }],
          memory: {},
          script: "",
          currentState: 0
        };
      }

      function r() {
        var e = {
          id: -1,
          name: "NPC",
          i: 0,
          j: 0,
          states: [{
            direction: 2,
            condition: "always",
            trigger: 0
          }],
          memory: {},
          script: "",
          currentState: 0
        };
        return e.name = Os.hero.name, e.i = Os.maps.start.i, e.j = Os.maps.start.j, e.states = [], e.states[0] = {
          direction: 2,
          condition: "always",
          trigger: 0
        }, e.states[0].charaset = Os.hero.charaset, e;
      }

      function o() {
        return {
          direction: 2,
          condition: "always",
          trigger: 0
        };
      }

      e.DEFAULT_ID = -1, e.DEFAULT_ID_STR = e.DEFAULT_ID + "", e.FIRST_ELEM_ID = 0, e.DEFAULT_STR = "", e.getDialogNode = function (t) {
        return {
          id: void 0 !== t ? t : e.DEFAULT_ID
        };
      }, e.getDialogEdge = function (t) {
        return {
          id: void 0 !== t ? t : e.DEFAULT_ID
        };
      }, e.getEmptyMap = function () {
        var e = t();

        var _iterator3 = _createForOfIteratorHelper(e.layers),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _t4 = _step3.value;
            _t4.data = void 0;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return e;
      }, e.getMap = t, e.getTileset = function () {
        return {
          image: "002-Woods01.png",
          blocks: [],
          onTop: [],
          maxGID: 199
        };
      }, e.getAutoTileset = function () {
        return {
          image: "001-G_Water01.png",
          blocked: !1,
          selected: !1,
          frequency: 3
        };
      }, e.getSave = function () {
        return {
          id: e.FIRST_ELEM_ID,
          timestamp: Is.now(),
          currentMap: Os.maps.start.map,
          hero: r(),
          maps: [],
          config: n(),
          variables: {}
        };
      }, e.getConfig = n, e.getEvent = i, e.getHero = r, e.getEventState = o, e.getString = function () {
        return "";
      }, e.getTree = function () {
        return {};
      }, e.getCharacter = function () {
        return {
          direction: 2
        };
      };
    }(Ls || (Ls = {})), function (e) {
      var t = "dialogContainer";
      var n;

      function i() {
        var e = document.getElementById(t);
        null !== e ? (e.classList.replace("hiddenFadeOut", "visibleFadeIn"), setTimeout(function () {
          e.style.display = "none";
        }, 200), _s.disableActionEvents()) : console.error("Element not foud: dialogContainer");
      }

      function r() {
        _s.enableActionEvents();

        var e = document.getElementById(t);
        null !== e ? (e.classList.remove("visibleFadeIn"), e.classList.add("hiddenFadeOut"), setTimeout(function () {
          e.style.display = "none";
        }, 200)) : console.error("Element not foud: dialogContainer");
      }

      function o(e) {
        return new Promise(function (t) {
          void 0 !== e ? setTimeout(function () {
            t();
          }, e) : setTimeout(function () {
            var e = document.getElementById("dialogFrame");
            if (null === e) return void console.error("element undefined: dialogFrame");

            var n = function n() {
              t(), e.onclick = null, e.style.removeProperty("cursor");
            };

            _s.addActionCallback(n), e.onclick = n, e.style.cursor = "pointer";
          }, 500);
        });
      }

      function a(e, t, n) {
        il.load(e, ys.STRING, function (t) {
          Is.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading string: " + e), n()) : n(t);
        }, t);
      }

      function s(e, t, n) {
        e !== Ls.DEFAULT_ID ? il.load(e + "", ys.DIALOG, function (t) {
          if (Is.isEmpty(t) || "string" != typeof t) console.error("Error while loading dialog: " + e), n(Ls.getDialogNode(Ls.FIRST_ELEM_ID));else {
            var _e4 = JSON.parse(t),
                _i3 = function (e, t, n) {
              var i = new Map(),
                  r = new Map();

              var _iterator4 = _createForOfIteratorHelper(t),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _e5 = _step4.value;
                  i.set(_e5.id, _e5);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              var _iterator5 = _createForOfIteratorHelper(n),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _e6 = _step5.value;
                  r.set(_e6.id, _e6);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              if (i.has(e)) {
                var _t5 = i.get(e);

                return l(_t5, i, r), _t5;
              }

              return console.error("Cannot reconstruct dialog tree from node: " + e), Ls.getDialogNode();
            }(Ls.FIRST_ELEM_ID, _e4.nodes, _e4.edges);

            n(_i3);
          }
        }, t) : n(Ls.getDialogNode(Ls.FIRST_ELEM_ID));
      }

      function l(e, t, n) {
        if (e.referenced = !0, !Is.isEmpty(e.edgeIds)) {
          var _iterator6 = _createForOfIteratorHelper(e.edgeIds),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _i4 = _step6.value;

              if (n.has(_i4)) {
                var _r2 = n.get(_i4);

                if (void 0 === e.edges && (e.edges = []), e.edges.push(_r2), void 0 !== _r2.nodeId) if (t.has(_r2.nodeId)) {
                  var _e7 = t.get(_r2.nodeId);

                  _r2.node = _e7, _e7.referenced && (_r2.nodeReferenced = !0), l(_e7, t, n);
                } else console.error("Cannot reconstruct dialog tree from edge: " + _r2.id + ", node not found: " + _r2.nodeId);
              } else console.error("Cannot reconstruct dialog tree from node: " + e.id + ", edge not found: " + _i4);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      }

      function c(e, t, n, i) {
        if (t.has(e.id)) return;
        t.set(e.id, e);
        var r = e.edges;

        if (!Is.isEmpty(r)) {
          i && delete e.edges;

          var _iterator7 = _createForOfIteratorHelper(r),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _e8 = _step7.value;
              if (n.has(_e8.id)) continue;
              n.set(_e8.id, _e8);
              var _r3 = _e8.node;
              void 0 !== _r3 && (i && delete _e8.node, c(_r3, t, n));
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      }

      function u(e, t, a, s, l, c, f) {
        var p = document.getElementById("dialogFrame"),
            h = document.getElementById("dialogFace"),
            g = document.getElementById("dialogName"),
            v = document.getElementById("dialogArea");
        if (null === h) return void console.error("Element not foud: dialogFace");
        if (null === g || null === g.firstChild) return void console.error("Element not foud: dialogName");
        if (null === v) return void console.error("Element not foud: dialogArea");
        if (null === p) return void console.error("Element not foud: dialogFrame");
        i(), Is.isEmpty(l) ? console.error("skin is not defined!") : p.style.borderImageSource = "url('/assets/skin/" + l + "')";
        var m = s.face;
        void 0 !== m ? (h.style.display = "block", h.style.backgroundImage = "url('/assets/faceset/" + m + "')") : h.style.display = "none", void 0 !== s.name ? (g.firstChild.textContent = s.name, g.style.visibility = "block") : g.style.visibility = "hidden";

        var y = function (e) {
          var t;
          return void 0 !== e.genericMessage && (t = function (e) {
            var t = n.get(e);

            if (void 0 !== t && !Is.isEmpty(t.values)) {
              var _e9, _n4;

              if (_e9 = void 0 === t.condition ? t.values : t.values.filter(function (e) {
                return d(t.condition, e.conditionParams);
              }), 0 === _e9.length) return;
              return _n4 = 1 === _e9.length ? 0 : Ds.getRandomInteger(0, _e9.length - 1), _e9[_n4].message;
            }
          }(e.genericMessage)), void 0 === t && (t = e.message), void 0 !== t && (t = t), t;
        }(s);

        v.innerText = void 0 !== y ? y : "";
        var E = document.getElementById("dialogEdgeArea");
        if (null === E) return void console.error("Element not foud: dialogEdgeArea");

        for (; E.firstChild;) {
          E.removeChild(E.firstChild);
        }

        var b = [];

        if (void 0 !== s.edges) {
          var _iterator8 = _createForOfIteratorHelper(s.edges),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _e10 = _step8.value;
              d(_e10.condition) && b.push(_e10);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }

        var S = function S(n) {
          var i;

          if (void 0 !== n.action) {
            var _r4,
                _o3 = document.getElementById("userInput");

            if (null === _o3) return void console.warn("Input required");
            _r4 = _o3.value, _r4 = _r4.trim(), _r4 = _s.escapeText(_r4), i = c(e, n, t, a, _r4);
          }

          void 0 !== n.node ? void 0 === i ? u(e, t, a, n.node, l, c, f) : i.then(function () {
            u(e, t, a, n.node, l, c, f);
          }) : o(0).then(r);
        };

        if (0 === b.length) o(s.closingTimeout).then(r);else if (1 === b.length && void 0 === b[0].message) {
          if (void 0 === b[0].inputType) o(s.closingTimeout).then(function () {
            S(b[0]);
          });else {
            var _e11 = document.getElementById("inputArea"),
                _t6 = document.getElementById("input");

            if (null === _e11 || null === _t6) return void console.error("Cannot find input elements");

            switch (b[0].inputType) {
              case 1:
                _t6.type = "number";
                break;

              case 0:
                _t6.type = "text";
                break;

              default:
                console.error("Unexpected DialogInputType for edge: " + b[0].id);
            }

            _e11.style.display = "block";
          }
        } else {
          var _e12 = 1;

          var _iterator9 = _createForOfIteratorHelper(b),
              _step9;

          try {
            var _loop = function _loop() {
              var t = _step9.value;
              var n = document.createElement("div");
              n.classList.add("l4wDialogEdge"), E.appendChild(n), void 0 !== t.message && (n.innerText = t.message);

              var i = function i(e) {
                n.classList.add("l4wDialogEdgeSelected"), setTimeout(function () {
                  S(t);
                }, 100);
              };

              n.onclick = i, ks(_e12, i), _e12++;
            };

            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
      }

      function d(e, t) {
        return void 0 === e || (e in Es ? Es[e](t) : (console.error('Condition not found: "' + e + '", on event.'), !1));
      }

      function f(e, t, n, i, r) {
        if (!i.has(e.id)) {
          if (!n && e.id === t) return e;
          i.set(e.id, e);
          var _o4 = e.edges;

          if (!Is.isEmpty(_o4)) {
            var _iterator10 = _createForOfIteratorHelper(_o4),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var _e13 = _step10.value;

                if (!r.has(_e13.id)) {
                  if (n && _e13.id === t) return _e13;
                  r.set(_e13.id, _e13);
                  var _o5 = _e13.node;

                  if (void 0 !== _o5) {
                    var _e14 = f(_o5, t, n, i, r);

                    if (void 0 !== _e14) return _e14;
                  }
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }
        }
      }

      e.openDialog = i, e.closeDialog = r, e.loadString = a, e.saveString = function (e, t, n) {
        var i = JSON.stringify(t);
        il.save(e + "", i, ys.STRING, function (t, i) {
          if (void 0 !== t) {
            var _e15 = parseInt(t);

            if (isNaN(_e15)) return console.error("Error while saving string"), void n();
          }

          n(e);
        });
      }, e.loadDialog = s, e.saveDialog = function (e, t, n) {
        var i = new Map(),
            r = new Map();
        c(t, i, r, !0);
        var o = {
          nodes: Array.from(i.values()),
          edges: Array.from(r.values())
        };
        il.save(e + "", JSON.stringify(o), ys.DIALOG, function (t, i) {
          i ? (Is.isNumeric(t) && (e = parseInt(t)), n(e)) : n();
        });
      }, e.deconstructDialogTree = c, e.loadGenericMessages = function (e, t, i) {
        isNaN(e) ? i(!1) : il.load(e + "", ys.GENERIC_MESSAGE, function (t) {
          Is.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading dialog: " + e), i(!1)) : (n = JSON.parse(t), i(!0));
        });
      }, e.showComplexDialog = function (e, t, n, i, r, o, a) {
        s(i, r.lang, function (s) {
          void 0 === s ? console.error("Error while loading dialog: " + i) : u(e, t, n, s, r.skin, o, a);
        });
      }, e.showSimpleDialog = function (e, t, n, i, r, o) {
        a(i, r.lang, function (i) {
          var a = Ls.getDialogNode();
          a.message = i, u(e, t, n, a, r.skin, ws, o);
        });
      }, e.search = function (e, t, n) {
        return f(e, t, void 0 !== n && n, new Map(), new Map());
      };
    }(Ws || (Ws = {})), function (e) {
      e.DOUBLE_PI = 2 * Math.PI;

      var t = function t() {
        _classCallCheck(this, t);
      };

      t.YELLOW = "yellow", t.RED = "red", t.WHITE = "white", t.GREY = "grey", t.BLACK = "black", t.AQUA = "aqua", t.DARKBLUE = "darkblue", t.GREEN = "green", t.LIME = "lime", e.Color = t;

      var n = function n() {
        _classCallCheck(this, n);
      };

      n.GET = "GET", n.POST = "POST", e.RequestType = n;

      var i = function i() {
        _classCallCheck(this, i);
      };

      var r, o, a;
      i.JSON = "application/json", e.MimeType = i, e.MEDIUM_MSPEED = .128, e.VERY_LOW_MSPEED = e.MEDIUM_MSPEED * (1 - .9), e.LOW_MSPEED = .5 * e.MEDIUM_MSPEED, e.MEDIUM_LOW_MSPEED = .8 * e.MEDIUM_MSPEED, e.MEDIUM_HIGH_MSPEED = 1.2 * e.MEDIUM_MSPEED, e.HIGH_MSPEED = 1.5 * e.MEDIUM_MSPEED, e.VERY_HIGH_MSPEED = 1.9 * e.MEDIUM_MSPEED, e.MEDIUM_FREQUENCY = .006, e.VERY_LOW_FREQUENCY = e.MEDIUM_FREQUENCY * (1 - .9), e.LOW_FREQUENCY = .5 * e.MEDIUM_FREQUENCY, e.MEDIUM_LOW_FREQUENCY = .8 * e.MEDIUM_FREQUENCY, e.MEDIUM_HIGH_FREQUENCY = 1.2 * e.MEDIUM_FREQUENCY, e.HIGH_FREQUENCY = 1.5 * e.MEDIUM_FREQUENCY, e.VERY_HIGH_FREQUENCY = 1.9 * e.MEDIUM_FREQUENCY, function (e) {
        e[e.LOW = 0] = "LOW", e[e.MID = 1] = "MID", e[e.TOP = 2] = "TOP", e[e.EVENTS = 3] = "EVENTS";
      }(r = e.MapLayer || (e.MapLayer = {})), function (e) {
        e[e.APPLY = 0] = "APPLY", e[e.ERASE = 1] = "ERASE", e[e.EVENTS = 2] = "EVENTS";
      }(o = e.EditMode || (e.EditMode = {})), function (e) {
        e[e.BLOCKS = 0] = "BLOCKS", e[e.ONTOP = 1] = "ONTOP";
      }(a = e.TileEditMode || (e.TileEditMode = {}));
    }($s || ($s = {})), function (e) {
      function t(e, t) {
        switch (parseInt(t + "")) {
          case 0:
            e.frequencyVal = $s.VERY_LOW_FREQUENCY;
            break;

          case 1:
            e.frequencyVal = $s.LOW_FREQUENCY;
            break;

          case 2:
            e.frequencyVal = $s.MEDIUM_LOW_FREQUENCY;
            break;

          case 3:
            e.frequencyVal = $s.MEDIUM_FREQUENCY;
            break;

          case 4:
            e.frequencyVal = $s.MEDIUM_HIGH_FREQUENCY;
            break;

          case 5:
            e.frequencyVal = $s.HIGH_FREQUENCY;
            break;

          case 6:
            e.frequencyVal = $s.VERY_HIGH_FREQUENCY;
            break;

          default:
            e.frequencyVal = $s.MEDIUM_FREQUENCY;
        }
      }

      function n(e, t) {
        switch (parseInt(t + "")) {
          case 0:
            e.mSpeed = $s.VERY_LOW_MSPEED;
            break;

          case 1:
            e.mSpeed = $s.LOW_MSPEED;
            break;

          case 2:
            e.mSpeed = $s.MEDIUM_LOW_MSPEED;
            break;

          case 3:
            e.mSpeed = $s.MEDIUM_MSPEED;
            break;

          case 4:
            e.mSpeed = $s.MEDIUM_HIGH_MSPEED;
            break;

          case 5:
            e.mSpeed = $s.HIGH_MSPEED;
            break;

          case 6:
            e.mSpeed = $s.VERY_HIGH_MSPEED;
            break;

          default:
            e.mSpeed = $s.MEDIUM_MSPEED;
        }
      }

      e.setFrequency = t, e.setSpeed = n, e.isVisible = function (e, t) {
        return !(void 0 === e || t !== (0 !== Ds.normalizeZIndex(e.onTop)) || !Is.isEmpty(e.visible) && !e.visible || !Is.isEmpty(e.opacity) && 0 === e.opacity || Is.isEmpty(e.charaset));
      }, e.initTransientData = function (e, i) {
        return void 0 === i && (i = Ls.getCharacter()), n(i, i.speed), t(i, i.frequency), i;
      };
    }(Rs || (Rs = {})), function (e) {
      e.showError = function (e, t) {
        null !== e ? (void 0 !== t && t.clear(e), e.fillStyle = "#000000", e.font = "bold 20px Oldenburg", e.fillText("An error occurred :(", 60, 60)) : console.error("Context is null");
      };
    }(js || (js = {})), function (e) {
      function t(e) {
        if (void 0 !== e.imageData && e.imageData.width > e.imageData.height) switch (e.frames = Math.floor(e.imageData.width / (e.imageData.height / 4 * 3)), void 0 === e.frequency && (e.frequency = 3), e.frequency) {
          case 0:
            e.frequencyVal = $s.VERY_LOW_FREQUENCY;
            break;

          case 1:
            e.frequencyVal = $s.LOW_FREQUENCY;
            break;

          case 2:
            e.frequencyVal = $s.MEDIUM_LOW_FREQUENCY;
            break;

          case 3:
            e.frequencyVal = $s.MEDIUM_FREQUENCY;
            break;

          case 4:
            e.frequencyVal = $s.MEDIUM_HIGH_FREQUENCY;
            break;

          case 5:
            e.frequencyVal = $s.HIGH_FREQUENCY;
            break;

          case 6:
            e.frequencyVal = $s.VERY_HIGH_FREQUENCY;
            break;

          default:
            e.frequencyVal = $s.MEDIUM_FREQUENCY;
        }
      }

      e.loadTileset = function (e, t, n) {
        il.load(e + "", ys.TILESET, function (i) {
          if (Is.isEmpty(i)) console.error("Error while loading tileset: " + e), n();else try {
            var _e16 = JSON.parse(i);

            n(_e16);
          } catch (i) {
            "SyntaxError" === i.name ? console.error("Error while parsing tileset: " + e) : "TypeError" === i.name ? console.error("Error while reading tileset: " + e) : console.error(i), js.showError(t), n();
          }
        });
      }, e.initTransientData = function (e, t) {
        if (void 0 !== e.imageData) {
          e.imageWidth = e.imageData.width, e.imageHeight = e.imageData.height;

          var _n5 = t.mapCanvasToCell({
            x: e.imageWidth,
            y: e.imageHeight
          });

          e.maxGID = _n5.i * _n5.j - 1;
        }
      }, e.initTransientDataAutotiles = function (e) {
        return new Promise(function (n) {
          var i = n;
          il.load("autotilesets", ys.AUTOTILESET, function (n) {
            if (void 0 === n || "string" != typeof n) return void console.warn("Non parsable autotileset data: " + n);
            var r = JSON.parse(n);

            var _iterator11 = _createForOfIteratorHelper(e),
                _step11;

            try {
              var _loop2 = function _loop2() {
                var n = _step11.value;

                var _iterator12 = _createForOfIteratorHelper(r),
                    _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var _e17 = _step12.value;

                    if (_e17.image === n.image) {
                      n.blocked = _e17.blocked, n.frequency = _e17.frequency;
                      break;
                    }
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }

                void 0 === n.imageData ? il.load(n.image, ys.AUTOTILE, function (e) {
                  n.imageData = e, t(n), i(void 0);
                }) : (t(n), i(void 0));
              };

              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          });
        });
      }, e.getAnimatedAutotileFrame = function (e) {
        if (void 0 === e.frequencyVal || void 0 === e.frames) return 0;
        void 0 === e.animationStartTime && (e.animationStartTime = Is.now());
        var t = Is.now() - e.animationStartTime;
        return 3 * Math.floor(t * e.frequencyVal % e.frames);
      };
    }(Fs || (Fs = {}));

    var Ps,
        Bs,
        Hs,
        Us = window.requestAnimationFrame || function (e) {
      return window.setTimeout(e, 40), Math.floor(100 * Math.random());
    },
        Gs = window.cancelAnimationFrame;

    var Vs = /*#__PURE__*/function () {
      function Vs(e) {
        _classCallCheck(this, Vs);

        this.renderingConfiguration = new bs(), this.grid = e, this.context = e.getContext(), this.paused = !1, this.focus = this.grid.mapCellToCanvas({
          i: 0,
          j: 0
        }), this.pointer = {
          i: 0,
          j: 0
        };
      }

      _createClass(Vs, [{
        key: "start",
        value: function start(e) {
          this.changeScale();
          var t = this,
              n = Us(function () {
            t.mainGameLoop(n);
          });
        }
      }, {
        key: "mainGameLoop",
        value: function mainGameLoop(e) {
          var t = this,
              n = Us(function () {
            t.mainGameLoop(n);
          });
          !this.paused && this.mainGameLoop_pre() ? (this.render(this.map, this.context), this.mainGameLoop_post()) : Gs(e);
        }
      }, {
        key: "mainGameLoop_pre",
        value: function mainGameLoop_pre() {
          return !0;
        }
      }, {
        key: "mainGameLoop_post",
        value: function mainGameLoop_post() {}
      }, {
        key: "renderFocus",
        value: function renderFocus() {
          null != this.focus.x && null != this.focus.y && this.renderingConfiguration.showFocus && (this.context.save(), this.context.beginPath(), this.context.fillStyle = $s.Color.BLACK, this.context.arc(this.focus.x + Math.floor(this.grid.cellW / 2), this.focus.y + Math.floor(this.grid.cellH / 2), 15, 0, $s.DOUBLE_PI), this.context.closePath(), this.context.fill(), this.context.restore());
        }
      }, {
        key: "toggleGrid",
        value: function toggleGrid(e) {
          this.renderingConfiguration.showGrid = null != e ? e : !this.renderingConfiguration.showGrid;
        }
      }, {
        key: "toggleGridMode",
        value: function toggleGridMode() {
          this.renderingConfiguration.showGrid ? this.renderingConfiguration.showBlocks ? (this.toggleGrid(), this.toggleBlocks()) : this.toggleBlocks() : this.toggleGrid();
        }
      }, {
        key: "toggleCellNumbering",
        value: function toggleCellNumbering(e) {
          this.renderingConfiguration.showCellNumbers = null != e ? e : !this.renderingConfiguration.showCellNumbers;
        }
      }, {
        key: "toggleFocus",
        value: function toggleFocus(e) {
          this.renderingConfiguration.showFocus = null != e ? e : !this.renderingConfiguration.showFocus;
        }
      }, {
        key: "toggleBlocks",
        value: function toggleBlocks(e) {
          this.renderingConfiguration.showBlocks = null != e ? e : !this.renderingConfiguration.showBlocks;
        }
      }, {
        key: "toggleOnTops",
        value: function toggleOnTops(e) {
          this.renderingConfiguration.showOnTops = null != e ? e : !this.renderingConfiguration.showOnTops;
        }
      }, {
        key: "toggleAntialiasing",
        value: function toggleAntialiasing(e) {
          this.renderingConfiguration.enableAntialiasing = null != e ? e : !this.renderingConfiguration.enableAntialiasing, "webkitImageSmoothingEnabled" in this.context && (this.context.webkitImageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing), "msImageSmoothingEnabled" in this.context && (this.context.msImageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing), void 0 !== this.context.imageSmoothingEnabled && (this.context.imageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing);
        }
      }, {
        key: "updatePointer",
        value: function updatePointer(e, t) {
          this.pointer = void 0 === e || void 0 === t ? void 0 : {
            i: e,
            j: t
          };
        }
      }, {
        key: "moveFocusToDirection",
        value: function moveFocusToDirection(e) {
          if (void 0 !== e) switch (e) {
            case 0:
              this.focus.y -= +this.grid.cellH;
              break;

            case 2:
              this.focus.y += +this.grid.cellH;
              break;

            case 3:
              this.focus.x -= +this.grid.cellW;
              break;

            case 1:
              this.focus.x += +this.grid.cellW;
              break;

            case 4:
              break;

            default:
              console.error("Unexpected case: " + e);
          }
          this.grid.changeTranslation(this.focus.x, this.focus.y, this.map.width, this.map.height);
        }
      }, {
        key: "moveFocusToTarget",
        value: function moveFocusToTarget(e) {
          this.focus = this.grid.mapCellToCanvas(e), this.grid.changeTranslation(this.focus.x, this.focus.y, this.map.width, this.map.height);
        }
      }, {
        key: "resetTranslation",
        value: function resetTranslation() {
          this.grid.resetTranslation();
        }
      }, {
        key: "reapplyTranslation",
        value: function reapplyTranslation() {
          this.grid.reappyTranslation();
        }
      }, {
        key: "changeScale",
        value: function changeScale() {
          try {
            this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.scale(this.grid.scaleX, this.grid.scaleY);
          } catch (e) {
            console.error(e);
          }
        }
      }, {
        key: "togglePause",
        value: function togglePause(e) {
          this.paused = null != e ? e : !this.paused, this.paused ? this.pauseStartTime = Is.now() : (void 0 === this.pauseStartTime && (this.pauseStartTime = 0), this.pauseDuration = Is.now() - this.pauseStartTime, this.pauseStartTime = void 0);
        }
      }, {
        key: "changeMap",
        value: function changeMap(e, t) {
          this.togglePause(!0);
          var n = this;
          Is.isEmpty(e) && (console.error("Uninitialized map"), console.trace()), n.map = e, n.changeTile(e.tileset.image, function (e) {
            Bs.initTransientData(n, function () {
              n.togglePause(!1), t(n);
            });
          });
        }
      }, {
        key: "changeTile",
        value: function changeTile(e, t) {
          var n = this;
          Fs.loadTileset(e, this.context, function (i) {
            if (void 0 === i) return console.error("Cannot change tile, tileset not found: " + e), void t(n);
            n.map.tileset = i, il.load(i.image, ys.TILE, function (e) {
              n.map.tileset.imageData = e, t(n);
            });
          });
        }
      }, {
        key: "getSceneHeight",
        value: function getSceneHeight() {
          return this.map.height;
        }
      }, {
        key: "getSceneWidth",
        value: function getSceneWidth() {
          return this.map.width;
        }
      }, {
        key: "render",
        value: function render(e, t) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
          var i = this.redrawArea.y,
              r = this.redrawArea.y + this.redrawArea.h,
              o = this.redrawArea.x,
              a = this.redrawArea.x + this.redrawArea.w;

          if (!Is.isEmpty(e) && void 0 !== e.tileset.imageData) {
            for (var _s2 = i; _s2 <= r; _s2++) {
              for (var _i5 = o; _i5 <= a; _i5++) {
                var _r5 = Ds.cellToGid({
                  i: _i5,
                  j: _s2
                }, e.width);

                for (var _o6 = $s.MapLayer.LOW; _o6 <= $s.MapLayer.TOP; _o6++) {
                  var _a3 = this.map.layers[_o6];
                  if (void 0 === _a3 || void 0 === _a3.data || _a3.data.length < _r5) continue;
                  var _l = _a3.data[_r5];
                  if (null != _l) if (Bs.isThisAnAutotileCell(_r5, _a3, e)) {
                    var _n6 = void 0;

                    if (void 0 !== e.autotilesets && (_n6 = e.autotilesets[_l]), void 0 === _n6) {
                      console.warn("Autotile gid not set in map: " + _l);
                      continue;
                    }

                    if (void 0 !== _n6.imageData) {
                      var _e18 = Cs.ALL;
                      void 0 !== _a3.autotileData && null !== _a3.autotileData[_r5] && (_e18 = _a3.autotileData[_r5]), this.applyLayerCustomizations(_o6), Is.isEmpty(_a3.opacity) || (t.globalAlpha = _a3.opacity), this.renderAutotile(t, _n6, _l, _e18, {
                        i: _i5,
                        j: _s2
                      }), t.globalAlpha = 1, this.removeLayerCustomizations(_o6);
                    }
                  } else {
                    var _r6 = 0;
                    void 0 !== e.tileset.onTop && (_r6 = Ds.normalizeZIndex(e.tileset.onTop[_l])), 0 !== _r6 && n || (this.applyLayerCustomizations(_o6), Is.isEmpty(_a3.opacity) || (t.globalAlpha = _a3.opacity), this.renderCell(t, e.tileset, _l, _i5, _s2), t.globalAlpha = 1, this.removeLayerCustomizations(_o6));
                  }
                }

                Bs.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _i5, _s2, !1);
              }
            }

            this.renderPointer();

            for (var _s3 = i; _s3 <= r; _s3++) {
              for (var _r7 = o; _r7 <= a && n; _r7++) {
                for (var _n7 = i; _n7 <= _s3; _n7++) {
                  var _i6 = Ds.cellToGid({
                    i: _r7,
                    j: _n7
                  }, e.width);

                  for (var _o7 = $s.MapLayer.LOW; _o7 <= $s.MapLayer.TOP; _o7++) {
                    var _a4 = this.map.layers[_o7];
                    if (void 0 === _a4 || void 0 === _a4.data || _a4.data.length < _i6) continue;
                    var _l2 = _a4.data[_i6];
                    if (Is.isEmpty(_l2)) continue;
                    var _c = 0;
                    void 0 !== e.tileset.onTop && (_c = Ds.normalizeZIndex(e.tileset.onTop[_l2])), _c > 0 && _n7 + _c === _s3 && (this.applyLayerCustomizations(_o7), Is.isEmpty(_a4.opacity) || (t.globalAlpha = _a4.opacity), this.renderCell(t, e.tileset, _l2, _r7, _n7), t.globalAlpha = 1, this.removeLayerCustomizations(_o7));
                  }
                }
              }

              for (var _e19 = o; _e19 <= a; _e19++) {
                this.renderDynamicElements(i, r, o, a, _e19, _s3, !1);
              }
            }

            for (var _e20 = i; _e20 <= r; _e20++) {
              for (var _t7 = o; _t7 <= a; _t7++) {
                this.renderDynamicElements(i, r, o, a, _t7, _e20, !0), Bs.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _t7, _e20, !0);
              }
            }
          }

          Bs.renderGlobalUI(this.grid, this.context, this.renderingConfiguration), this.renderFocus();
        }
      }, {
        key: "renderCell",
        value: function renderCell(e, t, n, i, r) {
          var o = Ds.gidToCell(n, Math.floor(t.imageWidth / this.grid.cellW));
          e.drawImage(t.imageData, Math.floor(o.i * this.grid.cellW), Math.floor(o.j * this.grid.cellH), this.grid.cellW, this.grid.cellH, Math.floor(i * this.grid.cellW), Math.floor(r * this.grid.cellH), this.grid.cellW, this.grid.cellH);
        }
      }, {
        key: "renderAutotile",
        value: function renderAutotile(e, t, n, i, r) {
          var o,
              a,
              s = t.imageData,
              l = !1,
              c = !1,
              u = !1;

          switch (i) {
            case Cs.N | Cs.E | Cs.S | Cs.W:
              o = 2, a = 0;
              break;

            case Cs.E | Cs.S:
            case Cs.E | Cs.S | Cs.NE:
            case Cs.E | Cs.S | Cs.SW:
            case Cs.E | Cs.S | Cs.NE | Cs.SW:
            case Cs.E | Cs.S | Cs.NW:
            case Cs.E | Cs.S | Cs.NW | Cs.NE:
            case Cs.E | Cs.S | Cs.NW | Cs.SW:
            case Cs.E | Cs.S | Cs.NW | Cs.NE | Cs.SW:
              l = !0;

            case Cs.E | Cs.SE | Cs.S:
            case Cs.E | Cs.SE | Cs.S | Cs.NE:
            case Cs.E | Cs.SE | Cs.S | Cs.SW:
            case Cs.E | Cs.SE | Cs.S | Cs.NE | Cs.SW:
            case Cs.E | Cs.SE | Cs.S | Cs.NW:
            case Cs.E | Cs.SE | Cs.S | Cs.NW | Cs.NE:
            case Cs.E | Cs.SE | Cs.S | Cs.NW | Cs.SW:
            case Cs.E | Cs.SE | Cs.S | Cs.NW | Cs.NE | Cs.SW:
              o = 0, a = 1;
              break;

            case Cs.W | Cs.SW | Cs.S | Cs.SE | Cs.E:
            case Cs.W | Cs.SW | Cs.S | Cs.SE | Cs.E | Cs.NW:
            case Cs.W | Cs.SW | Cs.S | Cs.SE | Cs.E | Cs.NE:
            case Cs.W | Cs.SW | Cs.S | Cs.SE | Cs.E | Cs.NW | Cs.NE:
              o = 1, a = 1;
              break;

            case Cs.W | Cs.S:
            case Cs.W | Cs.S | Cs.NW:
            case Cs.W | Cs.S | Cs.SE:
            case Cs.W | Cs.S | Cs.NW | Cs.SE:
            case Cs.W | Cs.S | Cs.NE:
            case Cs.W | Cs.S | Cs.NE | Cs.NW:
            case Cs.W | Cs.S | Cs.NE | Cs.SE:
            case Cs.W | Cs.S | Cs.NE | Cs.NW | Cs.SE:
              l = !0;

            case Cs.W | Cs.SW | Cs.S:
            case Cs.W | Cs.SW | Cs.S | Cs.NW:
            case Cs.W | Cs.SW | Cs.S | Cs.SE:
            case Cs.W | Cs.SW | Cs.S | Cs.NW | Cs.SE:
            case Cs.W | Cs.SW | Cs.S | Cs.NE:
            case Cs.W | Cs.SW | Cs.S | Cs.NE | Cs.NW:
            case Cs.W | Cs.SW | Cs.S | Cs.NE | Cs.SE:
            case Cs.W | Cs.SW | Cs.S | Cs.NE | Cs.NW | Cs.SE:
              o = 2, a = 1;
              break;

            case Cs.N | Cs.NE | Cs.E | Cs.SE | Cs.S:
            case Cs.N | Cs.NE | Cs.E | Cs.SE | Cs.S | Cs.NW:
            case Cs.N | Cs.NE | Cs.E | Cs.SE | Cs.S | Cs.SW:
            case Cs.N | Cs.NE | Cs.E | Cs.SE | Cs.S | Cs.NW | Cs.SW:
              o = 0, a = 2;
              break;

            case Cs.ALL:
              o = 1, a = 2;
              break;

            case Cs.N | Cs.NW | Cs.W | Cs.SW | Cs.S:
            case Cs.N | Cs.NW | Cs.W | Cs.SW | Cs.S | Cs.NE:
            case Cs.N | Cs.NW | Cs.W | Cs.SW | Cs.S | Cs.SE:
            case Cs.N | Cs.NW | Cs.W | Cs.SW | Cs.S | Cs.NE | Cs.SE:
              o = 2, a = 2;
              break;

            case Cs.N | Cs.E:
            case Cs.N | Cs.E | Cs.NW:
            case Cs.N | Cs.E | Cs.SE:
            case Cs.N | Cs.E | Cs.NW | Cs.SE:
            case Cs.N | Cs.E | Cs.SW:
            case Cs.N | Cs.E | Cs.SW | Cs.NW:
            case Cs.N | Cs.E | Cs.SW | Cs.SE:
            case Cs.N | Cs.E | Cs.SW | Cs.NW | Cs.SE:
              l = !0;

            case Cs.N | Cs.NE | Cs.E:
            case Cs.N | Cs.NE | Cs.E | Cs.NW:
            case Cs.N | Cs.NE | Cs.E | Cs.SE:
            case Cs.N | Cs.NE | Cs.E | Cs.NW | Cs.SE:
            case Cs.N | Cs.NE | Cs.E | Cs.SW:
            case Cs.N | Cs.NE | Cs.E | Cs.SW | Cs.NW:
            case Cs.N | Cs.NE | Cs.E | Cs.SW | Cs.SE:
            case Cs.N | Cs.NE | Cs.E | Cs.SW | Cs.NW | Cs.SE:
              o = 0, a = 3;
              break;

            case Cs.W | Cs.NW | Cs.N | Cs.NE | Cs.E:
            case Cs.W | Cs.NW | Cs.N | Cs.NE | Cs.E | Cs.SW:
            case Cs.W | Cs.NW | Cs.N | Cs.NE | Cs.E | Cs.SE:
            case Cs.W | Cs.NW | Cs.N | Cs.NE | Cs.E | Cs.SW | Cs.SE:
              o = 1, a = 3;
              break;

            case Cs.W | Cs.N:
            case Cs.W | Cs.N | Cs.SW:
            case Cs.W | Cs.N | Cs.NE:
            case Cs.W | Cs.N | Cs.SW | Cs.NE:
            case Cs.W | Cs.N | Cs.SE:
            case Cs.W | Cs.N | Cs.SE | Cs.SW:
            case Cs.W | Cs.N | Cs.SE | Cs.NE:
            case Cs.W | Cs.N | Cs.SE | Cs.SW | Cs.NE:
              l = !0;

            case Cs.W | Cs.NW | Cs.N:
            case Cs.W | Cs.NW | Cs.N | Cs.SW:
            case Cs.W | Cs.NW | Cs.N | Cs.NE:
            case Cs.W | Cs.NW | Cs.N | Cs.SW | Cs.NE:
            case Cs.W | Cs.NW | Cs.N | Cs.SE:
            case Cs.W | Cs.NW | Cs.N | Cs.SE | Cs.SW:
            case Cs.W | Cs.NW | Cs.N | Cs.SE | Cs.NE:
            case Cs.W | Cs.NW | Cs.N | Cs.SE | Cs.SW | Cs.NE:
              o = 2, a = 3;
              break;

            default:
              if (0 == (i & (Cs.N | Cs.E | Cs.S | Cs.W))) {
                o = 0, a = 0;
                break;
              }

              o = 1, a = 2, (i & (Cs.N | Cs.E)) != (Cs.N | Cs.E) && (i & (Cs.S | Cs.E)) != (Cs.S | Cs.E) && (i & (Cs.S | Cs.W)) != (Cs.S | Cs.W) && (i & (Cs.N | Cs.W)) != (Cs.N | Cs.W) || (l = !0), (i & (Cs.N | Cs.S)) > 0 && (0 == (i & Cs.W) || 0 == (i & Cs.E)) ? c = !0 : (i & (Cs.W | Cs.E)) > 0 && (0 == (i & Cs.N) || 0 == (i & Cs.S)) && (u = !0);
          }

          var d = Fs.getAnimatedAutotileFrame(t);

          if (e.drawImage(s, (o + d) * this.grid.cellW, a * this.grid.cellH, this.grid.cellW, this.grid.cellH, r.i * this.grid.cellW, r.j * this.grid.cellH, this.grid.cellW, this.grid.cellH), l) {
            var _t8, _n8;

            o = 2, a = 0;

            var _l3 = Math.floor(this.grid.cellW / 2),
                _c2 = Math.floor(this.grid.cellH / 2);

            0 == (i & Cs.NW) && (i & (Cs.N | Cs.W)) == (Cs.N | Cs.W) && (_t8 = 0, _n8 = 0, this.drawAngle(e, s, o + d, a, _l3, _c2, r, _t8, _n8)), 0 == (i & Cs.NE) && (i & (Cs.N | Cs.E)) == (Cs.N | Cs.E) && (_t8 = _l3, _n8 = 0, this.drawAngle(e, s, o + d, a, _l3, _c2, r, _t8, _n8)), 0 == (i & Cs.SW) && (i & (Cs.S | Cs.W)) == (Cs.S | Cs.W) && (_t8 = 0, _n8 = _c2, this.drawAngle(e, s, o + d, a, _l3, _c2, r, _t8, _n8)), 0 == (i & Cs.SE) && (i & (Cs.S | Cs.E)) == (Cs.S | Cs.E) && (_t8 = _l3, _n8 = _c2, this.drawAngle(e, s, o + d, a, _l3, _c2, r, _t8, _n8));
          }

          if (c) {
            var _t9,
                _n9 = {
              w: Math.floor(this.grid.cellW / 2),
              h: this.grid.cellH
            };

            a = 2;
            var _l4 = 0;
            0 == (i & Cs.W) && (o = 0, _t9 = 0, this.drawBottleneck(e, s, o + d, a, r, _t9, _l4, _n9)), 0 == (i & Cs.E) && (o = 2, _t9 = Math.floor(this.grid.cellW / 2), this.drawBottleneck(e, s, o + d, a, r, _t9, _l4, _n9)), 0 == (i & Cs.N) ? (o = 0, a = 0, _t9 = 0, _l4 = 0, _n9 = {
              w: this.grid.cellW,
              h: Math.floor(this.grid.cellH / 2)
            }, this.drawBottleneck(e, s, o + d, a, r, _t9, _l4, _n9)) : 0 == (i & Cs.S) && (o = 0, a = 0, _t9 = 0, _l4 = Math.floor(this.grid.cellH / 2), _n9 = {
              w: this.grid.cellW,
              h: Math.floor(this.grid.cellH / 2)
            }, this.drawBottleneck(e, s, o + d, a, r, _t9, _l4, _n9));
          } else if (u) {
            var _t10 = {
              w: this.grid.cellW,
              h: Math.floor(this.grid.cellH / 2)
            };
            o = 1;

            var _n10,
                _l5 = 0;

            0 == (i & Cs.N) && (a = 1, _n10 = 0, this.drawBottleneck(e, s, o + d, a, r, _l5, _n10, _t10)), 0 == (i & Cs.S) && (a = 3, _n10 = Math.floor(this.grid.cellH / 2), this.drawBottleneck(e, s, o + d, a, r, _l5, _n10, _t10)), 0 == (i & Cs.E) ? (o = 0, a = 0, _l5 = Math.floor(this.grid.cellW / 2), _n10 = 0, _t10 = {
              w: Math.floor(this.grid.cellW / 2),
              h: this.grid.cellH
            }, this.drawBottleneck(e, s, o + d, a, r, _l5, _n10, _t10)) : 0 == (i & Cs.W) && (o = 0, a = 0, _l5 = 0, _n10 = 0, _t10 = {
              w: Math.floor(this.grid.cellW / 2),
              h: this.grid.cellH
            }, this.drawBottleneck(e, s, o + d, a, r, _l5, _n10, _t10));
          }
        }
      }, {
        key: "drawBottleneck",
        value: function drawBottleneck(e, t, n, i, r, o, a, s) {
          e.drawImage(t, n * this.grid.cellW + o, i * this.grid.cellH + a, s.w, s.h, r.i * this.grid.cellW + o, r.j * this.grid.cellH + a, s.w, s.h);
        }
      }, {
        key: "drawAngle",
        value: function drawAngle(e, t, n, i, r, o, a, s, l) {
          e.drawImage(t, n * this.grid.cellW + s, i * this.grid.cellH + l, r, o, a.i * this.grid.cellW + s, a.j * this.grid.cellH + l, r, o);
        }
      }, {
        key: "applyLayerCustomizations",
        value: function applyLayerCustomizations(e) {}
      }, {
        key: "removeLayerCustomizations",
        value: function removeLayerCustomizations(e) {}
      }, {
        key: "onFocusCellChange",
        value: function onFocusCellChange() {}
      }, {
        key: "onFocusPixelChange",
        value: function onFocusPixelChange(e, t) {}
      }, {
        key: "getMap",
        value: function getMap() {
          return this.map;
        }
      }]);

      return Vs;
    }();

    !function (e) {
      function t(e) {
        return {
          id: e.id,
          memory: e.memory
        };
      }

      e.getSave = function (e, n) {
        if (Is.isEmpty(e) || Is.isEmpty(n)) return Ls.getSave();
        var i = new Array();

        if (!Is.isEmpty(e.events)) {
          var _iterator13 = _createForOfIteratorHelper(e.events),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var _n11 = _step13.value;
              i.push(t(_n11));
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
        }

        var r = Ls.getSave();
        return r.currentMap = e.id, r.hero = n, r.maps[e.id] = {
          events: i
        }, r;
      }, e.loadMapSave = function (e, t, n, i) {
        Bs.loadMap(t, e.context.canvas, function (t) {
          var r = t;
          !function (e, t) {
            if (Is.isEmpty(e) || Is.isEmpty(t.events) || Is.isEmpty(e.maps[t.id])) return;
            var n = e.maps[t.id].events;

            if (!Is.isEmpty(n)) {
              var _iterator14 = _createForOfIteratorHelper(n),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var _e21 = _step14.value;

                  var _iterator15 = _createForOfIteratorHelper(t.events),
                      _step15;

                  try {
                    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                      var _n12 = _step15.value;
                      _e21.id === _n12.id && (_n12.memory = _e21.memory);
                    }
                  } catch (err) {
                    _iterator15.e(err);
                  } finally {
                    _iterator15.f();
                  }
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
            }
          }(e.save, r), e.changeMap(r, function () {
            if (e.resetTranslation(), e.hero.i = n.i, e.hero.j = n.j, Hs.initTransientData(r, e.grid, e.hero), e.focus = e.grid.mapCellToCanvas(n), !Is.isEmpty(e.map.events)) for (var _t11 = 0; _t11 < e.map.events.length; _t11++) {
              var _n13 = Hs.initTransientData(e.map, e.grid, e.map.events[_t11]);

              void 0 !== _n13 && (e.map.events[_t11] = _n13);
            }
            i(!0);
          });
        });
      };
    }(Ps || (Ps = {}));

    var qs = /*#__PURE__*/function (_Vs) {
      _inherits(qs, _Vs);

      var _super = _createSuper(qs);

      function qs(e, t, n) {
        var _this;

        _classCallCheck(this, qs);

        _this = _super.call(this, e), _this.FPS = 20, _this.refreshInterval = 1e3 / _this.FPS, _this.autoFPS = !0, _this.secondFPS = 0, _this.countFPS = 0, _this.lastFPS = 0, _this.fpsPerformance = [22, 21, 20], _this.eventScriptLauncher = t, _this.dialogScriptLauncher = n;
        return _this;
      }

      _createClass(qs, [{
        key: "mainGameLoop_pre",
        value: function mainGameLoop_pre() {
          if (!_get(_getPrototypeOf(qs.prototype), "mainGameLoop_pre", this).call(this)) return !1;
          var e = !1,
              t = this,
              n = Is.now();

          if (!Is.isEmpty(this.hero)) {
            var _i7 = Hs.update(this.hero, this, this.hero, this.action, n, this.pauseDuration);

            void 0 !== _i7 && this.eventScriptLauncher(this.hero, this, this.hero, _i7), e = Hs.manageMovements(this.map, this.grid, this.hero, function (e, n) {
              t.grid.changeTranslation(t.focus.x + e, t.focus.y + n, t.map.width, t.map.height);
            }, function (e, n) {
              t.focus.x += e, t.focus.y += n;
            });
          }

          if (!Is.isEmpty(this.map.events)) {
            var _iterator16 = _createForOfIteratorHelper(this.map.events),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var _t12 = _step16.value;

                var _i8 = Hs.update(_t12, this, this.hero, this.action, n, this.pauseDuration);

                void 0 !== _i8 && this.eventScriptLauncher(_t12, this, this.hero, _i8), e = e || Hs.manageMovements(this.map, this.grid, _t12, Ss, Ss);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }

            this.action = void 0;
          }

          return e && Bs.updateDynamicData(t.hero, this.map), this.paused || (this.pauseDuration = void 0), this.redrawArea = this.getRedrawArea(), !0;
        }
      }, {
        key: "mainGameLoop_post",
        value: function mainGameLoop_post() {
          _get(_getPrototypeOf(qs.prototype), "mainGameLoop_post", this).call(this), this.renderFPS();
        }
      }, {
        key: "getRedrawArea",
        value: function getRedrawArea(e) {
          var t = this.grid.getBoundariesX(this.focus.x, this.getSceneWidth()),
              n = this.grid.getBoundariesY(this.focus.y, this.getSceneHeight());
          return {
            x: t.min,
            y: n.min,
            h: n.max - n.min,
            w: t.max - t.min
          };
        }
      }, {
        key: "toggleFPS",
        value: function toggleFPS(e) {
          this.renderingConfiguration.showFPS = null != e ? e : !this.renderingConfiguration.showFPS;
        }
      }, {
        key: "renderFPS",
        value: function renderFPS() {
          var e = Math.floor(Is.now() / 1e3);
          if (e === this.secondFPS) this.countFPS++;else if (this.lastFPS = this.countFPS, this.countFPS = 1, this.secondFPS = e, !0 === this.autoFPS) {
            this.fpsPerformance.shift(), this.fpsPerformance[2] = this.lastFPS;

            var _e22 = (this.fpsPerformance[0] + this.fpsPerformance[1] + this.fpsPerformance[2]) / 3;

            this.FPS = Math.ceil(_e22) + 2;
          }
          this.renderingConfiguration.showFPS && (this.context.fillStyle = $s.Color.RED, this.context.font = "bold 18px Oldenburg", this.context.fillText("" + this.lastFPS, this.grid.getCurrentTranslation().x + 10, this.grid.getCurrentTranslation().y + 20));
        }
      }, {
        key: "renderDynamicElements",
        value: function renderDynamicElements(e, t, n, i, r, o, a) {
          try {
            Hs.isVisible(this.hero, e, t, n, i, r, o, a) && Hs.render(this.grid, this.hero, this.context, !0);
          } catch (e) {
            console.error(e);
          }

          if (!Is.isEmpty(this.map.events)) {
            var _iterator17 = _createForOfIteratorHelper(this.map.events),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var _s4 = _step17.value;

                try {
                  Hs.isVisible(_s4, e, t, n, i, r, o, a) && Hs.render(this.grid, _s4, this.context, !0, this.pointer);
                } catch (e) {
                  console.error(e);
                }
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
          }
        }
      }, {
        key: "loadSave",
        value: function loadSave(e, t) {
          var n, i;

          if (void 0 === e) {
            if (!Is.isEmpty(this.map)) return void t(!1);
            n = Os.maps.start.map, i = Ls.getHero();
          } else this.save = e, n = e.currentMap, i = e.hero;

          var r = Hs.initTransientData(this.map, this.grid, i);
          void 0 === r ? console.error("Cannot initialize hero event") : this.hero = r, Ps.loadMapSave(this, n, i, t);
        }
      }, {
        key: "registerAction",
        value: function registerAction(e, t) {
          this.action = {
            i: e,
            j: t
          };
        }
      }, {
        key: "startHeroMovement",
        value: function startHeroMovement(e, t) {
          if (e < 0 || e >= this.map.width || t < 0 || t >= this.map.height) return !1;
          var n = this;
          return Hs.startMovement(this.hero, e, t, function (e) {
            n.registerAction(e.i, e.j);
          });
        }
      }, {
        key: "isDialogOpen",
        value: function isDialogOpen() {
          return void 0 !== this.dialogName && void 0 !== this.dialogSkin;
        }
      }, {
        key: "setLanguage",
        value: function setLanguage(e) {
          void 0 === this.save && (this.save = Ls.getSave()), this.save.config.lang = e;
        }
      }, {
        key: "toggleNaturalScale",
        value: function toggleNaturalScale(e, t) {
          this.grid.toggleNaturalScale(e, t), this.grid.refreshCanvasSize(), this.changeScale(), this.reapplyTranslation();
        }
      }, {
        key: "renderPointer",
        value: function renderPointer() {}
      }]);

      return qs;
    }(Vs);

    function Ys(e, t, n) {
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Ms.D_STAR_LITE;
      var r = Is.now(),
          o = n.i - t.i,
          a = n.j - t.j;
      if (0 === o && 0 === a) return 4;
      {
        var _o8 = 4;

        switch (i) {
          case Ms.BASIC:
            _o8 = zs(e, t, n);
            break;

          case Ms.D_STAR_LITE:
            _o8 = function (e, t, n) {
              var i, r, o, a;
              var s = Number.MAX_SAFE_INTEGER;
              var l,
                  c,
                  u = 0,
                  d = e.width;

              function f(e) {
                return [Math.min(v(e), m(e)) + S(l, e) + u, Math.min(v(e), m(e))];
              }

              function p(e) {
                v(e) !== m(e) ? (e.key = f(e), T(e)) : function (e) {
                  var _iterator18 = _createForOfIteratorHelper(r),
                      _step18;

                  try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                      var _t13 = _step18.value;
                      if (_(e, _t13)) return !0;
                    }
                  } catch (err) {
                    _iterator18.e(err);
                  } finally {
                    _iterator18.f();
                  }

                  return !1;
                }(e) && k(e);
              }

              function h(e, t) {
                t > s && (t = s);
                var n = Ds.cellToGid(e.cell, d);
                o[n] = t;
              }

              function g(e, t) {
                t > s && (t = s);
                var n = Ds.cellToGid(e.cell, d);
                a[n] = t;
              }

              function v(e) {
                var t = Ds.cellToGid(e.cell, d);
                return o[t];
              }

              function m(e) {
                var t = Ds.cellToGid(e.cell, d);
                return a[t];
              }

              function y(t) {
                var n = Ds.cellToGid(t.cell, e.width),
                    r = [];
                return 0 !== t.cell.i && r.push(i[n - 1]), t.cell.i < e.width - 1 && r.push(i[n + 1]), n - e.width >= 0 && r.push(i[n - e.width]), n + e.width < i.length && r.push(i[n + e.width]), r;
              }

              function E(t) {
                var n = Ds.cellToGid(t.cell, e.width),
                    r = [];
                return 0 !== t.cell.i && r.push(i[n - 1]), t.cell.i < e.width - 1 && r.push(i[n + 1]), n - e.width >= 0 && r.push(i[n - e.width]), n + e.width < i.length && r.push(i[n + e.width]), r;
              }

              function b(t, n) {
                var i = Ds.getDirection(n.cell, t.cell),
                    r = 4 === Ds.getDirection(n.cell, c.cell);
                return Ds.isMovementBlocked(e, t.cell.i, t.cell.j, i, r) ? s : 1;
              }

              function S(e, t) {
                return Math.abs(e.cell.i - t.cell.i) + Math.abs(e.cell.j - t.cell.j);
              }

              function w(e, t) {
                return e[0] === t[0] && e[1] === t[1] ? 0 : e[0] > t[0] || e[0] === t[0] && e[1] > t[1] ? 1 : -1;
              }

              function _(e, t) {
                return e.cell.i === t.cell.i && e.cell.j === t.cell.j;
              }

              function T(e) {
                var _iterator19 = _createForOfIteratorHelper(r),
                    _step19;

                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                    var _t14 = _step19.value;
                    if (_(e, _t14)) return void (_t14.key = e.key);
                  }
                } catch (err) {
                  _iterator19.e(err);
                } finally {
                  _iterator19.f();
                }

                r.push(e);
              }

              function k(e) {
                var t = [];

                var _iterator20 = _createForOfIteratorHelper(r),
                    _step20;

                try {
                  for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    var _n14 = _step20.value;
                    _(e, _n14) || t.push(_n14);
                  }
                } catch (err) {
                  _iterator20.e(err);
                } finally {
                  _iterator20.f();
                }

                r = t;
              }

              function A() {
                var e;

                var _iterator21 = _createForOfIteratorHelper(r),
                    _step21;

                try {
                  for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                    var _t15 = _step21.value;
                    (void 0 === e || w(_t15.key, e.key) < 0) && (e = _t15);
                  }
                } catch (err) {
                  _iterator21.e(err);
                } finally {
                  _iterator21.f();
                }

                return void 0 === e && (e = {
                  cell: {
                    i: -1,
                    j: -1
                  },
                  key: [s, s]
                }), e;
              }

              return l = {
                cell: t
              }, c = {
                cell: n
              }, function () {
                for (function () {
                  i = [];

                  for (var _t16 = 0; _t16 < e.height; _t16++) {
                    for (var _n15 = 0; _n15 < e.width; _n15++) {
                      var _e23 = {
                        cell: {
                          i: _n15,
                          j: _t16
                        }
                      };
                      i.push(_e23);
                    }
                  }

                  o = [], a = [], r = [], u = 0;

                  var _iterator22 = _createForOfIteratorHelper(i),
                      _step22;

                  try {
                    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                      var _e24 = _step22.value;
                      h(_e24, s), g(_e24, s);
                    }
                  } catch (err) {
                    _iterator22.e(err);
                  } finally {
                    _iterator22.f();
                  }

                  g(c, 0);
                  var t = c;
                  t.key = [S(l, c), 0], r.push(t);
                }(), function () {
                  for (; w(A().key, f(l)) < 0 || m(l) > v(l);) {
                    var _e25 = A(),
                        _t17 = _e25,
                        _n16 = _e25.key,
                        _i10 = f(_t17);

                    if (w(_n16, _i10) < 0) _t17.key = _i10, T(_t17);else if (v(_t17) > m(_t17)) {
                      h(_t17, m(_t17)), k(_t17);

                      var _iterator23 = _createForOfIteratorHelper(E(_t17)),
                          _step23;

                      try {
                        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                          var _e26 = _step23.value;
                          _(_e26, c) || g(_e26, Math.min(m(_e26), b(_e26, _t17) + v(_t17))), p(_e26);
                        }
                      } catch (err) {
                        _iterator23.e(err);
                      } finally {
                        _iterator23.f();
                      }
                    } else {
                      var _e27 = v(_t17);

                      h(_t17, s);

                      var _n17 = E(_t17);

                      _n17.push(_t17);

                      var _iterator24 = _createForOfIteratorHelper(_n17),
                          _step24;

                      try {
                        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                          var _i11 = _step24.value;

                          if ((m(_i11) === b(_i11, _t17) + _e27 || m(_i11) === s && (b(_i11, _t17) === s || _e27 === s)) && !_(_i11, c)) {
                            var _e28 = void 0;

                            var _iterator25 = _createForOfIteratorHelper(y(_i11)),
                                _step25;

                            try {
                              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                                var _t18 = _step25.value;

                                var _n18 = b(_i11, _t18) + v(_t18);

                                _n18 > s && (_n18 = s), (void 0 === _e28 || _e28 > _n18) && (_e28 = _n18);
                              }
                            } catch (err) {
                              _iterator25.e(err);
                            } finally {
                              _iterator25.f();
                            }

                            g(_i11, _e28);
                          }

                          p(_i11);
                        }
                      } catch (err) {
                        _iterator24.e(err);
                      } finally {
                        _iterator24.f();
                      }
                    }
                  }
                }(); !_(l, c);) {
                  var _i9 = void 0,
                      _r8 = void 0;

                  var _iterator26 = _createForOfIteratorHelper(y(l)),
                      _step26;

                  try {
                    for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                      var _e29 = _step26.value;

                      var _t19 = b(l, _e29) + v(_e29);

                      (void 0 === _r8 || _r8 > _t19) && (_r8 = _t19, _i9 = _e29);
                    }
                  } catch (err) {
                    _iterator26.e(err);
                  } finally {
                    _iterator26.f();
                  }

                  return l = _i9, _r8 >= s ? zs(e, t, n) : Ds.getDirection(l.cell, t);
                }

                return 4;
              }();
            }(e, t, n);

        }

        4 !== _o8 && (Hs.addDirectionToPath(t, _o8, 3), void 0 === t.path && (t.path = []), 3 === t.path.length && t.path[0] === t.path[2] && Ds.isDirectionsOpposed(t.path[0], t.path[1]) && (_o8 = 4));

        var _a5 = Is.now() - r;

        return _a5 > 10 && console.debug("Path found in: " + _a5), _o8;
      }
    }

    function zs(e, t, n) {
      var i = n.i - t.i,
          r = n.j - t.j,
          o = 4;
      return Math.abs(i) > Math.abs(r) ? (i > 0 ? o = 1 : i < 0 && (o = 3), Bs.isMovementTowardsTargetBlocked(e, t.i, t.j, o, n) && (r > 0 ? o = 2 : r < 0 && (o = 0))) : (r > 0 ? o = 2 : r < 0 && (o = 0), Bs.isMovementTowardsTargetBlocked(e, t.i, t.j, o, n) && (i > 0 ? o = 1 : i < 0 && (o = 3))), Bs.isMovementTowardsTargetBlocked(e, t.i, t.j, o, n) && (o = 4), o;
    }

    !function (e) {
      function t(e, t, n, i) {
        var r = Cs.NONE;

        var _iterator27 = _createForOfIteratorHelper(Ns),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var _o9 = _step27.value;

            var _a6 = Ds.getTargetGID(e, _o9, t);

            void 0 !== _a6 && i.data[_a6] !== n || (r |= _o9);
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }

        return r;
      }

      function n(e, t) {
        t.dynamicBlocks = [];

        for (var _e30 = 0; _e30 < t.height * t.width; _e30++) {
          t.dynamicBlocks[_e30] = 0;
        }

        var n = new Array();
        void 0 !== e && n.push(e), void 0 !== t.events && (n = n.concat(t.events));

        var _iterator28 = _createForOfIteratorHelper(n),
            _step28;

        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _e31 = _step28.value;

            var _n19 = Hs.getState(_e31);

            if (void 0 === _n19 || Is.isEmpty(_n19.block) || _n19.block) {
              var _n20 = Ds.cellToGid(_e31, t.width);

              t.dynamicBlocks[_n20] = As.ALL;
            }
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      }

      function i(e, t, n) {
        return void 0 !== e && e >= 0 && e < n.width * n.height && t.data[e] > n.tileset.maxGID;
      }

      e.loadMap = function (e, t, n) {
        il.load(e + "", ys.MAP, function (i) {
          if (Is.isEmpty(i)) console.error("Error while loading map: " + e), n();else try {
            var _e32 = JSON.parse(i);

            n(_e32);
          } catch (r) {
            "SyntaxError" === r.name ? console.error("Error while parsing map: " + e) : "TypeError" === r.name ? console.error("Error while reading map: " + e) : console.error(r), console.error(i), js.showError(t.getContext("2d")), n();
          }
        });
      }, e.renderUI = function (e, t, n, i, r, o, a) {
        if ((a || i.showGrid || i.showEditorGrid || i.showFocus || i.showBlocks || i.showOnTops) && (!a || i.showFPS || i.showCellNumbers || i.showFocus) && !Is.isEmpty(i)) {
          if (!a && i.showBlocks && !Is.isEmpty(e) && (!Is.isEmpty(e.blocks) || !Is.isEmpty(e.dynamicBlocks))) {
            n.save(), n.globalAlpha = .5, n.fillStyle = $s.Color.YELLOW, n.strokeStyle = $s.Color.BLACK, n.lineWidth = 2;

            var _i12 = Is.isEmpty(e.blocks) ? As.NONE : e.blocks[o * e.width + r],
                _a7 = Is.isEmpty(e.dynamicBlocks) ? As.NONE : e.dynamicBlocks[o * e.width + r];

            (_i12 > As.NONE || _a7 > As.NONE) && (_a7 > As.NONE && (n.fillStyle = $s.Color.GREEN), Ds.isBlockDirectionBlocked(_i12 | _a7, As.UP) && (n.beginPath(), n.moveTo(r * t.cellW, o * t.cellH), n.lineTo((r + .5) * t.cellW, (o + .2) * t.cellH), n.lineTo((r + 1) * t.cellW, o * t.cellH), n.fill(), n.stroke()), Ds.isBlockDirectionBlocked(_i12 | _a7, As.DOWN) && (n.beginPath(), n.moveTo(r * t.cellW, (o + 1) * t.cellH), n.lineTo((r + .5) * t.cellW, (o + .8) * t.cellH), n.lineTo((r + 1) * t.cellW, (o + 1) * t.cellH), n.fill(), n.stroke()), Ds.isBlockDirectionBlocked(_i12 | _a7, As.LEFT) && (n.beginPath(), n.moveTo(r * t.cellW, o * t.cellH), n.lineTo((r + .2) * t.cellW, (o + .5) * t.cellH), n.lineTo(r * t.cellW, (o + 1) * t.cellH), n.fill(), n.stroke()), Ds.isBlockDirectionBlocked(_i12 | _a7, As.RIGHT) && (n.beginPath(), n.moveTo((r + 1) * t.cellW, o * t.cellH), n.lineTo((r + .8) * t.cellW, (o + .5) * t.cellH), n.lineTo((r + 1) * t.cellW, (o + 1) * t.cellH), n.fill(), n.stroke())), n.restore();
          }

          if (!a && i.showOnTops && !Is.isEmpty(e) && !Is.isEmpty(e.tileset.onTop)) {
            var _i13 = Ds.cellToGid({
              i: r,
              j: o
            }, e.width);

            Ds.normalizeZIndex(e.tileset.onTop[_i13]) > 0 && (n.save(), n.globalAlpha = .6, n.beginPath(), n.fillStyle = $s.Color.AQUA, n.arc(Math.floor((r + .5) * t.cellW), Math.floor((o + .5) * t.cellH), 10, 0, $s.DOUBLE_PI), n.closePath(), n.fill(), n.fillStyle = $s.Color.DARKBLUE, n.font = "bold 14px Arial", n.fillText("" + e.tileset.onTop[_i13], (r + .35) * t.cellW, (o + .65) * t.cellH), n.restore());
          }

          !a && i.showGrid && (n.strokeStyle = $s.Color.RED, n.strokeRect(r * t.cellW, o * t.cellH, t.cellW, t.cellH)), !a && i.showEditorGrid && (n.save(), n.globalAlpha = .4, n.strokeStyle = $s.Color.GREY, n.strokeRect(r * t.cellW, o * t.cellH, t.cellW, t.cellH), n.restore()), !a && i.showCellNumbers && (n.fillStyle = $s.Color.RED, n.font = "bold 10px Arial", n.fillText(r + "," + o, r * t.cellW + 1, o * t.cellH + 10));
        }
      }, e.renderGlobalUI = function (e, t, n) {
        if (n.enableSelection && (void 0 !== n.selectCellStart || void 0 !== n.selectEventCell)) {
          var _i14, _r9;

          t.save();
          var _o10 = e.cellW,
              _a8 = e.cellH;

          if (void 0 !== n.selectCellStart) {
            if (_i14 = n.selectCellStart.i * e.cellW, _r9 = n.selectCellStart.j * e.cellH, void 0 !== n.selectCellEnd) {
              var _t20 = n.selectCellEnd.i * e.cellW,
                  _s5 = n.selectCellEnd.j * e.cellH;

              _i14 > _t20 ? (_o10 = _i14 - _t20, _i14 = _t20) : _o10 = _t20 - _i14, _r9 > _s5 ? (_a8 = _r9 - _s5, _r9 = _s5) : _a8 = _s5 - _r9, _o10 += e.cellW, _a8 += e.cellH;
            }

            t.strokeStyle = $s.Color.RED, t.lineWidth = 3;
          } else _i14 = n.selectEventCell.i * e.cellW, _r9 = n.selectEventCell.j * e.cellH, t.strokeStyle = $s.Color.LIME, t.lineWidth = 2;

          t.strokeRect(_i14, _r9, _o10, _a8), t.restore();
        }
      }, e.resizeMap = function (e, t, n) {
        var i = e.width,
            r = t,
            o = e.height,
            a = n;
        if (i === r && o === a || Is.isEmpty(e)) return;
        var s,
            l,
            c = Math.min(i, r);
        if (r < i) s = i - r;else {
          l = [];

          for (var _e33 = 0; _e33 < r - i; _e33++) {
            l[_e33] = null;
          }
        }

        for (var _t21 = 0; _t21 < e.layers.length; _t21++) {
          var _n21 = e.layers[_t21];

          if (void 0 !== _n21.data) {
            if (i !== r) for (var _e34 = 0; _e34 < o; _e34++) {
              var _n21$data;

              void 0 !== s ? _n21.data.splice(c + _e34 * r, s) : void 0 !== l ? (_n21$data = _n21.data).splice.apply(_n21$data, [c + _e34 * r, 0].concat(_toConsumableArray(l))) : console.error("Unexpected case");
            }

            if (o > a && (_n21.data.length = r * a), o < a) {
              var _e35 = [];

              for (var _t22 = 0; _t22 < r - i; _t22++) {
                _e35[_t22] = void 0;
              }

              for (var _t23 = i; _t23 < r; _t23++) {
                _n21.data.concat(_e35);
              }
            }
          }
        }

        e.height = n, e.width = t;
      }, e.shiftMap = function (e, t, n) {
        t < -e.width && (t = 1 - e.width), n < -e.height && (n = 1 - e.height);
        var i = e.height;
        e.width += t, e.height += n;
        var r = [];
        if (t > 0) for (var _e36 = 0; _e36 < t; _e36++) {
          r[_e36] = null;
        }
        var o = [];
        if (n > 0) for (var _t24 = 0; _t24 < e.width; _t24++) {
          o[_t24] = null;
        }

        for (var _a9 = 0; _a9 < e.layers.length; _a9++) {
          var _s6 = e.layers[_a9];

          if (void 0 !== _s6.data) {
            if (t > 0) for (var _t25 = 0; _t25 < i; _t25++) {
              var _s6$data;

              (_s6$data = _s6.data).splice.apply(_s6$data, [_t25 * e.width, 0].concat(r));
            } else if (t < 0) for (var _n22 = 0; _n22 < i; _n22++) {
              _s6.data.splice(_n22 * e.width, -t);
            }
            if (n > 0) for (var _e37 = 0; _e37 < n; _e37++) {
              var _s6$data2;

              (_s6$data2 = _s6.data).splice.apply(_s6$data2, [0, 0].concat(o));
            } else n < 0 && _s6.data.splice(0, -n * e.width);
          }
        }

        var _iterator29 = _createForOfIteratorHelper(e.events),
            _step29;

        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var _i15 = _step29.value;
            _i15.i += t, _i15.j += n;
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
      }, e.initTransientData = function (r, o) {
        var a,
            s = r.map,
            l = r.grid;
        r instanceof qs && (a = r.hero), Fs.initTransientData(s.tileset, l), function (n, i) {
          Is.isEmpty(n.autotilesets) ? i() : Fs.initTransientDataAutotiles(Object.values(n.autotilesets)).then(function () {
            for (var _i16 = 0; _i16 < n.layers.length; _i16++) {
              var _r10 = n.layers[_i16];

              if (void 0 !== _r10.data) {
                _r10.autotileData = [];

                for (var _i17 = 0; _i17 < _r10.data.length; _i17++) {
                  if (e.isThisAnAutotileCell(_i17, _r10, n)) {
                    var _e38 = t(_i17, {
                      w: n.width,
                      h: n.height
                    }, _r10.data[_i17], _r10);

                    _r10.autotileData.push(_e38);
                  } else _r10.autotileData.push(null);
                }
              }
            }

            i();
          });
        }(s, function () {
          if (function (e) {
            if (e.blocks = [], !Is.isEmpty(e.layers) && !Is.isEmpty(e.tileset.blocks)) {
              for (var _t26 = 0; _t26 < e.height * e.width; _t26++) {
                e.blocks[_t26] = 0;
              }

              for (var _t27 = 0; _t27 < e.layers.length; _t27++) {
                var _n23 = e.layers[_t27];
                if (void 0 !== _n23.data) for (var _t28 = 0; _t28 < _n23.data.length; _t28++) {
                  var _r11 = void 0;

                  if (i(_t28, _n23, e)) {
                    var _i18 = _n23.data[_t28];
                    void 0 === e.autotilesets || void 0 === e.autotilesets[_i18] ? console.warn("Autotile: NaN" + _t28 + " in map: " + e.id) : _r11 = e.autotilesets[_i18].blocked ? As.ALL : As.NONE;
                  } else {
                    var _i19 = _n23.data[_t28];
                    if (null === _i19 || _i19 < 0 || _i19 >= e.tileset.blocks.length) continue;
                    if (void 0 !== e.tileset.onTop && Ds.normalizeZIndex(e.tileset.onTop[_i19]) > 0) continue;
                    _r11 = e.tileset.blocks[_i19];
                  }

                  void 0 === _r11 && (_r11 = As.NONE), e.blocks[_t28] = _r11;
                }
              }
            }
          }(s), n(a, s), Is.isEmpty(s.events)) s.events = [];else {
            s.maxEventId = 0;

            var _iterator30 = _createForOfIteratorHelper(s.events),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var _e39 = _step30.value;
                _e39.id > s.maxEventId && (s.maxEventId = _e39.id), Hs.initTransientData(s, l, _e39);
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }
          }
          s.width = parseInt(s.width + ""), s.height = parseInt(s.height + ""), o();
        });
      }, e.updateDynamicData = function (e, t) {
        n(e, t);
      }, e.getAutotileProximityValue = t, e.isMovementTowardsTargetBlocked = function (e, t, n, i, r) {
        var o = Ds.getDirectionTarget({
          i: t,
          j: n
        }, i),
            a = !1;
        return void 0 !== r && 4 === Ds.getDirection(o, r) && (a = !0), Ds.isMovementBlocked(e, t, n, i, a);
      }, e.isThisAnAutotileCell = i;
    }(Bs || (Bs = {})), function (e) {
      function t(e, t) {
        var n = e.states[t].condition;
        return n in Es ? Es[n](e) : (console.error('Condition not found: "' + n + '", on event: ' + e.name), !1);
      }

      function n(e, t, n, i) {
        return e.newTarget = {
          i: t,
          j: n
        }, e.newOnTargetReached = i, !0;
      }

      function i(e) {
        e.path = void 0, e.movementStartTime = void 0, e.movementDirection = void 0, e.target = void 0;
      }

      function r(e) {
        var t = o(e);

        if (void 0 !== t) {
          var _e40 = t.mSpeed;
          if (!Is.isEmpty(_e40)) return _e40;
        }

        return $s.MEDIUM_MSPEED;
      }

      function o(e) {
        if (void 0 !== e && void 0 !== e.currentState && void 0 !== e.states) return e.states[e.currentState];
      }

      function a(e, t) {
        var n = t.states[t.currentState].direction;
        void 0 === n && (n = 4);
        var i = Ds.getNextAbsoluteDirection(n, 0),
            r = Bs.isMovementTowardsTargetBlocked(e, t.i, t.j, i) ? 0 : 3,
            o = Bs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 2,
            a = Bs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 2,
            s = r + o + a + (Bs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 1),
            l = 4;

        if (s > 0) {
          var _e41 = Ds.getRandomInteger(1, s);

          _e41 -= r, _e41 <= 0 ? l = i : (_e41 -= o, _e41 <= 0 || (_e41 -= a), l = 4);
        }

        return Ds.getDirectionTarget(t, l);
      }

      e.update = function (e, i, r, o, s) {
        var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        if (Is.isEmpty(e.movementStartTime) || (e.movementStartTime += l), !Is.isEmpty(e.states)) {
          var _s7 = -1;

          for (var _n24 = e.states.length - 1; _n24 >= 0; _n24--) {
            if (t(e, _n24)) {
              _s7 = _n24;
              break;
            }
          }

          if (e.currentState = _s7, e === r) return;
          if (-1 !== e.currentState && void 0 !== e.states[e.currentState].movement && void 0 === e.movementStartTime && function (e, t) {
            var i,
                _r13,
                o = t.states[t.currentState].movement;

            switch (o.strategy) {
              case "target":
                void 0 === o.target && (console.warn("event: " + t.id + " has strategy=target, but target is undefined. Will fallback to random"), o.target = a(e, t)), i = o.target;
                break;

              case "event":
                var _s8;

                var _iterator31 = _createForOfIteratorHelper(e.events),
                    _step31;

                try {
                  for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                    var _t29 = _step31.value;
                    _t29.id === o.eventId && (_s8 = _t29);
                  }
                } catch (err) {
                  _iterator31.e(err);
                } finally {
                  _iterator31.f();
                }

                if (void 0 === _s8) return void console.error("Cannot find event: " + o.eventId);

                var _l6 = Ys(e, t, _s8, o.pathfinder);

                i = Ds.getDirectionTarget(t, _l6), _r13 = function r(i) {
                  var a = Ys(e, t, _s8, o.pathfinder);

                  if (4 !== a) {
                    var _e42 = Ds.getDirectionTarget(t, a);

                    n(t, _e42.i, _e42.j, _r13);
                  } else setTimeout(function () {
                    _r13(i);
                  }, 1e3);
                };
                break;

              case "random":
                i = a(e, t), _r13 = function _r12() {
                  setTimeout(function () {
                    var i = a(e, t);
                    n(t, i.i, i.j, _r13);
                  }, o.pause);
                };
                break;

              default:
                return void console.error("Unexpected movement strategy: " + o.strategy + " for event: " + t.id);
            }

            void 0 !== i && n(t, i.i, i.j, _r13);
          }(i.getMap(), e), function (e, t, n, i) {
            var r;

            switch (e.states[t].trigger) {
              case 0:
                if (void 0 === i || i.i !== e.i || i.j !== e.j) {
                  r = !1;
                  break;
                }

              case 1:
                var _o11 = Math.abs(e.i - n.i),
                    _a10 = Math.abs(e.j - n.j);

                r = 0 === _o11 && _a10 <= 1 || _o11 <= 1 && 0 === _a10;
                break;

              case 2:
                r = e.i === n.i && e.j === n.j;
                break;

              case 3:
                r = !0;
                break;

              default:
                console.error("Unexpected case: " + e.states[t].trigger), r = !1;
            }

            return r = function (e, t) {
              return 1 !== e.trigger && 2 !== e.trigger || (t ? e.alreadyTriggered ? t = !1 : e.alreadyTriggered = !0 : e.alreadyTriggered = !1), t;
            }(e.states[t], r), r;
          }(e, e.currentState, r, o)) return e.currentState;
        }
      }, e.startMovement = n, e.stopMovement = i, e.manageMovements = function e(t, n, o, a, s) {
        var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var c = !1;

        if (!Is.isEmpty(o.movementStartTime)) {
          if (0 === l && (l = Is.now() - o.movementStartTime), void 0 === o.target) return console.error("No target set for movement"), !0;

          var _e43,
              _u = o.target,
              _d = function (e, t, n) {
            var i = 4,
                r = Ds.cellToGid(n, e.width),
                o = Ds.getMapStaticBlock(e, r),
                a = Ds.getMapDynamicBlock(e, r);
            if (Ds.isBlockDirectionBlocked(o, As.ALL) && !Ds.isBlockDirectionBlocked(a, As.ALL) || r < 0 || r >= e.width * e.height) i = 4;else if (Is.isEmpty(t.movementDirection) || 4 !== t.movementDirection) {
              try {
                i = Ys(e, t, n);
              } catch (t) {
                console.error(t);
              }

              var _o12 = Ds.getDirectionTarget(t, i),
                  _a11 = Ds.cellToGid(_o12, e.width),
                  _s9 = Ds.getMapDynamicBlock(e, _a11);

              Ds.isDirectionEnumBlocked(_s9, Ds.getOpposedDirections(i)) && (i = 4, _a11 === r && void 0 !== t.onTargetReached && t.onTargetReached(n));
            } else i = t.movementDirection;
            return i;
          }(t, o, _u),
              _f = 0,
              _p = 0;

          switch (_d) {
            case 3:
              _f = Math.min(n.cellW, Math.floor(r(o) * l)), _e43 = _f, _f *= -1;
              break;

            case 1:
              _f = Math.min(n.cellW, Math.floor(r(o) * l)), _e43 = _f;
              break;

            case 0:
              _p = Math.min(n.cellH, Math.floor(r(o) * l)), _e43 = _p, _p *= -1;
              break;

            case 2:
              _p = Math.min(n.cellH, Math.floor(r(o) * l)), _e43 = _p;
              break;

            case 4:
              i(o), void 0 !== o.onTargetReached && o.onTargetReached(_u);
          }

          if (4 !== _d && (void 0 !== o.states[o.currentState] && (o.states[o.currentState].direction = _d), o.movementDirection = _d, o.position = {
            x: o.i * n.cellW + _f,
            y: o.j * n.cellH + _p
          }, a(_f, _p), _e43 === n.cellW)) {
            c = !0, o.movementDirection = void 0, o.movementStartTime = Is.now(), l -= Math.floor(_e43 / r(o));

            var _t30 = n.mapCanvasToCell(o.position);

            o.i = _t30.i, o.j = _t30.j, s(_f, _p);

            var _a12 = n.mapCellToCanvas(o.target);

            (!Is.isEmpty(o.newTarget) || o.position.x === _a12.x && o.position.y === _a12.y) && i(o);
          }
        }

        return !Is.isEmpty(o.newTarget) && Is.isEmpty(o.movementStartTime) && (o.target = o.newTarget, o.onTargetReached = o.newOnTargetReached, o.newTarget = void 0, o.newOnTargetReached = void 0, o.movementStartTime = Is.now(), c = c || e(t, n, o, a, s, l)), c;
      }, e.addDirectionToPath = function (e, t, n) {
        void 0 === e.path && (e.path = []), e.path[e.path.length - 1] !== t && e.path.push(t), !Is.isEmpty(n) && e.path.length > n && e.path.shift();
      }, e.render = function (e, t, n, i, r) {
        var a,
            s = o(t);
        if (void 0 !== s) if (Is.isEmpty(s.charaset) ? Is.isEmpty(s.gid) || console.warn("Not implemented") : a = il.loadImageFromCache(s.charaset, ys.CHAR), void 0 !== t.position) {
          if (i || (n.save(), n.strokeStyle = $s.Color.GREEN, n.lineWidth = 2, n.strokeRect(t.position.x, t.position.y, e.cellW, e.cellH)), void 0 !== a) {
            var _o13 = Math.floor(a.width / 4),
                _l7 = Math.floor(a.height / 4),
                _c3 = _o13,
                _u2 = _l7;

            i || (_l7 > _o13 ? (_c3 = Math.floor(_o13 * e.cellH / _l7), _u2 = e.cellH) : (_u2 = Math.floor(_l7 * e.cellW / _o13), _c3 = e.cellW));

            var _d2,
                _f2 = 0;

            if (_d2 = Is.isEmpty(s.frequencyVal) ? $s.MEDIUM_FREQUENCY : s.frequencyVal, Is.isEmpty(t.target)) {
              if (1 === s.rotation || 2 === s.rotation) {
                Is.isEmpty(s.animationStartTime) && (s.animationStartTime = Is.now());

                var _e44 = Is.now() - s.animationStartTime;

                _d2 /= 4;

                var _t31 = Math.floor(_e44 * _d2 % 4);

                2 === s.rotation && (3 === _t31 ? _t31 = 1 : 1 === _t31 && (_t31 = 3)), s.direction = _t31;
              } else s.animationStartTime = void 0;
            } else {
              Is.isEmpty(s.animationStartTime) && (s.animationStartTime = Is.now());

              var _e45 = Is.now() - s.animationStartTime;

              _f2 = _o13 * Math.floor(_e45 * _d2 % 4);
            }
            var _p2 = 0;

            switch (s.direction) {
              case 3:
                _p2 = _l7;
                break;

              case 1:
                _p2 = 2 * _l7;
                break;

              case 0:
                _p2 = 3 * _l7;
            }

            var _h = t.position.x + Math.floor((e.cellW - _c3) / 2),
                _g = t.position.y + Math.floor(-_u2 + e.cellH);

            if (n.save(), Is.isEmpty(s.opacity) || 100 === s.opacity || (n.globalAlpha = s.opacity / 100), void 0 !== r && r.i === t.i && r.j === t.j) {
              var _t32 = e.mapCellToCanvas(r);

              n.save(), n.beginPath(), n.fillStyle = $s.Color.YELLOW, n.scale(2, 1), n.arc(Math.floor((_t32.x + e.cellW / 2) / 2), _t32.y + e.cellH - 4, 8, 0, $s.DOUBLE_PI), n.closePath(), n.globalAlpha = .4, n.fill(), n.restore(), n.shadowColor = $s.Color.YELLOW, n.shadowBlur = 8;
            }

            n.drawImage(a, _f2, _p2, _o13, _l7, _h, _g, _c3, _u2), n.restore();
          }
        } else console.error("Event position undefined: " + t);
      }, e.isVisible = function (e, t, n, i, r, a, s, l) {
        return e.i === a && e.j === s && !!Rs.isVisible(o(e), l) && e.i >= i && e.i <= r && e.j >= t && e.j <= n;
      }, e.saveMem = function (e, t, n) {
        Is.isEmpty(e.memory) && (e.memory = {}), e.memory[t] = n;
      }, e.loadMem = function (e, t) {
        if (!Is.isEmpty(e.memory)) return e.memory[t];
      }, e.deleteMem = function (e, t) {
        Is.isEmpty(e.memory) || delete e.memory[t];
      }, e.initTransientData = function (t, n, r) {
        if (Rs.initTransientData(n, e.getState(r)), void 0 !== r) return i(r), r.position = {
          x: r.i * n.cellW,
          y: r.j * n.cellH
        }, r;
      }, e.getState = o;
    }(Hs || (Hs = {}));

    var Ks = /*#__PURE__*/function () {
      function Ks(e, t, n) {
        _classCallCheck(this, Ks);

        this.event = e, this.hero = t, this.scene = n;
      }

      _createClass(Ks, [{
        key: "getConfig",
        value: function getConfig() {
          return void 0 !== this.scene.save && void 0 !== this.scene.save.config ? this.scene.save.config : Ls.getConfig();
        }
      }, {
        key: "showSimpleDialog",
        value: function showSimpleDialog(e, t) {
          var n = this.getConfig();
          return Ws.showSimpleDialog(this.event, this.scene, this.hero, e, n, t), !0;
        }
      }, {
        key: "showComplexDialog",
        value: function showComplexDialog(e, t) {
          var n = this.getConfig();
          return Ws.showComplexDialog(this.event, this.scene, this.hero, e, n, this.scene.dialogScriptLauncher, t), !0;
        }
      }, {
        key: "moveToTarget",
        value: function moveToTarget(e, t, n) {
          Hs.startMovement(e, t.i, t.j, n);
        }
      }, {
        key: "stepToTarget",
        value: function stepToTarget(e, t, n) {
          var i = Ds.getDirection(t, this.event);
          this.stepToDirection(e, i, n);
        }
      }, {
        key: "stepToDirection",
        value: function stepToDirection(e, t, n) {
          var i = Ds.moveToDirection(e, t);
          this.moveToTarget(e, i, n);
        }
      }, {
        key: "stepFromTarget",
        value: function stepFromTarget(e, t, n) {
          var i = Ds.getDirection(t, e);
          i = Ds.getOpposedDirections(i), this.stepToDirection(e, i, n);
        }
      }, {
        key: "getEventById",
        value: function getEventById(e) {
          return this.scene.map.events.find(function (t, n, i) {
            return t.id === e;
          });
        }
      }, {
        key: "wait",
        value: function wait(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

          var n = function n(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            return new Promise(e <= 0 ? function (e, t) {
              e(!0);
            } : t ? function (t, i) {
              n(e - 100, !0).then(function () {
                setTimeout(function () {
                  console.log("TIMER: " + e), t(!0);
                }, 97);
              });
            } : function (t, n) {
              setTimeout(function () {
                t(!0);
              }, e);
            });
          };

          return n(e, t);
        }
      }, {
        key: "saveMem",
        value: function saveMem(e, t) {
          Hs.saveMem(this.event, e, t);
        }
      }, {
        key: "loadMem",
        value: function loadMem(e) {
          return Hs.loadMem(this.event, e);
        }
      }, {
        key: "incrementStateVar",
        value: function incrementStateVar() {
          var e = this.loadMem(gs),
              t = 0;
          return void 0 !== e && (t = Number.parseInt(e), Number.isNaN(t) && (t = 0)), t++, this.saveMem(gs, t + ""), t;
        }
      }, {
        key: "setStateVar",
        value: function setStateVar(e) {
          this.saveMem(gs, e + "");
        }
      }, {
        key: "goToMap",
        value: function goToMap(e, t) {
          var n = this.scene;
          Ps.loadMapSave(n, e, t, function () {
            n.moveFocusToTarget(t), Hs.stopMovement(n.hero);
          });
        }
      }, {
        key: "changeSkin",
        value: function changeSkin(e) {
          this.scene.save.config.skin = e;
        }
      }]);

      return Ks;
    }();

    Ks.tooltip = "no description provided";
    var Qs = "msg",
        Js = "dlg";

    var Xs = /*#__PURE__*/function (_Ks) {
      _inherits(Xs, _Ks);

      var _super2 = _createSuper(Xs);

      function Xs(e, t, n) {
        _classCallCheck(this, Xs);

        return _super2.call(this, e, t, n);
      }

      _createClass(Xs, [{
        key: "speak",
        value: function speak() {
          var e = this.loadMem(Qs + (this.event.currentState + 1));
          Is.isEmpty(e) && (e = this.loadMem(Qs)), this.showSimpleDialog(e, Ss);
        }
      }, {
        key: "dialog",
        value: function dialog() {
          var e = this.event.states[this.event.currentState];
          void 0 !== e.dialog && this.showComplexDialog(e.dialog, Ss);
        }
      }, {
        key: "flee",
        value: function flee() {
          var e = this;
          return new Promise(function (t, n) {
            e.stepFromTarget(e.hero, e.event, t);
          });
        }
      }]);

      return Xs;
    }(Ks);

    Xs.tooltip = "Basic script with simple actions";

    var Zs = /*#__PURE__*/function (_Ks2) {
      _inherits(Zs, _Ks2);

      var _super3 = _createSuper(Zs);

      function Zs() {
        _classCallCheck(this, Zs);

        return _super3.apply(this, arguments);
      }

      _createClass(Zs, [{
        key: "faceTheHero",
        value: function faceTheHero() {
          var e = this.getEventById(Zs.eventId);
          void 0 !== e ? e.states[e.currentState].direction = Ds.getDirection(this.hero, e) : console.error("Cannot find Ann! id:" + Zs.eventId);
        }
      }]);

      return Zs;
    }(Ks);

    Zs.eventId = 2, Zs.tooltip = "Script for Ann, in the farm map";

    var el = /*#__PURE__*/function (_Ks3) {
      _inherits(el, _Ks3);

      var _super4 = _createSuper(el);

      function el() {
        _classCallCheck(this, el);

        return _super4.apply(this, arguments);
      }

      _createClass(el, [{
        key: "triggerQuest",
        value: function triggerQuest() {
          this.setStateVar(1);
        }
      }]);

      return el;
    }(Ks);

    el.tooltip = "Script for Asgan, in the woods map";

    var tl = /*#__PURE__*/function (_Ks4) {
      _inherits(tl, _Ks4);

      var _super5 = _createSuper(tl);

      function tl() {
        _classCallCheck(this, tl);

        return _super5.apply(this, arguments);
      }

      _createClass(tl, [{
        key: "forest",
        value: function forest() {
          this.goToMap("1", {
            i: 21,
            j: 1
          });
        }
      }, {
        key: "farm",
        value: function farm() {
          this.goToMap("0", {
            i: 15,
            j: 21
          }), this.hero.movementDirection = 0;
        }
      }, {
        key: "farmOutsideHouse",
        value: function farmOutsideHouse() {
          this.goToMap("0", {
            i: 13,
            j: 16
          }), this.hero.movementDirection = 2;
        }
      }, {
        key: "house",
        value: function house() {
          this.goToMap("3", {
            i: 13,
            j: 12
          }), this.hero.movementDirection = 2;
        }
      }]);

      return tl;
    }(Ks);

    tl.tooltip = "Provide transportation from one map to another";

    var nl = /*#__PURE__*/function (_Ks5) {
      _inherits(nl, _Ks5);

      var _super6 = _createSuper(nl);

      function nl() {
        _classCallCheck(this, nl);

        return _super6.apply(this, arguments);
      }

      _createClass(nl, [{
        key: "testAction",
        value: function testAction() {
          this.showSimpleDialog("2", Ss);
        }
      }, {
        key: "giantTest",
        value: function giantTest() {
          this.showSimpleDialog("4", Ss);
          var e = this;
          this.wait(1e3).then(function () {
            e.stepFromTarget(e.event, e.hero);
          }), this.incrementStateVar();
        }
      }, {
        key: "giantTest2",
        value: function giantTest2() {
          this.showSimpleDialog("5", Ss);
          var e = this;
          this.wait(1e3).then(function () {
            e.stepFromTarget(e.event, e.hero);
          }), this.incrementStateVar();
        }
      }, {
        key: "giantTest3",
        value: function giantTest3() {
          this.showSimpleDialog("6", Ss);
          var e = this;
          this.moveToTarget(e.event, {
            i: 2,
            j: 4
          }, function () {
            e.setStateVar(0);
          });
        }
      }, {
        key: "move3ToRight",
        value: function move3ToRight() {
          this.moveToTarget(this.event, {
            i: this.event.i + 3,
            j: this.event.j
          });
        }
      }]);

      return nl;
    }(Ks);

    var il;
    nl.tooltip = "Script for tests", function (t) {
      var n = base_path + "data/",
          i = base_path + "assets/",
          r = base_path + "assetlist/",
          o = base_path + "edit/",
          a = "@";
      var s = new Map();
      var l,
          c = new Map(),
          u = new Map();

      function d(e, t, n) {
        p($s.RequestType.GET, void 0, e, t, n);
      }

      function f(e, t, n) {
        p($s.RequestType.POST, t, e, n);
      }

      function p(e, t, n, i, r) {
        var o = new XMLHttpRequest();
        o.onload = function (e) {
          i(this.responseText);
        }, o.onerror = function (e) {
          console.error("Error for request to: " + n), console.error(e), i();
        }, o.ontimeout = function () {
          console.error("Timeout for request to: " + n), i();
        }, o.open(e, n, !0);

        try {
          void 0 !== r && o.setRequestHeader("lang", r), Is.isEmpty(t) || e !== $s.RequestType.POST ? o.send() : o.send(t);
        } catch (e) {
          "NetworkError" === e.name ? console.error("If you are working locally on Chrome, please launch it with option --allow-file-access-from-files") : (console.error(e), console.trace()), i();
        }
      }

      function h(e, t, r, o) {
        Is.isEmpty(e) && console.error("Trying to load empty file!");

        var l = function (e, t) {
          var r;

          switch (t) {
            case ys.CHAR:
            case ys.FACE:
            case ys.SKIN:
            case ys.PICTURE:
            case ys.TILE:
            case ys.AUTOTILE:
              r = i;
              break;

            case ys.MAP:
            case ys.SAVE:
            case ys.STRING:
            case ys.DIALOG:
            case ys.GENERIC_MESSAGE:
            case ys.TILESET:
            case ys.AUTOTILESET:
              r = n;
              break;

            default:
              console.error("Unexpected resource type"), console.trace();
          }

          return r + t + "/" + e;
        }(e, t);

        if (void 0 === l) return console.error("Error while loading file: " + e + "/" + t), void r();

        switch (t) {
          case ys.AUTOTILE:
          case ys.CHAR:
          case ys.FACE:
          case ys.SKIN:
          case ys.TILE:
          case ys.PICTURE:
            var _n25 = s.get(t + a + e);

            void 0 !== _n25 ? r(_n25) : (_n25 = new Image(), _n25.onload = function () {
              s.set(t + a + e, _n25), r(_n25);
            }, _n25.src = l);
            break;

          case ys.AUTOTILESET:
          case ys.MAP:
          case ys.SAVE:
          case ys.STRING:
          case ys.DIALOG:
          case ys.GENERIC_MESSAGE:
          case ys.TILESET:
            d(l, r, o);
            break;

          default:
            console.error("Unexpected resource type"), console.trace(), r(void 0);
        }
      }

      function g(e, t) {
        var n = s.get(t + a + e);
        return void 0 === n && h(e, t, function (n) {
          void 0 === n || "string" == typeof n ? console.error("Error while reading image: " + e) : s.set(t + a + e, n);
        }), n;
      }

      t.loadProperties = function (e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "l4w";
        c.has(t) ? e(c.get(t)) : d(n + ys.CONFIGURATION + "/" + t + ".properties", function (n) {
          var i;
          void 0 !== n ? (i = function (e) {
            var t = new Map(),
                n = e.split("\n");

            for (var i = 0; i < n.length; i++) {
              var _e46 = n[i].trim();

              if ("" !== _e46 && 0 !== _e46.indexOf("#")) {
                var _n26 = _e46.split("="),
                    _r14 = +_n26[1];

                isNaN(_r14) ? t.has(_n26[1]) ? t.set(_n26[0], t.get(_n26[1])) : console.error("Error parsing properties file at line " + i + ": " + _r14) : t.set(_n26[0], _r14);
              }
            }

            return t;
          }(n), c.set(t, i)) : i = new Map(), e(i);
        });
      }, t.sendGETRequest = d, t.sendPOSTRequest = f, t.load = h, t.loadImageFromCache = g, t.loadDefaultImage = function (e) {
        return g("404.png", e);
      }, t.save = function (e, t, n, i) {
        var r = function (e, t) {
          return o + t + "/" + e;
        }(e, n);

        f(r, t, function (e) {
          void 0 !== e ? n === ys.STRING || n === ys.DIALOG || n === ys.GENERIC_MESSAGE ? i(e, !0) : i(void 0, !0) : (console.error("Empty response for: " + r), i(void 0, !1));
        });
      }, t.listResources = function (e, t) {
        d(r + e, function (e) {
          if (void 0 !== e) {
            var _n27 = JSON.parse(e);

            if (void 0 !== _n27) return void t(_n27);
          }

          console.error("Empty response from " + r), t([]);
        });
      }, t.listScriptClasses = function () {
        if (void 0 !== l) return l;
        var t = Object.keys(e).filter(function (t) {
          try {
            return e[t].prototype instanceof Ks;
          } catch (e) {
            return !1;
          }
        }),
            n = new Map();

        var _iterator32 = _createForOfIteratorHelper(t),
            _step32;

        try {
          for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
            var _i20 = _step32.value;
            n.set(_i20, e[_i20].tooltip);
          }
        } catch (err) {
          _iterator32.e(err);
        } finally {
          _iterator32.f();
        }

        return l = n, n;
      }, t.listScriptActions = function (t) {
        if (u.has(t)) return u.get(t);
        var n = new e[t](void 0, void 0, void 0),
            i = Object.getOwnPropertyNames(Object.getPrototypeOf(n)).filter(function (e) {
          try {
            return "constructor" !== e && !Is.isEmpty(e) && "function" == typeof n[e];
          } catch (e) {
            return !1;
          }
        });
        return u.set(t, i), i;
      }, t.listEventStateConditions = function () {
        return Object.keys(Es);
      };
    }(il || (il = {}));
    var rl = ps.extend({
      name: "login",
      props: {
        showIcons: {
          type: Boolean,
          required: !1,
          "default": !0
        }
      },
      data: function data() {
        return {
          loginStatus: !1,
          loginService: void 0,
          fbToken: void 0,
          flagLoggingOut: !1
        };
      },
      created: function created() {
        var e = document.createElement("meta");
        e.name = "google-signin-scope", e.content = "profile email", document.head.appendChild(e), e = document.createElement("meta"), e.name = "google-signin-client_id", e.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com", document.head.appendChild(e);
        var t = this;
        window.fbAsyncInit = function () {
          FB.init({
            appId: "1885551381575204",
            autoLogAppEvents: !1,
            cookie: !0,
            xfbml: !1,
            version: "v6.0"
          }), FB.Event.subscribe("auth.statusChange", function (e) {
            t.fbLoginStatusChangeCallback(e);
          }), FB.getLoginStatus(function (e) {
            t.fbLoginStatusChangeCallback(e);
          });
        }, window.gAsyncInit = function () {
          gapi.load("auth2", function () {
            gapi.auth2.getAuthInstance().isSignedIn.get() && (ps.set(t, "loginStatus", !0), ps.set(t, "loginService", "google"));
          });
        }, window.gLoginCallback = this.gLoginCallback;
      },
      methods: {
        logoutCallback: function logoutCallback() {
          ps.set(this, "loginStatus", !1), ps.set(this, "loginService", void 0), ps.set(this, "flagLoggingOut", !1);
        },
        logout: function logout() {
          if (this.loginStatus) {
            switch (this.loginService) {
              case "facebook":
                if (void 0 !== this.fbToken) {
                  ps.set(this, "flagLoggingOut", !0);

                  var _e47 = this;

                  FB.api("/me/permissions", "delete", {
                    access_token: _e47.fbToken
                  }, function (t) {
                    !0 !== t.success && console.error("Facebook permission revoking failed: ", t), FB.logout(function (t) {
                      _e47.logoutCallback();
                    });
                  }), this.fbToken = void 0;
                }

                break;

              case "google":
                gapi.auth2.getAuthInstance().signOut().then(this.logoutCallback());
                break;

              default:
                console.error("Unexpected loginService: " + this.loginService);
            }

            il.sendGETRequest("logout", function (e) {});
          } else console.error("Cannot logout, user is not currently logged in");
        },
        fbLoginStatusChangeCallback: function fbLoginStatusChangeCallback(e) {
          if ("connected" === e.status) {
            this.fbToken = e.authResponse.accessToken;
            var _t33 = {
              service: "facebook",
              token: e.authResponse.accessToken,
              userId: e.authResponse.userID
            };
            this.doLogin(_t33);
          }
        },
        gLoginCallback: function gLoginCallback(e) {
          var t = {
            service: "google",
            token: e.getAuthResponse().id_token
          };
          this.doLogin(t);
        },
        doLogin: function doLogin(e) {
          var t = this;
          il.sendPOSTRequest("/auth", JSON.stringify(e), function (n) {
            if (!Is.isEmpty(n)) try {
              if (JSON.parse(n).result) return ps.set(t, "loginStatus", !0), void ps.set(t, "loginService", e.service);
            } catch (e) {
              console.error(e);
            }
            ps.set(t, "loginStatus", !1), ps.set(t, "loginService", void 0), console.warn("Login with " + e.service + " failed");
          });
        }
      }
    });
    n(564);

    var ol = function (e, t, n, i, r, o, a, s) {
      var l,
          c = "function" == typeof e ? e.options : e;
      if (t && (c.render = t, c.staticRenderFns = [], c._compiled = !0), c._scopeId = "data-v-08ab550b", l) if (c.functional) {
        c._injectStyles = l;
        var u = c.render;

        c.render = function (e, t) {
          return l.call(t), u(e, t);
        };
      } else {
        var d = c.beforeCreate;
        c.beforeCreate = d ? [].concat(d, l) : [l];
      }
      return {
        exports: e,
        options: c
      };
    }(rl, hs);

    ol.options.__file = "src/client/components/Login.vue";
    var al = ol.exports;
    var sl, ll, cl, ul;
    !function (e) {
      e.check = function () {
        !function () {
          var e = document.createElement("canvas");
          if (!e.getContext || !e.getContext("2d")) console.error("HTML5 canvas is not supported");
        }();
      }, e.serviceWorker = function () {
        return void 0 === navigator.serviceWorker ? (console.warn("Service Workers are not supported"), !1) : "localhost" !== location.hostname && "https" !== location.protocol || (console.warn("Service Workers won't work when using local self-signed certificates. This could be fixed by trusting them, or using browser flags."), !1);
      }, e.webWorker = function () {
        return void 0 !== window.Worker || (console.warn("Web Workers are not supported"), !1);
      }, e.webSpeech = function () {
        return void 0 !== window.SpeechSynthesisUtterance || (console.warn("Web Speech API are not supported"), !1);
      };
    }(sl || (sl = {}));

    var dl = /*#__PURE__*/function (_Vs2) {
      _inherits(dl, _Vs2);

      var _super7 = _createSuper(dl);

      function dl(e) {
        var _this2;

        _classCallCheck(this, dl);

        _this2 = _super7.call(this, e), _this2.renderingConfiguration.showEditorGrid = !0, _this2.renderingConfiguration.enableSelection = !0, _this2.renderingConfiguration.enableAntialiasing = !1, _this2.requestedNewFrame = !0;
        return _this2;
      }

      _createClass(dl, [{
        key: "mainGameLoop_pre",
        value: function mainGameLoop_pre() {
          if (!_get(_getPrototypeOf(dl.prototype), "mainGameLoop_pre", this).call(this)) return !1;
          if (void 0 === this.pointer && !this.requestedNewFrame) return !1;
          var e = void 0 === this.oldDrawArea || this.requestedNewFrame;
          return this.requestedNewFrame && (this.requestedNewFrame = !1), this.newDrawArea = this.getRedrawArea(e), this.redrawArea = Ds.mergeRectangles(this.oldDrawArea, this.newDrawArea), this.grid.clear(this.context, this.redrawArea), !0;
        }
      }, {
        key: "mainGameLoop_post",
        value: function mainGameLoop_post() {
          _get(_getPrototypeOf(dl.prototype), "mainGameLoop_post", this).call(this), this.oldDrawArea = this.newDrawArea;
        }
      }, {
        key: "render",
        value: function render(e, t) {
          _get(_getPrototypeOf(dl.prototype), "render", this).call(this, e, t, !1);
        }
      }, {
        key: "getRedrawArea",
        value: function getRedrawArea(e, t) {
          var n;
          n = e ? void 0 : this.pointer;
          var i = this.grid.getBoundariesX(this.focus.x, this.getSceneWidth(), n, t),
              r = this.grid.getBoundariesY(this.focus.y, this.getSceneHeight(), n, t);
          return {
            x: i.min,
            y: r.min,
            h: r.max - r.min,
            w: i.max - i.min
          };
        }
      }, {
        key: "toggleEditorGrid",
        value: function toggleEditorGrid(e) {
          this.renderingConfiguration.showEditorGrid = null != e ? e : !this.renderingConfiguration.showEditorGrid, this.requestedNewFrame = !0;
        }
      }, {
        key: "renderPointer",
        value: function renderPointer() {
          void 0 !== this.pointer && (this.context.save(), this.context.globalAlpha = .4, this.context.fillStyle = $s.Color.YELLOW, this.context.fillRect(this.pointer.i * this.grid.cellW, this.pointer.j * this.grid.cellH, this.grid.cellW, this.grid.cellH), this.context.restore());
        }
      }, {
        key: "select",
        value: function select(e, t) {
          void 0 !== e && void 0 !== t && (this.renderingConfiguration.selectCellStart = {
            i: e,
            j: t
          }, this.renderingConfiguration.selectCellEnd = void 0);
        }
      }, {
        key: "selectEnd",
        value: function selectEnd(e, t) {
          void 0 !== e && void 0 !== t && (this.renderingConfiguration.selectCellEnd = {
            i: e,
            j: t
          });
        }
      }, {
        key: "cleanSelection",
        value: function cleanSelection() {
          this.renderingConfiguration.selectCellStart = void 0, this.renderingConfiguration.selectCellEnd = void 0, this.requestedNewFrame = !0;
        }
      }, {
        key: "getSelectionArea",
        value: function getSelectionArea() {
          if (void 0 === this.renderingConfiguration.selectCellStart) return;
          var e,
              t,
              n = this.renderingConfiguration.selectCellStart.i,
              i = this.renderingConfiguration.selectCellStart.j;

          if (void 0 !== this.renderingConfiguration.selectCellEnd) {
            if (e = this.renderingConfiguration.selectCellEnd.i, t = this.renderingConfiguration.selectCellEnd.j, n > e) {
              var _t34 = n;
              n = e, e = _t34;
            }

            if (i > t) {
              var _e48 = i;
              i = t, t = _e48;
            }
          } else e = this.renderingConfiguration.selectCellStart.i, t = this.renderingConfiguration.selectCellStart.j;

          return {
            x: n,
            y: i,
            w: e - n,
            h: t - i
          };
        }
      }, {
        key: "renderDynamicElements",
        value: function renderDynamicElements(e, t, n, i, r, o, a) {}
      }, {
        key: "drawBottleneck",
        value: function drawBottleneck(e, t, n, i, r, o, a, s) {
          e.clearRect(r.i * this.grid.cellW + o, r.j * this.grid.cellH + a, s.w, s.h), _get(_getPrototypeOf(dl.prototype), "drawBottleneck", this).call(this, e, t, n, i, r, o, a, s);
        }
      }, {
        key: "drawAngle",
        value: function drawAngle(e, t, n, i, r, o, a, s, l) {
          e.clearRect(a.i * this.grid.cellW + s, a.j * this.grid.cellH + l, r, o), _get(_getPrototypeOf(dl.prototype), "drawAngle", this).call(this, e, t, n, i, r, o, a, s, l);
        }
      }]);

      return dl;
    }(Vs);

    var fl = /*#__PURE__*/function (_dl) {
      _inherits(fl, _dl);

      var _super8 = _createSuper(fl);

      function fl() {
        _classCallCheck(this, fl);

        return _super8.apply(this, arguments);
      }

      _createClass(fl, [{
        key: "updateSize",
        value: function updateSize(e, t) {
          this.map.tileset.imageWidth = e, this.map.tileset.imageHeight = t, this.map.width = Math.floor(e / this.grid.cellW), this.map.height = Math.floor(t / this.grid.cellH), this.grid.updateSize(this.map.width, this.map.height), this.requestedNewFrame = !0;
        }
      }, {
        key: "getRedrawArea",
        value: function getRedrawArea(e) {
          var t = this.getSelectionArea();
          return _get(_getPrototypeOf(fl.prototype), "getRedrawArea", this).call(this, e, t);
        }
      }, {
        key: "select",
        value: function select(e, t) {
          _get(_getPrototypeOf(fl.prototype), "select", this).call(this, e, t), this.requestedNewFrame = !0;
        }
      }]);

      return fl;
    }(dl);

    var pl = /*#__PURE__*/function (_fl) {
      _inherits(pl, _fl);

      var _super9 = _createSuper(pl);

      function pl(e, t, n) {
        var _this3;

        _classCallCheck(this, pl);

        _this3 = _super9.call(this, e), _this3.renderingConfiguration.enableSelection = !1, _this3.changeTileEditMode(t), _this3.map = Ls.getEmptyMap(), _this3.map.tileset = Ls.getTileset(), n(_assertThisInitialized(_this3));
        return _this3;
      }

      _createClass(pl, [{
        key: "changeTileEditMode",
        value: function changeTileEditMode(e) {
          switch (this.toggleBlocks(!1), this.toggleOnTops(!1), e) {
            case $s.TileEditMode.BLOCKS:
              this.toggleBlocks(!0);
              break;

            case $s.TileEditMode.ONTOP:
              this.toggleOnTops(!0);
              break;

            default:
              console.error("Unexpected case");
          }

          this.requestedNewFrame = !0;
        }
      }, {
        key: "selectPrecisely",
        value: function selectPrecisely(e, t, n, i) {
          _get(_getPrototypeOf(pl.prototype), "select", this).call(this, e, t);

          var r,
              o = n % this.grid.cellW,
              a = i % this.grid.cellH,
              s = o + a < this.grid.cellW,
              l = o < a;
          r = s && l ? 2 : s || l ? s && !l ? 0 : 1 : 3, o > .33 * this.grid.cellW && o < .66 * this.grid.cellW && a > .33 * this.grid.cellH && a < .66 * this.grid.cellH && (r = 4);
          var c = Ds.cellToGid({
            i: e,
            j: t
          }, this.map.width),
              u = Ds.getMapBlocks(this.map, c);

          switch (r) {
            case 0:
              Ds.isBlockDirectionBlocked(u, As.UP) ? u ^= As.UP : u |= As.UP;
              break;

            case 1:
              Ds.isBlockDirectionBlocked(u, As.DOWN) ? u ^= As.DOWN : u |= As.DOWN;
              break;

            case 2:
              Ds.isBlockDirectionBlocked(u, As.LEFT) ? u ^= As.LEFT : u |= As.LEFT;
              break;

            case 3:
              Ds.isBlockDirectionBlocked(u, As.RIGHT) ? u ^= As.RIGHT : u |= As.RIGHT;
              break;

            case 4:
              Ds.isBlockDirectionBlocked(u, As.ALL) ? u ^= As.ALL : u |= As.ALL;
              break;

            default:
              console.error("Unexpected case");
          }

          void 0 === this.map.blocks && (this.map.blocks = []), this.map.blocks[c] = u;
        }
      }, {
        key: "selectLeft",
        value: function selectLeft(e, t) {
          _get(_getPrototypeOf(pl.prototype), "select", this).call(this, e, t);

          var n = Ds.cellToGid({
            i: e,
            j: t
          }, this.map.width),
              i = this.map.tileset.onTop[n];
          Is.isEmpty(i) && (i = 0), i < 4 && (this.map.tileset.onTop[n] = i + 1, ul.changeEditState(!0));
        }
      }, {
        key: "selectRight",
        value: function selectRight(e, t) {
          _get(_getPrototypeOf(pl.prototype), "select", this).call(this, e, t);

          var n = Ds.cellToGid({
            i: e,
            j: t
          }, this.map.width),
              i = this.map.tileset.onTop[n];
          Is.isEmpty(i) && (i = 0), i > 0 && (this.map.tileset.onTop[n] = i - 1, ul.changeEditState(!0));
        }
      }]);

      return pl;
    }(fl);

    !function (e) {
      e[e.game = 0] = "game", e[e.mapper = 1] = "mapper", e[e.tilePicker = 2] = "tilePicker";
    }(ll || (ll = {}));

    var hl = /*#__PURE__*/function (_ref) {
      _inherits(hl, _ref);

      var _super10 = _createSuper(hl);

      function hl(e, t, n, i) {
        var _this4;

        _classCallCheck(this, hl);

        _this4 = _super10.call(this, e, t, n), _this4.overriddenProps = void 0 !== i ? i : new Map();
        return _this4;
      }

      _createClass(hl, [{
        key: "deferredInit",
        value: function deferredInit(e) {
          switch (Is.isEmpty(this.overriddenProps) || (e = Is.mergeMaps(this.overriddenProps, e)), _get(_getPrototypeOf(hl.prototype), "deferredInit", this).call(this, e), this.gridType) {
            case ll.mapper:
              this.canvasScales = [], this.canvasScales.push(e.get("canvasScaleD")), this.canvasScales.push(e.get("canvasScaleC")), this.canvasScales.push(e.get("canvasScaleB")), this.canvasScales.push(e.get("canvasScaleA"));
              var _t35 = this.canvasScales.length;
              this.rowsList = new Array(_t35), this.columnsList = new Array(_t35);

              var _n28 = _t35 - 1;

              for (var _e49 = 0; _e49 < _t35; _e49++) {
                this.rowsList[_e49] = Math.floor(this.rows / this.canvasScales[_e49]), this.columnsList[_e49] = Math.floor(this.columns / this.canvasScales[_e49]);
              }

              this.selectScale(_n28);
              break;

            case ll.tilePicker:
              this.scaleX = 1, this.scaleY = 1;
              break;

            default:
              console.error("Unexpected gridType case: " + this.gridType);
          }
        }
      }, {
        key: "selectScale",
        value: function selectScale(e) {
          this.scaleX = this.canvasScales[e], this.scaleY = this.canvasScales[e], this.refreshCanvasSize();
        }
      }, {
        key: "updateSize",
        value: function updateSize(e, t) {
          this.rows = t, this.columns = e, this.updateSizingDerivates();
        }
      }, {
        key: "getBoundariesX",
        value: function getBoundariesX(e, t, n, i) {
          return void 0 !== n ? void 0 !== i ? {
            min: n.i,
            max: n.i + i.w
          } : {
            min: n.i,
            max: n.i
          } : {
            min: 0,
            max: this.columns
          };
        }
      }, {
        key: "getBoundariesY",
        value: function getBoundariesY(e, t, n, i) {
          return void 0 !== n ? void 0 !== i ? {
            min: n.j,
            max: n.j + i.h
          } : {
            min: n.j,
            max: n.j
          } : {
            min: 0,
            max: this.rows
          };
        }
      }, {
        key: "getVisibleRectangle",
        value: function getVisibleRectangle(e, t, n) {
          var i = this.checkBoundariesLimit(e.x, e.x + e.w, t, !0),
              r = this.checkBoundariesLimit(e.y, e.y + e.h, n, !0);
          return {
            x: i.min,
            y: r.min,
            w: i.max - i.min,
            h: r.max - r.min
          };
        }
      }]);

      return hl;
    }( /*#__PURE__*/function () {
      function _class(e, t, n) {
        _classCallCheck(this, _class);

        var i;
        this.canvas = e, this.currentTranslation = {
          x: 0,
          y: 0
        }, this.gridType = n, i = this, il.loadProperties(function (e) {
          i.deferredInit(e), i.updateSizingDerivates(), i.refreshCanvasSize(), t(i);
        });
      }

      _createClass(_class, [{
        key: "deferredInit",
        value: function deferredInit(e) {
          this.cellH = e.get("cellHeight"), this.cellW = e.get("cellWidth"), this.rows = e.get(ll[this.gridType] + "Rows"), this.columns = e.get(ll[this.gridType] + "Columns");
        }
      }, {
        key: "updateSizingDerivates",
        value: function updateSizingDerivates() {
          this.baseH = this.cellH * this.rows, this.baseW = this.cellW * this.columns, this.halfRows = Math.floor(this.rows / 2), this.halfColumns = Math.floor(this.columns / 2), this.refreshCanvasSize();
        }
      }, {
        key: "refreshCanvasSize",
        value: function refreshCanvasSize() {
          this.canvas.width = Math.floor(this.baseW * this.scaleX), this.canvas.height = Math.floor(this.baseH * this.scaleY);
        }
      }, {
        key: "clear",
        value: function clear(e, t) {
          void 0 === t ? e.clearRect(this.currentTranslation.x, this.currentTranslation.y, this.baseW, this.baseH) : e.clearRect(this.currentTranslation.x + t.x * this.cellW, this.currentTranslation.y + t.y * this.cellH, (t.w + 1) * this.cellW, (t.h + 1) * this.cellH);
        }
      }, {
        key: "mapPositionToGrid",
        value: function mapPositionToGrid(e) {
          var t = this.canvas.getBoundingClientRect(),
              n = Math.floor((e.x - t.left) / this.scaleX + this.currentTranslation.x),
              i = Math.floor((e.y - t.top) / this.scaleY + this.currentTranslation.y);
          return {
            i: Math.floor((e.x - t.left) / (this.cellW * this.scaleX) + this.currentTranslation.x / this.cellW),
            j: Math.floor((e.y - t.top) / (this.cellH * this.scaleY) + this.currentTranslation.y / this.cellH),
            x: n,
            y: i
          };
        }
      }, {
        key: "mapCellToCanvas",
        value: function mapCellToCanvas(e) {
          return {
            x: e.i * this.cellW,
            y: e.j * this.cellH
          };
        }
      }, {
        key: "mapCanvasToCell",
        value: function mapCanvasToCell(e) {
          return {
            i: Math.floor(e.x / this.cellW),
            j: Math.floor(e.y / this.cellH)
          };
        }
      }, {
        key: "changeTranslation",
        value: function changeTranslation(e, t, n, i) {
          var r = e - this.halfColumns * this.cellW;
          if (r < 0) r = 0;else {
            var _e50 = (n - this.columns) * this.cellW;

            r > _e50 && (r = _e50);
          }
          var o = t - this.halfRows * this.cellH;
          if (o < 0) o = 0;else {
            var _e51 = (i - this.rows) * this.cellH;

            o > _e51 && (o = _e51);
          }
          return this.applyTranslate(r, o);
        }
      }, {
        key: "reappyTranslation",
        value: function reappyTranslation() {
          var e = this.currentTranslation.x,
              t = this.currentTranslation.y;
          this.currentTranslation.x = 0, this.currentTranslation.y = 0, this.applyTranslate(e, t);
        }
      }, {
        key: "applyTranslate",
        value: function applyTranslate(e, t) {
          return this.getContext().translate(this.currentTranslation.x - e, this.currentTranslation.y - t), this.currentTranslation = {
            x: e,
            y: t
          }, this.currentTranslation;
        }
      }, {
        key: "getCurrentTranslation",
        value: function getCurrentTranslation() {
          return this.currentTranslation;
        }
      }, {
        key: "resetTranslation",
        value: function resetTranslation() {
          this.getContext().translate(this.currentTranslation.x, this.currentTranslation.y), this.currentTranslation = {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "getBoundariesX",
        value: function getBoundariesX(e, t) {
          var n = Math.floor(e / this.cellW),
              i = n - this.halfColumns - 1,
              r = n + this.halfColumns + 1;
          return this.checkBoundariesLimit(i, r, t);
        }
      }, {
        key: "getBoundariesY",
        value: function getBoundariesY(e, t) {
          var n = Math.floor(e / this.cellH),
              i = n - this.halfRows - 1,
              r = n + this.halfRows + 1;
          return this.checkBoundariesLimit(i, r, t);
        }
      }, {
        key: "checkBoundariesLimit",
        value: function checkBoundariesLimit(e, t, n, i) {
          return e < 0 && (void 0 !== i && i || (t -= e), e = 0), t >= n && (void 0 !== i && i || (e -= t - n + 1), t = n - 1), {
            min: e,
            max: t
          };
        }
      }, {
        key: "getContext",
        value: function getContext() {
          return this.canvas.getContext("2d");
        }
      }]);

      return _class;
    }());

    !function (e) {
      var t;

      function n(e) {
        t.changeTileEditMode(e);
      }

      function i(e) {
        var n = document.getElementById("tiles").value;
        $.ajax({
          url: "/data/tileset/" + n,
          type: $s.RequestType.GET,
          contentType: $s.MimeType.JSON,
          success: function success(n) {
            var i = t.map.tileset.imageData;
            t.map.tileset = n, t.map.tileset.imageData = i, Is.isEmpty(t) || (void 0 === t.map.tileset.blocks && (t.map.tileset.blocks = []), void 0 === t.map.tileset.onTop && (t.map.tileset.onTop = []), t.map.blocks = t.map.tileset.blocks), t.requestedNewFrame = !0, e(!0);
          },
          error: function error(t, n, i) {
            console.error(i), e(!1);
          }
        });
      }

      e.start = function (e, i, r) {
        new hl(e, function (o) {
          new pl(o, i, function (a) {
            !function (e, n) {
              var i = new Map();

              _s.init(e, n, i, Ss, Ss, function (e, n, i, r, o) {
                switch (ul.getEditMode()) {
                  case $s.TileEditMode.BLOCKS:
                    (Is.isEmpty(o) || o === _s.MouseButtons.LEFT) && (t.selectPrecisely(e, n, i, r), ul.changeEditState(!0));
                    break;

                  case $s.TileEditMode.ONTOP:
                    Is.isEmpty(o) || o === _s.MouseButtons.LEFT ? t.selectLeft(e, n) : o === _s.MouseButtons.RIGHT && t.selectRight(e, n);
                    break;

                  default:
                    console.error("Unexpected case");
                }
              }, function (e, n, i) {
                (Is.isEmpty(i) || i === _s.MouseButtons.LEFT) && t.selectEnd(e, n);
              }, function (e, n, i) {
                (Is.isEmpty(i) || i === _s.MouseButtons.LEFT) && t.selectEnd(e, n), t.updatePointer(e, n);
              }, function (e, n) {
                t.updatePointer(e, n);
              }, Ss, Ss, Ss, function (e, n) {
                t.cleanSelection();
              }, Ss, Ss);
            }(e, o), t = a, t.start(e), n(i), r();
          });
        }, ll.tilePicker);
      }, e.setTileEditMode = n, e.loadTile = function (e, n) {
        var r = document.getElementById("canvasTile"),
            o = r.getContext("2d"),
            a = document.getElementById("canvasSelector");
        o.clearRect(0, 0, r.width, r.height), il.load(e, ys.TILE, function (e) {
          var s = new Image();
          s.src = e.src, r.height = s.naturalHeight, r.width = s.naturalWidth, a.height = s.naturalHeight, a.width = s.naturalWidth, document.getElementById("tilePanel").style.height = s.naturalHeight + "px", o.drawImage(e, 0, 0), i(function (e) {
            t.map.tileset.imageData = s, n(e, s.naturalWidth, s.naturalHeight);
          });
        });
      }, e.updateSize = function (e, n) {
        t.updateSize(e, n);
      }, e.saveTilesetData = function (e) {
        var n = t.map.blocks;
        void 0 === n && (n = []), t.map.tileset.blocks = n, $.ajax({
          url: "/edit/tileset/" + t.map.tileset.image,
          type: $s.RequestType.POST,
          contentType: $s.MimeType.JSON,
          data: JSON.stringify(t.map.tileset),
          success: function success(t) {
            e(!0);
          },
          error: function error(t, n, i) {
            console.error(i), e(!1);
          }
        });
      }, e.loadTilesetData = i;
    }(cl || (cl = {})), function (e) {
      function t() {
        var e = document.getElementById("tiles").value;
        cl.loadTile(e, function (t, n, r) {
          t ? (cl.updateSize(n, r), i(!1)) : console.error("Tile loading failed: " + e);
        });
      }

      function n() {
        var e = document.getElementById("editModes").value;
        return $s.TileEditMode[e];
      }

      function i(t) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        document.title = t ? e.PAGE_TITLE + "*" : e.PAGE_TITLE;
        var i = document.getElementById("saveButton");
        null !== i && (i.disabled = !t);
        var r = document.getElementById("reloadButton");
        null !== r && (r.disabled = !t);
      }

      e.PAGE_TITLE = document.title, e.start = function () {
        sl.check(), new ps({
          el: "#loginVue",
          components: {
            login: al
          }
        }), il.loadProperties(function (e) {
          var t = +e.get("cellWidth") * +e.get("tileColumns") + 2;
          document.getElementById("toolsPanel").style.width = t + "";
        }), $.getJSON(base_path + "assetlist/tile", function (e) {
          var i = document.getElementById("tiles");

          for (var _t36 = 0; _t36 < e.length; _t36++) {
            var _n29 = document.createElement("option");

            _n29.value = e[_t36], _n29.label = e[_t36], i.appendChild(_n29);
          }

          cl.start(document.getElementById("canvasSelector"), n(), t);
        });
      }, e.loadNews = function () {}, e.changeTile = t, e.getEditMode = n, e.changeTileEditMode = function () {
        cl.setTileEditMode(n()), e.changeEditState(!1);
      }, e.save = function () {
        cl.saveTilesetData(function (t) {
          t ? e.changeEditState(!1) : console.error("Saving failed");
        });
      }, e.reload = function () {
        cl.loadTilesetData(function (t) {
          t ? e.changeEditState(!1) : console.error("Loading failed");
        });
      }, e.changeEditState = i;
    }(ul || (ul = {}));
  })(), L4W_tilesetter = i;
})();
