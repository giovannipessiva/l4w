"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e50) { throw _e50; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e51) { didErr = true; err = _e51; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! For license information please see l4w-tester.js.LICENSE.txt */
var L4W_tester;

(function () {
  var e = {
    624: function _(e, t, n) {
      var r = n(537),
          i = n(645)(r);
      i.push([e.id, "\n.root[data-v-463340e8] {\n    margin: 1em;\n}\n.description[data-v-463340e8]{\n    width: 21em;\n    height: 4em;\n    font-family: Oldenburg, Verdana, Geneva, Arial, Helvetica, sans-serif;\n    font-display: swap;\n    font-size: medium;\n    resize: vertical;\n}\n.loading[data-v-463340e8] {\n    width: 2em;\n    height: 2em;\n}\n", "", {
        version: 3,
        sources: ["webpack://./src/client/components/BugReporting.vue"],
        names: [],
        mappings: ";AAmHA;IACA,WAAA;AACA;AACA;IACA,WAAA;IACA,WAAA;IACA,qEAAA;IACA,kBAAA;IACA,iBAAA;IACA,gBAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA",
        sourcesContent: ['<template>\n    <div class="root">\n        \x3c!-- TODO load only when user start writing, so that the overlay wont normally appear --\x3e\n        <script type="application/javascript" async defer src="https://www.google.com/recaptcha/api.js?render=6LfudvIUAAAAADY9aLIgdcbuY8kekIKAv6WYEYFb"><\/script>\n        <div v-if="!flagSent">\n            <p>\n                <label for="issueLabel">Do you want to report something?</label><br>\n                <select v-model="label" id="issueLabel">\n                    <option selected disabled />\n                    <option value="bug">Problem</option>\n                    <option value="question">Question</option>\n                    <option value="enhancement">Enhancement suggestion</option>\n                    <option value="other">Other</option>\n                </select>\n            </p>\n            <p>\n                <label for="issueDescription">What\'s on your mind?</label><br>\n                <textarea v-model="description" id="issueDescription" class="description" type="text"></textarea>\n            </p>\n            <p>\n                When you send the report <strong>what you wrote will be publicly visible on the <a href="https://github.com/giovannipessiva/l4w/issues">project issue tracker</a></strong>.<br>\n                If you want some privacy, <a href="mailto:rpt@altervista.org?subject=Feedback%20on%20L4W">drop me a mail</a>\n            </p>\n            <button v-on:click="send()" v-bind:disabled="description.trim().length === 0">Send</button>\n        </div>\n        <div v-else>\n            <div v-if="!flagReceived">\n                <img class="loading" src="/style/ui/ajax-loader.webp" alt="loading..." />\n            </div>\n            <div v-else-if="url !== undefined">\n                <p>\n                    Thank you for your feedback!<br>\n                    You can find it on the project issue tracker: <a v-bind:href="url">{{ url }}</a><br>\n                </p>\n                <button v-on:click="reset()">Dismiss</button>\n            </div>\n            <div v-else>\n                <p>\n                    An error occured :(<br>\n                </p>\n                <button v-on:click="reset(true)">Dismiss</button>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script lang="ts">\nimport Vue from "vue"\n\nimport { Resource } from "../core/util/Resource";\nimport { Utils } from "../../common/Utils";\nimport { IIssueRequest, IIssueResponse } from "../../common/ServerAPI"\n\ndeclare let grecaptcha: any; // Loaded from Google script\n\nexport default Vue.extend({\n    name: "bug-reporting",\n    data: function(): {\n        label?: string,\n        description: string,\n        flagSent?: boolean,\n        flagReceived?: boolean,\n        url?: string\n    } {\n        return {\n            label: undefined,\n            description: "",\n            flagSent: false,\n            flagReceived: false,\n            url: undefined\n        }\n    },\n    methods: {\n        send: function() {\n            if(this.description.trim().length > 0) {\n                let vueScope = this;\n                grecaptcha.ready(function() {\n                    grecaptcha.execute("6LfudvIUAAAAADY9aLIgdcbuY8kekIKAv6WYEYFb", {action: "bugReport"}).then(function(token: string) {\n                        let request: IIssueRequest = {\n                            label: vueScope.label, \n                            description: vueScope.description,\n                            captchaToken: token\n                        };\n                        Vue.set(vueScope, "flagSent", true);\n                        Resource.sendPOSTRequest("issue", JSON.stringify(request), function(response?: string) {\n                            Vue.set(vueScope, "flagReceived", true);\n                            if(!Utils.isEmpty(response)) {\n                                try {\n                                    let resp: IIssueResponse = JSON.parse(response!);\n                                    Vue.set(vueScope, "url", resp.url);\n                                    return;\n                                } catch(e) {\n                                    console.error(response);\n                                }\n                            }\n                            console.error("Issue creation failed");\n                        });\n                    });\n                });\n            }\n        },\n        reset: function(flagPreserveRequest?: boolean) {\n            Vue.set(this, "flagSent", false);\n            Vue.set(this, "flagReceived", false);\n            Vue.set(this, "url", undefined);\n            if(!flagPreserveRequest) {\n                Vue.set(this, "description", "");\n                Vue.set(this, "label", undefined);\n            }\n        }\n    }\n});\n<\/script>\n\n<style scoped>\n.root {\n    margin: 1em;\n}\n.description{\n    width: 21em;\n    height: 4em;\n    font-family: Oldenburg, Verdana, Geneva, Arial, Helvetica, sans-serif;\n    font-display: swap;\n    font-size: medium;\n    resize: vertical;\n}\n.loading {\n    width: 2em;\n    height: 2em;   \n}\n</style>'],
        sourceRoot: ""
      }]), e.exports = i;
    },
    201: function _(e, t, n) {
      var r = n(537),
          i = n(645)(r);
      i.push([e.id, "\n.root[data-v-08ab550b] {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div[data-v-08ab550b] {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon[data-v-08ab550b] {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading[data-v-08ab550b] {\n    width: 2em;\n    height: 2em;\n}\n", "", {
        version: 3,
        sources: ["webpack://./src/client/components/Login.vue"],
        names: [],
        mappings: ";AAyNA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;AACA;AACA;IACA,YAAA;IACA,kBAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;AACA;AACA;IACA,iBAAA;IACA,mBAAA;IACA,mBAAA;IACA,4BAAA;AACA;AACA;IACA,iBAAA;IACA,oBAAA;IACA,kBAAA;IACA,2BAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA",
        sourcesContent: ['<template>\n    <div class="root">\n        <script type="application/javascript" async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=1885551381575204"><\/script>\n        <script type="application/javascript" async defer src="https://apis.google.com/js/platform.js?onload=gAsyncInit"><\/script>\n        <div v-show="!loginStatus && loginEnabled">\n            \x3c!-- <img class="statusIcon unloggedIcon" src="/style/ui/unlogged.png" alt="Unlogged icon" title="You are not currently logged in"> --\x3e\n            \x3c!-- Google login --\x3e\n            <div class="g-signin2" data-onsuccess="gLoginCallback" data-theme="dark"></div>\n            \x3c!-- Facebook login --\x3e\n            <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false"\n                data-use-continue-as="false" data-width="" data-scope="email" ></div>\n            <br>\n            <slot name="unlogged"></slot>\n        </div>\n        <div v-if="loginStatus">\n            <img class="statusIcon loggedIcon" src="/style/ui/logged.png" alt="Logged icon" title="You are currently logged in!">\n            <br>\n            <div v-if="flagLoggingOut">\n                <img class="loading" src="/style/ui/spinner.gif" alt="logging out..." />\n            </div>\n            <div v-else>\n                <button v-on:click="logout">Logout</button>\n                <br><br>\n                <slot name="logged"></slot>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script lang="ts">\nimport Vue from "vue"\nimport { Resource } from "../core/util/Resource"\nimport { AuthService, IAuthRequest, IAuthResponse, IHealthResponse } from "../../common/ServerAPI"\nimport { Utils } from "../../common/Utils";\n\ndeclare let FB: any; // Loaded from Facebook script\ndeclare let gapi: any; // Loaded from Google script\n\ninterface FBLoginResponse {\n    status: "connected" | "not_authorized" | "unknown",\n    authResponse?: {\n        accessToken: string,\n        expiresIn: any,\n        signedRequest: any,\n        userID: string\n    }\n}\n\nexport default Vue.extend({\n    name: "login",\n    props: {\n        showIcons: {\n            type: Boolean,\n            required: false,\n            default: true\n        }\n    },\n    data: function (): {\n        loginEnabled: boolean,\n        loginStatus: boolean,\n        loginService?: AuthService,\n        fbToken?: string,\n        flagLoggingOut: boolean\n    } {\n        return {\n            loginEnabled: false,\n            loginStatus: false,\n            loginService: undefined,\n            fbToken: undefined,\n            flagLoggingOut: false\n       }\n    },\n    created: function() {\n        // Check if database is available\n        Resource.sendGETRequest("/health", (response?: string) => {\n            if(response === undefined) {\n                console.error("No response from health endpoint");\n            } else {\n                let resp: IHealthResponse = JSON.parse(response);\n                if(!resp.database) {\n                    console.warn("Database unavailable, will not enable Social Login");\n                } else {\n                    this.loginEnabled = true; \n\n                    // Add Google login meta tags\n                    let meta = document.createElement("meta");\n                    meta.name = "google-signin-scope";\n                    meta.content = "profile email";\n                    document.head.appendChild(meta);\n\n                    meta = document.createElement("meta");\n                    meta.name = "google-signin-client_id";\n                    meta.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com";\n                    document.head.appendChild(meta);\n\n                    // Init Facebook login\n                    let vueScope = this;\n                    window["fbAsyncInit"] = function() {\n                        FB.init({\n                            appId: "1885551381575204",\n                            autoLogAppEvents: false,\n                            cookie: true,\n                            xfbml: false,\n                            version : "v12.0"\n                        });\n                        FB.Event.subscribe("auth.statusChange", function(response: FBLoginResponse) {\n                            vueScope.fbLoginStatusChangeCallback(response);\n                        });\n                        FB.getLoginStatus(function(response: FBLoginResponse) {\n                            vueScope.fbLoginStatusChangeCallback(response);\n                        });\n                    };\n\n                    // Init Google login\n                    window["gAsyncInit"] = function() {\n                        gapi.load("auth2", function() {\n                            const authInstance = gapi.auth2.getAuthInstance();\n                            if(authInstance.isSignedIn.get()) {\n                                Vue.set(vueScope, "loginStatus", true);\n                                Vue.set(vueScope, "loginService", "google");\n                            }\n                        });\n                    };\n                    window["gLoginCallback"] = this.gLoginCallback;\n                }\n            }\n        });\n    },\n    methods: {\n        logoutCallback: function() {\n            Vue.set(this, "loginStatus", false);\n            Vue.set(this, "loginService", undefined);\n            Vue.set(this, "flagLoggingOut", false);\n        },\n        logout: function logout() {\n            // Check which service is used, only logout from that service\n            if(this.loginStatus) {\n                switch(this.loginService) {\n                case "facebook":\n                    // Facebook logout\n                    if(this.fbToken !== undefined) {\n                        // Since Facebook logout is slow, display an animation and hide the buttons\n                        Vue.set(this, "flagLoggingOut", true);\n                        let vueScope = this;\n                        // Remove permission, so that the user is asked to authenticate the app again\n                        // (seems like FB.logout() isn\'t enough, if you refresh the page you are still logged)\n                        FB.api("/me/permissions", "delete", {\n                            access_token: vueScope.fbToken\n                        }, function(response: any) {\n                            if(response.success !== true) {\n                                console.error("Facebook permission revoking failed: ", response);\n                            }\n                            FB.logout(function(response: FBLoginResponse)  {\n                                vueScope.logoutCallback();\n                            });\n                        });\n                        this.fbToken = undefined;\n                    }\n                    break;\n                case "google":\n                    // Google logout\n                    let auth2 = gapi.auth2.getAuthInstance();\n                    auth2.signOut().then(this.logoutCallback());\n                    break;\n                default:\n                    console.error("Unexpected loginService: " + this.loginService);\n                }\n                Resource.sendGETRequest("logout", function(response?: string) {\n                    // Nothing to do\n                });\n            } else {\n                console.error("Cannot logout, user is not currently logged in")\n            }\n        },\n        fbLoginStatusChangeCallback: function(response: FBLoginResponse) {\n            if(response.status === "connected") {\n                this.fbToken = response.authResponse!.accessToken;\n                let request: IAuthRequest = {\n                    service: "facebook",\n                    token: response.authResponse!.accessToken,\n                    userId: response.authResponse!.userID\n                };\n                this.doLogin(request);\n            }\n        },\n        gLoginCallback: function(googleUser: any) {\n            let request: IAuthRequest = {\n                service: "google",\n                token: googleUser.getAuthResponse().id_token\n            };\n            this.doLogin(request);\n        },\n        doLogin(request: IAuthRequest) {\n            let vueScope = this;\n            Resource.sendPOSTRequest("/auth", JSON.stringify(request), function(response?: string) {\n                if(!Utils.isEmpty(response)) {\n                    try {\n                        let authResponse: IAuthResponse = JSON.parse(response!);\n                        if(authResponse.result) {\n                            Vue.set(vueScope, "loginStatus", true);\n                            Vue.set(vueScope, "loginService", request.service);\n                            return;\n                        }\n                    } catch(e) {\n                        console.error(e);\n                    }\n                }\n                Vue.set(vueScope, "loginStatus", false);\n                Vue.set(vueScope, "loginService", undefined);\n                console.warn("Login with " + request.service + " failed");\n            });\n        }\n    }\n});\n<\/script>\n\n<style scoped>\n.root {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading {\n    width: 2em;\n    height: 2em;   \n}\n</style>'],
        sourceRoot: ""
      }]), e.exports = i;
    },
    645: function _(e) {
      "use strict";

      e.exports = function (e) {
        var t = [];
        return t.toString = function () {
          return this.map(function (t) {
            var n = "",
                r = void 0 !== t[5];
            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n;
          }).join("");
        }, t.i = function (e, n, r, i, o) {
          "string" == typeof e && (e = [[null, e, void 0]]);
          var a = {};
          if (r) for (var s = 0; s < this.length; s++) {
            var l = this[s][0];
            null != l && (a[l] = !0);
          }

          for (var c = 0; c < e.length; c++) {
            var u = [].concat(e[c]);
            r && a[u[0]] || (void 0 !== o && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = o), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), i && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = i) : u[4] = "".concat(i)), t.push(u));
          }
        }, t;
      };
    },
    537: function _(e) {
      "use strict";

      e.exports = function (e) {
        var t = e[1],
            n = e[3];
        if (!n) return t;

        if ("function" == typeof btoa) {
          var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),
              o = "/*# ".concat(i, " */"),
              a = n.sources.map(function (e) {
            return "/*# sourceURL=".concat(n.sourceRoot || "").concat(e, " */");
          });
          return [t].concat(a).concat([o]).join("\n");
        }

        return [t].join("\n");
      };
    },
    109: function _(e, t, n) {
      var r = n(624);
      r.__esModule && (r = r["default"]), "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals), (0, n(346).Z)("d14fe258", r, !1, {});
    },
    564: function _(e, t, n) {
      var r = n(201);
      r.__esModule && (r = r["default"]), "string" == typeof r && (r = [[e.id, r, ""]]), r.locals && (e.exports = r.locals), (0, n(346).Z)("56feccaa", r, !1, {});
    },
    346: function _(e, t, n) {
      "use strict";

      function r(e, t) {
        for (var n = [], r = {}, i = 0; i < t.length; i++) {
          var o = t[i],
              a = o[0],
              s = {
            id: e + ":" + i,
            css: o[1],
            media: o[2],
            sourceMap: o[3]
          };
          r[a] ? r[a].parts.push(s) : n.push(r[a] = {
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
      var i = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !i) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");

      var o = {},
          a = i && (document.head || document.getElementsByTagName("head")[0]),
          s = null,
          l = 0,
          c = !1,
          u = function u() {},
          d = null,
          f = "data-vue-ssr-id",
          p = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

      function h(e, t, n, i) {
        c = n, d = i || {};
        var a = r(e, t);
        return v(a), function (t) {
          for (var n = [], i = 0; i < a.length; i++) {
            var s = a[i];
            (l = o[s.id]).refs--, n.push(l);
          }

          for (t ? v(a = r(e, t)) : a = [], i = 0; i < n.length; i++) {
            var l;

            if (0 === (l = n[i]).refs) {
              for (var c = 0; c < l.parts.length; c++) {
                l.parts[c]();
              }

              delete o[l.id];
            }
          }
        };
      }

      function v(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
              r = o[n.id];

          if (r) {
            r.refs++;

            for (var i = 0; i < r.parts.length; i++) {
              r.parts[i](n.parts[i]);
            }

            for (; i < n.parts.length; i++) {
              r.parts.push(m(n.parts[i]));
            }

            r.parts.length > n.parts.length && (r.parts.length = n.parts.length);
          } else {
            var a = [];

            for (i = 0; i < n.parts.length; i++) {
              a.push(m(n.parts[i]));
            }

            o[n.id] = {
              id: n.id,
              refs: 1,
              parts: a
            };
          }
        }
      }

      function g() {
        var e = document.createElement("style");
        return e.type = "text/css", a.appendChild(e), e;
      }

      function m(e) {
        var t,
            n,
            r = document.querySelector("style[" + f + '~="' + e.id + '"]');

        if (r) {
          if (c) return u;
          r.parentNode.removeChild(r);
        }

        if (p) {
          var i = l++;
          r = s || (s = g()), t = E.bind(null, r, i, !1), n = E.bind(null, r, i, !0);
        } else r = g(), t = S.bind(null, r), n = function n() {
          r.parentNode.removeChild(r);
        };

        return t(e), function (r) {
          if (r) {
            if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
            t(e = r);
          } else n();
        };
      }

      var y,
          b = (y = [], function (e, t) {
        return y[e] = t, y.filter(Boolean).join("\n");
      });

      function E(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = b(t, i);else {
          var o = document.createTextNode(i),
              a = e.childNodes;
          a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
        }
      }

      function S(e, t) {
        var n = t.css,
            r = t.media,
            i = t.sourceMap;
        if (r && e.setAttribute("media", r), d.ssrId && e.setAttribute(f, t.id), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;else {
          for (; e.firstChild;) {
            e.removeChild(e.firstChild);
          }

          e.appendChild(document.createTextNode(n));
        }
      }
    }
  },
      t = {};

  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = t[r] = {
      id: r,
      exports: {}
    };
    return e[r](o, o.exports, n), o.exports;
  }

  n.d = function (e, t) {
    for (var r in t) {
      n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
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
  var r = {};
  (function () {
    "use strict";

    n.r(r), n.d(r, {
      Tester: function Tester() {
        return vl;
      }
    });
    var e = {};
    n.r(e), n.d(e, {
      Ann: function Ann() {
        return nl;
      },
      Asgan: function Asgan() {
        return rl;
      },
      BaseScript: function BaseScript() {
        return tl;
      },
      DEFAULT_DIALOG: function DEFAULT_DIALOG() {
        return el;
      },
      DEFAULT_MESSAGE: function DEFAULT_MESSAGE() {
        return Zs;
      },
      Script1: function Script1() {
        return ol;
      },
      Transports: function Transports() {
        return il;
      }
    });
    var t = Object.freeze({});

    function i(e) {
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

    function v(e, t) {
      for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) {
        n[r[i]] = !0;
      }

      return t ? function (e) {
        return n[e.toLowerCase()];
      } : function (e) {
        return n[e];
      };
    }

    var g = v("slot,component", !0),
        m = v("key,ref,slot,slot-scope,is");

    function y(e, t) {
      if (e.length) {
        var n = e.indexOf(t);
        if (n > -1) return e.splice(n, 1);
      }
    }

    var b = Object.prototype.hasOwnProperty;

    function E(e, t) {
      return b.call(e, t);
    }

    function S(e) {
      var t = Object.create(null);
      return function (n) {
        return t[n] || (t[n] = e(n));
      };
    }

    var _ = /-(\w)/g,
        w = S(function (e) {
      return e.replace(_, function (e, t) {
        return t ? t.toUpperCase() : "";
      });
    }),
        A = S(function (e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }),
        k = /\B([A-Z])/g,
        T = S(function (e) {
      return e.replace(k, "-$1").toLowerCase();
    }),
        C = Function.prototype.bind ? function (e, t) {
      return e.bind(t);
    } : function (e, t) {
      function n(n) {
        var r = arguments.length;
        return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
      }

      return n._length = e.length, n;
    };

    function N(e, t) {
      t = t || 0;

      for (var n = e.length - t, r = new Array(n); n--;) {
        r[n] = e[n + t];
      }

      return r;
    }

    function I(e, t) {
      for (var n in t) {
        e[n] = t[n];
      }

      return e;
    }

    function x(e) {
      for (var t = {}, n = 0; n < e.length; n++) {
        e[n] && I(t, e[n]);
      }

      return t;
    }

    function M(e, t, n) {}

    var D = function D(e, t, n) {
      return !1;
    },
        O = function O(e) {
      return e;
    };

    function L(e, t) {
      if (e === t) return !0;
      var n = l(e),
          r = l(t);
      if (!n || !r) return !n && !r && String(e) === String(t);

      try {
        var i = Array.isArray(e),
            o = Array.isArray(t);
        if (i && o) return e.length === t.length && e.every(function (e, n) {
          return L(e, t[n]);
        });
        if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
        if (i || o) return !1;
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

    function $(e) {
      var t = !1;
      return function () {
        t || (t = !0, e.apply(this, arguments));
      };
    }

    var R = "data-server-rendered",
        j = ["component", "directive", "filter"],
        F = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
        P = {
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
      getTagNamespace: M,
      parsePlatformTagName: O,
      mustUseProp: D,
      async: !0,
      _lifecycleHooks: F
    },
        B = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

    function U(e) {
      var t = (e + "").charCodeAt(0);
      return 36 === t || 95 === t;
    }

    function H(e, t, n, r) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: !!r,
        writable: !0,
        configurable: !0
      });
    }

    var G,
        V = new RegExp("[^" + B.source + ".$_\\d]"),
        q = ("__proto__" in {}),
        Y = "undefined" != typeof window,
        z = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
        K = z && WXEnvironment.platform.toLowerCase(),
        Q = Y && window.navigator.userAgent.toLowerCase(),
        J = Q && /msie|trident/.test(Q),
        X = Q && Q.indexOf("msie 9.0") > 0,
        Z = Q && Q.indexOf("edge/") > 0,
        ee = (Q && Q.indexOf("android"), Q && /iphone|ipad|ipod|ios/.test(Q) || "ios" === K),
        te = (Q && /chrome\/\d+/.test(Q), Q && /phantomjs/.test(Q), Q && Q.match(/firefox\/(\d+)/)),
        ne = {}.watch,
        re = !1;
    if (Y) try {
      var ie = {};
      Object.defineProperty(ie, "passive", {
        get: function get() {
          re = !0;
        }
      }), window.addEventListener("test-passive", null, ie);
    } catch (e) {}

    var oe = function oe() {
      return void 0 === G && (G = !Y && !z && void 0 !== n.g && n.g.process && "server" === n.g.process.env.VUE_ENV), G;
    },
        ae = Y && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

    function se(e) {
      return "function" == typeof e && /native code/.test(e.toString());
    }

    var le,
        ce = "undefined" != typeof Symbol && se(Symbol) && "undefined" != typeof Reflect && se(Reflect.ownKeys);
    le = "undefined" != typeof Set && se(Set) ? Set : function () {
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

    var ue = M,
        de = 0,
        fe = function fe() {
      this.id = de++, this.subs = [];
    };

    fe.prototype.addSub = function (e) {
      this.subs.push(e);
    }, fe.prototype.removeSub = function (e) {
      y(this.subs, e);
    }, fe.prototype.depend = function () {
      fe.target && fe.target.addDep(this);
    }, fe.prototype.notify = function () {
      for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) {
        e[t].update();
      }
    }, fe.target = null;
    var pe = [];

    function he(e) {
      pe.push(e), fe.target = e;
    }

    function ve() {
      pe.pop(), fe.target = pe[pe.length - 1];
    }

    var ge = function ge(e, t, n, r, i, o, a, s) {
      this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    },
        me = {
      child: {
        configurable: !0
      }
    };

    me.child.get = function () {
      return this.componentInstance;
    }, Object.defineProperties(ge.prototype, me);

    var ye = function ye(e) {
      void 0 === e && (e = "");
      var t = new ge();
      return t.text = e, t.isComment = !0, t;
    };

    function be(e) {
      return new ge(void 0, void 0, void 0, String(e));
    }

    function Ee(e) {
      var t = new ge(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
      return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
    }

    var Se = Array.prototype,
        _e = Object.create(Se);

    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
      var t = Se[e];
      H(_e, e, function () {
        for (var n = [], r = arguments.length; r--;) {
          n[r] = arguments[r];
        }

        var i,
            o = t.apply(this, n),
            a = this.__ob__;

        switch (e) {
          case "push":
          case "unshift":
            i = n;
            break;

          case "splice":
            i = n.slice(2);
        }

        return i && a.observeArray(i), a.dep.notify(), o;
      });
    });
    var we = Object.getOwnPropertyNames(_e),
        Ae = !0;

    function ke(e) {
      Ae = e;
    }

    var Te = function Te(e) {
      this.value = e, this.dep = new fe(), this.vmCount = 0, H(e, "__ob__", this), Array.isArray(e) ? (q ? function (e, t) {
        e.__proto__ = t;
      }(e, _e) : function (e, t, n) {
        for (var r = 0, i = n.length; r < i; r++) {
          var o = n[r];
          H(e, o, t[o]);
        }
      }(e, _e, we), this.observeArray(e)) : this.walk(e);
    };

    function Ce(e, t) {
      var n;
      if (l(e) && !(e instanceof ge)) return E(e, "__ob__") && e.__ob__ instanceof Te ? n = e.__ob__ : Ae && !oe() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (n = new Te(e)), t && n && n.vmCount++, n;
    }

    function Ne(e, t, n, r, i) {
      var o = new fe(),
          a = Object.getOwnPropertyDescriptor(e, t);

      if (!a || !1 !== a.configurable) {
        var s = a && a.get,
            l = a && a.set;
        s && !l || 2 !== arguments.length || (n = e[t]);
        var c = !i && Ce(n);
        Object.defineProperty(e, t, {
          enumerable: !0,
          configurable: !0,
          get: function get() {
            var t = s ? s.call(e) : n;
            return fe.target && (o.depend(), c && (c.dep.depend(), Array.isArray(t) && Me(t))), t;
          },
          set: function set(t) {
            var r = s ? s.call(e) : n;
            t === r || t != t && r != r || s && !l || (l ? l.call(e, t) : n = t, c = !i && Ce(t), o.notify());
          }
        });
      }
    }

    function Ie(e, t, n) {
      if (Array.isArray(e) && d(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
      if (t in e && !(t in Object.prototype)) return e[t] = n, n;
      var r = e.__ob__;
      return e._isVue || r && r.vmCount ? n : r ? (Ne(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n);
    }

    function xe(e, t) {
      if (Array.isArray(e) && d(t)) e.splice(t, 1);else {
        var n = e.__ob__;
        e._isVue || n && n.vmCount || E(e, t) && (delete e[t], n && n.dep.notify());
      }
    }

    function Me(e) {
      for (var t = void 0, n = 0, r = e.length; n < r; n++) {
        (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && Me(t);
      }
    }

    Te.prototype.walk = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) {
        Ne(e, t[n]);
      }
    }, Te.prototype.observeArray = function (e) {
      for (var t = 0, n = e.length; t < n; t++) {
        Ce(e[t]);
      }
    };
    var De = P.optionMergeStrategies;

    function Oe(e, t) {
      if (!t) return e;

      for (var n, r, i, o = ce ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < o.length; a++) {
        "__ob__" !== (n = o[a]) && (r = e[n], i = t[n], E(e, n) ? r !== i && u(r) && u(i) && Oe(r, i) : Ie(e, n, i));
      }

      return e;
    }

    function Le(e, t, n) {
      return n ? function () {
        var r = "function" == typeof t ? t.call(n, n) : t,
            i = "function" == typeof e ? e.call(n, n) : e;
        return r ? Oe(r, i) : i;
      } : t ? e ? function () {
        return Oe("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e);
      } : t : e;
    }

    function We(e, t) {
      var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
      return n ? function (e) {
        for (var t = [], n = 0; n < e.length; n++) {
          -1 === t.indexOf(e[n]) && t.push(e[n]);
        }

        return t;
      }(n) : n;
    }

    function $e(e, t, n, r) {
      var i = Object.create(e || null);
      return t ? I(i, t) : i;
    }

    De.data = function (e, t, n) {
      return n ? Le(e, t, n) : t && "function" != typeof t ? e : Le(e, t);
    }, F.forEach(function (e) {
      De[e] = We;
    }), j.forEach(function (e) {
      De[e + "s"] = $e;
    }), De.watch = function (e, t, n, r) {
      if (e === ne && (e = void 0), t === ne && (t = void 0), !t) return Object.create(e || null);
      if (!e) return t;
      var i = {};

      for (var o in I(i, e), t) {
        var a = i[o],
            s = t[o];
        a && !Array.isArray(a) && (a = [a]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s];
      }

      return i;
    }, De.props = De.methods = De.inject = De.computed = function (e, t, n, r) {
      if (!e) return t;
      var i = Object.create(null);
      return I(i, e), t && I(i, t), i;
    }, De.provide = Le;

    var Re = function Re(e, t) {
      return void 0 === t ? e : t;
    };

    function je(e, t, n) {
      if ("function" == typeof t && (t = t.options), function (e, t) {
        var n = e.props;

        if (n) {
          var r,
              i,
              o = {};
          if (Array.isArray(n)) for (r = n.length; r--;) {
            "string" == typeof (i = n[r]) && (o[w(i)] = {
              type: null
            });
          } else if (u(n)) for (var a in n) {
            i = n[a], o[w(a)] = u(i) ? i : {
              type: i
            };
          }
          e.props = o;
        }
      }(t), function (e, t) {
        var n = e.inject;

        if (n) {
          var r = e.inject = {};
          if (Array.isArray(n)) for (var i = 0; i < n.length; i++) {
            r[n[i]] = {
              from: n[i]
            };
          } else if (u(n)) for (var o in n) {
            var a = n[o];
            r[o] = u(a) ? I({
              from: o
            }, a) : {
              from: a
            };
          }
        }
      }(t), function (e) {
        var t = e.directives;
        if (t) for (var n in t) {
          var r = t[n];
          "function" == typeof r && (t[n] = {
            bind: r,
            update: r
          });
        }
      }(t), !t._base && (t["extends"] && (e = je(e, t["extends"], n)), t.mixins)) for (var r = 0, i = t.mixins.length; r < i; r++) {
        e = je(e, t.mixins[r], n);
      }
      var o,
          a = {};

      for (o in e) {
        s(o);
      }

      for (o in t) {
        E(e, o) || s(o);
      }

      function s(r) {
        var i = De[r] || Re;
        a[r] = i(e[r], t[r], n, r);
      }

      return a;
    }

    function Fe(e, t, n, r) {
      if ("string" == typeof n) {
        var i = e[t];
        if (E(i, n)) return i[n];
        var o = w(n);
        if (E(i, o)) return i[o];
        var a = A(o);
        return E(i, a) ? i[a] : i[n] || i[o] || i[a];
      }
    }

    function Pe(e, t, n, r) {
      var i = t[e],
          o = !E(n, e),
          a = n[e],
          s = Ge(Boolean, i.type);
      if (s > -1) if (o && !E(i, "default")) a = !1;else if ("" === a || a === T(e)) {
        var l = Ge(String, i.type);
        (l < 0 || s < l) && (a = !0);
      }

      if (void 0 === a) {
        a = function (e, t, n) {
          if (E(t, "default")) {
            var r = t["default"];
            return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== Ue(t.type) ? r.call(e) : r;
          }
        }(r, i, e);

        var c = Ae;
        ke(!0), Ce(a), ke(c);
      }

      return a;
    }

    var Be = /^\s*function (\w+)/;

    function Ue(e) {
      var t = e && e.toString().match(Be);
      return t ? t[1] : "";
    }

    function He(e, t) {
      return Ue(e) === Ue(t);
    }

    function Ge(e, t) {
      if (!Array.isArray(t)) return He(t, e) ? 0 : -1;

      for (var n = 0, r = t.length; n < r; n++) {
        if (He(t[n], e)) return n;
      }

      return -1;
    }

    function Ve(e, t, n) {
      he();

      try {
        if (t) for (var r = t; r = r.$parent;) {
          var i = r.$options.errorCaptured;
          if (i) for (var o = 0; o < i.length; o++) {
            try {
              if (!1 === i[o].call(r, e, t, n)) return;
            } catch (e) {
              Ye(e, r, "errorCaptured hook");
            }
          }
        }
        Ye(e, t, n);
      } finally {
        ve();
      }
    }

    function qe(e, t, n, r, i) {
      var o;

      try {
        (o = n ? e.apply(t, n) : e.call(t)) && !o._isVue && f(o) && !o._handled && (o["catch"](function (e) {
          return Ve(e, r, i + " (Promise/async)");
        }), o._handled = !0);
      } catch (e) {
        Ve(e, r, i);
      }

      return o;
    }

    function Ye(e, t, n) {
      if (P.errorHandler) try {
        return P.errorHandler.call(null, e, t, n);
      } catch (t) {
        t !== e && ze(t);
      }
      ze(e);
    }

    function ze(e, t, n) {
      if (!Y && !z || "undefined" == typeof console) throw e;
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

    if ("undefined" != typeof Promise && se(Promise)) {
      var et = Promise.resolve();
      Ke = function Ke() {
        et.then(Ze), ee && setTimeout(M);
      }, Qe = !0;
    } else if (J || "undefined" == typeof MutationObserver || !se(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Ke = "undefined" != typeof setImmediate && se(setImmediate) ? function () {
      setImmediate(Ze);
    } : function () {
      setTimeout(Ze, 0);
    };else {
      var tt = 1,
          nt = new MutationObserver(Ze),
          rt = document.createTextNode(String(tt));
      nt.observe(rt, {
        characterData: !0
      }), Ke = function Ke() {
        tt = (tt + 1) % 2, rt.data = String(tt);
      }, Qe = !0;
    }

    function it(e, t) {
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

    var ot = new le();

    function at(e) {
      st(e, ot), ot.clear();
    }

    function st(e, t) {
      var n,
          r,
          i = Array.isArray(e);

      if (!(!i && !l(e) || Object.isFrozen(e) || e instanceof ge)) {
        if (e.__ob__) {
          var o = e.__ob__.dep.id;
          if (t.has(o)) return;
          t.add(o);
        }

        if (i) for (n = e.length; n--;) {
          st(e[n], t);
        } else for (n = (r = Object.keys(e)).length; n--;) {
          st(e[r[n]], t);
        }
      }
    }

    var lt = S(function (e) {
      var t = "&" === e.charAt(0),
          n = "~" === (e = t ? e.slice(1) : e).charAt(0),
          r = "!" === (e = n ? e.slice(1) : e).charAt(0);
      return {
        name: e = r ? e.slice(1) : e,
        once: n,
        capture: r,
        passive: t
      };
    });

    function ct(e, t) {
      function n() {
        var e = arguments,
            r = n.fns;
        if (!Array.isArray(r)) return qe(r, null, arguments, t, "v-on handler");

        for (var i = r.slice(), o = 0; o < i.length; o++) {
          qe(i[o], null, e, t, "v-on handler");
        }
      }

      return n.fns = e, n;
    }

    function ut(e, t, n, r, o, s) {
      var l, c, u, d;

      for (l in e) {
        c = e[l], u = t[l], d = lt(l), i(c) || (i(u) ? (i(c.fns) && (c = e[l] = ct(c, s)), a(d.once) && (c = e[l] = o(d.name, c, d.capture)), n(d.name, c, d.capture, d.passive, d.params)) : c !== u && (u.fns = c, e[l] = u));
      }

      for (l in t) {
        i(e[l]) && r((d = lt(l)).name, t[l], d.capture);
      }
    }

    function dt(e, t, n) {
      var r;
      e instanceof ge && (e = e.data.hook || (e.data.hook = {}));
      var s = e[t];

      function l() {
        n.apply(this, arguments), y(r.fns, l);
      }

      i(s) ? r = ct([l]) : o(s.fns) && a(s.merged) ? (r = s).fns.push(l) : r = ct([s, l]), r.merged = !0, e[t] = r;
    }

    function ft(e, t, n, r, i) {
      if (o(t)) {
        if (E(t, n)) return e[n] = t[n], i || delete t[n], !0;
        if (E(t, r)) return e[n] = t[r], i || delete t[r], !0;
      }

      return !1;
    }

    function pt(e) {
      return s(e) ? [be(e)] : Array.isArray(e) ? vt(e) : void 0;
    }

    function ht(e) {
      return o(e) && o(e.text) && !1 === e.isComment;
    }

    function vt(e, t) {
      var n,
          r,
          l,
          c,
          u = [];

      for (n = 0; n < e.length; n++) {
        i(r = e[n]) || "boolean" == typeof r || (c = u[l = u.length - 1], Array.isArray(r) ? r.length > 0 && (ht((r = vt(r, (t || "") + "_" + n))[0]) && ht(c) && (u[l] = be(c.text + r[0].text), r.shift()), u.push.apply(u, r)) : s(r) ? ht(c) ? u[l] = be(c.text + r) : "" !== r && u.push(be(r)) : ht(r) && ht(c) ? u[l] = be(c.text + r.text) : (a(e._isVList) && o(r.tag) && i(r.key) && o(t) && (r.key = "__vlist" + t + "_" + n + "__"), u.push(r)));
      }

      return u;
    }

    function gt(e, t) {
      if (e) {
        for (var n = Object.create(null), r = ce ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
          var o = r[i];

          if ("__ob__" !== o) {
            for (var a = e[o].from, s = t; s;) {
              if (s._provided && E(s._provided, a)) {
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

      for (var n = {}, r = 0, i = e.length; r < i; r++) {
        var o = e[r],
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

    function bt(e) {
      return e.isComment && e.asyncFactory;
    }

    function Et(e, n, r) {
      var i,
          o = Object.keys(n).length > 0,
          a = e ? !!e.$stable : !o,
          s = e && e.$key;

      if (e) {
        if (e._normalized) return e._normalized;
        if (a && r && r !== t && s === r.$key && !o && !r.$hasNormal) return r;

        for (var l in i = {}, e) {
          e[l] && "$" !== l[0] && (i[l] = St(n, l, e[l]));
        }
      } else i = {};

      for (var c in n) {
        c in i || (i[c] = _t(n, c));
      }

      return e && Object.isExtensible(e) && (e._normalized = i), H(i, "$stable", a), H(i, "$key", s), H(i, "$hasNormal", o), i;
    }

    function St(e, t, n) {
      var r = function r() {
        var e = arguments.length ? n.apply(null, arguments) : n({}),
            t = (e = e && "object" == _typeof(e) && !Array.isArray(e) ? [e] : pt(e)) && e[0];
        return e && (!t || 1 === e.length && t.isComment && !bt(t)) ? void 0 : e;
      };

      return n.proxy && Object.defineProperty(e, t, {
        get: r,
        enumerable: !0,
        configurable: !0
      }), r;
    }

    function _t(e, t) {
      return function () {
        return e[t];
      };
    }

    function wt(e, t) {
      var n, r, i, a, s;
      if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), r = 0, i = e.length; r < i; r++) {
        n[r] = t(e[r], r);
      } else if ("number" == typeof e) for (n = new Array(e), r = 0; r < e; r++) {
        n[r] = t(r + 1, r);
      } else if (l(e)) if (ce && e[Symbol.iterator]) {
        n = [];

        for (var c = e[Symbol.iterator](), u = c.next(); !u.done;) {
          n.push(t(u.value, n.length)), u = c.next();
        }
      } else for (a = Object.keys(e), n = new Array(a.length), r = 0, i = a.length; r < i; r++) {
        s = a[r], n[r] = t(e[s], s, r);
      }
      return o(n) || (n = []), n._isVList = !0, n;
    }

    function At(e, t, n, r) {
      var i,
          o = this.$scopedSlots[e];
      o ? (n = n || {}, r && (n = I(I({}, r), n)), i = o(n) || ("function" == typeof t ? t() : t)) : i = this.$slots[e] || ("function" == typeof t ? t() : t);
      var a = n && n.slot;
      return a ? this.$createElement("template", {
        slot: a
      }, i) : i;
    }

    function kt(e) {
      return Fe(this.$options, "filters", e) || O;
    }

    function Tt(e, t) {
      return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
    }

    function Ct(e, t, n, r, i) {
      var o = P.keyCodes[t] || n;
      return i && r && !P.keyCodes[t] ? Tt(i, r) : o ? Tt(o, e) : r ? T(r) !== t : void 0 === e;
    }

    function Nt(e, t, n, r, i) {
      if (n && l(n)) {
        var o;
        Array.isArray(n) && (n = x(n));

        var a = function a(_a2) {
          if ("class" === _a2 || "style" === _a2 || m(_a2)) o = e;else {
            var s = e.attrs && e.attrs.type;
            o = r || P.mustUseProp(t, s, _a2) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
          }
          var l = w(_a2),
              c = T(_a2);
          l in o || c in o || (o[_a2] = n[_a2], i && ((e.on || (e.on = {}))["update:" + _a2] = function (e) {
            n[_a2] = e;
          }));
        };

        for (var s in n) {
          a(s);
        }
      }

      return e;
    }

    function It(e, t) {
      var n = this._staticTrees || (this._staticTrees = []),
          r = n[e];
      return r && !t || Mt(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r;
    }

    function xt(e, t, n) {
      return Mt(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
    }

    function Mt(e, t, n) {
      if (Array.isArray(e)) for (var r = 0; r < e.length; r++) {
        e[r] && "string" != typeof e[r] && Dt(e[r], t + "_" + r, n);
      } else Dt(e, t, n);
    }

    function Dt(e, t, n) {
      e.isStatic = !0, e.key = t, e.isOnce = n;
    }

    function Ot(e, t) {
      if (t && u(t)) {
        var n = e.on = e.on ? I({}, e.on) : {};

        for (var r in t) {
          var i = n[r],
              o = t[r];
          n[r] = i ? [].concat(i, o) : o;
        }
      }

      return e;
    }

    function Lt(e, t, n, r) {
      t = t || {
        $stable: !n
      };

      for (var i = 0; i < e.length; i++) {
        var o = e[i];
        Array.isArray(o) ? Lt(o, t, n) : o && (o.proxy && (o.fn.proxy = !0), t[o.key] = o.fn);
      }

      return r && (t.$key = r), t;
    }

    function Wt(e, t) {
      for (var n = 0; n < t.length; n += 2) {
        var r = t[n];
        "string" == typeof r && r && (e[t[n]] = t[n + 1]);
      }

      return e;
    }

    function $t(e, t) {
      return "string" == typeof e ? t + e : e;
    }

    function Rt(e) {
      e._o = xt, e._n = h, e._s = p, e._l = wt, e._t = At, e._q = L, e._i = W, e._m = It, e._f = kt, e._k = Ct, e._b = Nt, e._v = be, e._e = ye, e._u = Lt, e._g = Ot, e._d = Wt, e._p = $t;
    }

    function jt(e, n, r, i, o) {
      var s,
          l = this,
          c = o.options;
      E(i, "_uid") ? (s = Object.create(i))._original = i : (s = i, i = i._original);
      var u = a(c._compiled),
          d = !u;
      this.data = e, this.props = n, this.children = r, this.parent = i, this.listeners = e.on || t, this.injections = gt(c.inject, i), this.slots = function () {
        return l.$slots || Et(e.scopedSlots, l.$slots = mt(r, i)), l.$slots;
      }, Object.defineProperty(this, "scopedSlots", {
        enumerable: !0,
        get: function get() {
          return Et(e.scopedSlots, this.slots());
        }
      }), u && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = Et(e.scopedSlots, this.$slots)), c._scopeId ? this._c = function (e, t, n, r) {
        var o = Vt(s, e, t, n, r, d);
        return o && !Array.isArray(o) && (o.fnScopeId = c._scopeId, o.fnContext = i), o;
      } : this._c = function (e, t, n, r) {
        return Vt(s, e, t, n, r, d);
      };
    }

    function Ft(e, t, n, r, i) {
      var o = Ee(e);
      return o.fnContext = n, o.fnOptions = r, t.slot && ((o.data || (o.data = {})).slot = t.slot), o;
    }

    function Pt(e, t) {
      for (var n in t) {
        e[w(n)] = t[n];
      }
    }

    Rt(jt.prototype);
    var Bt = {
      init: function init(e, t) {
        if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
          var n = e;
          Bt.prepatch(n, n);
        } else (e.componentInstance = function (e, t) {
          var n = {
            _isComponent: !0,
            _parentVnode: e,
            parent: t
          },
              r = e.data.inlineTemplate;
          return o(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new e.componentOptions.Ctor(n);
        }(e, tn)).$mount(t ? e.elm : void 0, t);
      },
      prepatch: function prepatch(e, n) {
        var r = n.componentOptions;
        !function (e, n, r, i, o) {
          var a = i.data.scopedSlots,
              s = e.$scopedSlots,
              l = !!(a && !a.$stable || s !== t && !s.$stable || a && e.$scopedSlots.$key !== a.$key || !a && e.$scopedSlots.$key),
              c = !!(o || e.$options._renderChildren || l);

          if (e.$options._parentVnode = i, e.$vnode = i, e._vnode && (e._vnode.parent = i), e.$options._renderChildren = o, e.$attrs = i.data.attrs || t, e.$listeners = r || t, n && e.$options.props) {
            ke(!1);

            for (var u = e._props, d = e.$options._propKeys || [], f = 0; f < d.length; f++) {
              var p = d[f],
                  h = e.$options.props;
              u[p] = Pe(p, h, n, e);
            }

            ke(!0), e.$options.propsData = n;
          }

          r = r || t;
          var v = e.$options._parentListeners;
          e.$options._parentListeners = r, en(e, r, v), c && (e.$slots = mt(o, i.context), e.$forceUpdate());
        }(n.componentInstance = e.componentInstance, r.propsData, r.listeners, n, r.children);
      },
      insert: function insert(e) {
        var t,
            n = e.context,
            r = e.componentInstance;
        r._isMounted || (r._isMounted = !0, sn(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, cn.push(t)) : on(r, !0));
      },
      destroy: function destroy(e) {
        var t = e.componentInstance;
        t._isDestroyed || (e.data.keepAlive ? an(t, !0) : t.$destroy());
      }
    },
        Ut = Object.keys(Bt);

    function Ht(e, n, r, s, c) {
      if (!i(e)) {
        var u = r.$options._base;

        if (l(e) && (e = u.extend(e)), "function" == typeof e) {
          var d;
          if (i(e.cid) && (e = function (e, t) {
            if (a(e.error) && o(e.errorComp)) return e.errorComp;
            if (o(e.resolved)) return e.resolved;
            var n = zt;
            if (n && o(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), a(e.loading) && o(e.loadingComp)) return e.loadingComp;

            if (n && !o(e.owners)) {
              var r = e.owners = [n],
                  s = !0,
                  c = null,
                  u = null;
              n.$on("hook:destroyed", function () {
                return y(r, n);
              });

              var d = function d(e) {
                for (var t = 0, n = r.length; t < n; t++) {
                  r[t].$forceUpdate();
                }

                e && (r.length = 0, null !== c && (clearTimeout(c), c = null), null !== u && (clearTimeout(u), u = null));
              },
                  p = $(function (n) {
                e.resolved = Kt(n, t), s ? r.length = 0 : d(!0);
              }),
                  h = $(function (t) {
                o(e.errorComp) && (e.error = !0, d(!0));
              }),
                  v = e(p, h);

              return l(v) && (f(v) ? i(e.resolved) && v.then(p, h) : f(v.component) && (v.component.then(p, h), o(v.error) && (e.errorComp = Kt(v.error, t)), o(v.loading) && (e.loadingComp = Kt(v.loading, t), 0 === v.delay ? e.loading = !0 : c = setTimeout(function () {
                c = null, i(e.resolved) && i(e.error) && (e.loading = !0, d(!1));
              }, v.delay || 200)), o(v.timeout) && (u = setTimeout(function () {
                u = null, i(e.resolved) && h(null);
              }, v.timeout)))), s = !1, e.loading ? e.loadingComp : e.resolved;
            }
          }(d = e, u), void 0 === e)) return function (e, t, n, r, i) {
            var o = ye();
            return o.asyncFactory = e, o.asyncMeta = {
              data: t,
              context: n,
              children: r,
              tag: i
            }, o;
          }(d, n, r, s, c);
          n = n || {}, Nn(e), o(n.model) && function (e, t) {
            var n = e.model && e.model.prop || "value",
                r = e.model && e.model.event || "input";
            (t.attrs || (t.attrs = {}))[n] = t.model.value;
            var i = t.on || (t.on = {}),
                a = i[r],
                s = t.model.callback;
            o(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (i[r] = [s].concat(a)) : i[r] = s;
          }(e.options, n);

          var p = function (e, t, n) {
            var r = t.options.props;

            if (!i(r)) {
              var a = {},
                  s = e.attrs,
                  l = e.props;
              if (o(s) || o(l)) for (var c in r) {
                var u = T(c);
                ft(a, l, c, u, !0) || ft(a, s, c, u, !1);
              }
              return a;
            }
          }(n, e);

          if (a(e.options.functional)) return function (e, n, r, i, a) {
            var s = e.options,
                l = {},
                c = s.props;
            if (o(c)) for (var u in c) {
              l[u] = Pe(u, c, n || t);
            } else o(r.attrs) && Pt(l, r.attrs), o(r.props) && Pt(l, r.props);
            var d = new jt(r, l, a, i, e),
                f = s.render.call(null, d._c, d);
            if (f instanceof ge) return Ft(f, r, d.parent, s);

            if (Array.isArray(f)) {
              for (var p = pt(f) || [], h = new Array(p.length), v = 0; v < p.length; v++) {
                h[v] = Ft(p[v], r, d.parent, s);
              }

              return h;
            }
          }(e, p, n, r, s);
          var h = n.on;

          if (n.on = n.nativeOn, a(e.options["abstract"])) {
            var v = n.slot;
            n = {}, v && (n.slot = v);
          }

          !function (e) {
            for (var t = e.hook || (e.hook = {}), n = 0; n < Ut.length; n++) {
              var r = Ut[n],
                  i = t[r],
                  o = Bt[r];
              i === o || i && i._merged || (t[r] = i ? Gt(o, i) : o);
            }
          }(n);
          var g = e.options.name || c;
          return new ge("vue-component-" + e.cid + (g ? "-" + g : ""), n, void 0, void 0, void 0, r, {
            Ctor: e,
            propsData: p,
            listeners: h,
            tag: c,
            children: s
          }, d);
        }
      }
    }

    function Gt(e, t) {
      var n = function n(_n2, r) {
        e(_n2, r), t(_n2, r);
      };

      return n._merged = !0, n;
    }

    function Vt(e, t, n, r, i, c) {
      return (Array.isArray(n) || s(n)) && (i = r, r = n, n = void 0), a(c) && (i = 2), function (e, t, n, r, i) {
        if (o(n) && o(n.__ob__)) return ye();
        if (o(n) && o(n.is) && (t = n.is), !t) return ye();
        var a, s, c;
        (Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
          "default": r[0]
        }, r.length = 0), 2 === i ? r = pt(r) : 1 === i && (r = function (e) {
          for (var t = 0; t < e.length; t++) {
            if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
          }

          return e;
        }(r)), "string" == typeof t) ? (s = e.$vnode && e.$vnode.ns || P.getTagNamespace(t), a = P.isReservedTag(t) ? new ge(P.parsePlatformTagName(t), n, r, void 0, void 0, e) : n && n.pre || !o(c = Fe(e.$options, "components", t)) ? new ge(t, n, r, void 0, void 0, e) : Ht(c, n, e, r, t)) : a = Ht(t, n, e, r);
        return Array.isArray(a) ? a : o(a) ? (o(s) && qt(a, s), o(n) && function (e) {
          l(e.style) && at(e.style), l(e["class"]) && at(e["class"]);
        }(n), a) : ye();
      }(e, t, n, r, i);
    }

    function qt(e, t, n) {
      if (e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), o(e.children)) for (var r = 0, s = e.children.length; r < s; r++) {
        var l = e.children[r];
        o(l.tag) && (i(l.ns) || a(n) && "svg" !== l.tag) && qt(l, t, n);
      }
    }

    var Yt,
        zt = null;

    function Kt(e, t) {
      return (e.__esModule || ce && "Module" === e[Symbol.toStringTag]) && (e = e["default"]), l(e) ? t.extend(e) : e;
    }

    function Qt(e) {
      if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
        var n = e[t];
        if (o(n) && (o(n.componentOptions) || bt(n))) return n;
      }
    }

    function Jt(e, t) {
      Yt.$on(e, t);
    }

    function Xt(e, t) {
      Yt.$off(e, t);
    }

    function Zt(e, t) {
      var n = Yt;
      return function r() {
        var i = t.apply(null, arguments);
        null !== i && n.$off(e, r);
      };
    }

    function en(e, t, n) {
      Yt = e, ut(t, n || {}, Jt, Xt, Zt, e), Yt = void 0;
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
      he();
      var n = e.$options[t],
          r = t + " hook";
      if (n) for (var i = 0, o = n.length; i < o; i++) {
        qe(n[i], e, null, e, r);
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
        vn = Date.now;

    if (Y && !J) {
      var gn = window.performance;
      gn && "function" == typeof gn.now && vn() > document.createEvent("Event").timeStamp && (vn = function vn() {
        return gn.now();
      });
    }

    function mn() {
      var e, t;

      for (hn = vn(), fn = !0, ln.sort(function (e, t) {
        return e.id - t.id;
      }), pn = 0; pn < ln.length; pn++) {
        (e = ln[pn]).before && e.before(), t = e.id, un[t] = null, e.run();
      }

      var n = cn.slice(),
          r = ln.slice();
      pn = ln.length = cn.length = 0, un = {}, dn = fn = !1, function (e) {
        for (var t = 0; t < e.length; t++) {
          e[t]._inactive = !0, on(e[t], !0);
        }
      }(n), function (e) {
        for (var t = e.length; t--;) {
          var n = e[t],
              r = n.vm;
          r._watcher === n && r._isMounted && !r._isDestroyed && sn(r, "updated");
        }
      }(r), ae && P.devtools && ae.emit("flush");
    }

    var yn = 0,
        bn = function bn(e, t, n, r, i) {
      this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++yn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new le(), this.newDepIds = new le(), this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
        if (!V.test(e)) {
          var t = e.split(".");
          return function (e) {
            for (var n = 0; n < t.length; n++) {
              if (!e) return;
              e = e[t[n]];
            }

            return e;
          };
        }
      }(t), this.getter || (this.getter = M)), this.value = this.lazy ? void 0 : this.get();
    };

    bn.prototype.get = function () {
      var e;
      he(this);
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
    }, bn.prototype.addDep = function (e) {
      var t = e.id;
      this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
    }, bn.prototype.cleanupDeps = function () {
      for (var e = this.deps.length; e--;) {
        var t = this.deps[e];
        this.newDepIds.has(t.id) || t.removeSub(this);
      }

      var n = this.depIds;
      this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
    }, bn.prototype.update = function () {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
        var t = e.id;

        if (null == un[t]) {
          if (un[t] = !0, fn) {
            for (var n = ln.length - 1; n > pn && ln[n].id > e.id;) {
              n--;
            }

            ln.splice(n + 1, 0, e);
          } else ln.push(e);

          dn || (dn = !0, it(mn));
        }
      }(this);
    }, bn.prototype.run = function () {
      if (this.active) {
        var e = this.get();

        if (e !== this.value || l(e) || this.deep) {
          var t = this.value;

          if (this.value = e, this.user) {
            var n = 'callback for watcher "' + this.expression + '"';
            qe(this.cb, this.vm, [e, t], this.vm, n);
          } else this.cb.call(this.vm, e, t);
        }
      }
    }, bn.prototype.evaluate = function () {
      this.value = this.get(), this.dirty = !1;
    }, bn.prototype.depend = function () {
      for (var e = this.deps.length; e--;) {
        this.deps[e].depend();
      }
    }, bn.prototype.teardown = function () {
      if (this.active) {
        this.vm._isBeingDestroyed || y(this.vm._watchers, this);

        for (var e = this.deps.length; e--;) {
          this.deps[e].removeSub(this);
        }

        this.active = !1;
      }
    };
    var En = {
      enumerable: !0,
      configurable: !0,
      get: M,
      set: M
    };

    function Sn(e, t, n) {
      En.get = function () {
        return this[t][n];
      }, En.set = function (e) {
        this[t][n] = e;
      }, Object.defineProperty(e, n, En);
    }

    var _n = {
      lazy: !0
    };

    function wn(e, t, n) {
      var r = !oe();
      "function" == typeof n ? (En.get = r ? An(t) : kn(n), En.set = M) : (En.get = n.get ? r && !1 !== n.cache ? An(t) : kn(n.get) : M, En.set = n.set || M), Object.defineProperty(e, t, En);
    }

    function An(e) {
      return function () {
        var t = this._computedWatchers && this._computedWatchers[e];
        if (t) return t.dirty && t.evaluate(), fe.target && t.depend(), t.value;
      };
    }

    function kn(e) {
      return function () {
        return e.call(this, this);
      };
    }

    function Tn(e, t, n, r) {
      return u(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
    }

    var Cn = 0;

    function Nn(e) {
      var t = e.options;

      if (e["super"]) {
        var n = Nn(e["super"]);

        if (n !== e.superOptions) {
          e.superOptions = n;

          var r = function (e) {
            var t,
                n = e.options,
                r = e.sealedOptions;

            for (var i in n) {
              n[i] !== r[i] && (t || (t = {}), t[i] = n[i]);
            }

            return t;
          }(e);

          r && I(e.extendOptions, r), (t = e.options = je(n, e.extendOptions)).name && (t.components[t.name] = e);
        }
      }

      return t;
    }

    function In(e) {
      this._init(e);
    }

    function xn(e) {
      return e && (e.Ctor.options.name || e.tag);
    }

    function Mn(e, t) {
      return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e, !("[object RegExp]" !== c.call(n)) && e.test(t));
      var n;
    }

    function Dn(e, t) {
      var n = e.cache,
          r = e.keys,
          i = e._vnode;

      for (var o in n) {
        var a = n[o];

        if (a) {
          var s = a.name;
          s && !t(s) && On(n, o, r, i);
        }
      }
    }

    function On(e, t, n, r) {
      var i = e[t];
      !i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, y(n, t);
    }

    !function (e) {
      e.prototype._init = function (e) {
        var n = this;
        n._uid = Cn++, n._isVue = !0, e && e._isComponent ? function (e, t) {
          var n = e.$options = Object.create(e.constructor.options),
              r = t._parentVnode;
          n.parent = t.parent, n._parentVnode = r;
          var i = r.componentOptions;
          n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
        }(n, e) : n.$options = je(Nn(n.constructor), e || {}, n), n._renderProxy = n, n._self = n, function (e) {
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
              r = e.$vnode = n._parentVnode,
              i = r && r.context;
          e.$slots = mt(n._renderChildren, i), e.$scopedSlots = t, e._c = function (t, n, r, i) {
            return Vt(e, t, n, r, i, !1);
          }, e.$createElement = function (t, n, r, i) {
            return Vt(e, t, n, r, i, !0);
          };
          var o = r && r.data;
          Ne(e, "$attrs", o && o.attrs || t, null, !0), Ne(e, "$listeners", n._parentListeners || t, null, !0);
        }(n), sn(n, "beforeCreate"), function (e) {
          var t = gt(e.$options.inject, e);
          t && (ke(!1), Object.keys(t).forEach(function (n) {
            Ne(e, n, t[n]);
          }), ke(!0));
        }(n), function (e) {
          e._watchers = [];
          var t = e.$options;
          t.props && function (e, t) {
            var n = e.$options.propsData || {},
                r = e._props = {},
                i = e.$options._propKeys = [];
            e.$parent && ke(!1);

            var o = function o(_o2) {
              i.push(_o2);
              var a = Pe(_o2, t, n, e);
              Ne(r, _o2, a), _o2 in e || Sn(e, "_props", _o2);
            };

            for (var a in t) {
              o(a);
            }

            ke(!0);
          }(e, t.props), t.methods && function (e, t) {
            for (var n in e.$options.props, t) {
              e[n] = "function" != typeof t[n] ? M : C(t[n], e);
            }
          }(e, t.methods), t.data ? function (e) {
            var t = e.$options.data;
            u(t = e._data = "function" == typeof t ? function (e, t) {
              he();

              try {
                return e.call(t, t);
              } catch (e) {
                return Ve(e, t, "data()"), {};
              } finally {
                ve();
              }
            }(t, e) : t || {}) || (t = {});

            for (var n = Object.keys(t), r = e.$options.props, i = (e.$options.methods, n.length); i--;) {
              var o = n[i];
              r && E(r, o) || U(o) || Sn(e, "_data", o);
            }

            Ce(t, !0);
          }(e) : Ce(e._data = {}, !0), t.computed && function (e, t) {
            var n = e._computedWatchers = Object.create(null),
                r = oe();

            for (var i in t) {
              var o = t[i],
                  a = "function" == typeof o ? o : o.get;
              r || (n[i] = new bn(e, a || M, M, _n)), i in e || wn(e, i, o);
            }
          }(e, t.computed), t.watch && t.watch !== ne && function (e, t) {
            for (var n in t) {
              var r = t[n];
              if (Array.isArray(r)) for (var i = 0; i < r.length; i++) {
                Tn(e, n, r[i]);
              } else Tn(e, n, r);
            }
          }(e, t.watch);
        }(n), function (e) {
          var t = e.$options.provide;
          t && (e._provided = "function" == typeof t ? t.call(e) : t);
        }(n), sn(n, "created"), n.$options.el && n.$mount(n.$options.el);
      };
    }(In), function (e) {
      Object.defineProperty(e.prototype, "$data", {
        get: function get() {
          return this._data;
        }
      }), Object.defineProperty(e.prototype, "$props", {
        get: function get() {
          return this._props;
        }
      }), e.prototype.$set = Ie, e.prototype.$delete = xe, e.prototype.$watch = function (e, t, n) {
        var r = this;
        if (u(t)) return Tn(r, e, t, n);
        (n = n || {}).user = !0;
        var i = new bn(r, e, t, n);

        if (n.immediate) {
          var o = 'callback for immediate watcher "' + i.expression + '"';
          he(), qe(t, r, [i.value], r, o), ve();
        }

        return function () {
          i.teardown();
        };
      };
    }(In), function (e) {
      var t = /^hook:/;
      e.prototype.$on = function (e, n) {
        var r = this;
        if (Array.isArray(e)) for (var i = 0, o = e.length; i < o; i++) {
          r.$on(e[i], n);
        } else (r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
        return r;
      }, e.prototype.$once = function (e, t) {
        var n = this;

        function r() {
          n.$off(e, r), t.apply(n, arguments);
        }

        return r.fn = t, n.$on(e, r), n;
      }, e.prototype.$off = function (e, t) {
        var n = this;
        if (!arguments.length) return n._events = Object.create(null), n;

        if (Array.isArray(e)) {
          for (var r = 0, i = e.length; r < i; r++) {
            n.$off(e[r], t);
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

          for (var r = N(arguments, 1), i = 'event handler for "' + e + '"', o = 0, a = n.length; o < a; o++) {
            qe(n[o], t, r, t, i);
          }
        }

        return t;
      };
    }(In), function (e) {
      e.prototype._update = function (e, t) {
        var n = this,
            r = n.$el,
            i = n._vnode,
            o = nn(n);
        n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), o(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
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
    }(In), function (e) {
      Rt(e.prototype), e.prototype.$nextTick = function (e) {
        return it(e, this);
      }, e.prototype._render = function () {
        var e,
            t = this,
            n = t.$options,
            r = n.render,
            i = n._parentVnode;
        i && (t.$scopedSlots = Et(i.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = i;

        try {
          zt = t, e = r.call(t._renderProxy, t.$createElement);
        } catch (n) {
          Ve(n, t, "render"), e = t._vnode;
        } finally {
          zt = null;
        }

        return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof ge || (e = ye()), e.parent = i, e;
      };
    }(In);
    var Ln = [String, RegExp, Array],
        Wn = {
      name: "keep-alive",
      "abstract": !0,
      props: {
        include: Ln,
        exclude: Ln,
        max: [String, Number]
      },
      methods: {
        cacheVNode: function cacheVNode() {
          var e = this,
              t = e.cache,
              n = e.keys,
              r = e.vnodeToCache,
              i = e.keyToCache;

          if (r) {
            var o = r.tag,
                a = r.componentInstance,
                s = r.componentOptions;
            t[i] = {
              name: xn(s),
              tag: o,
              componentInstance: a
            }, n.push(i), this.max && n.length > parseInt(this.max) && On(t, n[0], n, this._vnode), this.vnodeToCache = null;
          }
        }
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
        this.cacheVNode(), this.$watch("include", function (t) {
          Dn(e, function (e) {
            return Mn(t, e);
          });
        }), this.$watch("exclude", function (t) {
          Dn(e, function (e) {
            return !Mn(t, e);
          });
        });
      },
      updated: function updated() {
        this.cacheVNode();
      },
      render: function render() {
        var e = this.$slots["default"],
            t = Qt(e),
            n = t && t.componentOptions;

        if (n) {
          var r = xn(n),
              i = this.include,
              o = this.exclude;
          if (i && (!r || !Mn(i, r)) || o && r && Mn(o, r)) return t;
          var a = this.cache,
              s = this.keys,
              l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
          a[l] ? (t.componentInstance = a[l].componentInstance, y(s, l), s.push(l)) : (this.vnodeToCache = t, this.keyToCache = l), t.data.keepAlive = !0;
        }

        return t || e && e[0];
      }
    },
        $n = {
      KeepAlive: Wn
    };
    !function (e) {
      var t = {
        get: function get() {
          return P;
        }
      };
      Object.defineProperty(e, "config", t), e.util = {
        warn: ue,
        extend: I,
        mergeOptions: je,
        defineReactive: Ne
      }, e.set = Ie, e["delete"] = xe, e.nextTick = it, e.observable = function (e) {
        return Ce(e), e;
      }, e.options = Object.create(null), j.forEach(function (t) {
        e.options[t + "s"] = Object.create(null);
      }), e.options._base = e, I(e.options.components, $n), function (e) {
        e.use = function (e) {
          var t = this._installedPlugins || (this._installedPlugins = []);
          if (t.indexOf(e) > -1) return this;
          var n = N(arguments, 1);
          return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this;
        };
      }(e), function (e) {
        e.mixin = function (e) {
          return this.options = je(this.options, e), this;
        };
      }(e), function (e) {
        e.cid = 0;
        var t = 1;

        e.extend = function (e) {
          e = e || {};
          var n = this,
              r = n.cid,
              i = e._Ctor || (e._Ctor = {});
          if (i[r]) return i[r];

          var o = e.name || n.options.name,
              a = function a(e) {
            this._init(e);
          };

          return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = t++, a.options = je(n.options, e), a["super"] = n, a.options.props && function (e) {
            var t = e.options.props;

            for (var n in t) {
              Sn(e.prototype, "_props", n);
            }
          }(a), a.options.computed && function (e) {
            var t = e.options.computed;

            for (var n in t) {
              wn(e.prototype, n, t[n]);
            }
          }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, j.forEach(function (e) {
            a[e] = n[e];
          }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = I({}, a.options), i[r] = a, a;
        };
      }(e), function (e) {
        j.forEach(function (t) {
          e[t] = function (e, n) {
            return n ? ("component" === t && u(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
              bind: n,
              update: n
            }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
          };
        });
      }(e);
    }(In), Object.defineProperty(In.prototype, "$isServer", {
      get: oe
    }), Object.defineProperty(In.prototype, "$ssrContext", {
      get: function get() {
        return this.$vnode && this.$vnode.ssrContext;
      }
    }), Object.defineProperty(In, "FunctionalRenderContext", {
      value: jt
    }), In.version = "2.6.14";

    var Rn = v("style,class"),
        jn = v("input,textarea,option,select,progress"),
        Fn = function Fn(e, t, n) {
      return "value" === n && jn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e;
    },
        Pn = v("contenteditable,draggable,spellcheck"),
        Bn = v("events,caret,typing,plaintext-only"),
        Un = v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),
        Hn = "http://www.w3.org/1999/xlink",
        Gn = function Gn(e) {
      return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
    },
        Vn = function Vn(e) {
      return Gn(e) ? e.slice(6, e.length) : "";
    },
        qn = function qn(e) {
      return null == e || !1 === e;
    };

    function Yn(e, t) {
      return {
        staticClass: zn(e.staticClass, t.staticClass),
        "class": o(e["class"]) ? [e["class"], t["class"]] : t["class"]
      };
    }

    function zn(e, t) {
      return e ? t ? e + " " + t : e : t || "";
    }

    function Kn(e) {
      return Array.isArray(e) ? function (e) {
        for (var t, n = "", r = 0, i = e.length; r < i; r++) {
          o(t = Kn(e[r])) && "" !== t && (n && (n += " "), n += t);
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

    var Qn = {
      svg: "http://www.w3.org/2000/svg",
      math: "http://www.w3.org/1998/Math/MathML"
    },
        Jn = v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
        Xn = v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        Zn = function Zn(e) {
      return Jn(e) || Xn(e);
    };

    function er(e) {
      return Xn(e) ? "svg" : "math" === e ? "math" : void 0;
    }

    var tr = Object.create(null),
        nr = v("text,number,password,search,email,tel,url");

    function rr(e) {
      return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e;
    }

    var ir = Object.freeze({
      createElement: function createElement(e, t) {
        var n = document.createElement(e);
        return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n;
      },
      createElementNS: function createElementNS(e, t) {
        return document.createElementNS(Qn[e], t);
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
        or = {
      create: function create(e, t) {
        ar(t);
      },
      update: function update(e, t) {
        e.data.ref !== t.data.ref && (ar(e, !0), ar(t));
      },
      destroy: function destroy(e) {
        ar(e, !0);
      }
    };

    function ar(e, t) {
      var n = e.data.ref;

      if (o(n)) {
        var r = e.context,
            i = e.componentInstance || e.elm,
            a = r.$refs;
        t ? Array.isArray(a[n]) ? y(a[n], i) : a[n] === i && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(i) < 0 && a[n].push(i) : a[n] = [i] : a[n] = i;
      }
    }

    var sr = new ge("", {}, []),
        lr = ["create", "activate", "update", "remove", "destroy"];

    function cr(e, t) {
      return e.key === t.key && e.asyncFactory === t.asyncFactory && (e.tag === t.tag && e.isComment === t.isComment && o(e.data) === o(t.data) && function (e, t) {
        if ("input" !== e.tag) return !0;
        var n,
            r = o(n = e.data) && o(n = n.attrs) && n.type,
            i = o(n = t.data) && o(n = n.attrs) && n.type;
        return r === i || nr(r) && nr(i);
      }(e, t) || a(e.isAsyncPlaceholder) && i(t.asyncFactory.error));
    }

    function ur(e, t, n) {
      var r,
          i,
          a = {};

      for (r = t; r <= n; ++r) {
        o(i = e[r].key) && (a[i] = r);
      }

      return a;
    }

    var dr = {
      create: fr,
      update: fr,
      destroy: function destroy(e) {
        fr(e, sr);
      }
    };

    function fr(e, t) {
      (e.data.directives || t.data.directives) && function (e, t) {
        var n,
            r,
            i,
            o = e === sr,
            a = t === sr,
            s = hr(e.data.directives, e.context),
            l = hr(t.data.directives, t.context),
            c = [],
            u = [];

        for (n in l) {
          r = s[n], i = l[n], r ? (i.oldValue = r.value, i.oldArg = r.arg, gr(i, "update", t, e), i.def && i.def.componentUpdated && u.push(i)) : (gr(i, "bind", t, e), i.def && i.def.inserted && c.push(i));
        }

        if (c.length) {
          var d = function d() {
            for (var n = 0; n < c.length; n++) {
              gr(c[n], "inserted", t, e);
            }
          };

          o ? dt(t, "insert", d) : d();
        }

        if (u.length && dt(t, "postpatch", function () {
          for (var n = 0; n < u.length; n++) {
            gr(u[n], "componentUpdated", t, e);
          }
        }), !o) for (n in s) {
          l[n] || gr(s[n], "unbind", e, e, a);
        }
      }(e, t);
    }

    var pr = Object.create(null);

    function hr(e, t) {
      var n,
          r,
          i = Object.create(null);
      if (!e) return i;

      for (n = 0; n < e.length; n++) {
        (r = e[n]).modifiers || (r.modifiers = pr), i[vr(r)] = r, r.def = Fe(t.$options, "directives", r.name);
      }

      return i;
    }

    function vr(e) {
      return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
    }

    function gr(e, t, n, r, i) {
      var o = e.def && e.def[t];
      if (o) try {
        o(n.elm, e, n, r, i);
      } catch (r) {
        Ve(r, n.context, "directive " + e.name + " " + t + " hook");
      }
    }

    var mr = [or, dr];

    function yr(e, t) {
      var n = t.componentOptions;

      if (!(o(n) && !1 === n.Ctor.options.inheritAttrs || i(e.data.attrs) && i(t.data.attrs))) {
        var r,
            a,
            s = t.elm,
            l = e.data.attrs || {},
            c = t.data.attrs || {};

        for (r in o(c.__ob__) && (c = t.data.attrs = I({}, c)), c) {
          a = c[r], l[r] !== a && br(s, r, a, t.data.pre);
        }

        for (r in (J || Z) && c.value !== l.value && br(s, "value", c.value), l) {
          i(c[r]) && (Gn(r) ? s.removeAttributeNS(Hn, Vn(r)) : Pn(r) || s.removeAttribute(r));
        }
      }
    }

    function br(e, t, n, r) {
      r || e.tagName.indexOf("-") > -1 ? Er(e, t, n) : Un(t) ? qn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Pn(t) ? e.setAttribute(t, function (e, t) {
        return qn(t) || "false" === t ? "false" : "contenteditable" === e && Bn(t) ? t : "true";
      }(t, n)) : Gn(t) ? qn(n) ? e.removeAttributeNS(Hn, Vn(t)) : e.setAttributeNS(Hn, t, n) : Er(e, t, n);
    }

    function Er(e, t, n) {
      if (qn(n)) e.removeAttribute(t);else {
        if (J && !X && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
          var r = function r(t) {
            t.stopImmediatePropagation(), e.removeEventListener("input", r);
          };

          e.addEventListener("input", r), e.__ieph = !0;
        }

        e.setAttribute(t, n);
      }
    }

    var Sr = {
      create: yr,
      update: yr
    };

    function _r(e, t) {
      var n = t.elm,
          r = t.data,
          a = e.data;

      if (!(i(r.staticClass) && i(r["class"]) && (i(a) || i(a.staticClass) && i(a["class"])))) {
        var s = function (e) {
          for (var t = e.data, n = e, r = e; o(r.componentInstance);) {
            (r = r.componentInstance._vnode) && r.data && (t = Yn(r.data, t));
          }

          for (; o(n = n.parent);) {
            n && n.data && (t = Yn(t, n.data));
          }

          return i = t.staticClass, a = t["class"], o(i) || o(a) ? zn(i, Kn(a)) : "";
          var i, a;
        }(t),
            l = n._transitionClasses;

        o(l) && (s = zn(s, Kn(l))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s);
      }
    }

    var wr,
        Ar,
        kr,
        Tr,
        Cr,
        Nr,
        Ir = {
      create: _r,
      update: _r
    },
        xr = /[\w).+\-_$\]]/;

    function Mr(e) {
      var t,
          n,
          r,
          i,
          o,
          a = !1,
          s = !1,
          l = !1,
          c = !1,
          u = 0,
          d = 0,
          f = 0,
          p = 0;

      for (r = 0; r < e.length; r++) {
        if (n = t, t = e.charCodeAt(r), a) 39 === t && 92 !== n && (a = !1);else if (s) 34 === t && 92 !== n && (s = !1);else if (l) 96 === t && 92 !== n && (l = !1);else if (c) 47 === t && 92 !== n && (c = !1);else if (124 !== t || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || u || d || f) {
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
            for (var h = r - 1, v = void 0; h >= 0 && " " === (v = e.charAt(h)); h--) {
              ;
            }

            v && xr.test(v) || (c = !0);
          }
        } else void 0 === i ? (p = r + 1, i = e.slice(0, r).trim()) : g();
      }

      function g() {
        (o || (o = [])).push(e.slice(p, r).trim()), p = r + 1;
      }

      if (void 0 === i ? i = e.slice(0, r).trim() : 0 !== p && g(), o) for (r = 0; r < o.length; r++) {
        i = Dr(i, o[r]);
      }
      return i;
    }

    function Dr(e, t) {
      var n = t.indexOf("(");
      if (n < 0) return '_f("' + t + '")(' + e + ")";
      var r = t.slice(0, n),
          i = t.slice(n + 1);
      return '_f("' + r + '")(' + e + (")" !== i ? "," + i : i);
    }

    function Or(e, t) {
      console.error("[Vue compiler]: " + e);
    }

    function Lr(e, t) {
      return e ? e.map(function (e) {
        return e[t];
      }).filter(function (e) {
        return e;
      }) : [];
    }

    function Wr(e, t, n, r, i) {
      (e.props || (e.props = [])).push(Gr({
        name: t,
        value: n,
        dynamic: i
      }, r)), e.plain = !1;
    }

    function $r(e, t, n, r, i) {
      (i ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Gr({
        name: t,
        value: n,
        dynamic: i
      }, r)), e.plain = !1;
    }

    function Rr(e, t, n, r) {
      e.attrsMap[t] = n, e.attrsList.push(Gr({
        name: t,
        value: n
      }, r));
    }

    function jr(e, t, n, r, i, o, a, s) {
      (e.directives || (e.directives = [])).push(Gr({
        name: t,
        rawName: n,
        value: r,
        arg: i,
        isDynamicArg: o,
        modifiers: a
      }, s)), e.plain = !1;
    }

    function Fr(e, t, n) {
      return n ? "_p(" + t + ',"' + e + '")' : e + t;
    }

    function Pr(e, n, r, i, o, a, s, l) {
      var c;
      (i = i || t).right ? l ? n = "(" + n + ")==='click'?'contextmenu':(" + n + ")" : "click" === n && (n = "contextmenu", delete i.right) : i.middle && (l ? n = "(" + n + ")==='click'?'mouseup':(" + n + ")" : "click" === n && (n = "mouseup")), i.capture && (delete i.capture, n = Fr("!", n, l)), i.once && (delete i.once, n = Fr("~", n, l)), i.passive && (delete i.passive, n = Fr("&", n, l)), i["native"] ? (delete i["native"], c = e.nativeEvents || (e.nativeEvents = {})) : c = e.events || (e.events = {});
      var u = Gr({
        value: r.trim(),
        dynamic: l
      }, s);
      i !== t && (u.modifiers = i);
      var d = c[n];
      Array.isArray(d) ? o ? d.unshift(u) : d.push(u) : c[n] = d ? o ? [u, d] : [d, u] : u, e.plain = !1;
    }

    function Br(e, t, n) {
      var r = Ur(e, ":" + t) || Ur(e, "v-bind:" + t);
      if (null != r) return Mr(r);

      if (!1 !== n) {
        var i = Ur(e, t);
        if (null != i) return JSON.stringify(i);
      }
    }

    function Ur(e, t, n) {
      var r;
      if (null != (r = e.attrsMap[t])) for (var i = e.attrsList, o = 0, a = i.length; o < a; o++) {
        if (i[o].name === t) {
          i.splice(o, 1);
          break;
        }
      }
      return n && delete e.attrsMap[t], r;
    }

    function Hr(e, t) {
      for (var n = e.attrsList, r = 0, i = n.length; r < i; r++) {
        var o = n[r];
        if (t.test(o.name)) return n.splice(r, 1), o;
      }
    }

    function Gr(e, t) {
      return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e;
    }

    function Vr(e, t, n) {
      var r = n || {},
          i = r.number,
          o = "$$v";
      r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (o = "_n(" + o + ")");
      var a = qr(t, o);
      e.model = {
        value: "(" + t + ")",
        expression: JSON.stringify(t),
        callback: "function ($$v) {" + a + "}"
      };
    }

    function qr(e, t) {
      var n = function (e) {
        if (e = e.trim(), wr = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < wr - 1) return (Tr = e.lastIndexOf(".")) > -1 ? {
          exp: e.slice(0, Tr),
          key: '"' + e.slice(Tr + 1) + '"'
        } : {
          exp: e,
          key: null
        };

        for (Ar = e, Tr = Cr = Nr = 0; !zr();) {
          Kr(kr = Yr()) ? Jr(kr) : 91 === kr && Qr(kr);
        }

        return {
          exp: e.slice(0, Cr),
          key: e.slice(Cr + 1, Nr)
        };
      }(e);

      return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")";
    }

    function Yr() {
      return Ar.charCodeAt(++Tr);
    }

    function zr() {
      return Tr >= wr;
    }

    function Kr(e) {
      return 34 === e || 39 === e;
    }

    function Qr(e) {
      var t = 1;

      for (Cr = Tr; !zr();) {
        if (Kr(e = Yr())) Jr(e);else if (91 === e && t++, 93 === e && t--, 0 === t) {
          Nr = Tr;
          break;
        }
      }
    }

    function Jr(e) {
      for (var t = e; !zr() && (e = Yr()) !== t;) {
        ;
      }
    }

    var Xr;

    function Zr(e, t, n) {
      var r = Xr;
      return function i() {
        var o = t.apply(null, arguments);
        null !== o && ni(e, i, n, r);
      };
    }

    var ei = Qe && !(te && Number(te[1]) <= 53);

    function ti(e, t, n, r) {
      if (ei) {
        var i = hn,
            o = t;

        t = o._wrapper = function (e) {
          if (e.target === e.currentTarget || e.timeStamp >= i || e.timeStamp <= 0 || e.target.ownerDocument !== document) return o.apply(this, arguments);
        };
      }

      Xr.addEventListener(e, t, re ? {
        capture: n,
        passive: r
      } : n);
    }

    function ni(e, t, n, r) {
      (r || Xr).removeEventListener(e, t._wrapper || t, n);
    }

    function ri(e, t) {
      if (!i(e.data.on) || !i(t.data.on)) {
        var n = t.data.on || {},
            r = e.data.on || {};
        Xr = t.elm, function (e) {
          if (o(e.__r)) {
            var t = J ? "change" : "input";
            e[t] = [].concat(e.__r, e[t] || []), delete e.__r;
          }

          o(e.__c) && (e.change = [].concat(e.__c, e.change || []), delete e.__c);
        }(n), ut(n, r, ti, ni, Zr, t.context), Xr = void 0;
      }
    }

    var ii,
        oi = {
      create: ri,
      update: ri
    };

    function ai(e, t) {
      if (!i(e.data.domProps) || !i(t.data.domProps)) {
        var n,
            r,
            a = t.elm,
            s = e.data.domProps || {},
            l = t.data.domProps || {};

        for (n in o(l.__ob__) && (l = t.data.domProps = I({}, l)), s) {
          n in l || (a[n] = "");
        }

        for (n in l) {
          if (r = l[n], "textContent" === n || "innerHTML" === n) {
            if (t.children && (t.children.length = 0), r === s[n]) continue;
            1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
          }

          if ("value" === n && "PROGRESS" !== a.tagName) {
            a._value = r;
            var c = i(r) ? "" : String(r);
            si(a, c) && (a.value = c);
          } else if ("innerHTML" === n && Xn(a.tagName) && i(a.innerHTML)) {
            (ii = ii || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";

            for (var u = ii.firstChild; a.firstChild;) {
              a.removeChild(a.firstChild);
            }

            for (; u.firstChild;) {
              a.appendChild(u.firstChild);
            }
          } else if (r !== s[n]) try {
            a[n] = r;
          } catch (e) {}
        }
      }
    }

    function si(e, t) {
      return !e.composing && ("OPTION" === e.tagName || function (e, t) {
        var n = !0;

        try {
          n = document.activeElement !== e;
        } catch (e) {}

        return n && e.value !== t;
      }(e, t) || function (e, t) {
        var n = e.value,
            r = e._vModifiers;

        if (o(r)) {
          if (r.number) return h(n) !== h(t);
          if (r.trim) return n.trim() !== t.trim();
        }

        return n !== t;
      }(e, t));
    }

    var li = {
      create: ai,
      update: ai
    },
        ci = S(function (e) {
      var t = {},
          n = /:(.+)/;
      return e.split(/;(?![^(]*\))/g).forEach(function (e) {
        if (e) {
          var r = e.split(n);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }), t;
    });

    function ui(e) {
      var t = di(e.style);
      return e.staticStyle ? I(e.staticStyle, t) : t;
    }

    function di(e) {
      return Array.isArray(e) ? x(e) : "string" == typeof e ? ci(e) : e;
    }

    var fi,
        pi = /^--/,
        hi = /\s*!important$/,
        vi = function vi(e, t, n) {
      if (pi.test(t)) e.style.setProperty(t, n);else if (hi.test(n)) e.style.setProperty(T(t), n.replace(hi, ""), "important");else {
        var r = mi(t);
        if (Array.isArray(n)) for (var i = 0, o = n.length; i < o; i++) {
          e.style[r] = n[i];
        } else e.style[r] = n;
      }
    },
        gi = ["Webkit", "Moz", "ms"],
        mi = S(function (e) {
      if (fi = fi || document.createElement("div").style, "filter" !== (e = w(e)) && e in fi) return e;

      for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < gi.length; n++) {
        var r = gi[n] + t;
        if (r in fi) return r;
      }
    });

    function yi(e, t) {
      var n = t.data,
          r = e.data;

      if (!(i(n.staticStyle) && i(n.style) && i(r.staticStyle) && i(r.style))) {
        var a,
            s,
            l = t.elm,
            c = r.staticStyle,
            u = r.normalizedStyle || r.style || {},
            d = c || u,
            f = di(t.data.style) || {};
        t.data.normalizedStyle = o(f.__ob__) ? I({}, f) : f;

        var p = function (e, t) {
          for (var n, r = {}, i = e; i.componentInstance;) {
            (i = i.componentInstance._vnode) && i.data && (n = ui(i.data)) && I(r, n);
          }

          (n = ui(e.data)) && I(r, n);

          for (var o = e; o = o.parent;) {
            o.data && (n = ui(o.data)) && I(r, n);
          }

          return r;
        }(t);

        for (s in d) {
          i(p[s]) && vi(l, s, "");
        }

        for (s in p) {
          (a = p[s]) !== d[s] && vi(l, s, null == a ? "" : a);
        }
      }
    }

    var bi = {
      create: yi,
      update: yi
    },
        Ei = /\s+/;

    function Si(e, t) {
      if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(Ei).forEach(function (t) {
        return e.classList.add(t);
      }) : e.classList.add(t);else {
        var n = " " + (e.getAttribute("class") || "") + " ";
        n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
      }
    }

    function _i(e, t) {
      if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(Ei).forEach(function (t) {
        return e.classList.remove(t);
      }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");else {
        for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) {
          n = n.replace(r, " ");
        }

        (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class");
      }
    }

    function wi(e) {
      if (e) {
        if ("object" == _typeof(e)) {
          var t = {};
          return !1 !== e.css && I(t, Ai(e.name || "v")), I(t, e), t;
        }

        return "string" == typeof e ? Ai(e) : void 0;
      }
    }

    var Ai = S(function (e) {
      return {
        enterClass: e + "-enter",
        enterToClass: e + "-enter-to",
        enterActiveClass: e + "-enter-active",
        leaveClass: e + "-leave",
        leaveToClass: e + "-leave-to",
        leaveActiveClass: e + "-leave-active"
      };
    }),
        ki = Y && !X,
        Ti = "transition",
        Ci = "animation",
        Ni = "transition",
        Ii = "transitionend",
        xi = "animation",
        Mi = "animationend";
    ki && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Ni = "WebkitTransition", Ii = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (xi = "WebkitAnimation", Mi = "webkitAnimationEnd"));
    var Di = Y ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
      return e();
    };

    function Oi(e) {
      Di(function () {
        Di(e);
      });
    }

    function Li(e, t) {
      var n = e._transitionClasses || (e._transitionClasses = []);
      n.indexOf(t) < 0 && (n.push(t), Si(e, t));
    }

    function Wi(e, t) {
      e._transitionClasses && y(e._transitionClasses, t), _i(e, t);
    }

    function $i(e, t, n) {
      var r = ji(e, t),
          i = r.type,
          o = r.timeout,
          a = r.propCount;
      if (!i) return n();

      var s = i === Ti ? Ii : Mi,
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

    var Ri = /\b(transform|all)(,|$)/;

    function ji(e, t) {
      var n,
          r = window.getComputedStyle(e),
          i = (r[Ni + "Delay"] || "").split(", "),
          o = (r[Ni + "Duration"] || "").split(", "),
          a = Fi(i, o),
          s = (r[xi + "Delay"] || "").split(", "),
          l = (r[xi + "Duration"] || "").split(", "),
          c = Fi(s, l),
          u = 0,
          d = 0;
      return t === Ti ? a > 0 && (n = Ti, u = a, d = o.length) : t === Ci ? c > 0 && (n = Ci, u = c, d = l.length) : d = (n = (u = Math.max(a, c)) > 0 ? a > c ? Ti : Ci : null) ? n === Ti ? o.length : l.length : 0, {
        type: n,
        timeout: u,
        propCount: d,
        hasTransform: n === Ti && Ri.test(r[Ni + "Property"])
      };
    }

    function Fi(e, t) {
      for (; e.length < t.length;) {
        e = e.concat(e);
      }

      return Math.max.apply(null, t.map(function (t, n) {
        return Pi(t) + Pi(e[n]);
      }));
    }

    function Pi(e) {
      return 1e3 * Number(e.slice(0, -1).replace(",", "."));
    }

    function Bi(e, t) {
      var n = e.elm;
      o(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
      var r = wi(e.data.transition);

      if (!i(r) && !o(n._enterCb) && 1 === n.nodeType) {
        for (var a = r.css, s = r.type, c = r.enterClass, u = r.enterToClass, d = r.enterActiveClass, f = r.appearClass, p = r.appearToClass, v = r.appearActiveClass, g = r.beforeEnter, m = r.enter, y = r.afterEnter, b = r.enterCancelled, E = r.beforeAppear, S = r.appear, _ = r.afterAppear, w = r.appearCancelled, A = r.duration, k = tn, T = tn.$vnode; T && T.parent;) {
          k = T.context, T = T.parent;
        }

        var C = !k._isMounted || !e.isRootInsert;

        if (!C || S || "" === S) {
          var N = C && f ? f : c,
              I = C && v ? v : d,
              x = C && p ? p : u,
              M = C && E || g,
              D = C && "function" == typeof S ? S : m,
              O = C && _ || y,
              L = C && w || b,
              W = h(l(A) ? A.enter : A),
              R = !1 !== a && !X,
              j = Gi(D),
              F = n._enterCb = $(function () {
            R && (Wi(n, x), Wi(n, I)), F.cancelled ? (R && Wi(n, N), L && L(n)) : O && O(n), n._enterCb = null;
          });
          e.data.show || dt(e, "insert", function () {
            var t = n.parentNode,
                r = t && t._pending && t._pending[e.key];
            r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), D && D(n, F);
          }), M && M(n), R && (Li(n, N), Li(n, I), Oi(function () {
            Wi(n, N), F.cancelled || (Li(n, x), j || (Hi(W) ? setTimeout(F, W) : $i(n, s, F)));
          })), e.data.show && (t && t(), D && D(n, F)), R || j || F();
        }
      }
    }

    function Ui(e, t) {
      var n = e.elm;
      o(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
      var r = wi(e.data.transition);
      if (i(r) || 1 !== n.nodeType) return t();

      if (!o(n._leaveCb)) {
        var a = r.css,
            s = r.type,
            c = r.leaveClass,
            u = r.leaveToClass,
            d = r.leaveActiveClass,
            f = r.beforeLeave,
            p = r.leave,
            v = r.afterLeave,
            g = r.leaveCancelled,
            m = r.delayLeave,
            y = r.duration,
            b = !1 !== a && !X,
            E = Gi(p),
            S = h(l(y) ? y.leave : y),
            _ = n._leaveCb = $(function () {
          n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), b && (Wi(n, u), Wi(n, d)), _.cancelled ? (b && Wi(n, c), g && g(n)) : (t(), v && v(n)), n._leaveCb = null;
        });

        m ? m(w) : w();
      }

      function w() {
        _.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), f && f(n), b && (Li(n, c), Li(n, d), Oi(function () {
          Wi(n, c), _.cancelled || (Li(n, u), E || (Hi(S) ? setTimeout(_, S) : $i(n, s, _)));
        })), p && p(n, _), b || E || _());
      }
    }

    function Hi(e) {
      return "number" == typeof e && !isNaN(e);
    }

    function Gi(e) {
      if (i(e)) return !1;
      var t = e.fns;
      return o(t) ? Gi(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
    }

    function Vi(e, t) {
      !0 !== t.data.show && Bi(t);
    }

    var qi = function (e) {
      var t,
          n,
          r = {},
          l = e.modules,
          c = e.nodeOps;

      for (t = 0; t < lr.length; ++t) {
        for (r[lr[t]] = [], n = 0; n < l.length; ++n) {
          o(l[n][lr[t]]) && r[lr[t]].push(l[n][lr[t]]);
        }
      }

      function u(e) {
        var t = c.parentNode(e);
        o(t) && c.removeChild(t, e);
      }

      function d(e, t, n, i, s, l, u) {
        if (o(e.elm) && o(l) && (e = l[u] = Ee(e)), e.isRootInsert = !s, !function (e, t, n, i) {
          var s = e.data;

          if (o(s)) {
            var l = o(e.componentInstance) && s.keepAlive;
            if (o(s = s.hook) && o(s = s.init) && s(e, !1), o(e.componentInstance)) return f(e, t), p(n, e.elm, i), a(l) && function (e, t, n, i) {
              for (var a, s = e; s.componentInstance;) {
                if (o(a = (s = s.componentInstance._vnode).data) && o(a = a.transition)) {
                  for (a = 0; a < r.activate.length; ++a) {
                    r.activate[a](sr, s);
                  }

                  t.push(s);
                  break;
                }
              }

              p(n, e.elm, i);
            }(e, t, n, i), !0;
          }
        }(e, t, n, i)) {
          var d = e.data,
              v = e.children,
              g = e.tag;
          o(g) ? (e.elm = e.ns ? c.createElementNS(e.ns, g) : c.createElement(g, e), y(e), h(e, v, t), o(d) && m(e, t), p(n, e.elm, i)) : a(e.isComment) ? (e.elm = c.createComment(e.text), p(n, e.elm, i)) : (e.elm = c.createTextNode(e.text), p(n, e.elm, i));
        }
      }

      function f(e, t) {
        o(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, g(e) ? (m(e, t), y(e)) : (ar(e), t.push(e));
      }

      function p(e, t, n) {
        o(e) && (o(n) ? c.parentNode(n) === e && c.insertBefore(e, t, n) : c.appendChild(e, t));
      }

      function h(e, t, n) {
        if (Array.isArray(t)) for (var r = 0; r < t.length; ++r) {
          d(t[r], n, e.elm, null, !0, t, r);
        } else s(e.text) && c.appendChild(e.elm, c.createTextNode(String(e.text)));
      }

      function g(e) {
        for (; e.componentInstance;) {
          e = e.componentInstance._vnode;
        }

        return o(e.tag);
      }

      function m(e, n) {
        for (var i = 0; i < r.create.length; ++i) {
          r.create[i](sr, e);
        }

        o(t = e.data.hook) && (o(t.create) && t.create(sr, e), o(t.insert) && n.push(e));
      }

      function y(e) {
        var t;
        if (o(t = e.fnScopeId)) c.setStyleScope(e.elm, t);else for (var n = e; n;) {
          o(t = n.context) && o(t = t.$options._scopeId) && c.setStyleScope(e.elm, t), n = n.parent;
        }
        o(t = tn) && t !== e.context && t !== e.fnContext && o(t = t.$options._scopeId) && c.setStyleScope(e.elm, t);
      }

      function b(e, t, n, r, i, o) {
        for (; r <= i; ++r) {
          d(n[r], o, e, t, !1, n, r);
        }
      }

      function E(e) {
        var t,
            n,
            i = e.data;
        if (o(i)) for (o(t = i.hook) && o(t = t.destroy) && t(e), t = 0; t < r.destroy.length; ++t) {
          r.destroy[t](e);
        }
        if (o(t = e.children)) for (n = 0; n < e.children.length; ++n) {
          E(e.children[n]);
        }
      }

      function S(e, t, n) {
        for (; t <= n; ++t) {
          var r = e[t];
          o(r) && (o(r.tag) ? (_(r), E(r)) : u(r.elm));
        }
      }

      function _(e, t) {
        if (o(t) || o(e.data)) {
          var n,
              i = r.remove.length + 1;

          for (o(t) ? t.listeners += i : t = function (e, t) {
            function n() {
              0 == --n.listeners && u(e);
            }

            return n.listeners = t, n;
          }(e.elm, i), o(n = e.componentInstance) && o(n = n._vnode) && o(n.data) && _(n, t), n = 0; n < r.remove.length; ++n) {
            r.remove[n](e, t);
          }

          o(n = e.data.hook) && o(n = n.remove) ? n(e, t) : t();
        } else u(e.elm);
      }

      function w(e, t, n, r) {
        for (var i = n; i < r; i++) {
          var a = t[i];
          if (o(a) && cr(e, a)) return i;
        }
      }

      function A(e, t, n, s, l, u) {
        if (e !== t) {
          o(t.elm) && o(s) && (t = s[l] = Ee(t));
          var f = t.elm = e.elm;
          if (a(e.isAsyncPlaceholder)) o(t.asyncFactory.resolved) ? C(e.elm, t, n) : t.isAsyncPlaceholder = !0;else if (a(t.isStatic) && a(e.isStatic) && t.key === e.key && (a(t.isCloned) || a(t.isOnce))) t.componentInstance = e.componentInstance;else {
            var p,
                h = t.data;
            o(h) && o(p = h.hook) && o(p = p.prepatch) && p(e, t);
            var v = e.children,
                m = t.children;

            if (o(h) && g(t)) {
              for (p = 0; p < r.update.length; ++p) {
                r.update[p](e, t);
              }

              o(p = h.hook) && o(p = p.update) && p(e, t);
            }

            i(t.text) ? o(v) && o(m) ? v !== m && function (e, t, n, r, a) {
              for (var s, l, u, f = 0, p = 0, h = t.length - 1, v = t[0], g = t[h], m = n.length - 1, y = n[0], E = n[m], _ = !a; f <= h && p <= m;) {
                i(v) ? v = t[++f] : i(g) ? g = t[--h] : cr(v, y) ? (A(v, y, r, n, p), v = t[++f], y = n[++p]) : cr(g, E) ? (A(g, E, r, n, m), g = t[--h], E = n[--m]) : cr(v, E) ? (A(v, E, r, n, m), _ && c.insertBefore(e, v.elm, c.nextSibling(g.elm)), v = t[++f], E = n[--m]) : cr(g, y) ? (A(g, y, r, n, p), _ && c.insertBefore(e, g.elm, v.elm), g = t[--h], y = n[++p]) : (i(s) && (s = ur(t, f, h)), i(l = o(y.key) ? s[y.key] : w(y, t, f, h)) ? d(y, r, e, v.elm, !1, n, p) : cr(u = t[l], y) ? (A(u, y, r, n, p), t[l] = void 0, _ && c.insertBefore(e, u.elm, v.elm)) : d(y, r, e, v.elm, !1, n, p), y = n[++p]);
              }

              f > h ? b(e, i(n[m + 1]) ? null : n[m + 1].elm, n, p, m, r) : p > m && S(t, f, h);
            }(f, v, m, n, u) : o(m) ? (o(e.text) && c.setTextContent(f, ""), b(f, null, m, 0, m.length - 1, n)) : o(v) ? S(v, 0, v.length - 1) : o(e.text) && c.setTextContent(f, "") : e.text !== t.text && c.setTextContent(f, t.text), o(h) && o(p = h.hook) && o(p = p.postpatch) && p(e, t);
          }
        }
      }

      function k(e, t, n) {
        if (a(n) && o(e.parent)) e.parent.data.pendingInsert = t;else for (var r = 0; r < t.length; ++r) {
          t[r].data.hook.insert(t[r]);
        }
      }

      var T = v("attrs,class,staticClass,staticStyle,key");

      function C(e, t, n, r) {
        var i,
            s = t.tag,
            l = t.data,
            c = t.children;
        if (r = r || l && l.pre, t.elm = e, a(t.isComment) && o(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
        if (o(l) && (o(i = l.hook) && o(i = i.init) && i(t, !0), o(i = t.componentInstance))) return f(t, n), !0;

        if (o(s)) {
          if (o(c)) if (e.hasChildNodes()) {
            if (o(i = l) && o(i = i.domProps) && o(i = i.innerHTML)) {
              if (i !== e.innerHTML) return !1;
            } else {
              for (var u = !0, d = e.firstChild, p = 0; p < c.length; p++) {
                if (!d || !C(d, c[p], n, r)) {
                  u = !1;
                  break;
                }

                d = d.nextSibling;
              }

              if (!u || d) return !1;
            }
          } else h(t, c, n);

          if (o(l)) {
            var v = !1;

            for (var g in l) {
              if (!T(g)) {
                v = !0, m(t, n);
                break;
              }
            }

            !v && l["class"] && at(l["class"]);
          }
        } else e.data !== t.text && (e.data = t.text);

        return !0;
      }

      return function (e, t, n, s) {
        if (!i(t)) {
          var l,
              u = !1,
              f = [];
          if (i(e)) u = !0, d(t, f);else {
            var p = o(e.nodeType);
            if (!p && cr(e, t)) A(e, t, f, null, null, s);else {
              if (p) {
                if (1 === e.nodeType && e.hasAttribute(R) && (e.removeAttribute(R), n = !0), a(n) && C(e, t, f)) return k(t, f, !0), e;
                l = e, e = new ge(c.tagName(l).toLowerCase(), {}, [], void 0, l);
              }

              var h = e.elm,
                  v = c.parentNode(h);
              if (d(t, f, h._leaveCb ? null : v, c.nextSibling(h)), o(t.parent)) for (var m = t.parent, y = g(t); m;) {
                for (var b = 0; b < r.destroy.length; ++b) {
                  r.destroy[b](m);
                }

                if (m.elm = t.elm, y) {
                  for (var _ = 0; _ < r.create.length; ++_) {
                    r.create[_](sr, m);
                  }

                  var w = m.data.hook.insert;
                  if (w.merged) for (var T = 1; T < w.fns.length; T++) {
                    w.fns[T]();
                  }
                } else ar(m);

                m = m.parent;
              }
              o(v) ? S([e], 0, 0) : o(e.tag) && E(e);
            }
          }
          return k(t, f, u), t.elm;
        }

        o(e) && E(e);
      };
    }({
      nodeOps: ir,
      modules: [Sr, Ir, oi, li, bi, Y ? {
        create: Vi,
        activate: Vi,
        remove: function remove(e, t) {
          !0 !== e.data.show ? Ui(e, t) : t();
        }
      } : {}].concat(mr)
    });

    X && document.addEventListener("selectionchange", function () {
      var e = document.activeElement;
      e && e.vmodel && eo(e, "input");
    });
    var Yi = {
      inserted: function inserted(e, t, n, r) {
        "select" === n.tag ? (r.elm && !r.elm._vOptions ? dt(n, "postpatch", function () {
          Yi.componentUpdated(e, t, n);
        }) : zi(e, t, n.context), e._vOptions = [].map.call(e.options, Ji)) : ("textarea" === n.tag || nr(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Xi), e.addEventListener("compositionend", Zi), e.addEventListener("change", Zi), X && (e.vmodel = !0)));
      },
      componentUpdated: function componentUpdated(e, t, n) {
        if ("select" === n.tag) {
          zi(e, t, n.context);
          var r = e._vOptions,
              i = e._vOptions = [].map.call(e.options, Ji);
          i.some(function (e, t) {
            return !L(e, r[t]);
          }) && (e.multiple ? t.value.some(function (e) {
            return Qi(e, i);
          }) : t.value !== t.oldValue && Qi(t.value, i)) && eo(e, "change");
        }
      }
    };

    function zi(e, t, n) {
      Ki(e, t), (J || Z) && setTimeout(function () {
        Ki(e, t);
      }, 0);
    }

    function Ki(e, t, n) {
      var r = t.value,
          i = e.multiple;

      if (!i || Array.isArray(r)) {
        for (var o, a, s = 0, l = e.options.length; s < l; s++) {
          if (a = e.options[s], i) o = W(r, Ji(a)) > -1, a.selected !== o && (a.selected = o);else if (L(Ji(a), r)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
        }

        i || (e.selectedIndex = -1);
      }
    }

    function Qi(e, t) {
      return t.every(function (t) {
        return !L(t, e);
      });
    }

    function Ji(e) {
      return "_value" in e ? e._value : e.value;
    }

    function Xi(e) {
      e.target.composing = !0;
    }

    function Zi(e) {
      e.target.composing && (e.target.composing = !1, eo(e.target, "input"));
    }

    function eo(e, t) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(t, !0, !0), e.dispatchEvent(n);
    }

    function to(e) {
      return !e.componentInstance || e.data && e.data.transition ? e : to(e.componentInstance._vnode);
    }

    var no = {
      bind: function bind(e, t, n) {
        var r = t.value,
            i = (n = to(n)).data && n.data.transition,
            o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
        r && i ? (n.data.show = !0, Bi(n, function () {
          e.style.display = o;
        })) : e.style.display = r ? o : "none";
      },
      update: function update(e, t, n) {
        var r = t.value;
        !r != !t.oldValue && ((n = to(n)).data && n.data.transition ? (n.data.show = !0, r ? Bi(n, function () {
          e.style.display = e.__vOriginalDisplay;
        }) : Ui(n, function () {
          e.style.display = "none";
        })) : e.style.display = r ? e.__vOriginalDisplay : "none");
      },
      unbind: function unbind(e, t, n, r, i) {
        i || (e.style.display = e.__vOriginalDisplay);
      }
    },
        ro = {
      model: Yi,
      show: no
    },
        io = {
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

    function oo(e) {
      var t = e && e.componentOptions;
      return t && t.Ctor.options["abstract"] ? oo(Qt(t.children)) : e;
    }

    function ao(e) {
      var t = {},
          n = e.$options;

      for (var r in n.propsData) {
        t[r] = e[r];
      }

      var i = n._parentListeners;

      for (var o in i) {
        t[w(o)] = i[o];
      }

      return t;
    }

    function so(e, t) {
      if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
        props: t.componentOptions.propsData
      });
    }

    var lo = function lo(e) {
      return e.tag || bt(e);
    },
        co = function co(e) {
      return "show" === e.name;
    },
        uo = {
      name: "transition",
      props: io,
      "abstract": !0,
      render: function render(e) {
        var t = this,
            n = this.$slots["default"];

        if (n && (n = n.filter(lo)).length) {
          var r = this.mode,
              i = n[0];
          if (function (e) {
            for (; e = e.parent;) {
              if (e.data.transition) return !0;
            }
          }(this.$vnode)) return i;
          var o = oo(i);
          if (!o) return i;
          if (this._leaving) return so(e, i);
          var a = "__transition-" + this._uid + "-";
          o.key = null == o.key ? o.isComment ? a + "comment" : a + o.tag : s(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key;
          var l = (o.data || (o.data = {})).transition = ao(this),
              c = this._vnode,
              u = oo(c);

          if (o.data.directives && o.data.directives.some(co) && (o.data.show = !0), u && u.data && !function (e, t) {
            return t.key === e.key && t.tag === e.tag;
          }(o, u) && !bt(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
            var d = u.data.transition = I({}, l);
            if ("out-in" === r) return this._leaving = !0, dt(d, "afterLeave", function () {
              t._leaving = !1, t.$forceUpdate();
            }), so(e, i);

            if ("in-out" === r) {
              if (bt(o)) return c;

              var f,
                  p = function p() {
                f();
              };

              dt(l, "afterEnter", p), dt(l, "enterCancelled", p), dt(d, "delayLeave", function (e) {
                f = e;
              });
            }
          }

          return i;
        }
      }
    },
        fo = I({
      tag: String,
      moveClass: String
    }, io);

    function po(e) {
      e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
    }

    function ho(e) {
      e.data.newPos = e.elm.getBoundingClientRect();
    }

    function vo(e) {
      var t = e.data.pos,
          n = e.data.newPos,
          r = t.left - n.left,
          i = t.top - n.top;

      if (r || i) {
        e.data.moved = !0;
        var o = e.elm.style;
        o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s";
      }
    }

    delete fo.mode;
    var go = {
      Transition: uo,
      TransitionGroup: {
        props: fo,
        beforeMount: function beforeMount() {
          var e = this,
              t = this._update;

          this._update = function (n, r) {
            var i = nn(e);
            e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, i(), t.call(e, n, r);
          };
        },
        render: function render(e) {
          for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots["default"] || [], o = this.children = [], a = ao(this), s = 0; s < i.length; s++) {
            var l = i[s];
            l.tag && null != l.key && 0 !== String(l.key).indexOf("__vlist") && (o.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = a);
          }

          if (r) {
            for (var c = [], u = [], d = 0; d < r.length; d++) {
              var f = r[d];
              f.data.transition = a, f.data.pos = f.elm.getBoundingClientRect(), n[f.key] ? c.push(f) : u.push(f);
            }

            this.kept = e(t, null, c), this.removed = u;
          }

          return e(t, null, o);
        },
        updated: function updated() {
          var e = this.prevChildren,
              t = this.moveClass || (this.name || "v") + "-move";
          e.length && this.hasMove(e[0].elm, t) && (e.forEach(po), e.forEach(ho), e.forEach(vo), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
            if (e.data.moved) {
              var n = e.elm,
                  r = n.style;
              Li(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Ii, n._moveCb = function e(r) {
                r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Ii, e), n._moveCb = null, Wi(n, t));
              });
            }
          }));
        },
        methods: {
          hasMove: function hasMove(e, t) {
            if (!ki) return !1;
            if (this._hasMove) return this._hasMove;
            var n = e.cloneNode();
            e._transitionClasses && e._transitionClasses.forEach(function (e) {
              _i(n, e);
            }), Si(n, t), n.style.display = "none", this.$el.appendChild(n);
            var r = ji(n);
            return this.$el.removeChild(n), this._hasMove = r.hasTransform;
          }
        }
      }
    };
    In.config.mustUseProp = Fn, In.config.isReservedTag = Zn, In.config.isReservedAttr = Rn, In.config.getTagNamespace = er, In.config.isUnknownElement = function (e) {
      if (!Y) return !0;
      if (Zn(e)) return !1;
      if (e = e.toLowerCase(), null != tr[e]) return tr[e];
      var t = document.createElement(e);
      return e.indexOf("-") > -1 ? tr[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : tr[e] = /HTMLUnknownElement/.test(t.toString());
    }, I(In.options.directives, ro), I(In.options.components, go), In.prototype.__patch__ = Y ? qi : M, In.prototype.$mount = function (e, t) {
      return function (e, t, n) {
        var r;
        return e.$el = t, e.$options.render || (e.$options.render = ye), sn(e, "beforeMount"), r = function r() {
          e._update(e._render(), n);
        }, new bn(e, r, M, {
          before: function before() {
            e._isMounted && !e._isDestroyed && sn(e, "beforeUpdate");
          }
        }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, sn(e, "mounted")), e;
      }(this, e = e && Y ? rr(e) : void 0, t);
    }, Y && setTimeout(function () {
      P.devtools && ae && ae.emit("init", In);
    }, 0);

    var mo,
        yo = /\{\{((?:.|\r?\n)+?)\}\}/g,
        bo = /[-.*+?^${}()|[\]\/\\]/g,
        Eo = S(function (e) {
      var t = e[0].replace(bo, "\\$&"),
          n = e[1].replace(bo, "\\$&");
      return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
    }),
        So = {
      staticKeys: ["staticClass"],
      transformNode: function transformNode(e, t) {
        t.warn;
        var n = Ur(e, "class");
        n && (e.staticClass = JSON.stringify(n));
        var r = Br(e, "class", !1);
        r && (e.classBinding = r);
      },
      genData: function genData(e) {
        var t = "";
        return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t;
      }
    },
        _o = {
      staticKeys: ["staticStyle"],
      transformNode: function transformNode(e, t) {
        t.warn;
        var n = Ur(e, "style");
        n && (e.staticStyle = JSON.stringify(ci(n)));
        var r = Br(e, "style", !1);
        r && (e.styleBinding = r);
      },
      genData: function genData(e) {
        var t = "";
        return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t;
      }
    },
        wo = v("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
        Ao = v("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        ko = v("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
        To = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Co = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        No = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + B.source + "]*",
        Io = "((?:" + No + "\\:)?" + No + ")",
        xo = new RegExp("^<" + Io),
        Mo = /^\s*(\/?)>/,
        Do = new RegExp("^<\\/" + Io + "[^>]*>"),
        Oo = /^<!DOCTYPE [^>]+>/i,
        Lo = /^<!\--/,
        Wo = /^<!\[/,
        $o = v("script,style,textarea", !0),
        Ro = {},
        jo = {
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&amp;": "&",
      "&#10;": "\n",
      "&#9;": "\t",
      "&#39;": "'"
    },
        Fo = /&(?:lt|gt|quot|amp|#39);/g,
        Po = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
        Bo = v("pre,textarea", !0),
        Uo = function Uo(e, t) {
      return e && Bo(e) && "\n" === t[0];
    };

    function Ho(e, t) {
      var n = t ? Po : Fo;
      return e.replace(n, function (e) {
        return jo[e];
      });
    }

    var Go,
        Vo,
        qo,
        Yo,
        zo,
        Ko,
        Qo,
        Jo,
        Xo = /^@|^v-on:/,
        Zo = /^v-|^@|^:|^#/,
        ea = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        ta = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        na = /^\(|\)$/g,
        ra = /^\[.*\]$/,
        ia = /:(.*)$/,
        oa = /^:|^\.|^v-bind:/,
        aa = /\.[^.\]]+(?=[^\]]*$)/g,
        sa = /^v-slot(:|$)|^#/,
        la = /[\r\n]/,
        ca = /[ \f\t\r\n]+/g,
        ua = S(function (e) {
      return (mo = mo || document.createElement("div")).innerHTML = e, mo.textContent;
    }),
        da = "_empty_";

    function fa(e, t, n) {
      return {
        type: 1,
        tag: e,
        attrsList: t,
        attrsMap: ya(t),
        rawAttrsMap: {},
        parent: n,
        children: []
      };
    }

    function pa(e, t) {
      var n;
      !function (e) {
        var t = Br(e, "key");
        t && (e.key = t);
      }(e), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length, function (e) {
        var t = Br(e, "ref");
        t && (e.ref = t, e.refInFor = function (e) {
          for (var t = e; t;) {
            if (void 0 !== t["for"]) return !0;
            t = t.parent;
          }

          return !1;
        }(e));
      }(e), function (e) {
        var t;
        "template" === e.tag ? (t = Ur(e, "scope"), e.slotScope = t || Ur(e, "slot-scope")) : (t = Ur(e, "slot-scope")) && (e.slotScope = t);
        var n = Br(e, "slot");

        if (n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || $r(e, "slot", n, function (e, t) {
          return e.rawAttrsMap[":slot"] || e.rawAttrsMap["v-bind:slot"] || e.rawAttrsMap.slot;
        }(e))), "template" === e.tag) {
          var r = Hr(e, sa);

          if (r) {
            var i = ga(r),
                o = i.name,
                a = i.dynamic;
            e.slotTarget = o, e.slotTargetDynamic = a, e.slotScope = r.value || da;
          }
        } else {
          var s = Hr(e, sa);

          if (s) {
            var l = e.scopedSlots || (e.scopedSlots = {}),
                c = ga(s),
                u = c.name,
                d = c.dynamic,
                f = l[u] = fa("template", [], e);
            f.slotTarget = u, f.slotTargetDynamic = d, f.children = e.children.filter(function (e) {
              if (!e.slotScope) return e.parent = f, !0;
            }), f.slotScope = s.value || da, e.children = [], e.plain = !1;
          }
        }
      }(e), "slot" === (n = e).tag && (n.slotName = Br(n, "name")), function (e) {
        var t;
        (t = Br(e, "is")) && (e.component = t), null != Ur(e, "inline-template") && (e.inlineTemplate = !0);
      }(e);

      for (var r = 0; r < qo.length; r++) {
        e = qo[r](e, t) || e;
      }

      return function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            l,
            c = e.attrsList;

        for (t = 0, n = c.length; t < n; t++) {
          if (r = i = c[t].name, o = c[t].value, Zo.test(r)) {
            if (e.hasBindings = !0, (a = ma(r.replace(Zo, ""))) && (r = r.replace(aa, "")), oa.test(r)) r = r.replace(oa, ""), o = Mr(o), (l = ra.test(r)) && (r = r.slice(1, -1)), a && (a.prop && !l && "innerHtml" === (r = w(r)) && (r = "innerHTML"), a.camel && !l && (r = w(r)), a.sync && (s = qr(o, "$event"), l ? Pr(e, '"update:"+(' + r + ")", s, null, !1, 0, c[t], !0) : (Pr(e, "update:" + w(r), s, null, !1, 0, c[t]), T(r) !== w(r) && Pr(e, "update:" + T(r), s, null, !1, 0, c[t])))), a && a.prop || !e.component && Qo(e.tag, e.attrsMap.type, r) ? Wr(e, r, o, c[t], l) : $r(e, r, o, c[t], l);else if (Xo.test(r)) r = r.replace(Xo, ""), (l = ra.test(r)) && (r = r.slice(1, -1)), Pr(e, r, o, a, !1, 0, c[t], l);else {
              var u = (r = r.replace(Zo, "")).match(ia),
                  d = u && u[1];
              l = !1, d && (r = r.slice(0, -(d.length + 1)), ra.test(d) && (d = d.slice(1, -1), l = !0)), jr(e, r, i, o, d, l, a, c[t]);
            }
          } else $r(e, r, JSON.stringify(o), c[t]), !e.component && "muted" === r && Qo(e.tag, e.attrsMap.type, r) && Wr(e, r, "true", c[t]);
        }
      }(e), e;
    }

    function ha(e) {
      var t;

      if (t = Ur(e, "v-for")) {
        var n = function (e) {
          var t = e.match(ea);

          if (t) {
            var n = {};
            n["for"] = t[2].trim();
            var r = t[1].trim().replace(na, ""),
                i = r.match(ta);
            return i ? (n.alias = r.replace(ta, "").trim(), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r, n;
          }
        }(t);

        n && I(e, n);
      }
    }

    function va(e, t) {
      e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
    }

    function ga(e) {
      var t = e.name.replace(sa, "");
      return t || "#" !== e.name[0] && (t = "default"), ra.test(t) ? {
        name: t.slice(1, -1),
        dynamic: !0
      } : {
        name: '"' + t + '"',
        dynamic: !1
      };
    }

    function ma(e) {
      var t = e.match(aa);

      if (t) {
        var n = {};
        return t.forEach(function (e) {
          n[e.slice(1)] = !0;
        }), n;
      }
    }

    function ya(e) {
      for (var t = {}, n = 0, r = e.length; n < r; n++) {
        t[e[n].name] = e[n].value;
      }

      return t;
    }

    var ba = /^xmlns:NS\d+/,
        Ea = /^NS\d+:/;

    function Sa(e) {
      return fa(e.tag, e.attrsList.slice(), e.parent);
    }

    var _a,
        wa,
        Aa,
        ka = [So, _o, {
      preTransformNode: function preTransformNode(e, t) {
        if ("input" === e.tag) {
          var n,
              r = e.attrsMap;
          if (!r["v-model"]) return;

          if ((r[":type"] || r["v-bind:type"]) && (n = Br(e, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) {
            var i = Ur(e, "v-if", !0),
                o = i ? "&&(" + i + ")" : "",
                a = null != Ur(e, "v-else", !0),
                s = Ur(e, "v-else-if", !0),
                l = Sa(e);
            ha(l), Rr(l, "type", "checkbox"), pa(l, t), l.processed = !0, l["if"] = "(" + n + ")==='checkbox'" + o, va(l, {
              exp: l["if"],
              block: l
            });
            var c = Sa(e);
            Ur(c, "v-for", !0), Rr(c, "type", "radio"), pa(c, t), va(l, {
              exp: "(" + n + ")==='radio'" + o,
              block: c
            });
            var u = Sa(e);
            return Ur(u, "v-for", !0), Rr(u, ":type", n), pa(u, t), va(l, {
              exp: i,
              block: u
            }), a ? l["else"] = !0 : s && (l.elseif = s), l;
          }
        }
      }
    }],
        Ta = {
      model: function model(e, t, n) {
        var r = t.value,
            i = t.modifiers,
            o = e.tag,
            a = e.attrsMap.type;
        if (e.component) return Vr(e, r, i), !1;
        if ("select" === o) !function (e, t, n) {
          var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
          Pr(e, "change", r = r + " " + qr(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0);
        }(e, r, i);else if ("input" === o && "checkbox" === a) !function (e, t, n) {
          var r = n && n.number,
              i = Br(e, "value") || "null",
              o = Br(e, "true-value") || "true",
              a = Br(e, "false-value") || "false";
          Wr(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), Pr(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + qr(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + qr(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + qr(t, "$$c") + "}", null, !0);
        }(e, r, i);else if ("input" === o && "radio" === a) !function (e, t, n) {
          var r = n && n.number,
              i = Br(e, "value") || "null";
          Wr(e, "checked", "_q(" + t + "," + (i = r ? "_n(" + i + ")" : i) + ")"), Pr(e, "change", qr(t, i), null, !0);
        }(e, r, i);else if ("input" === o || "textarea" === o) !function (e, t, n) {
          var r = e.attrsMap.type,
              i = n || {},
              o = i.lazy,
              a = i.number,
              s = i.trim,
              l = !o && "range" !== r,
              c = o ? "change" : "range" === r ? "__r" : "input",
              u = "$event.target.value";
          s && (u = "$event.target.value.trim()"), a && (u = "_n(" + u + ")");
          var d = qr(t, u);
          l && (d = "if($event.target.composing)return;" + d), Wr(e, "value", "(" + t + ")"), Pr(e, c, d, null, !0), (s || a) && Pr(e, "blur", "$forceUpdate()");
        }(e, r, i);else if (!P.isReservedTag(o)) return Vr(e, r, i), !1;
        return !0;
      },
      text: function text(e, t) {
        t.value && Wr(e, "textContent", "_s(" + t.value + ")", t);
      },
      html: function html(e, t) {
        t.value && Wr(e, "innerHTML", "_s(" + t.value + ")", t);
      }
    },
        Ca = {
      expectHTML: !0,
      modules: ka,
      directives: Ta,
      isPreTag: function isPreTag(e) {
        return "pre" === e;
      },
      isUnaryTag: wo,
      mustUseProp: Fn,
      canBeLeftOpenTag: Ao,
      isReservedTag: Zn,
      getTagNamespace: er,
      staticKeys: (Aa = ka, Aa.reduce(function (e, t) {
        return e.concat(t.staticKeys || []);
      }, []).join(","))
    },
        Na = S(function (e) {
      return v("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""));
    });

    function Ia(e, t) {
      e && (_a = Na(t.staticKeys || ""), wa = t.isReservedTag || D, xa(e), Ma(e, !1));
    }

    function xa(e) {
      if (e["static"] = function (e) {
        return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e["if"] || e["for"] || g(e.tag) || !wa(e.tag) || function (e) {
          for (; e.parent;) {
            if ("template" !== (e = e.parent).tag) return !1;
            if (e["for"]) return !0;
          }

          return !1;
        }(e) || !Object.keys(e).every(_a))));
      }(e), 1 === e.type) {
        if (!wa(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;

        for (var t = 0, n = e.children.length; t < n; t++) {
          var r = e.children[t];
          xa(r), r["static"] || (e["static"] = !1);
        }

        if (e.ifConditions) for (var i = 1, o = e.ifConditions.length; i < o; i++) {
          var a = e.ifConditions[i].block;
          xa(a), a["static"] || (e["static"] = !1);
        }
      }
    }

    function Ma(e, t) {
      if (1 === e.type) {
        if ((e["static"] || e.once) && (e.staticInFor = t), e["static"] && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void (e.staticRoot = !0);
        if (e.staticRoot = !1, e.children) for (var n = 0, r = e.children.length; n < r; n++) {
          Ma(e.children[n], t || !!e["for"]);
        }
        if (e.ifConditions) for (var i = 1, o = e.ifConditions.length; i < o; i++) {
          Ma(e.ifConditions[i].block, t);
        }
      }
    }

    var Da = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
        Oa = /\([^)]*?\);*$/,
        La = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        Wa = {
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
        $a = {
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
        Ra = function Ra(e) {
      return "if(" + e + ")return null;";
    },
        ja = {
      stop: "$event.stopPropagation();",
      prevent: "$event.preventDefault();",
      self: Ra("$event.target !== $event.currentTarget"),
      ctrl: Ra("!$event.ctrlKey"),
      shift: Ra("!$event.shiftKey"),
      alt: Ra("!$event.altKey"),
      meta: Ra("!$event.metaKey"),
      left: Ra("'button' in $event && $event.button !== 0"),
      middle: Ra("'button' in $event && $event.button !== 1"),
      right: Ra("'button' in $event && $event.button !== 2")
    };

    function Fa(e, t) {
      var n = t ? "nativeOn:" : "on:",
          r = "",
          i = "";

      for (var o in e) {
        var a = Pa(e[o]);
        e[o] && e[o].dynamic ? i += o + "," + a + "," : r += '"' + o + '":' + a + ",";
      }

      return r = "{" + r.slice(0, -1) + "}", i ? n + "_d(" + r + ",[" + i.slice(0, -1) + "])" : n + r;
    }

    function Pa(e) {
      if (!e) return "function(){}";
      if (Array.isArray(e)) return "[" + e.map(function (e) {
        return Pa(e);
      }).join(",") + "]";
      var t = La.test(e.value),
          n = Da.test(e.value),
          r = La.test(e.value.replace(Oa, ""));

      if (e.modifiers) {
        var i = "",
            o = "",
            a = [];

        for (var s in e.modifiers) {
          if (ja[s]) o += ja[s], Wa[s] && a.push(s);else if ("exact" === s) {
            var l = e.modifiers;
            o += Ra(["ctrl", "shift", "alt", "meta"].filter(function (e) {
              return !l[e];
            }).map(function (e) {
              return "$event." + e + "Key";
            }).join("||"));
          } else a.push(s);
        }

        return a.length && (i += function (e) {
          return "if(!$event.type.indexOf('key')&&" + e.map(Ba).join("&&") + ")return null;";
        }(a)), o && (i += o), "function($event){" + i + (t ? "return " + e.value + ".apply(null, arguments)" : n ? "return (" + e.value + ").apply(null, arguments)" : r ? "return " + e.value : e.value) + "}";
      }

      return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}";
    }

    function Ba(e) {
      var t = parseInt(e, 10);
      if (t) return "$event.keyCode!==" + t;
      var n = Wa[e],
          r = $a[e];
      return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")";
    }

    var Ua = {
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
      cloak: M
    },
        Ha = function Ha(e) {
      this.options = e, this.warn = e.warn || Or, this.transforms = Lr(e.modules, "transformCode"), this.dataGenFns = Lr(e.modules, "genData"), this.directives = I(I({}, Ua), e.directives);
      var t = e.isReservedTag || D;
      this.maybeComponent = function (e) {
        return !!e.component || !t(e.tag);
      }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1;
    };

    function Ga(e, t) {
      var n = new Ha(t);
      return {
        render: "with(this){return " + (e ? "script" === e.tag ? "null" : Va(e, n) : '_c("div")') + "}",
        staticRenderFns: n.staticRenderFns
      };
    }

    function Va(e, t) {
      if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return qa(e, t);
      if (e.once && !e.onceProcessed) return Ya(e, t);
      if (e["for"] && !e.forProcessed) return Qa(e, t);
      if (e["if"] && !e.ifProcessed) return za(e, t);

      if ("template" !== e.tag || e.slotTarget || t.pre) {
        if ("slot" === e.tag) return function (e, t) {
          var n = e.slotName || '"default"',
              r = es(e, t),
              i = "_t(" + n + (r ? ",function(){return " + r + "}" : ""),
              o = e.attrs || e.dynamicAttrs ? rs((e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
            return {
              name: w(e.name),
              value: e.value,
              dynamic: e.dynamic
            };
          })) : null,
              a = e.attrsMap["v-bind"];
          return !o && !a || r || (i += ",null"), o && (i += "," + o), a && (i += (o ? "" : ",null") + "," + a), i + ")";
        }(e, t);
        var n;
        if (e.component) n = function (e, t, n) {
          var r = t.inlineTemplate ? null : es(t, n, !0);
          return "_c(" + e + "," + Ja(t, n) + (r ? "," + r : "") + ")";
        }(e.component, e, t);else {
          var r;
          (!e.plain || e.pre && t.maybeComponent(e)) && (r = Ja(e, t));
          var i = e.inlineTemplate ? null : es(e, t, !0);
          n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")";
        }

        for (var o = 0; o < t.transforms.length; o++) {
          n = t.transforms[o](e, n);
        }

        return n;
      }

      return es(e, t) || "void 0";
    }

    function qa(e, t) {
      e.staticProcessed = !0;
      var n = t.pre;
      return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Va(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")";
    }

    function Ya(e, t) {
      if (e.onceProcessed = !0, e["if"] && !e.ifProcessed) return za(e, t);

      if (e.staticInFor) {
        for (var n = "", r = e.parent; r;) {
          if (r["for"]) {
            n = r.key;
            break;
          }

          r = r.parent;
        }

        return n ? "_o(" + Va(e, t) + "," + t.onceId++ + "," + n + ")" : Va(e, t);
      }

      return qa(e, t);
    }

    function za(e, t, n, r) {
      return e.ifProcessed = !0, Ka(e.ifConditions.slice(), t, n, r);
    }

    function Ka(e, t, n, r) {
      if (!e.length) return r || "_e()";
      var i = e.shift();
      return i.exp ? "(" + i.exp + ")?" + o(i.block) + ":" + Ka(e, t, n, r) : "" + o(i.block);

      function o(e) {
        return n ? n(e, t) : e.once ? Ya(e, t) : Va(e, t);
      }
    }

    function Qa(e, t, n, r) {
      var i = e["for"],
          o = e.alias,
          a = e.iterator1 ? "," + e.iterator1 : "",
          s = e.iterator2 ? "," + e.iterator2 : "";
      return e.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || Va)(e, t) + "})";
    }

    function Ja(e, t) {
      var n = "{",
          r = function (e, t) {
        var n = e.directives;

        if (n) {
          var r,
              i,
              o,
              a,
              s = "directives:[",
              l = !1;

          for (r = 0, i = n.length; r < i; r++) {
            o = n[r], a = !0;
            var c = t.directives[o.name];
            c && (a = !!c(e, o, t.warn)), a && (l = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ",arg:" + (o.isDynamicArg ? o.arg : '"' + o.arg + '"') : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},");
          }

          return l ? s.slice(0, -1) + "]" : void 0;
        }
      }(e, t);

      r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');

      for (var i = 0; i < t.dataGenFns.length; i++) {
        n += t.dataGenFns[i](e);
      }

      if (e.attrs && (n += "attrs:" + rs(e.attrs) + ","), e.props && (n += "domProps:" + rs(e.props) + ","), e.events && (n += Fa(e.events, !1) + ","), e.nativeEvents && (n += Fa(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t, n) {
        var r = e["for"] || Object.keys(t).some(function (e) {
          var n = t[e];
          return n.slotTargetDynamic || n["if"] || n["for"] || Xa(n);
        }),
            i = !!e["if"];
        if (!r) for (var o = e.parent; o;) {
          if (o.slotScope && o.slotScope !== da || o["for"]) {
            r = !0;
            break;
          }

          o["if"] && (i = !0), o = o.parent;
        }
        var a = Object.keys(t).map(function (e) {
          return Za(t[e], n);
        }).join(",");
        return "scopedSlots:_u([" + a + "]" + (r ? ",null,true" : "") + (!r && i ? ",null,false," + function (e) {
          for (var t = 5381, n = e.length; n;) {
            t = 33 * t ^ e.charCodeAt(--n);
          }

          return t >>> 0;
        }(a) : "") + ")";
      }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
        var o = function (e, t) {
          var n = e.children[0];

          if (n && 1 === n.type) {
            var r = Ga(n, t.options);
            return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function (e) {
              return "function(){" + e + "}";
            }).join(",") + "]}";
          }
        }(e, t);

        o && (n += o + ",");
      }

      return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + rs(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n;
    }

    function Xa(e) {
      return 1 === e.type && ("slot" === e.tag || e.children.some(Xa));
    }

    function Za(e, t) {
      var n = e.attrsMap["slot-scope"];
      if (e["if"] && !e.ifProcessed && !n) return za(e, t, Za, "null");
      if (e["for"] && !e.forProcessed) return Qa(e, t, Za);
      var r = e.slotScope === da ? "" : String(e.slotScope),
          i = "function(" + r + "){return " + ("template" === e.tag ? e["if"] && n ? "(" + e["if"] + ")?" + (es(e, t) || "undefined") + ":undefined" : es(e, t) || "undefined" : Va(e, t)) + "}",
          o = r ? "" : ",proxy:true";
      return "{key:" + (e.slotTarget || '"default"') + ",fn:" + i + o + "}";
    }

    function es(e, t, n, r, i) {
      var o = e.children;

      if (o.length) {
        var a = o[0];

        if (1 === o.length && a["for"] && "template" !== a.tag && "slot" !== a.tag) {
          var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
          return "" + (r || Va)(a, t) + s;
        }

        var l = n ? function (e, t) {
          for (var n = 0, r = 0; r < e.length; r++) {
            var i = e[r];

            if (1 === i.type) {
              if (ts(i) || i.ifConditions && i.ifConditions.some(function (e) {
                return ts(e.block);
              })) {
                n = 2;
                break;
              }

              (t(i) || i.ifConditions && i.ifConditions.some(function (e) {
                return t(e.block);
              })) && (n = 1);
            }
          }

          return n;
        }(o, t.maybeComponent) : 0,
            c = i || ns;
        return "[" + o.map(function (e) {
          return c(e, t);
        }).join(",") + "]" + (l ? "," + l : "");
      }
    }

    function ts(e) {
      return void 0 !== e["for"] || "template" === e.tag || "slot" === e.tag;
    }

    function ns(e, t) {
      return 1 === e.type ? Va(e, t) : 3 === e.type && e.isComment ? function (e) {
        return "_e(" + JSON.stringify(e.text) + ")";
      }(e) : "_v(" + (2 === (n = e).type ? n.expression : is(JSON.stringify(n.text))) + ")";
      var n;
    }

    function rs(e) {
      for (var t = "", n = "", r = 0; r < e.length; r++) {
        var i = e[r],
            o = is(i.value);
        i.dynamic ? n += i.name + "," + o + "," : t += '"' + i.name + '":' + o + ",";
      }

      return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t;
    }

    function is(e) {
      return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }

    function os(e, t) {
      try {
        return new Function(e);
      } catch (n) {
        return t.push({
          err: n,
          code: e
        }), M;
      }
    }

    function as(e) {
      var t = Object.create(null);
      return function (n, r, i) {
        (r = I({}, r)).warn, delete r.warn;
        var o = r.delimiters ? String(r.delimiters) + n : n;
        if (t[o]) return t[o];
        var a = e(n, r),
            s = {},
            l = [];
        return s.render = os(a.render, l), s.staticRenderFns = a.staticRenderFns.map(function (e) {
          return os(e, l);
        }), t[o] = s;
      };
    }

    new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
    var ss,
        ls,
        cs = (ss = function ss(e, t) {
      var n = function (e, t) {
        Go = t.warn || Or, Ko = t.isPreTag || D, Qo = t.mustUseProp || D, Jo = t.getTagNamespace || D, t.isReservedTag, qo = Lr(t.modules, "transformNode"), Yo = Lr(t.modules, "preTransformNode"), zo = Lr(t.modules, "postTransformNode"), Vo = t.delimiters;
        var n,
            r,
            i = [],
            o = !1 !== t.preserveWhitespace,
            a = t.whitespace,
            s = !1,
            l = !1;

        function c(e) {
          if (u(e), s || e.processed || (e = pa(e, t)), i.length || e === n || n["if"] && (e.elseif || e["else"]) && va(n, {
            exp: e.elseif,
            block: e
          }), r && !e.forbidden) if (e.elseif || e["else"]) a = e, c = function (e) {
            for (var t = e.length; t--;) {
              if (1 === e[t].type) return e[t];
              e.pop();
            }
          }(r.children), c && c["if"] && va(c, {
            exp: a.elseif,
            block: a
          });else {
            if (e.slotScope) {
              var o = e.slotTarget || '"default"';
              (r.scopedSlots || (r.scopedSlots = {}))[o] = e;
            }

            r.children.push(e), e.parent = r;
          }
          var a, c;
          e.children = e.children.filter(function (e) {
            return !e.slotScope;
          }), u(e), e.pre && (s = !1), Ko(e.tag) && (l = !1);

          for (var d = 0; d < zo.length; d++) {
            zo[d](e, t);
          }
        }

        function u(e) {
          if (!l) for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) {
            e.children.pop();
          }
        }

        return function (e, t) {
          for (var n, r, i = [], o = t.expectHTML, a = t.isUnaryTag || D, s = t.canBeLeftOpenTag || D, l = 0; e;) {
            if (n = e, r && $o(r)) {
              var c = 0,
                  u = r.toLowerCase(),
                  d = Ro[u] || (Ro[u] = new RegExp("([\\s\\S]*?)(</" + u + "[^>]*>)", "i")),
                  f = e.replace(d, function (e, n, r) {
                return c = r.length, $o(u) || "noscript" === u || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Uo(u, n) && (n = n.slice(1)), t.chars && t.chars(n), "";
              });
              l += e.length - f.length, e = f, T(u, l - c, l);
            } else {
              var p = e.indexOf("<");

              if (0 === p) {
                if (Lo.test(e)) {
                  var h = e.indexOf("--\x3e");

                  if (h >= 0) {
                    t.shouldKeepComment && t.comment(e.substring(4, h), l, l + h + 3), w(h + 3);
                    continue;
                  }
                }

                if (Wo.test(e)) {
                  var v = e.indexOf("]>");

                  if (v >= 0) {
                    w(v + 2);
                    continue;
                  }
                }

                var g = e.match(Oo);

                if (g) {
                  w(g[0].length);
                  continue;
                }

                var m = e.match(Do);

                if (m) {
                  var y = l;
                  w(m[0].length), T(m[1], y, l);
                  continue;
                }

                var b = A();

                if (b) {
                  k(b), Uo(b.tagName, e) && w(1);
                  continue;
                }
              }

              var E = void 0,
                  S = void 0,
                  _ = void 0;

              if (p >= 0) {
                for (S = e.slice(p); !(Do.test(S) || xo.test(S) || Lo.test(S) || Wo.test(S) || (_ = S.indexOf("<", 1)) < 0);) {
                  p += _, S = e.slice(p);
                }

                E = e.substring(0, p);
              }

              p < 0 && (E = e), E && w(E.length), t.chars && E && t.chars(E, l - E.length, l);
            }

            if (e === n) {
              t.chars && t.chars(e);
              break;
            }
          }

          function w(t) {
            l += t, e = e.substring(t);
          }

          function A() {
            var t = e.match(xo);

            if (t) {
              var n,
                  r,
                  i = {
                tagName: t[1],
                attrs: [],
                start: l
              };

              for (w(t[0].length); !(n = e.match(Mo)) && (r = e.match(Co) || e.match(To));) {
                r.start = l, w(r[0].length), r.end = l, i.attrs.push(r);
              }

              if (n) return i.unarySlash = n[1], w(n[0].length), i.end = l, i;
            }
          }

          function k(e) {
            var n = e.tagName,
                l = e.unarySlash;
            o && ("p" === r && ko(n) && T(r), s(n) && r === n && T(n));

            for (var c = a(n) || !!l, u = e.attrs.length, d = new Array(u), f = 0; f < u; f++) {
              var p = e.attrs[f],
                  h = p[3] || p[4] || p[5] || "",
                  v = "a" === n && "href" === p[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
              d[f] = {
                name: p[1],
                value: Ho(h, v)
              };
            }

            c || (i.push({
              tag: n,
              lowerCasedTag: n.toLowerCase(),
              attrs: d,
              start: e.start,
              end: e.end
            }), r = n), t.start && t.start(n, d, c, e.start, e.end);
          }

          function T(e, n, o) {
            var a, s;
            if (null == n && (n = l), null == o && (o = l), e) for (s = e.toLowerCase(), a = i.length - 1; a >= 0 && i[a].lowerCasedTag !== s; a--) {
              ;
            } else a = 0;

            if (a >= 0) {
              for (var c = i.length - 1; c >= a; c--) {
                t.end && t.end(i[c].tag, n, o);
              }

              i.length = a, r = a && i[a - 1].tag;
            } else "br" === s ? t.start && t.start(e, [], !0, n, o) : "p" === s && (t.start && t.start(e, [], !1, n, o), t.end && t.end(e, n, o));
          }

          T();
        }(e, {
          warn: Go,
          expectHTML: t.expectHTML,
          isUnaryTag: t.isUnaryTag,
          canBeLeftOpenTag: t.canBeLeftOpenTag,
          shouldDecodeNewlines: t.shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
          shouldKeepComment: t.comments,
          outputSourceRange: t.outputSourceRange,
          start: function start(e, o, a, u, d) {
            var f = r && r.ns || Jo(e);
            J && "svg" === f && (o = function (e) {
              for (var t = [], n = 0; n < e.length; n++) {
                var r = e[n];
                ba.test(r.name) || (r.name = r.name.replace(Ea, ""), t.push(r));
              }

              return t;
            }(o));
            var p,
                h = fa(e, o, r);
            f && (h.ns = f), "style" !== (p = h).tag && ("script" !== p.tag || p.attrsMap.type && "text/javascript" !== p.attrsMap.type) || oe() || (h.forbidden = !0);

            for (var v = 0; v < Yo.length; v++) {
              h = Yo[v](h, t) || h;
            }

            s || (function (e) {
              null != Ur(e, "v-pre") && (e.pre = !0);
            }(h), h.pre && (s = !0)), Ko(h.tag) && (l = !0), s ? function (e) {
              var t = e.attrsList,
                  n = t.length;
              if (n) for (var r = e.attrs = new Array(n), i = 0; i < n; i++) {
                r[i] = {
                  name: t[i].name,
                  value: JSON.stringify(t[i].value)
                }, null != t[i].start && (r[i].start = t[i].start, r[i].end = t[i].end);
              } else e.pre || (e.plain = !0);
            }(h) : h.processed || (ha(h), function (e) {
              var t = Ur(e, "v-if");
              if (t) e["if"] = t, va(e, {
                exp: t,
                block: e
              });else {
                null != Ur(e, "v-else") && (e["else"] = !0);
                var n = Ur(e, "v-else-if");
                n && (e.elseif = n);
              }
            }(h), function (e) {
              null != Ur(e, "v-once") && (e.once = !0);
            }(h)), n || (n = h), a ? c(h) : (r = h, i.push(h));
          },
          end: function end(e, t, n) {
            var o = i[i.length - 1];
            i.length -= 1, r = i[i.length - 1], c(o);
          },
          chars: function chars(e, t, n) {
            if (r && (!J || "textarea" !== r.tag || r.attrsMap.placeholder !== e)) {
              var i,
                  c,
                  u,
                  d = r.children;
              (e = l || e.trim() ? "script" === (i = r).tag || "style" === i.tag ? e : ua(e) : d.length ? a ? "condense" === a && la.test(e) ? "" : " " : o ? " " : "" : "") && (l || "condense" !== a || (e = e.replace(ca, " ")), !s && " " !== e && (c = function (e, t) {
                var n = t ? Eo(t) : yo;

                if (n.test(e)) {
                  for (var r, i, o, a = [], s = [], l = n.lastIndex = 0; r = n.exec(e);) {
                    (i = r.index) > l && (s.push(o = e.slice(l, i)), a.push(JSON.stringify(o)));
                    var c = Mr(r[1].trim());
                    a.push("_s(" + c + ")"), s.push({
                      "@binding": c
                    }), l = i + r[0].length;
                  }

                  return l < e.length && (s.push(o = e.slice(l)), a.push(JSON.stringify(o))), {
                    expression: a.join("+"),
                    tokens: s
                  };
                }
              }(e, Vo)) ? u = {
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
            if (r) {
              var i = {
                type: 3,
                text: e,
                isComment: !0
              };
              r.children.push(i);
            }
          }
        }), n;
      }(e.trim(), t);

      !1 !== t.optimize && Ia(n, t);
      var r = Ga(n, t);
      return {
        ast: n,
        render: r.render,
        staticRenderFns: r.staticRenderFns
      };
    }, function (e) {
      function t(t, n) {
        var r = Object.create(e),
            i = [],
            o = [];
        if (n) for (var a in n.modules && (r.modules = (e.modules || []).concat(n.modules)), n.directives && (r.directives = I(Object.create(e.directives || null), n.directives)), n) {
          "modules" !== a && "directives" !== a && (r[a] = n[a]);
        }

        r.warn = function (e, t, n) {
          (n ? o : i).push(e);
        };

        var s = ss(t.trim(), r);
        return s.errors = i, s.tips = o, s;
      }

      return {
        compile: t,
        compileToFunctions: as(t)
      };
    }),
        us = cs(Ca),
        ds = (us.compile, us.compileToFunctions);

    function fs(e) {
      return (ls = ls || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', ls.innerHTML.indexOf("&#10;") > 0;
    }

    var ps = !!Y && fs(!1),
        hs = !!Y && fs(!0),
        vs = S(function (e) {
      var t = rr(e);
      return t && t.innerHTML;
    }),
        gs = In.prototype.$mount;
    In.prototype.$mount = function (e, t) {
      if ((e = e && rr(e)) === document.body || e === document.documentElement) return this;
      var n = this.$options;

      if (!n.render) {
        var r = n.template;
        if (r) {
          if ("string" == typeof r) "#" === r.charAt(0) && (r = vs(r));else {
            if (!r.nodeType) return this;
            r = r.innerHTML;
          }
        } else e && (r = function (e) {
          if (e.outerHTML) return e.outerHTML;
          var t = document.createElement("div");
          return t.appendChild(e.cloneNode(!0)), t.innerHTML;
        }(e));

        if (r) {
          var i = ds(r, {
            outputSourceRange: !1,
            shouldDecodeNewlines: ps,
            shouldDecodeNewlinesForHref: hs,
            delimiters: n.delimiters,
            comments: n.comments
          }, this),
              o = i.render,
              a = i.staticRenderFns;
          n.render = o, n.staticRenderFns = a;
        }
      }

      return gs.call(this, e, t);
    }, In.compile = ds;
    var ms = In;

    var ys = function ys() {
      _classCallCheck(this, ys);
    };

    _defineProperty(ys, "NONE", 0);

    _defineProperty(ys, "UP", Math.pow(2, 0));

    _defineProperty(ys, "DOWN", Math.pow(2, 1));

    _defineProperty(ys, "LEFT", Math.pow(2, 2));

    _defineProperty(ys, "RIGHT", Math.pow(2, 3));

    _defineProperty(ys, "ALL", ys.UP + ys.DOWN + ys.LEFT + ys.RIGHT);

    var bs = function bs() {
      _classCallCheck(this, bs);
    };

    _defineProperty(bs, "NONE", 0);

    _defineProperty(bs, "N", Math.pow(2, 0));

    _defineProperty(bs, "S", Math.pow(2, 1));

    _defineProperty(bs, "W", Math.pow(2, 2));

    _defineProperty(bs, "E", Math.pow(2, 3));

    _defineProperty(bs, "NE", Math.pow(2, 4));

    _defineProperty(bs, "SE", Math.pow(2, 5));

    _defineProperty(bs, "SW", Math.pow(2, 6));

    _defineProperty(bs, "NW", Math.pow(2, 7));

    _defineProperty(bs, "ALL", Math.pow(2, 8) - 1);

    var Es = [bs.N, bs.NE, bs.E, bs.SE, bs.S, bs.SW, bs.W, bs.NW];

    var Ss, _s;

    !function (e) {
      e.IT = "it", e.EN = "en";
    }(Ss || (Ss = {})), function (e) {
      e[e.BASIC = 0] = "BASIC", e[e.D_STAR_LITE = 1] = "D_STAR_LITE";
    }(_s || (_s = {}));
    var ws = {
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
        lang: Ss.EN,
        skin: "ld3-webskin1.png",
        enableCLI: !0,
        mapper: {
          scales: [.2, .4, .6, .94]
        }
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
      },
      development: {
        tracing: {
          enabled: !0,
          threshold: 800
        }
      }
    };
    var As, ks, Ts;
    !function (e) {
      function t(e) {
        return null == e || void 0 === e || ("string" == typeof e ? "" === e : "object" == _typeof(e) && "size" in e ? 0 === e.size : e.constructor === Array || e.constructor === String ? 0 === e.length : e.constructor === Object && 0 === Object.keys(e).length);
      }

      e.isEmpty = t, e.unitTestIsEmpty = function () {
        var e = new Map();
        console.assert(t(e), "empty ES6 map"), e.set("a", "a"), console.assert(!t(e), "not empty ES6 map"), e["delete"]("a"), console.assert(t(e), "empty ES6 map (deleted key)"), e = [], console.assert(t(e), "empty array"), e[0] = 1, console.assert(!t(e), "not empty array"), e = new Array(), console.assert(t(e), "empty Array"), e = e.push("1"), console.assert(!t(e), "not empty Array"), e = "", console.assert(t(e), "empty string"), e = "a", console.assert(!t(e), "not empty string"), e = new Object(), console.assert(t(e), "empty Object"), e.a = 1, console.assert(!t(e), "not empty Object"), delete e.a, console.assert(t(e), "empty Object (deleted property)"), e = {}, console.assert(t(e), "empty {}"), e.a = 1, console.assert(!t(e), "not empty {}"), delete e.a, console.assert(t(e), "empty {} (deleted property)"), console.assert(!t(!0), "not empty boolean (true)"), console.assert(!t(!1), "not empty boolean (false)"), console.assert(!t(0), "not empty number"), console.assert(!t(0), "not empty float");
      }, e.mergeMaps = function (e, t) {
        var n = new Map();

        function r(e, t, r) {
          n.set(t, e);
        }

        return t.forEach(r), e.forEach(r), n;
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
    }(As || (As = {})), new Date().getTime(), function (e) {
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

      function r(e, t) {
        return (e & t) === t && t !== ys.NONE;
      }

      function i(e, t) {
        var n = ys.NONE;

        switch (t) {
          case 0:
            n = ys.UP;
            break;

          case 2:
            n = ys.DOWN;
            break;

          case 3:
            n = ys.LEFT;
            break;

          case 1:
            n = ys.RIGHT;
        }

        return r(e, n);
      }

      function o(e, t, n, r) {
        var i = ys.NONE;
        return n && void 0 !== e.blocks && t < e.blocks.length && (i |= e.blocks[t]), r && void 0 !== e.dynamicBlocks && t < e.dynamicBlocks.length && (i |= e.dynamicBlocks[t]), i;
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
        var n, r, i, o;
        return n = e.x < t.x ? e.x : t.x, r = e.y < t.y ? e.y : t.y, o = e.x + e.w > t.x + t.w ? e.x + e.w - n : t.x + t.w - n, i = e.y + e.h > t.y + t.h ? e.y + e.h - r : t.y + t.h - r, {
          x: n,
          y: r,
          w: o,
          h: i
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
      }, e.cellToGid = t, e.getDirectionTarget = n, e.isBlockDirectionBlocked = r, e.isDirectionEnumBlocked = i, e.isMovementBlocked = function (r, o, s, l) {
        var c = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
        var u;
        u = t({
          i: o,
          j: s
        }, r.width);
        var d,
            f = e.getMapStaticBlock(r, u),
            p = t(n({
          i: o,
          j: s
        }, l), r.width);
        return d = c ? e.getMapStaticBlock(r, p) : e.getMapBlocks(r, p), i(f, l) || i(d, a(l));
      }, e.getBlock = function (e, t, n, r) {
        var i = 0;
        return i |= e ? ys.UP : 0, i |= t ? ys.DOWN : 0, i |= n ? ys.LEFT : 0, i |= r ? ys.RIGHT : 0, i;
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
            r = 0;

        for (var _i2 = 0, _n3 = n; _i2 < _n3.length; _i2++) {
          var _t3 = _n3[_i2];
          if (e === _t3) break;
          r++;
        }

        switch (t) {
          case 3:
            r--;
            break;

          case 1:
            r++;
            break;

          case 2:
            r += 2;
        }

        return r < 0 ? r = n.length - 1 : r >= n.length && (r -= n.length), n[r];
      }, e.getDirection = function (e, t) {
        var n,
            r = e.i - t.i,
            i = e.j - t.j;
        return n = Math.abs(r) > Math.abs(i) ? r > 0 ? 1 : 3 : i > 0 ? 2 : i < 0 ? 0 : 4, n;
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
        return !As.isEmpty(e) && !Number.isNaN(e) && e >= 0 && e <= 4 ? e : 0;
      }, e.getDirectionName = s, e.getBlockName = function (e) {
        var t = "free";
        return r(e, ys.UP) && (t = s(0)), r(e, ys.DOWN) && (t += s(2)), r(e, ys.LEFT) && (t += s(3)), r(e, ys.RIGHT) && (t += s(1)), t;
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
          case bs.W:
          case bs.SW:
          case bs.NW:
            if (e % n.w == 0) return;
            break;

          case bs.E:
          case bs.NE:
          case bs.SE:
            if (e % n.w == n.w - 1) return;
        }

        var r = e;

        switch (t) {
          case bs.N:
            r -= n.w;
            break;

          case bs.S:
            r += n.w;
            break;

          case bs.W:
            r -= 1;
            break;

          case bs.E:
            r += 1;
            break;

          case bs.NE:
            r -= n.w - 1;
            break;

          case bs.SE:
            r += n.w + 1;
            break;

          case bs.SW:
            r += n.w - 1;
            break;

          case bs.NW:
            r -= n.w + 1;
            break;

          default:
            console.error("Unexpected case: " + t);
        }

        return r >= 0 && r < n.w * n.h ? r : void 0;
      };
    }(ks || (ks = {})), function (e) {
      function t() {
        return {
          id: As.getRandomString(),
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
          lang: ws.ui.lang,
          skin: ws.ui.skin,
          flagAntialiasing: !1,
          flagDouble: !1,
          flagNatural: !1
        };
      }

      function r() {
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

      function i() {
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
        return e.name = ws.hero.name, e.i = ws.maps.start.i, e.j = ws.maps.start.j, e.states = [], e.states[0] = {
          direction: 2,
          condition: "always",
          trigger: 0
        }, e.states[0].charaset = ws.hero.charaset, e;
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

        var _iterator = _createForOfIteratorHelper(e.layers),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _t4 = _step.value;
            _t4.data = void 0;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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
          timestamp: As.now(),
          currentMap: ws.maps.start.map,
          hero: i(),
          maps: [],
          config: n(),
          variables: {}
        };
      }, e.getConfig = n, e.getEvent = r, e.getHero = i, e.getEventState = o, e.getString = function () {
        return "";
      }, e.getTree = function () {
        return {};
      }, e.getCharacter = function () {
        return {
          direction: 2
        };
      };
    }(Ts || (Ts = {}));

    var Cs = function Cs() {
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
          src: "https://www.google.com/recaptcha/api.js?render=6LfudvIUAAAAADY9aLIgdcbuY8kekIKAv6WYEYFb"
        }
      }), e._v(" "), e.flagSent ? n("div", [e.flagReceived ? void 0 !== e.url ? n("div", [n("p", [e._v("\n                Thank you for your feedback!"), n("br"), e._v("\n                You can find it on the project issue tracker: "), n("a", {
        attrs: {
          href: e.url
        }
      }, [e._v(e._s(e.url))]), n("br")]), e._v(" "), n("button", {
        on: {
          click: function click(t) {
            return e.reset();
          }
        }
      }, [e._v("Dismiss")])]) : n("div", [e._m(1), e._v(" "), n("button", {
        on: {
          click: function click(t) {
            return e.reset(!0);
          }
        }
      }, [e._v("Dismiss")])]) : n("div", [n("img", {
        staticClass: "loading",
        attrs: {
          src: "/style/ui/ajax-loader.webp",
          alt: "loading..."
        }
      })])]) : n("div", [n("p", [n("label", {
        attrs: {
          "for": "issueLabel"
        }
      }, [e._v("Do you want to report something?")]), n("br"), e._v(" "), n("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: e.label,
          expression: "label"
        }],
        attrs: {
          id: "issueLabel"
        },
        on: {
          change: function change(t) {
            var n = Array.prototype.filter.call(t.target.options, function (e) {
              return e.selected;
            }).map(function (e) {
              return "_value" in e ? e._value : e.value;
            });
            e.label = t.target.multiple ? n : n[0];
          }
        }
      }, [n("option", {
        attrs: {
          selected: "",
          disabled: ""
        }
      }), e._v(" "), n("option", {
        attrs: {
          value: "bug"
        }
      }, [e._v("Problem")]), e._v(" "), n("option", {
        attrs: {
          value: "question"
        }
      }, [e._v("Question")]), e._v(" "), n("option", {
        attrs: {
          value: "enhancement"
        }
      }, [e._v("Enhancement suggestion")]), e._v(" "), n("option", {
        attrs: {
          value: "other"
        }
      }, [e._v("Other")])])]), e._v(" "), n("p", [n("label", {
        attrs: {
          "for": "issueDescription"
        }
      }, [e._v("What's on your mind?")]), n("br"), e._v(" "), n("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: e.description,
          expression: "description"
        }],
        staticClass: "description",
        attrs: {
          id: "issueDescription",
          type: "text"
        },
        domProps: {
          value: e.description
        },
        on: {
          input: function input(t) {
            t.target.composing || (e.description = t.target.value);
          }
        }
      })]), e._v(" "), e._m(0), e._v(" "), n("button", {
        attrs: {
          disabled: 0 === e.description.trim().length
        },
        on: {
          click: function click(t) {
            return e.send();
          }
        }
      }, [e._v("Send")])])]);
    };

    Cs._withStripped = !0;
    var Ns = "state";
    var Is, xs, Ms, Ds;
    !function (e) {
      e[e.OK = 200] = "OK", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e[e.NOT_MODIFIED = 304] = "NOT_MODIFIED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", e[e.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED";
    }(Is || (Is = {})), function (e) {
      e.LOCATION = "Location";
    }(xs || (xs = {})), function (e) {
      e.AUTOTILE = "autotile", e.CHAR = "charset", e.FACE = "faceset", e.FAVICON = "favicon", e.SKIN = "skin", e.TILE = "tile", e.PICTURE = "picture", e.POINTER = "pointer", e.AUTOTILESET = "autotileset", e.MAP = "map", e.TREE = "tree", e.STRING = "string", e.TILESET = "tileset", e.DIALOG = "dialog", e.GENERIC_MESSAGE = "generic-message", e.CONFIGURATION = "configuration", e.SAVE = "save";
    }(Ms || (Ms = {})), function (e) {
      function t(e, t) {
        var n = e.memory.state,
            r = Number.parseInt(n);
        return !Number.isNaN(r) && r === t;
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
    }(Ds || (Ds = {}));

    var Os = function Os() {
      _classCallCheck(this, Os);

      _defineProperty(this, "showGrid", !1);

      _defineProperty(this, "showEditorGrid", !1);

      _defineProperty(this, "showFPS", !1);

      _defineProperty(this, "showCellNumbers", !1);

      _defineProperty(this, "showFocus", !1);

      _defineProperty(this, "enableSelection", !1);

      _defineProperty(this, "showBlocks", !1);

      _defineProperty(this, "showOnTops", !1);

      _defineProperty(this, "enableAntialiasing", !0);

      _defineProperty(this, "fps", 0);

      _defineProperty(this, "selectCellStart", void 0);

      _defineProperty(this, "selectCellEnd", void 0);

      _defineProperty(this, "selectEventCell", void 0);
    };

    function Ls() {}

    var Ws = function Ws(e, t, n, r, i) {};

    var $s;
    !function (e) {
      var _class, _temp;

      var t = !1,
          n = [];

      var r = function r() {
        _classCallCheck(this, r);
      };

      _defineProperty(r, "UP", "ArrowUp");

      _defineProperty(r, "DOWN", "ArrowDown");

      _defineProperty(r, "LEFT", "ArrowLeft");

      _defineProperty(r, "RIGHT", "ArrowRight");

      _defineProperty(r, "CTRL", "Control");

      _defineProperty(r, "ALT", "Alt");

      _defineProperty(r, "ENTER", "Enter");

      _defineProperty(r, "SPACEBAR", " ");

      _defineProperty(r, "CAPS", "CapsLock");

      _defineProperty(r, "SHIFT", "Shift");

      _defineProperty(r, "W", "w");

      _defineProperty(r, "A", "a");

      _defineProperty(r, "D", "d");

      _defineProperty(r, "S", "s");

      _defineProperty(r, "P", "p");

      _defineProperty(r, "E", "e");

      _defineProperty(r, "F1", "F1");

      _defineProperty(r, "F2", "F2");

      _defineProperty(r, "F3", "F3");

      _defineProperty(r, "F4", "F4");

      _defineProperty(r, "F5", "F5");

      _defineProperty(r, "F6", "F6");

      _defineProperty(r, "N_0", "0");

      _defineProperty(r, "N_1", "1");

      _defineProperty(r, "N_2", "2");

      _defineProperty(r, "N_3", "3");

      _defineProperty(r, "N_4", "4");

      _defineProperty(r, "N_5", "5");

      _defineProperty(r, "N_6", "6");

      _defineProperty(r, "N_7", "7");

      _defineProperty(r, "N_8", "8");

      _defineProperty(r, "N_9", "9");

      function i() {
        var _iterator2 = _createForOfIteratorHelper(n),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _e2 = _step2.value;

            try {
              _e2();
            } catch (e) {
              console.error("Error executing onAction callback:"), console.error(e);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        n = [];
      }

      e.Keys = r, e.MouseButtons = (_temp = _class = function _class() {
        _classCallCheck(this, _class);
      }, _defineProperty(_class, "LEFT", 1), _defineProperty(_class, "RIGHT", 2), _defineProperty(_class, "MIDDLE", 4), _temp), e.init = function (e, n, o, a, s, l, c, u, d, f, p, h, v, g, m) {
        var y,
            b = !1;

        o[r.P] = function (e) {
          b ? (p(), b = !1) : (f(), b = !0);
        };

        var E = !1;

        function S(e) {
          var t = {
            x: e.clientX,
            y: e.clientY
          };
          return n.mapPositionToGrid(t);
        }

        e.addEventListener("click", function (e) {
          var n = S(e);
          t || s(n.i, n.j, n.x, n.y), i();
        }), e.addEventListener("mousemove", function (e) {
          var t = S(e);
          E ? u(t.i, t.j, e.buttons) : d(t.i, t.j);
        }), e.addEventListener("mousedown", function (e) {
          E = !0;
          var t = S(e);
          l(t.i, t.j, t.x, t.y, e.buttons), i();
        }), e.addEventListener("mouseup", function (e) {
          E = !1;
          var t = S(e);
          c(t.i, t.j, e.buttons);
        }), e.addEventListener("mouseout", function (e) {
          E ? u(void 0, void 0, e.buttons) : d(void 0, void 0);
        }), e.addEventListener("contextmenu", function (e) {
          e.preventDefault();
          var t = S(e);
          v(t.i, t.j);
        }), e.addEventListener("dblclick", function (e) {
          var t = S(e);
          g(t.i, t.j);
        }), e.addEventListener("wheel", function (e) {
          var t = S(e);
          m(t.i, t.j);
        }, {
          passive: !0
        }), e.addEventListener("touchstart", function (e) {
          var t = S(e);
          l(t.i, t.j, t.x, t.y), i();
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
          var t = o[e.key];
          void 0 !== t && t(e), y = e.key;
        }), document.addEventListener("keyup", function (e) {
          e.key === y && a();
        }), document.addEventListener("visibilitychange", function () {
          document.hidden ? (f(), b = !0) : (p(), b = !1);
        }), window.addEventListener("resize", function (e) {
          h();
        }), document.addEventListener("orientationchange", function () {
          h();
        });
      }, e.escapeText = function (e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      }, e.addActionCallback = function (e) {
        n.push(e);
      }, e.executeActionCallback = i, e.disableActionEvents = function () {
        t = !0;
      }, e.enableActionEvents = function () {
        t = !1;
      };
    }($s || ($s = {}));
    var Rs = [];

    function js(e, t) {
      var n;

      switch (e) {
        case 0:
          n = $s.Keys.N_0;
          break;

        case 1:
          n = $s.Keys.N_1;
          break;

        case 2:
          n = $s.Keys.N_2;
          break;

        case 3:
          n = $s.Keys.N_3;
          break;

        case 4:
          n = $s.Keys.N_4;
          break;

        case 5:
          n = $s.Keys.N_5;
          break;

        case 6:
          n = $s.Keys.N_6;
          break;

        case 7:
          n = $s.Keys.N_7;
          break;

        case 8:
          n = $s.Keys.N_8;
          break;

        case 9:
          n = $s.Keys.N_9;
          break;

        default:
          return void console.error("Unexpected numericKey: " + e);
      }

      var r = function r(e) {
        e.key === n && (t(e), function () {
          var _iterator3 = _createForOfIteratorHelper(Rs),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _e3 = _step3.value;
              document.removeEventListener("keydown", _e3);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          Rs = [];
        }());
      };

      Rs.push(r), document.addEventListener("keydown", r);
    }

    var Fs, Ps, Bs, Us, Hs;
    !function (e) {
      var t = "dialogContainer";
      var n;

      function r() {
        var e = document.getElementById(t);
        null !== e ? (e.classList.replace("hiddenFadeOut", "visibleFadeIn"), setTimeout(function () {
          e.style.display = "none";
        }, 200), $s.disableActionEvents()) : console.error("Element not foud: dialogContainer");
      }

      function i() {
        $s.enableActionEvents();
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

            $s.addActionCallback(n), e.onclick = n, e.style.cursor = "pointer";
          }, 500);
        });
      }

      function a(e, t, n) {
        al.load(e, Ms.STRING, function (t) {
          As.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading string: " + e), n()) : n(t);
        }, t);
      }

      function s(e, t, n) {
        e !== Ts.DEFAULT_ID ? al.load(e + "", Ms.DIALOG, function (t) {
          if (As.isEmpty(t) || "string" != typeof t) console.error("Error while loading dialog: " + e), n(Ts.getDialogNode(Ts.FIRST_ELEM_ID));else {
            var _e4 = JSON.parse(t),
                _r2 = function (e, t, n) {
              var r = new Map(),
                  i = new Map();

              var _iterator4 = _createForOfIteratorHelper(t),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _e5 = _step4.value;
                  r.set(_e5.id, _e5);
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
                  i.set(_e6.id, _e6);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              if (r.has(e)) {
                var _t5 = r.get(e);

                return l(_t5, r, i), _t5;
              }

              return console.error("Cannot reconstruct dialog tree from node: " + e), Ts.getDialogNode();
            }(Ts.FIRST_ELEM_ID, _e4.nodes, _e4.edges);

            n(_r2);
          }
        }, t) : n(Ts.getDialogNode(Ts.FIRST_ELEM_ID));
      }

      function l(e, t, n) {
        if (e.referenced = !0, !As.isEmpty(e.edgeIds)) {
          var _iterator6 = _createForOfIteratorHelper(e.edgeIds),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _r3 = _step6.value;

              if (n.has(_r3)) {
                var _i3 = n.get(_r3);

                if (void 0 === e.edges && (e.edges = []), e.edges.push(_i3), void 0 !== _i3.nodeId) if (t.has(_i3.nodeId)) {
                  var _e7 = t.get(_i3.nodeId);

                  _i3.node = _e7, _e7.referenced && (_i3.nodeReferenced = !0), l(_e7, t, n);
                } else console.error("Cannot reconstruct dialog tree from edge: " + _i3.id + ", node not found: " + _i3.nodeId);
              } else console.error("Cannot reconstruct dialog tree from node: " + e.id + ", edge not found: " + _r3);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      }

      function c(e, t, n, r) {
        if (t.has(e.id)) return;
        t.set(e.id, e);
        var i = e.edges;

        if (!As.isEmpty(i)) {
          r && delete e.edges;

          var _iterator7 = _createForOfIteratorHelper(i),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _e8 = _step7.value;
              if (n.has(_e8.id)) continue;
              n.set(_e8.id, _e8);
              var _i4 = _e8.node;
              void 0 !== _i4 && (r && delete _e8.node, c(_i4, t, n));
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
            v = document.getElementById("dialogName"),
            g = document.getElementById("dialogArea");
        if (null === h) return void console.error("Element not foud: dialogFace");
        if (null === v || null === v.firstChild) return void console.error("Element not foud: dialogName");
        if (null === g) return void console.error("Element not foud: dialogArea");
        if (null === p) return void console.error("Element not foud: dialogFrame");
        r(), As.isEmpty(l) ? console.error("skin is not defined!") : p.style.borderImageSource = "url('/assets/skin/" + l + "')";
        var m = s.face;
        void 0 !== m ? (h.style.display = "block", h.style.backgroundImage = "url('/assets/faceset/" + m + "')") : h.style.display = "none", void 0 !== s.name ? (v.firstChild.textContent = s.name, v.style.visibility = "block") : v.style.visibility = "hidden";

        var y = function (e) {
          var t;
          return void 0 !== e.genericMessage && (t = function (e) {
            var t = n.get(e);

            if (void 0 !== t && !As.isEmpty(t.values)) {
              var _e9, _n4;

              if (_e9 = void 0 === t.condition ? t.values : t.values.filter(function (e) {
                return d(t.condition, e.conditionParams);
              }), 0 === _e9.length) return;
              return _n4 = 1 === _e9.length ? 0 : ks.getRandomInteger(0, _e9.length - 1), _e9[_n4].message;
            }
          }(e.genericMessage)), void 0 === t && (t = e.message), void 0 !== t && (t = t), t;
        }(s);

        g.innerText = void 0 !== y ? y : "";
        var b = document.getElementById("dialogEdgeArea");
        if (null === b) return void console.error("Element not foud: dialogEdgeArea");

        for (; b.firstChild;) {
          b.removeChild(b.firstChild);
        }

        var E = [];

        if (void 0 !== s.edges) {
          var _iterator8 = _createForOfIteratorHelper(s.edges),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _e10 = _step8.value;
              d(_e10.condition) && E.push(_e10);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }

        var S = function S(n) {
          var r;

          if (void 0 !== n.action) {
            var _i5,
                _o3 = document.getElementById("userInput");

            if (null === _o3) return void console.warn("Input required");
            _i5 = _o3.value, _i5 = _i5.trim(), _i5 = $s.escapeText(_i5), r = c(e, n, t, a, _i5);
          }

          void 0 !== n.node ? void 0 === r ? u(e, t, a, n.node, l, c, f) : r.then(function () {
            u(e, t, a, n.node, l, c, f);
          }) : o(0).then(i);
        };

        if (0 === E.length) o(s.closingTimeout).then(i);else if (1 === E.length && void 0 === E[0].message) {
          if (void 0 === E[0].inputType) o(s.closingTimeout).then(function () {
            S(E[0]);
          });else {
            var _e11 = document.getElementById("inputArea"),
                _t6 = document.getElementById("input");

            if (null === _e11 || null === _t6) return void console.error("Cannot find input elements");

            switch (E[0].inputType) {
              case 1:
                _t6.type = "number";
                break;

              case 0:
                _t6.type = "text";
                break;

              default:
                console.error("Unexpected DialogInputType for edge: " + E[0].id);
            }

            _e11.style.display = "block";
          }
        } else {
          var _e12 = 1;

          var _iterator9 = _createForOfIteratorHelper(E),
              _step9;

          try {
            var _loop = function _loop() {
              var t = _step9.value;
              var n = document.createElement("div");
              n.classList.add("l4wDialogEdge"), b.appendChild(n), void 0 !== t.message && (n.innerText = t.message);

              var r = function r(e) {
                n.classList.add("l4wDialogEdgeSelected"), setTimeout(function () {
                  S(t);
                }, 100);
              };

              n.onclick = r, js(_e12, r), _e12++;
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
        return void 0 === e || (e in Ds ? Ds[e](t) : (console.error('Condition not found: "' + e + '", on event.'), !1));
      }

      function f(e, t, n, r, i) {
        if (!r.has(e.id)) {
          if (!n && e.id === t) return e;
          r.set(e.id, e);
          var _o4 = e.edges;

          if (!As.isEmpty(_o4)) {
            var _iterator10 = _createForOfIteratorHelper(_o4),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var _e13 = _step10.value;

                if (!i.has(_e13.id)) {
                  if (n && _e13.id === t) return _e13;
                  i.set(_e13.id, _e13);
                  var _o5 = _e13.node;

                  if (void 0 !== _o5) {
                    var _e14 = f(_o5, t, n, r, i);

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

      e.openDialog = r, e.closeDialog = i, e.loadString = a, e.saveString = function (e, t, n) {
        var r = JSON.stringify(t);
        al.save(e + "", r, Ms.STRING, function (t, r) {
          if (void 0 !== t) {
            var _e15 = parseInt(t);

            if (isNaN(_e15)) return console.error("Error while saving string"), void n();
          }

          n(e);
        });
      }, e.loadDialog = s, e.saveDialog = function (e, t, n) {
        var r = new Map(),
            i = new Map();
        c(t, r, i, !0);
        var o = {
          nodes: Array.from(r.values()),
          edges: Array.from(i.values())
        };
        al.save(e + "", JSON.stringify(o), Ms.DIALOG, function (t, r) {
          r ? (As.isNumeric(t) && (e = parseInt(t)), n(e)) : n();
        });
      }, e.deconstructDialogTree = c, e.loadGenericMessages = function (e, t, r) {
        isNaN(e) ? r(!1) : al.load(e + "", Ms.GENERIC_MESSAGE, function (t) {
          As.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading dialog: " + e), r(!1)) : (n = JSON.parse(t), r(!0));
        });
      }, e.showComplexDialog = function (e, t, n, r, i, o, a) {
        s(r, i.lang, function (s) {
          void 0 === s ? console.error("Error while loading dialog: " + r) : u(e, t, n, s, i.skin, o, a);
        });
      }, e.showSimpleDialog = function (e, t, n, r, i, o) {
        a(r, i.lang, function (r) {
          var a = Ts.getDialogNode();
          a.message = r, u(e, t, n, a, i.skin, Ws, o);
        });
      }, e.search = function (e, t, n) {
        return f(e, t, void 0 !== n && n, new Map(), new Map());
      };
    }(Fs || (Fs = {})), function (e) {
      var _class2, _temp2, _class3, _temp3, _class4, _temp4;

      var t, n, r;
      e.DOUBLE_PI = 2 * Math.PI, e.Color = (_temp2 = _class2 = function _class2() {
        _classCallCheck(this, _class2);
      }, _defineProperty(_class2, "YELLOW", "yellow"), _defineProperty(_class2, "RED", "red"), _defineProperty(_class2, "WHITE", "white"), _defineProperty(_class2, "GREY", "grey"), _defineProperty(_class2, "BLACK", "black"), _defineProperty(_class2, "AQUA", "aqua"), _defineProperty(_class2, "DARKBLUE", "darkblue"), _defineProperty(_class2, "GREEN", "green"), _defineProperty(_class2, "LIME", "lime"), _temp2), e.RequestType = (_temp3 = _class3 = function _class3() {
        _classCallCheck(this, _class3);
      }, _defineProperty(_class3, "GET", "GET"), _defineProperty(_class3, "POST", "POST"), _temp3), e.MimeType = (_temp4 = _class4 = function _class4() {
        _classCallCheck(this, _class4);
      }, _defineProperty(_class4, "JSON", "application/json"), _temp4), e.MEDIUM_MSPEED = .128, e.VERY_LOW_MSPEED = e.MEDIUM_MSPEED * (1 - .9), e.LOW_MSPEED = .5 * e.MEDIUM_MSPEED, e.MEDIUM_LOW_MSPEED = .8 * e.MEDIUM_MSPEED, e.MEDIUM_HIGH_MSPEED = 1.2 * e.MEDIUM_MSPEED, e.HIGH_MSPEED = 1.5 * e.MEDIUM_MSPEED, e.VERY_HIGH_MSPEED = 1.9 * e.MEDIUM_MSPEED, e.MEDIUM_FREQUENCY = .006, e.VERY_LOW_FREQUENCY = e.MEDIUM_FREQUENCY * (1 - .9), e.LOW_FREQUENCY = .5 * e.MEDIUM_FREQUENCY, e.MEDIUM_LOW_FREQUENCY = .8 * e.MEDIUM_FREQUENCY, e.MEDIUM_HIGH_FREQUENCY = 1.2 * e.MEDIUM_FREQUENCY, e.HIGH_FREQUENCY = 1.5 * e.MEDIUM_FREQUENCY, e.VERY_HIGH_FREQUENCY = 1.9 * e.MEDIUM_FREQUENCY, function (e) {
        e[e.LOW = 0] = "LOW", e[e.MID = 1] = "MID", e[e.TOP = 2] = "TOP", e[e.EVENTS = 3] = "EVENTS";
      }(t = e.MapLayer || (e.MapLayer = {})), function (e) {
        e[e.APPLY = 0] = "APPLY", e[e.ERASE = 1] = "ERASE", e[e.EVENTS = 2] = "EVENTS";
      }(n = e.EditMode || (e.EditMode = {})), function (e) {
        e[e.BLOCKS = 0] = "BLOCKS", e[e.ONTOP = 1] = "ONTOP";
      }(r = e.TileEditMode || (e.TileEditMode = {}));
    }(Ps || (Ps = {})), function (e) {
      function t(e, t) {
        switch (parseInt(t + "")) {
          case 0:
            e.frequencyVal = Ps.VERY_LOW_FREQUENCY;
            break;

          case 1:
            e.frequencyVal = Ps.LOW_FREQUENCY;
            break;

          case 2:
            e.frequencyVal = Ps.MEDIUM_LOW_FREQUENCY;
            break;

          case 3:
            e.frequencyVal = Ps.MEDIUM_FREQUENCY;
            break;

          case 4:
            e.frequencyVal = Ps.MEDIUM_HIGH_FREQUENCY;
            break;

          case 5:
            e.frequencyVal = Ps.HIGH_FREQUENCY;
            break;

          case 6:
            e.frequencyVal = Ps.VERY_HIGH_FREQUENCY;
            break;

          default:
            e.frequencyVal = Ps.MEDIUM_FREQUENCY;
        }
      }

      function n(e, t) {
        switch (parseInt(t + "")) {
          case 0:
            e.mSpeed = Ps.VERY_LOW_MSPEED;
            break;

          case 1:
            e.mSpeed = Ps.LOW_MSPEED;
            break;

          case 2:
            e.mSpeed = Ps.MEDIUM_LOW_MSPEED;
            break;

          case 3:
            e.mSpeed = Ps.MEDIUM_MSPEED;
            break;

          case 4:
            e.mSpeed = Ps.MEDIUM_HIGH_MSPEED;
            break;

          case 5:
            e.mSpeed = Ps.HIGH_MSPEED;
            break;

          case 6:
            e.mSpeed = Ps.VERY_HIGH_MSPEED;
            break;

          default:
            e.mSpeed = Ps.MEDIUM_MSPEED;
        }
      }

      e.setFrequency = t, e.setSpeed = n, e.isVisible = function (e, t) {
        return !(void 0 === e || t !== (0 !== ks.normalizeZIndex(e.onTop)) || !As.isEmpty(e.visible) && !e.visible || !As.isEmpty(e.opacity) && 0 === e.opacity || As.isEmpty(e.charaset));
      }, e.initTransientData = function (e, r) {
        return void 0 === r && (r = Ts.getCharacter()), n(r, r.speed), t(r, r.frequency), r;
      };
    }(Bs || (Bs = {})), function (e) {
      e.showError = function (e, t) {
        null !== e ? (void 0 !== t && t.clear(e), e.fillStyle = "#000000", e.font = "bold 20px Oldenburg", e.fillText("An error occurred :(", 60, 60)) : console.error("Context is null");
      };
    }(Us || (Us = {})), function (e) {
      function t(e) {
        if (void 0 !== e.imageData && e.imageData.width > e.imageData.height) switch (e.frames = Math.floor(e.imageData.width / (e.imageData.height / 4 * 3)), void 0 === e.frequency && (e.frequency = 3), e.frequency) {
          case 0:
            e.frequencyVal = Ps.VERY_LOW_FREQUENCY;
            break;

          case 1:
            e.frequencyVal = Ps.LOW_FREQUENCY;
            break;

          case 2:
            e.frequencyVal = Ps.MEDIUM_LOW_FREQUENCY;
            break;

          case 3:
            e.frequencyVal = Ps.MEDIUM_FREQUENCY;
            break;

          case 4:
            e.frequencyVal = Ps.MEDIUM_HIGH_FREQUENCY;
            break;

          case 5:
            e.frequencyVal = Ps.HIGH_FREQUENCY;
            break;

          case 6:
            e.frequencyVal = Ps.VERY_HIGH_FREQUENCY;
            break;

          default:
            e.frequencyVal = Ps.MEDIUM_FREQUENCY;
        }
      }

      e.loadTileset = function (e, t, n) {
        al.load(e + "", Ms.TILESET, function (r) {
          if (As.isEmpty(r)) console.error("Error while loading tileset: " + e), n();else try {
            var _e16 = JSON.parse(r);

            n(_e16);
          } catch (r) {
            "SyntaxError" === r.name ? console.error("Error while parsing tileset: " + e) : "TypeError" === r.name ? console.error("Error while reading tileset: " + e) : console.error(r), Us.showError(t), n();
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
          var r = n;
          al.load("autotilesets", Ms.AUTOTILESET, function (n) {
            if (void 0 === n || "string" != typeof n) return void console.warn("Non parsable autotileset data: " + n);
            var i = JSON.parse(n);

            var _iterator11 = _createForOfIteratorHelper(e),
                _step11;

            try {
              var _loop2 = function _loop2() {
                var n = _step11.value;

                var _iterator12 = _createForOfIteratorHelper(i),
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

                void 0 === n.imageData ? al.load(n.image, Ms.AUTOTILE, function (e) {
                  n.imageData = e, t(n), r(void 0);
                }) : (t(n), r(void 0));
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
        void 0 === e.animationStartTime && (e.animationStartTime = As.now());
        var t = As.now() - e.animationStartTime;
        return 3 * Math.floor(t * e.frequencyVal % e.frames);
      };
    }(Hs || (Hs = {}));

    var Gs,
        Vs,
        qs,
        Ys = window.requestAnimationFrame || function (e) {
      return window.setTimeout(e, 40), Math.floor(100 * Math.random());
    },
        zs = window.cancelAnimationFrame;

    !function (e) {
      function t(e) {
        return {
          id: e.id,
          memory: e.memory
        };
      }

      e.getSave = function (e, n) {
        if (As.isEmpty(e) || As.isEmpty(n)) return Ts.getSave();
        var r = new Array();

        if (!As.isEmpty(e.events)) {
          var _iterator13 = _createForOfIteratorHelper(e.events),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var _n6 = _step13.value;
              r.push(t(_n6));
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
        }

        var i = Ts.getSave();
        return i.currentMap = e.id, i.hero = n, i.maps[e.id] = {
          events: r
        }, i;
      }, e.loadMapSave = function (e, t, n, r) {
        Vs.loadMap(t, e.context.canvas, function (t) {
          var i = t;
          !function (e, t) {
            if (As.isEmpty(e) || As.isEmpty(t.events) || As.isEmpty(e.maps[t.id])) return;
            var n = e.maps[t.id].events;

            if (!As.isEmpty(n)) {
              var _iterator14 = _createForOfIteratorHelper(n),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var _e18 = _step14.value;

                  var _iterator15 = _createForOfIteratorHelper(t.events),
                      _step15;

                  try {
                    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                      var _n7 = _step15.value;
                      _e18.id === _n7.id && (_n7.memory = _e18.memory);
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
          }(e.save, i), e.changeMap(i, function () {
            if (e.resetTranslation(), e.hero.i = n.i, e.hero.j = n.j, qs.initTransientData(i, e.grid, e.hero), e.focus = e.grid.mapCellToCanvas(n), !As.isEmpty(e.map.events)) for (var _t7 = 0; _t7 < e.map.events.length; _t7++) {
              var _n8 = qs.initTransientData(e.map, e.grid, e.map.events[_t7]);

              void 0 !== _n8 && (e.map.events[_t7] = _n8);
            }
            r(!0);
          });
        });
      };
    }(Gs || (Gs = {}));

    var Ks = /*#__PURE__*/function (_ref) {
      _inherits(Ks, _ref);

      var _super = _createSuper(Ks);

      function Ks(e, t, n) {
        var _temp5, _this;

        _classCallCheck(this, Ks);

        (_temp5 = _this = _super.call(this, e), _defineProperty(_assertThisInitialized(_this), "FPS", 20), _defineProperty(_assertThisInitialized(_this), "refreshInterval", 1e3 / _this.FPS), _defineProperty(_assertThisInitialized(_this), "autoFPS", !0), _defineProperty(_assertThisInitialized(_this), "secondFPS", 0), _defineProperty(_assertThisInitialized(_this), "countFPS", 0), _defineProperty(_assertThisInitialized(_this), "lastFPS", 0), _defineProperty(_assertThisInitialized(_this), "fpsPerformance", [22, 21, 20]), _defineProperty(_assertThisInitialized(_this), "hero", void 0), _defineProperty(_assertThisInitialized(_this), "action", void 0), _defineProperty(_assertThisInitialized(_this), "save", void 0), _defineProperty(_assertThisInitialized(_this), "eventScriptLauncher", void 0), _defineProperty(_assertThisInitialized(_this), "dialogScriptLauncher", void 0), _defineProperty(_assertThisInitialized(_this), "dialogName", void 0), _defineProperty(_assertThisInitialized(_this), "dialogText", void 0), _defineProperty(_assertThisInitialized(_this), "dialogSkin", void 0), _defineProperty(_assertThisInitialized(_this), "dialogAction", void 0), _temp5), _this.eventScriptLauncher = t, _this.dialogScriptLauncher = n;
        return _this;
      }

      _createClass(Ks, [{
        key: "mainGameLoop_pre",
        value: function mainGameLoop_pre() {
          if (!_get(_getPrototypeOf(Ks.prototype), "mainGameLoop_pre", this).call(this)) return !1;
          var e = !1,
              t = this,
              n = As.now();

          if (!As.isEmpty(this.hero)) {
            var _r4 = qs.update(this.hero, this, this.hero, this.action, n, this.pauseDuration);

            void 0 !== _r4 && this.eventScriptLauncher(this.hero, this, this.hero, _r4), e = qs.manageMovements(this.map, this.grid, this.hero, function (e, n) {
              t.grid.changeTranslation(t.focus.x + e, t.focus.y + n, t.map.width, t.map.height);
            }, function (e, n) {
              t.focus.x += e, t.focus.y += n;
            });
          }

          if (!As.isEmpty(this.map.events)) {
            var _iterator16 = _createForOfIteratorHelper(this.map.events),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var _t8 = _step16.value;

                var _r5 = qs.update(_t8, this, this.hero, this.action, n, this.pauseDuration);

                void 0 !== _r5 && this.eventScriptLauncher(_t8, this, this.hero, _r5), e = e || qs.manageMovements(this.map, this.grid, _t8, Ls, Ls);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }

            this.action = void 0;
          }

          return e && Vs.updateDynamicData(t.hero, this.map), this.paused || (this.pauseDuration = void 0), this.redrawArea = this.getRedrawArea(), !0;
        }
      }, {
        key: "mainGameLoop_post",
        value: function mainGameLoop_post() {
          _get(_getPrototypeOf(Ks.prototype), "mainGameLoop_post", this).call(this), this.renderFPS();
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
          var e = Math.floor(As.now() / 1e3);
          if (e === this.secondFPS) this.countFPS++;else if (this.lastFPS = this.countFPS, this.countFPS = 1, this.secondFPS = e, !0 === this.autoFPS) {
            this.fpsPerformance.shift(), this.fpsPerformance[2] = this.lastFPS;

            var _e19 = (this.fpsPerformance[0] + this.fpsPerformance[1] + this.fpsPerformance[2]) / 3;

            this.FPS = Math.ceil(_e19) + 2;
          }
          this.renderingConfiguration.showFPS && (this.context.fillStyle = Ps.Color.RED, this.context.font = "bold 18px Oldenburg", this.context.fillText("" + this.lastFPS, this.grid.getCurrentTranslation().x + 10, this.grid.getCurrentTranslation().y + 20));
        }
      }, {
        key: "renderDynamicElements",
        value: function renderDynamicElements(e, t, n, r, i, o, a) {
          try {
            qs.isVisible(this.hero, e, t, n, r, i, o, a) && qs.render(this.grid, this.hero, this.context, !0);
          } catch (e) {
            console.error(e);
          }

          if (!As.isEmpty(this.map.events)) {
            var _iterator17 = _createForOfIteratorHelper(this.map.events),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var _s2 = _step17.value;

                try {
                  qs.isVisible(_s2, e, t, n, r, i, o, a) && qs.render(this.grid, _s2, this.context, !0, this.pointer);
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
          var n, r;

          if (void 0 === e) {
            if (!As.isEmpty(this.map)) return void t(!1);
            n = ws.maps.start.map, r = Ts.getHero();
          } else this.save = e, n = e.currentMap, r = e.hero;

          var i = qs.initTransientData(this.map, this.grid, r);
          void 0 === i ? console.error("Cannot initialize hero event") : this.hero = i, Gs.loadMapSave(this, n, r, t);
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
          return qs.startMovement(this.hero, e, t, function (e) {
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
          void 0 === this.save && (this.save = Ts.getSave()), this.save.config.lang = e;
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

      return Ks;
    }( /*#__PURE__*/function () {
      function _class6(e) {
        _classCallCheck(this, _class6);

        _defineProperty(this, "map", void 0);

        _defineProperty(this, "focus", void 0);

        _defineProperty(this, "pointer", void 0);

        _defineProperty(this, "renderingConfiguration", void 0);

        _defineProperty(this, "layers", void 0);

        _defineProperty(this, "context", void 0);

        _defineProperty(this, "grid", void 0);

        _defineProperty(this, "paused", void 0);

        _defineProperty(this, "pauseStartTime", void 0);

        _defineProperty(this, "pauseDuration", void 0);

        _defineProperty(this, "redrawArea", void 0);

        this.renderingConfiguration = new Os(), this.grid = e, this.context = e.getContext(), this.paused = !1, this.focus = this.grid.mapCellToCanvas({
          i: 0,
          j: 0
        }), this.pointer = {
          i: 0,
          j: 0
        };
      }

      _createClass(_class6, [{
        key: "start",
        value: function start(e) {
          this.changeScale();
          var t = this,
              n = Ys(function () {
            t.mainGameLoop(n);
          });
        }
      }, {
        key: "mainGameLoop",
        value: function mainGameLoop(e) {
          var t = this,
              n = Ys(function () {
            t.mainGameLoop(n);
          });
          !this.paused && this.mainGameLoop_pre() ? (this.render(this.map, this.context), this.mainGameLoop_post()) : zs(e);
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
          null != this.focus.x && null != this.focus.y && this.renderingConfiguration.showFocus && (this.context.save(), this.context.beginPath(), this.context.fillStyle = Ps.Color.BLACK, this.context.arc(this.focus.x + Math.floor(this.grid.cellW / 2), this.focus.y + Math.floor(this.grid.cellH / 2), 15, 0, Ps.DOUBLE_PI), this.context.closePath(), this.context.fill(), this.context.restore());
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
          this.paused = null != e ? e : !this.paused, this.paused ? this.pauseStartTime = As.now() : (void 0 === this.pauseStartTime && (this.pauseStartTime = 0), this.pauseDuration = As.now() - this.pauseStartTime, this.pauseStartTime = void 0);
        }
      }, {
        key: "changeMap",
        value: function changeMap(e, t) {
          this.togglePause(!0);
          var n = this;
          As.isEmpty(e) && (console.error("Uninitialized map"), console.trace()), n.map = e, n.changeTile(e.tileset.image, function (e) {
            Vs.initTransientData(n, function () {
              n.togglePause(!1), t(n);
            });
          });
        }
      }, {
        key: "changeTile",
        value: function changeTile(e, t) {
          var n = this;
          Hs.loadTileset(e, this.context, function (r) {
            if (void 0 === r) return console.error("Cannot change tile, tileset not found: " + e), void t(n);
            n.map.tileset = r, al.load(r.image, Ms.TILE, function (e) {
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
          var r = this.redrawArea.y,
              i = this.redrawArea.y + this.redrawArea.h,
              o = this.redrawArea.x,
              a = this.redrawArea.x + this.redrawArea.w;

          if (!As.isEmpty(e) && void 0 !== e.tileset.imageData) {
            for (var _s3 = r; _s3 <= i; _s3++) {
              for (var _r6 = o; _r6 <= a; _r6++) {
                var _i6 = ks.cellToGid({
                  i: _r6,
                  j: _s3
                }, e.width);

                for (var _o6 = Ps.MapLayer.LOW; _o6 <= Ps.MapLayer.TOP; _o6++) {
                  var _a3 = this.map.layers[_o6];
                  if (void 0 === _a3 || void 0 === _a3.data || _a3.data.length < _i6) continue;
                  var _l = _a3.data[_i6];
                  if (null != _l) if (Vs.isThisAnAutotileCell(_i6, _a3, e)) {
                    var _n9 = void 0;

                    if (void 0 !== e.autotilesets && (_n9 = e.autotilesets[_l]), void 0 === _n9) {
                      console.warn("Autotile gid not set in map: " + _l);
                      continue;
                    }

                    if (void 0 !== _n9.imageData) {
                      var _e20 = bs.ALL;
                      void 0 !== _a3.autotileData && null !== _a3.autotileData[_i6] && (_e20 = _a3.autotileData[_i6]), this.applyLayerCustomizations(_o6), As.isEmpty(_a3.opacity) || (t.globalAlpha = _a3.opacity), this.renderAutotile(t, _n9, _l, _e20, {
                        i: _r6,
                        j: _s3
                      }), t.globalAlpha = 1, this.removeLayerCustomizations(_o6);
                    }
                  } else {
                    var _i7 = 0;
                    void 0 !== e.tileset.onTop && (_i7 = ks.normalizeZIndex(e.tileset.onTop[_l])), 0 !== _i7 && n || (this.applyLayerCustomizations(_o6), As.isEmpty(_a3.opacity) || (t.globalAlpha = _a3.opacity), this.renderCell(t, e.tileset, _l, _r6, _s3), t.globalAlpha = 1, this.removeLayerCustomizations(_o6));
                  }
                }

                Vs.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _r6, _s3, !1);
              }
            }

            this.renderPointer();

            for (var _s4 = r; _s4 <= i; _s4++) {
              for (var _i8 = o; _i8 <= a && n; _i8++) {
                for (var _n10 = r; _n10 <= _s4; _n10++) {
                  var _r7 = ks.cellToGid({
                    i: _i8,
                    j: _n10
                  }, e.width);

                  for (var _o7 = Ps.MapLayer.LOW; _o7 <= Ps.MapLayer.TOP; _o7++) {
                    var _a4 = this.map.layers[_o7];
                    if (void 0 === _a4 || void 0 === _a4.data || _a4.data.length < _r7) continue;
                    var _l2 = _a4.data[_r7];
                    if (As.isEmpty(_l2)) continue;
                    var _c = 0;
                    void 0 !== e.tileset.onTop && (_c = ks.normalizeZIndex(e.tileset.onTop[_l2])), _c > 0 && _n10 + _c === _s4 && (this.applyLayerCustomizations(_o7), As.isEmpty(_a4.opacity) || (t.globalAlpha = _a4.opacity), this.renderCell(t, e.tileset, _l2, _i8, _n10), t.globalAlpha = 1, this.removeLayerCustomizations(_o7));
                  }
                }
              }

              for (var _e21 = o; _e21 <= a; _e21++) {
                this.renderDynamicElements(r, i, o, a, _e21, _s4, !1);
              }
            }

            for (var _e22 = r; _e22 <= i; _e22++) {
              for (var _t9 = o; _t9 <= a; _t9++) {
                this.renderDynamicElements(r, i, o, a, _t9, _e22, !0), Vs.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _t9, _e22, !0);
              }
            }
          }

          Vs.renderGlobalUI(this.grid, this.context, this.renderingConfiguration), this.renderFocus();
        }
      }, {
        key: "renderCell",
        value: function renderCell(e, t, n, r, i) {
          var o = ks.gidToCell(n, Math.floor(t.imageWidth / this.grid.cellW));
          e.drawImage(t.imageData, Math.floor(o.i * this.grid.cellW), Math.floor(o.j * this.grid.cellH), this.grid.cellW, this.grid.cellH, Math.floor(r * this.grid.cellW), Math.floor(i * this.grid.cellH), this.grid.cellW, this.grid.cellH);
        }
      }, {
        key: "renderAutotile",
        value: function renderAutotile(e, t, n, r, i) {
          var o,
              a,
              s = t.imageData,
              l = !1,
              c = !1,
              u = !1;

          switch (r) {
            case bs.N | bs.E | bs.S | bs.W:
              o = 2, a = 0;
              break;

            case bs.E | bs.S:
            case bs.E | bs.S | bs.NE:
            case bs.E | bs.S | bs.SW:
            case bs.E | bs.S | bs.NE | bs.SW:
            case bs.E | bs.S | bs.NW:
            case bs.E | bs.S | bs.NW | bs.NE:
            case bs.E | bs.S | bs.NW | bs.SW:
            case bs.E | bs.S | bs.NW | bs.NE | bs.SW:
              l = !0;

            case bs.E | bs.SE | bs.S:
            case bs.E | bs.SE | bs.S | bs.NE:
            case bs.E | bs.SE | bs.S | bs.SW:
            case bs.E | bs.SE | bs.S | bs.NE | bs.SW:
            case bs.E | bs.SE | bs.S | bs.NW:
            case bs.E | bs.SE | bs.S | bs.NW | bs.NE:
            case bs.E | bs.SE | bs.S | bs.NW | bs.SW:
            case bs.E | bs.SE | bs.S | bs.NW | bs.NE | bs.SW:
              o = 0, a = 1;
              break;

            case bs.W | bs.SW | bs.S | bs.SE | bs.E:
            case bs.W | bs.SW | bs.S | bs.SE | bs.E | bs.NW:
            case bs.W | bs.SW | bs.S | bs.SE | bs.E | bs.NE:
            case bs.W | bs.SW | bs.S | bs.SE | bs.E | bs.NW | bs.NE:
              o = 1, a = 1;
              break;

            case bs.W | bs.S:
            case bs.W | bs.S | bs.NW:
            case bs.W | bs.S | bs.SE:
            case bs.W | bs.S | bs.NW | bs.SE:
            case bs.W | bs.S | bs.NE:
            case bs.W | bs.S | bs.NE | bs.NW:
            case bs.W | bs.S | bs.NE | bs.SE:
            case bs.W | bs.S | bs.NE | bs.NW | bs.SE:
              l = !0;

            case bs.W | bs.SW | bs.S:
            case bs.W | bs.SW | bs.S | bs.NW:
            case bs.W | bs.SW | bs.S | bs.SE:
            case bs.W | bs.SW | bs.S | bs.NW | bs.SE:
            case bs.W | bs.SW | bs.S | bs.NE:
            case bs.W | bs.SW | bs.S | bs.NE | bs.NW:
            case bs.W | bs.SW | bs.S | bs.NE | bs.SE:
            case bs.W | bs.SW | bs.S | bs.NE | bs.NW | bs.SE:
              o = 2, a = 1;
              break;

            case bs.N | bs.NE | bs.E | bs.SE | bs.S:
            case bs.N | bs.NE | bs.E | bs.SE | bs.S | bs.NW:
            case bs.N | bs.NE | bs.E | bs.SE | bs.S | bs.SW:
            case bs.N | bs.NE | bs.E | bs.SE | bs.S | bs.NW | bs.SW:
              o = 0, a = 2;
              break;

            case bs.ALL:
              o = 1, a = 2;
              break;

            case bs.N | bs.NW | bs.W | bs.SW | bs.S:
            case bs.N | bs.NW | bs.W | bs.SW | bs.S | bs.NE:
            case bs.N | bs.NW | bs.W | bs.SW | bs.S | bs.SE:
            case bs.N | bs.NW | bs.W | bs.SW | bs.S | bs.NE | bs.SE:
              o = 2, a = 2;
              break;

            case bs.N | bs.E:
            case bs.N | bs.E | bs.NW:
            case bs.N | bs.E | bs.SE:
            case bs.N | bs.E | bs.NW | bs.SE:
            case bs.N | bs.E | bs.SW:
            case bs.N | bs.E | bs.SW | bs.NW:
            case bs.N | bs.E | bs.SW | bs.SE:
            case bs.N | bs.E | bs.SW | bs.NW | bs.SE:
              l = !0;

            case bs.N | bs.NE | bs.E:
            case bs.N | bs.NE | bs.E | bs.NW:
            case bs.N | bs.NE | bs.E | bs.SE:
            case bs.N | bs.NE | bs.E | bs.NW | bs.SE:
            case bs.N | bs.NE | bs.E | bs.SW:
            case bs.N | bs.NE | bs.E | bs.SW | bs.NW:
            case bs.N | bs.NE | bs.E | bs.SW | bs.SE:
            case bs.N | bs.NE | bs.E | bs.SW | bs.NW | bs.SE:
              o = 0, a = 3;
              break;

            case bs.W | bs.NW | bs.N | bs.NE | bs.E:
            case bs.W | bs.NW | bs.N | bs.NE | bs.E | bs.SW:
            case bs.W | bs.NW | bs.N | bs.NE | bs.E | bs.SE:
            case bs.W | bs.NW | bs.N | bs.NE | bs.E | bs.SW | bs.SE:
              o = 1, a = 3;
              break;

            case bs.W | bs.N:
            case bs.W | bs.N | bs.SW:
            case bs.W | bs.N | bs.NE:
            case bs.W | bs.N | bs.SW | bs.NE:
            case bs.W | bs.N | bs.SE:
            case bs.W | bs.N | bs.SE | bs.SW:
            case bs.W | bs.N | bs.SE | bs.NE:
            case bs.W | bs.N | bs.SE | bs.SW | bs.NE:
              l = !0;

            case bs.W | bs.NW | bs.N:
            case bs.W | bs.NW | bs.N | bs.SW:
            case bs.W | bs.NW | bs.N | bs.NE:
            case bs.W | bs.NW | bs.N | bs.SW | bs.NE:
            case bs.W | bs.NW | bs.N | bs.SE:
            case bs.W | bs.NW | bs.N | bs.SE | bs.SW:
            case bs.W | bs.NW | bs.N | bs.SE | bs.NE:
            case bs.W | bs.NW | bs.N | bs.SE | bs.SW | bs.NE:
              o = 2, a = 3;
              break;

            default:
              if (0 == (r & (bs.N | bs.E | bs.S | bs.W))) {
                o = 0, a = 0;
                break;
              }

              o = 1, a = 2, (r & (bs.N | bs.E)) != (bs.N | bs.E) && (r & (bs.S | bs.E)) != (bs.S | bs.E) && (r & (bs.S | bs.W)) != (bs.S | bs.W) && (r & (bs.N | bs.W)) != (bs.N | bs.W) || (l = !0), (r & (bs.N | bs.S)) > 0 && (0 == (r & bs.W) || 0 == (r & bs.E)) ? c = !0 : (r & (bs.W | bs.E)) > 0 && (0 == (r & bs.N) || 0 == (r & bs.S)) && (u = !0);
          }

          var d = Hs.getAnimatedAutotileFrame(t);

          if (e.drawImage(s, (o + d) * this.grid.cellW, a * this.grid.cellH, this.grid.cellW, this.grid.cellH, i.i * this.grid.cellW, i.j * this.grid.cellH, this.grid.cellW, this.grid.cellH), l) {
            var _t10, _n11;

            o = 2, a = 0;

            var _l3 = Math.floor(this.grid.cellW / 2),
                _c2 = Math.floor(this.grid.cellH / 2);

            0 == (r & bs.NW) && (r & (bs.N | bs.W)) == (bs.N | bs.W) && (_t10 = 0, _n11 = 0, this.drawAngle(e, s, o + d, a, _l3, _c2, i, _t10, _n11)), 0 == (r & bs.NE) && (r & (bs.N | bs.E)) == (bs.N | bs.E) && (_t10 = _l3, _n11 = 0, this.drawAngle(e, s, o + d, a, _l3, _c2, i, _t10, _n11)), 0 == (r & bs.SW) && (r & (bs.S | bs.W)) == (bs.S | bs.W) && (_t10 = 0, _n11 = _c2, this.drawAngle(e, s, o + d, a, _l3, _c2, i, _t10, _n11)), 0 == (r & bs.SE) && (r & (bs.S | bs.E)) == (bs.S | bs.E) && (_t10 = _l3, _n11 = _c2, this.drawAngle(e, s, o + d, a, _l3, _c2, i, _t10, _n11));
          }

          if (c) {
            var _t11,
                _n12 = {
              w: Math.floor(this.grid.cellW / 2),
              h: this.grid.cellH
            };

            a = 2;
            var _l4 = 0;
            0 == (r & bs.W) && (o = 0, _t11 = 0, this.drawBottleneck(e, s, o + d, a, i, _t11, _l4, _n12)), 0 == (r & bs.E) && (o = 2, _t11 = Math.floor(this.grid.cellW / 2), this.drawBottleneck(e, s, o + d, a, i, _t11, _l4, _n12)), 0 == (r & bs.N) ? (o = 0, a = 0, _t11 = 0, _l4 = 0, _n12 = {
              w: this.grid.cellW,
              h: Math.floor(this.grid.cellH / 2)
            }, this.drawBottleneck(e, s, o + d, a, i, _t11, _l4, _n12)) : 0 == (r & bs.S) && (o = 0, a = 0, _t11 = 0, _l4 = Math.floor(this.grid.cellH / 2), _n12 = {
              w: this.grid.cellW,
              h: Math.floor(this.grid.cellH / 2)
            }, this.drawBottleneck(e, s, o + d, a, i, _t11, _l4, _n12));
          } else if (u) {
            var _t12 = {
              w: this.grid.cellW,
              h: Math.floor(this.grid.cellH / 2)
            };
            o = 1;

            var _n13,
                _l5 = 0;

            0 == (r & bs.N) && (a = 1, _n13 = 0, this.drawBottleneck(e, s, o + d, a, i, _l5, _n13, _t12)), 0 == (r & bs.S) && (a = 3, _n13 = Math.floor(this.grid.cellH / 2), this.drawBottleneck(e, s, o + d, a, i, _l5, _n13, _t12)), 0 == (r & bs.E) ? (o = 0, a = 0, _l5 = Math.floor(this.grid.cellW / 2), _n13 = 0, _t12 = {
              w: Math.floor(this.grid.cellW / 2),
              h: this.grid.cellH
            }, this.drawBottleneck(e, s, o + d, a, i, _l5, _n13, _t12)) : 0 == (r & bs.W) && (o = 0, a = 0, _l5 = 0, _n13 = 0, _t12 = {
              w: Math.floor(this.grid.cellW / 2),
              h: this.grid.cellH
            }, this.drawBottleneck(e, s, o + d, a, i, _l5, _n13, _t12));
          }
        }
      }, {
        key: "drawBottleneck",
        value: function drawBottleneck(e, t, n, r, i, o, a, s) {
          e.drawImage(t, n * this.grid.cellW + o, r * this.grid.cellH + a, s.w, s.h, i.i * this.grid.cellW + o, i.j * this.grid.cellH + a, s.w, s.h);
        }
      }, {
        key: "drawAngle",
        value: function drawAngle(e, t, n, r, i, o, a, s, l) {
          e.drawImage(t, n * this.grid.cellW + s, r * this.grid.cellH + l, i, o, a.i * this.grid.cellW + s, a.j * this.grid.cellH + l, i, o);
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

      return _class6;
    }());

    function Qs(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _s.D_STAR_LITE;
      var i = As.now(),
          o = n.i - t.i,
          a = n.j - t.j;
      if (0 === o && 0 === a) return 4;
      {
        var _o8 = 4;

        switch (r) {
          case _s.BASIC:
            _o8 = Js(e, t, n);
            break;

          case _s.D_STAR_LITE:
            _o8 = function (e, t, n) {
              var r, i, o, a;
              var s = Number.MAX_SAFE_INTEGER;
              var l,
                  c,
                  u = 0,
                  d = e.width;

              function f(e) {
                return [Math.min(g(e), m(e)) + S(l, e) + u, Math.min(g(e), m(e))];
              }

              function p(e) {
                g(e) !== m(e) ? (e.key = f(e), A(e)) : function (e) {
                  var _iterator18 = _createForOfIteratorHelper(i),
                      _step18;

                  try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                      var _t13 = _step18.value;
                      if (w(e, _t13)) return !0;
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
                var n = ks.cellToGid(e.cell, d);
                o[n] = t;
              }

              function v(e, t) {
                t > s && (t = s);
                var n = ks.cellToGid(e.cell, d);
                a[n] = t;
              }

              function g(e) {
                var t = ks.cellToGid(e.cell, d);
                return o[t];
              }

              function m(e) {
                var t = ks.cellToGid(e.cell, d);
                return a[t];
              }

              function y(t) {
                var n = ks.cellToGid(t.cell, e.width),
                    i = [];
                return 0 !== t.cell.i && i.push(r[n - 1]), t.cell.i < e.width - 1 && i.push(r[n + 1]), n - e.width >= 0 && i.push(r[n - e.width]), n + e.width < r.length && i.push(r[n + e.width]), i;
              }

              function b(t) {
                var n = ks.cellToGid(t.cell, e.width),
                    i = [];
                return 0 !== t.cell.i && i.push(r[n - 1]), t.cell.i < e.width - 1 && i.push(r[n + 1]), n - e.width >= 0 && i.push(r[n - e.width]), n + e.width < r.length && i.push(r[n + e.width]), i;
              }

              function E(t, n) {
                var r = ks.getDirection(n.cell, t.cell),
                    i = 4 === ks.getDirection(n.cell, c.cell);
                return ks.isMovementBlocked(e, t.cell.i, t.cell.j, r, i) ? s : 1;
              }

              function S(e, t) {
                return Math.abs(e.cell.i - t.cell.i) + Math.abs(e.cell.j - t.cell.j);
              }

              function _(e, t) {
                return e[0] === t[0] && e[1] === t[1] ? 0 : e[0] > t[0] || e[0] === t[0] && e[1] > t[1] ? 1 : -1;
              }

              function w(e, t) {
                return e.cell.i === t.cell.i && e.cell.j === t.cell.j;
              }

              function A(e) {
                var _iterator19 = _createForOfIteratorHelper(i),
                    _step19;

                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                    var _t14 = _step19.value;
                    if (w(e, _t14)) return void (_t14.key = e.key);
                  }
                } catch (err) {
                  _iterator19.e(err);
                } finally {
                  _iterator19.f();
                }

                i.push(e);
              }

              function k(e) {
                var t = [];

                var _iterator20 = _createForOfIteratorHelper(i),
                    _step20;

                try {
                  for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    var _n14 = _step20.value;
                    w(e, _n14) || t.push(_n14);
                  }
                } catch (err) {
                  _iterator20.e(err);
                } finally {
                  _iterator20.f();
                }

                i = t;
              }

              function T() {
                var e;

                var _iterator21 = _createForOfIteratorHelper(i),
                    _step21;

                try {
                  for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                    var _t15 = _step21.value;
                    (void 0 === e || _(_t15.key, e.key) < 0) && (e = _t15);
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
                  r = [];

                  for (var _t16 = 0; _t16 < e.height; _t16++) {
                    for (var _n15 = 0; _n15 < e.width; _n15++) {
                      var _e23 = {
                        cell: {
                          i: _n15,
                          j: _t16
                        }
                      };
                      r.push(_e23);
                    }
                  }

                  o = [], a = [], i = [], u = 0;

                  var _iterator22 = _createForOfIteratorHelper(r),
                      _step22;

                  try {
                    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                      var _e24 = _step22.value;
                      h(_e24, s), v(_e24, s);
                    }
                  } catch (err) {
                    _iterator22.e(err);
                  } finally {
                    _iterator22.f();
                  }

                  v(c, 0);
                  var t = c;
                  t.key = [S(l, c), 0], i.push(t);
                }(), function () {
                  for (; _(T().key, f(l)) < 0 || m(l) > g(l);) {
                    var _e25 = T(),
                        _t17 = _e25,
                        _n16 = _e25.key,
                        _r9 = f(_t17);

                    if (_(_n16, _r9) < 0) _t17.key = _r9, A(_t17);else if (g(_t17) > m(_t17)) {
                      h(_t17, m(_t17)), k(_t17);

                      var _iterator23 = _createForOfIteratorHelper(b(_t17)),
                          _step23;

                      try {
                        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                          var _e26 = _step23.value;
                          w(_e26, c) || v(_e26, Math.min(m(_e26), E(_e26, _t17) + g(_t17))), p(_e26);
                        }
                      } catch (err) {
                        _iterator23.e(err);
                      } finally {
                        _iterator23.f();
                      }
                    } else {
                      var _e27 = g(_t17);

                      h(_t17, s);

                      var _n17 = b(_t17);

                      _n17.push(_t17);

                      var _iterator24 = _createForOfIteratorHelper(_n17),
                          _step24;

                      try {
                        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                          var _r10 = _step24.value;

                          if ((m(_r10) === E(_r10, _t17) + _e27 || m(_r10) === s && (E(_r10, _t17) === s || _e27 === s)) && !w(_r10, c)) {
                            var _e28 = void 0;

                            var _iterator25 = _createForOfIteratorHelper(y(_r10)),
                                _step25;

                            try {
                              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                                var _t18 = _step25.value;

                                var _n18 = E(_r10, _t18) + g(_t18);

                                _n18 > s && (_n18 = s), (void 0 === _e28 || _e28 > _n18) && (_e28 = _n18);
                              }
                            } catch (err) {
                              _iterator25.e(err);
                            } finally {
                              _iterator25.f();
                            }

                            v(_r10, _e28);
                          }

                          p(_r10);
                        }
                      } catch (err) {
                        _iterator24.e(err);
                      } finally {
                        _iterator24.f();
                      }
                    }
                  }
                }(); !w(l, c);) {
                  var _r8 = void 0,
                      _i9 = void 0;

                  var _iterator26 = _createForOfIteratorHelper(y(l)),
                      _step26;

                  try {
                    for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                      var _e29 = _step26.value;

                      var _t19 = E(l, _e29) + g(_e29);

                      (void 0 === _i9 || _i9 > _t19) && (_i9 = _t19, _r8 = _e29);
                    }
                  } catch (err) {
                    _iterator26.e(err);
                  } finally {
                    _iterator26.f();
                  }

                  return l = _r8, _i9 >= s ? Js(e, t, n) : ks.getDirection(l.cell, t);
                }

                return 4;
              }();
            }(e, t, n);

        }

        4 !== _o8 && (qs.addDirectionToPath(t, _o8, 3), void 0 === t.path && (t.path = []), 3 === t.path.length && t.path[0] === t.path[2] && ks.isDirectionsOpposed(t.path[0], t.path[1]) && (_o8 = 4));

        var _a5 = As.now() - i;

        return _a5 > 10 && console.debug("Path found in: " + _a5), _o8;
      }
    }

    function Js(e, t, n) {
      var r = n.i - t.i,
          i = n.j - t.j,
          o = 4;
      return Math.abs(r) > Math.abs(i) ? (r > 0 ? o = 1 : r < 0 && (o = 3), Vs.isMovementTowardsTargetBlocked(e, t.i, t.j, o, n) && (i > 0 ? o = 2 : i < 0 && (o = 0))) : (i > 0 ? o = 2 : i < 0 && (o = 0), Vs.isMovementTowardsTargetBlocked(e, t.i, t.j, o, n) && (r > 0 ? o = 1 : r < 0 && (o = 3))), Vs.isMovementTowardsTargetBlocked(e, t.i, t.j, o, n) && (o = 4), o;
    }

    !function (e) {
      function t(e, t, n, r) {
        var i = bs.NONE;

        var _iterator27 = _createForOfIteratorHelper(Es),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var _o9 = _step27.value;

            var _a6 = ks.getTargetGID(e, _o9, t);

            void 0 !== _a6 && r.data[_a6] !== n || (i |= _o9);
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }

        return i;
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

            var _n19 = qs.getState(_e31);

            if (void 0 === _n19 || As.isEmpty(_n19.block) || _n19.block) {
              var _n20 = ks.cellToGid(_e31, t.width);

              t.dynamicBlocks[_n20] = ys.ALL;
            }
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      }

      function r(e, t, n) {
        return void 0 !== e && e >= 0 && e < n.width * n.height && t.data[e] > n.tileset.maxGID;
      }

      e.loadMap = function (e, t, n) {
        al.load(e + "", Ms.MAP, function (r) {
          if (As.isEmpty(r)) console.error("Error while loading map: " + e), n();else try {
            var _e32 = JSON.parse(r);

            n(_e32);
          } catch (i) {
            "SyntaxError" === i.name ? console.error("Error while parsing map: " + e) : "TypeError" === i.name ? console.error("Error while reading map: " + e) : console.error(i), console.error(r), Us.showError(t.getContext("2d")), n();
          }
        });
      }, e.renderUI = function (e, t, n, r, i, o, a) {
        if ((a || r.showGrid || r.showEditorGrid || r.showFocus || r.showBlocks || r.showOnTops) && (!a || r.showFPS || r.showCellNumbers || r.showFocus) && !As.isEmpty(r)) {
          if (!a && r.showBlocks && !As.isEmpty(e) && (!As.isEmpty(e.blocks) || !As.isEmpty(e.dynamicBlocks))) {
            n.save(), n.globalAlpha = .5, n.fillStyle = Ps.Color.YELLOW, n.strokeStyle = Ps.Color.BLACK, n.lineWidth = 2;

            var _r11 = As.isEmpty(e.blocks) ? ys.NONE : e.blocks[o * e.width + i],
                _a7 = As.isEmpty(e.dynamicBlocks) ? ys.NONE : e.dynamicBlocks[o * e.width + i];

            (_r11 > ys.NONE || _a7 > ys.NONE) && (_a7 > ys.NONE && (n.fillStyle = Ps.Color.GREEN), ks.isBlockDirectionBlocked(_r11 | _a7, ys.UP) && (n.beginPath(), n.moveTo(i * t.cellW, o * t.cellH), n.lineTo((i + .5) * t.cellW, (o + .2) * t.cellH), n.lineTo((i + 1) * t.cellW, o * t.cellH), n.fill(), n.stroke()), ks.isBlockDirectionBlocked(_r11 | _a7, ys.DOWN) && (n.beginPath(), n.moveTo(i * t.cellW, (o + 1) * t.cellH), n.lineTo((i + .5) * t.cellW, (o + .8) * t.cellH), n.lineTo((i + 1) * t.cellW, (o + 1) * t.cellH), n.fill(), n.stroke()), ks.isBlockDirectionBlocked(_r11 | _a7, ys.LEFT) && (n.beginPath(), n.moveTo(i * t.cellW, o * t.cellH), n.lineTo((i + .2) * t.cellW, (o + .5) * t.cellH), n.lineTo(i * t.cellW, (o + 1) * t.cellH), n.fill(), n.stroke()), ks.isBlockDirectionBlocked(_r11 | _a7, ys.RIGHT) && (n.beginPath(), n.moveTo((i + 1) * t.cellW, o * t.cellH), n.lineTo((i + .8) * t.cellW, (o + .5) * t.cellH), n.lineTo((i + 1) * t.cellW, (o + 1) * t.cellH), n.fill(), n.stroke())), n.restore();
          }

          if (!a && r.showOnTops && !As.isEmpty(e) && !As.isEmpty(e.tileset.onTop)) {
            var _r12 = ks.cellToGid({
              i: i,
              j: o
            }, e.width);

            ks.normalizeZIndex(e.tileset.onTop[_r12]) > 0 && (n.save(), n.globalAlpha = .6, n.beginPath(), n.fillStyle = Ps.Color.AQUA, n.arc(Math.floor((i + .5) * t.cellW), Math.floor((o + .5) * t.cellH), 10, 0, Ps.DOUBLE_PI), n.closePath(), n.fill(), n.fillStyle = Ps.Color.DARKBLUE, n.font = "bold 14px Arial", n.fillText("" + e.tileset.onTop[_r12], (i + .35) * t.cellW, (o + .65) * t.cellH), n.restore());
          }

          !a && r.showGrid && (n.strokeStyle = Ps.Color.RED, n.strokeRect(i * t.cellW, o * t.cellH, t.cellW, t.cellH)), !a && r.showEditorGrid && (n.save(), n.globalAlpha = .4, n.strokeStyle = Ps.Color.GREY, n.strokeRect(i * t.cellW, o * t.cellH, t.cellW, t.cellH), n.restore()), !a && r.showCellNumbers && (n.fillStyle = Ps.Color.RED, n.font = "bold 10px Arial", n.fillText(i + "," + o, i * t.cellW + 1, o * t.cellH + 10));
        }
      }, e.renderGlobalUI = function (e, t, n) {
        if (n.enableSelection && (void 0 !== n.selectCellStart || void 0 !== n.selectEventCell)) {
          var _r13, _i10;

          t.save();
          var _o10 = e.cellW,
              _a8 = e.cellH;

          if (void 0 !== n.selectCellStart) {
            if (_r13 = n.selectCellStart.i * e.cellW, _i10 = n.selectCellStart.j * e.cellH, void 0 !== n.selectCellEnd) {
              var _t20 = n.selectCellEnd.i * e.cellW,
                  _s5 = n.selectCellEnd.j * e.cellH;

              _r13 > _t20 ? (_o10 = _r13 - _t20, _r13 = _t20) : _o10 = _t20 - _r13, _i10 > _s5 ? (_a8 = _i10 - _s5, _i10 = _s5) : _a8 = _s5 - _i10, _o10 += e.cellW, _a8 += e.cellH;
            }

            t.strokeStyle = Ps.Color.RED, t.lineWidth = 3;
          } else _r13 = n.selectEventCell.i * e.cellW, _i10 = n.selectEventCell.j * e.cellH, t.strokeStyle = Ps.Color.LIME, t.lineWidth = 2;

          t.strokeRect(_r13, _i10, _o10, _a8), t.restore();
        }
      }, e.resizeMap = function (e, t, n) {
        var r = e.width,
            i = t,
            o = e.height,
            a = n;
        if (r === i && o === a || As.isEmpty(e)) return;
        var s,
            l,
            c = Math.min(r, i);
        if (i < r) s = r - i;else {
          l = [];

          for (var _e33 = 0; _e33 < i - r; _e33++) {
            l[_e33] = null;
          }
        }

        for (var _t21 = 0; _t21 < e.layers.length; _t21++) {
          var _n21 = e.layers[_t21];

          if (void 0 !== _n21.data) {
            if (r !== i) for (var _e34 = 0; _e34 < o; _e34++) {
              var _n21$data;

              void 0 !== s ? _n21.data.splice(c + _e34 * i, s) : void 0 !== l ? (_n21$data = _n21.data).splice.apply(_n21$data, [c + _e34 * i, 0].concat(_toConsumableArray(l))) : console.error("Unexpected case");
            }

            if (o > a && (_n21.data.length = i * a), o < a) {
              var _e35 = [];

              for (var _t22 = 0; _t22 < i - r; _t22++) {
                _e35[_t22] = void 0;
              }

              for (var _t23 = r; _t23 < i; _t23++) {
                _n21.data.concat(_e35);
              }
            }
          }
        }

        e.height = n, e.width = t;
      }, e.shiftMap = function (e, t, n) {
        t < -e.width && (t = 1 - e.width), n < -e.height && (n = 1 - e.height);
        var r = e.height;
        e.width += t, e.height += n;
        var i = [];
        if (t > 0) for (var _e36 = 0; _e36 < t; _e36++) {
          i[_e36] = null;
        }
        var o = [];
        if (n > 0) for (var _t24 = 0; _t24 < e.width; _t24++) {
          o[_t24] = null;
        }

        for (var _a9 = 0; _a9 < e.layers.length; _a9++) {
          var _s6 = e.layers[_a9];

          if (void 0 !== _s6.data) {
            if (t > 0) for (var _t25 = 0; _t25 < r; _t25++) {
              var _s6$data;

              (_s6$data = _s6.data).splice.apply(_s6$data, [_t25 * e.width, 0].concat(i));
            } else if (t < 0) for (var _n22 = 0; _n22 < r; _n22++) {
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
            var _r14 = _step29.value;
            _r14.i += t, _r14.j += n;
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
      }, e.initTransientData = function (i, o) {
        var a,
            s = i.map,
            l = i.grid;
        i instanceof Ks && (a = i.hero), Hs.initTransientData(s.tileset, l), function (n, r) {
          As.isEmpty(n.autotilesets) ? r() : Hs.initTransientDataAutotiles(Object.values(n.autotilesets)).then(function () {
            for (var _r15 = 0; _r15 < n.layers.length; _r15++) {
              var _i11 = n.layers[_r15];

              if (void 0 !== _i11.data) {
                _i11.autotileData = [];

                for (var _r16 = 0; _r16 < _i11.data.length; _r16++) {
                  if (e.isThisAnAutotileCell(_r16, _i11, n)) {
                    var _e38 = t(_r16, {
                      w: n.width,
                      h: n.height
                    }, _i11.data[_r16], _i11);

                    _i11.autotileData.push(_e38);
                  } else _i11.autotileData.push(null);
                }
              }
            }

            r();
          });
        }(s, function () {
          if (function (e) {
            if (e.blocks = [], !As.isEmpty(e.layers) && !As.isEmpty(e.tileset.blocks)) {
              for (var _t26 = 0; _t26 < e.height * e.width; _t26++) {
                e.blocks[_t26] = 0;
              }

              for (var _t27 = 0; _t27 < e.layers.length; _t27++) {
                var _n23 = e.layers[_t27];
                if (void 0 !== _n23.data) for (var _t28 = 0; _t28 < _n23.data.length; _t28++) {
                  var _i12 = void 0;

                  if (r(_t28, _n23, e)) {
                    var _r17 = _n23.data[_t28];
                    void 0 === e.autotilesets || void 0 === e.autotilesets[_r17] ? console.warn("Autotile: NaN" + _t28 + " in map: " + e.id) : _i12 = e.autotilesets[_r17].blocked ? ys.ALL : ys.NONE;
                  } else {
                    var _r18 = _n23.data[_t28];
                    if (null === _r18 || _r18 < 0 || _r18 >= e.tileset.blocks.length) continue;
                    if (void 0 !== e.tileset.onTop && ks.normalizeZIndex(e.tileset.onTop[_r18]) > 0) continue;
                    _i12 = e.tileset.blocks[_r18];
                  }

                  void 0 === _i12 && (_i12 = ys.NONE), e.blocks[_t28] = _i12;
                }
              }
            }
          }(s), n(a, s), As.isEmpty(s.events)) s.events = [];else {
            s.maxEventId = 0;

            var _iterator30 = _createForOfIteratorHelper(s.events),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var _e39 = _step30.value;
                _e39.id > s.maxEventId && (s.maxEventId = _e39.id), qs.initTransientData(s, l, _e39);
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
      }, e.getAutotileProximityValue = t, e.isMovementTowardsTargetBlocked = function (e, t, n, r, i) {
        var o = ks.getDirectionTarget({
          i: t,
          j: n
        }, r),
            a = !1;
        return void 0 !== i && 4 === ks.getDirection(o, i) && (a = !0), ks.isMovementBlocked(e, t, n, r, a);
      }, e.isThisAnAutotileCell = r;
    }(Vs || (Vs = {})), function (e) {
      function t(e, t) {
        var n = e.states[t].condition;
        return n in Ds ? Ds[n](e) : (console.error('Condition not found: "' + n + '", on event: ' + e.name), !1);
      }

      function n(e, t, n, r) {
        return e.newTarget = {
          i: t,
          j: n
        }, e.newOnTargetReached = r, !0;
      }

      function r(e) {
        e.path = void 0, e.movementStartTime = void 0, e.movementDirection = void 0, e.target = void 0;
      }

      function i(e) {
        var t = o(e);

        if (void 0 !== t) {
          var _e40 = t.mSpeed;
          if (!As.isEmpty(_e40)) return _e40;
        }

        return Ps.MEDIUM_MSPEED;
      }

      function o(e) {
        if (void 0 !== e && void 0 !== e.currentState && void 0 !== e.states) return e.states[e.currentState];
      }

      function a(e, t) {
        var n = t.states[t.currentState].direction;
        void 0 === n && (n = 4);
        var r = ks.getNextAbsoluteDirection(n, 0),
            i = Vs.isMovementTowardsTargetBlocked(e, t.i, t.j, r) ? 0 : 3,
            o = Vs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 2,
            a = Vs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 2,
            s = i + o + a + (Vs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 1),
            l = 4;

        if (s > 0) {
          var _e41 = ks.getRandomInteger(1, s);

          _e41 -= i, _e41 <= 0 ? l = r : (_e41 -= o, _e41 <= 0 || (_e41 -= a), l = 4);
        }

        return ks.getDirectionTarget(t, l);
      }

      e.update = function (e, r, i, o, s) {
        var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        if (As.isEmpty(e.movementStartTime) || (e.movementStartTime += l), !As.isEmpty(e.states)) {
          var _s7 = -1;

          for (var _n24 = e.states.length - 1; _n24 >= 0; _n24--) {
            if (t(e, _n24)) {
              _s7 = _n24;
              break;
            }
          }

          if (e.currentState = _s7, e === i) return;
          if (-1 !== e.currentState && void 0 !== e.states[e.currentState].movement && void 0 === e.movementStartTime && function (e, t) {
            var r,
                _i14,
                o = t.states[t.currentState].movement;

            switch (o.strategy) {
              case "target":
                void 0 === o.target && (console.warn("event: " + t.id + " has strategy=target, but target is undefined. Will fallback to random"), o.target = a(e, t)), r = o.target;
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

                var _l6 = Qs(e, t, _s8, o.pathfinder);

                r = ks.getDirectionTarget(t, _l6), _i14 = function i(r) {
                  var a = Qs(e, t, _s8, o.pathfinder);

                  if (4 !== a) {
                    var _e42 = ks.getDirectionTarget(t, a);

                    n(t, _e42.i, _e42.j, _i14);
                  } else setTimeout(function () {
                    _i14(r);
                  }, 1e3);
                };
                break;

              case "random":
                r = a(e, t), _i14 = function _i13() {
                  setTimeout(function () {
                    var r = a(e, t);
                    n(t, r.i, r.j, _i14);
                  }, o.pause);
                };
                break;

              default:
                return void console.error("Unexpected movement strategy: " + o.strategy + " for event: " + t.id);
            }

            void 0 !== r && n(t, r.i, r.j, _i14);
          }(r.getMap(), e), function (e, t, n, r) {
            var i;

            switch (e.states[t].trigger) {
              case 0:
                if (void 0 === r || r.i !== e.i || r.j !== e.j) {
                  i = !1;
                  break;
                }

              case 1:
                var _o11 = Math.abs(e.i - n.i),
                    _a10 = Math.abs(e.j - n.j);

                i = 0 === _o11 && _a10 <= 1 || _o11 <= 1 && 0 === _a10;
                break;

              case 2:
                i = e.i === n.i && e.j === n.j;
                break;

              case 3:
                i = !0;
                break;

              default:
                console.error("Unexpected case: " + e.states[t].trigger), i = !1;
            }

            return i = function (e, t) {
              return 1 !== e.trigger && 2 !== e.trigger || (t ? e.alreadyTriggered ? t = !1 : e.alreadyTriggered = !0 : e.alreadyTriggered = !1), t;
            }(e.states[t], i), i;
          }(e, e.currentState, i, o)) return e.currentState;
        }
      }, e.startMovement = n, e.stopMovement = r, e.manageMovements = function e(t, n, o, a, s) {
        var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var c = !1;

        if (!As.isEmpty(o.movementStartTime)) {
          if (0 === l && (l = As.now() - o.movementStartTime), void 0 === o.target) return console.error("No target set for movement"), !0;

          var _e43,
              _u = o.target,
              _d = function (e, t, n) {
            var r = 4,
                i = ks.cellToGid(n, e.width),
                o = ks.getMapStaticBlock(e, i),
                a = ks.getMapDynamicBlock(e, i);
            if (ks.isBlockDirectionBlocked(o, ys.ALL) && !ks.isBlockDirectionBlocked(a, ys.ALL) || i < 0 || i >= e.width * e.height) r = 4;else if (As.isEmpty(t.movementDirection) || 4 !== t.movementDirection) {
              try {
                r = Qs(e, t, n);
              } catch (t) {
                console.error(t);
              }

              var _o12 = ks.getDirectionTarget(t, r),
                  _a11 = ks.cellToGid(_o12, e.width),
                  _s9 = ks.getMapDynamicBlock(e, _a11);

              ks.isDirectionEnumBlocked(_s9, ks.getOpposedDirections(r)) && (r = 4, _a11 === i && void 0 !== t.onTargetReached && t.onTargetReached(n));
            } else r = t.movementDirection;
            return r;
          }(t, o, _u),
              _f = 0,
              _p = 0;

          switch (_d) {
            case 3:
              _f = Math.min(n.cellW, Math.floor(i(o) * l)), _e43 = _f, _f *= -1;
              break;

            case 1:
              _f = Math.min(n.cellW, Math.floor(i(o) * l)), _e43 = _f;
              break;

            case 0:
              _p = Math.min(n.cellH, Math.floor(i(o) * l)), _e43 = _p, _p *= -1;
              break;

            case 2:
              _p = Math.min(n.cellH, Math.floor(i(o) * l)), _e43 = _p;
              break;

            case 4:
              r(o), void 0 !== o.onTargetReached && o.onTargetReached(_u);
          }

          if (4 !== _d && (void 0 !== o.states[o.currentState] && (o.states[o.currentState].direction = _d), o.movementDirection = _d, o.position = {
            x: o.i * n.cellW + _f,
            y: o.j * n.cellH + _p
          }, a(_f, _p), _e43 === n.cellW)) {
            c = !0, o.movementDirection = void 0, o.movementStartTime = As.now(), l -= Math.floor(_e43 / i(o));

            var _t30 = n.mapCanvasToCell(o.position);

            o.i = _t30.i, o.j = _t30.j, s(_f, _p);

            var _a12 = n.mapCellToCanvas(o.target);

            (!As.isEmpty(o.newTarget) || o.position.x === _a12.x && o.position.y === _a12.y) && r(o);
          }
        }

        return !As.isEmpty(o.newTarget) && As.isEmpty(o.movementStartTime) && (o.target = o.newTarget, o.onTargetReached = o.newOnTargetReached, o.newTarget = void 0, o.newOnTargetReached = void 0, o.movementStartTime = As.now(), c = c || e(t, n, o, a, s, l)), c;
      }, e.addDirectionToPath = function (e, t, n) {
        void 0 === e.path && (e.path = []), e.path[e.path.length - 1] !== t && e.path.push(t), !As.isEmpty(n) && e.path.length > n && e.path.shift();
      }, e.render = function (e, t, n, r, i) {
        var a,
            s = o(t);
        if (void 0 !== s) if (As.isEmpty(s.charaset) ? As.isEmpty(s.gid) || console.warn("Not implemented") : a = al.loadImageFromCache(s.charaset, Ms.CHAR), void 0 !== t.position) {
          if (r || (n.save(), n.strokeStyle = Ps.Color.GREEN, n.lineWidth = 2, n.strokeRect(t.position.x, t.position.y, e.cellW, e.cellH)), void 0 !== a) {
            var _o13 = Math.floor(a.width / 4),
                _l7 = Math.floor(a.height / 4),
                _c3 = _o13,
                _u2 = _l7;

            r || (_l7 > _o13 ? (_c3 = Math.floor(_o13 * e.cellH / _l7), _u2 = e.cellH) : (_u2 = Math.floor(_l7 * e.cellW / _o13), _c3 = e.cellW));

            var _d2,
                _f2 = 0;

            if (_d2 = As.isEmpty(s.frequencyVal) ? Ps.MEDIUM_FREQUENCY : s.frequencyVal, As.isEmpty(t.target)) {
              if (1 === s.rotation || 2 === s.rotation) {
                As.isEmpty(s.animationStartTime) && (s.animationStartTime = As.now());

                var _e44 = As.now() - s.animationStartTime;

                _d2 /= 4;

                var _t31 = Math.floor(_e44 * _d2 % 4);

                2 === s.rotation && (3 === _t31 ? _t31 = 1 : 1 === _t31 && (_t31 = 3)), s.direction = _t31;
              } else s.animationStartTime = void 0;
            } else {
              As.isEmpty(s.animationStartTime) && (s.animationStartTime = As.now());

              var _e45 = As.now() - s.animationStartTime;

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
                _v = t.position.y + Math.floor(-_u2 + e.cellH);

            if (n.save(), As.isEmpty(s.opacity) || 100 === s.opacity || (n.globalAlpha = s.opacity / 100), void 0 !== i && i.i === t.i && i.j === t.j) {
              var _t32 = e.mapCellToCanvas(i);

              n.save(), n.beginPath(), n.fillStyle = Ps.Color.YELLOW, n.scale(2, 1), n.arc(Math.floor((_t32.x + e.cellW / 2) / 2), _t32.y + e.cellH - 4, 8, 0, Ps.DOUBLE_PI), n.closePath(), n.globalAlpha = .4, n.fill(), n.restore(), n.shadowColor = Ps.Color.YELLOW, n.shadowBlur = 8;
            }

            n.drawImage(a, _f2, _p2, _o13, _l7, _h, _v, _c3, _u2), n.restore();
          }
        } else console.error("Event position undefined: " + t);
      }, e.isVisible = function (e, t, n, r, i, a, s, l) {
        return e.i === a && e.j === s && !!Bs.isVisible(o(e), l) && e.i >= r && e.i <= i && e.j >= t && e.j <= n;
      }, e.saveMem = function (e, t, n) {
        As.isEmpty(e.memory) && (e.memory = {}), e.memory[t] = n;
      }, e.loadMem = function (e, t) {
        if (!As.isEmpty(e.memory)) return e.memory[t];
      }, e.deleteMem = function (e, t) {
        As.isEmpty(e.memory) || delete e.memory[t];
      }, e.initTransientData = function (t, n, i) {
        if (Bs.initTransientData(n, e.getState(i)), void 0 !== i) return r(i), i.position = {
          x: i.i * n.cellW,
          y: i.j * n.cellH
        }, i;
      }, e.getState = o;
    }(qs || (qs = {}));

    var Xs = /*#__PURE__*/function () {
      function Xs(e, t, n) {
        _classCallCheck(this, Xs);

        _defineProperty(this, "event", void 0);

        _defineProperty(this, "hero", void 0);

        _defineProperty(this, "scene", void 0);

        this.event = e, this.hero = t, this.scene = n;
      }

      _createClass(Xs, [{
        key: "getConfig",
        value: function getConfig() {
          return void 0 !== this.scene.save && void 0 !== this.scene.save.config ? this.scene.save.config : Ts.getConfig();
        }
      }, {
        key: "showSimpleDialog",
        value: function showSimpleDialog(e, t) {
          var n = this.getConfig();
          return Fs.showSimpleDialog(this.event, this.scene, this.hero, e, n, t), !0;
        }
      }, {
        key: "showComplexDialog",
        value: function showComplexDialog(e, t) {
          var n = this.getConfig();
          return Fs.showComplexDialog(this.event, this.scene, this.hero, e, n, this.scene.dialogScriptLauncher, t), !0;
        }
      }, {
        key: "moveToTarget",
        value: function moveToTarget(e, t, n) {
          qs.startMovement(e, t.i, t.j, n);
        }
      }, {
        key: "stepToTarget",
        value: function stepToTarget(e, t, n) {
          var r = ks.getDirection(t, this.event);
          this.stepToDirection(e, r, n);
        }
      }, {
        key: "stepToDirection",
        value: function stepToDirection(e, t, n) {
          var r = ks.moveToDirection(e, t);
          this.moveToTarget(e, r, n);
        }
      }, {
        key: "stepFromTarget",
        value: function stepFromTarget(e, t, n) {
          var r = ks.getDirection(t, e);
          r = ks.getOpposedDirections(r), this.stepToDirection(e, r, n);
        }
      }, {
        key: "getEventById",
        value: function getEventById(e) {
          return this.scene.map.events.find(function (t, n, r) {
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
            } : t ? function (t, r) {
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
          qs.saveMem(this.event, e, t);
        }
      }, {
        key: "loadMem",
        value: function loadMem(e) {
          return qs.loadMem(this.event, e);
        }
      }, {
        key: "incrementStateVar",
        value: function incrementStateVar() {
          var e = this.loadMem(Ns),
              t = 0;
          return void 0 !== e && (t = Number.parseInt(e), Number.isNaN(t) && (t = 0)), t++, this.saveMem(Ns, t + ""), t;
        }
      }, {
        key: "setStateVar",
        value: function setStateVar(e) {
          this.saveMem(Ns, e + "");
        }
      }, {
        key: "goToMap",
        value: function goToMap(e, t) {
          var n = this.scene;
          Gs.loadMapSave(n, e, t, function () {
            n.moveFocusToTarget(t), qs.stopMovement(n.hero);
          });
        }
      }, {
        key: "changeSkin",
        value: function changeSkin(e) {
          this.scene.save.config.skin = e;
        }
      }]);

      return Xs;
    }();

    _defineProperty(Xs, "tooltip", "no description provided");

    var Zs = "msg",
        el = "dlg";

    var tl = /*#__PURE__*/function (_Xs) {
      _inherits(tl, _Xs);

      var _super2 = _createSuper(tl);

      function tl(e, t, n) {
        _classCallCheck(this, tl);

        return _super2.call(this, e, t, n);
      }

      _createClass(tl, [{
        key: "speak",
        value: function speak() {
          var e = this.loadMem(Zs + (this.event.currentState + 1));
          As.isEmpty(e) && (e = this.loadMem(Zs)), this.showSimpleDialog(e, Ls);
        }
      }, {
        key: "dialog",
        value: function dialog() {
          var e = this.event.states[this.event.currentState];
          void 0 !== e.dialog && this.showComplexDialog(e.dialog, Ls);
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

      return tl;
    }(Xs);

    _defineProperty(tl, "tooltip", "Basic script with simple actions");

    var nl = /*#__PURE__*/function (_Xs2) {
      _inherits(nl, _Xs2);

      var _super3 = _createSuper(nl);

      function nl() {
        _classCallCheck(this, nl);

        return _super3.apply(this, arguments);
      }

      _createClass(nl, [{
        key: "faceTheHero",
        value: function faceTheHero() {
          var e = this.getEventById(nl.eventId);
          void 0 !== e ? e.states[e.currentState].direction = ks.getDirection(this.hero, e) : console.error("Cannot find Ann! id:" + nl.eventId);
        }
      }]);

      return nl;
    }(Xs);

    _defineProperty(nl, "eventId", 2);

    _defineProperty(nl, "tooltip", "Script for Ann, in the farm map");

    var rl = /*#__PURE__*/function (_Xs3) {
      _inherits(rl, _Xs3);

      var _super4 = _createSuper(rl);

      function rl() {
        _classCallCheck(this, rl);

        return _super4.apply(this, arguments);
      }

      _createClass(rl, [{
        key: "triggerQuest",
        value: function triggerQuest() {
          this.setStateVar(1);
        }
      }]);

      return rl;
    }(Xs);

    _defineProperty(rl, "tooltip", "Script for Asgan, in the woods map");

    var il = /*#__PURE__*/function (_Xs4) {
      _inherits(il, _Xs4);

      var _super5 = _createSuper(il);

      function il() {
        _classCallCheck(this, il);

        return _super5.apply(this, arguments);
      }

      _createClass(il, [{
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

      return il;
    }(Xs);

    _defineProperty(il, "tooltip", "Provide transportation from one map to another");

    var ol = /*#__PURE__*/function (_Xs5) {
      _inherits(ol, _Xs5);

      var _super6 = _createSuper(ol);

      function ol() {
        _classCallCheck(this, ol);

        return _super6.apply(this, arguments);
      }

      _createClass(ol, [{
        key: "testAction",
        value: function testAction() {
          this.showSimpleDialog("2", Ls);
        }
      }, {
        key: "giantTest",
        value: function giantTest() {
          this.showSimpleDialog("4", Ls);
          var e = this;
          this.wait(1e3).then(function () {
            e.stepFromTarget(e.event, e.hero);
          }), this.incrementStateVar();
        }
      }, {
        key: "giantTest2",
        value: function giantTest2() {
          this.showSimpleDialog("5", Ls);
          var e = this;
          this.wait(1e3).then(function () {
            e.stepFromTarget(e.event, e.hero);
          }), this.incrementStateVar();
        }
      }, {
        key: "giantTest3",
        value: function giantTest3() {
          this.showSimpleDialog("6", Ls);
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

      return ol;
    }(Xs);

    _defineProperty(ol, "tooltip", "Script for tests");

    var al;
    !function (t) {
      var n = base_path + "data/",
          r = base_path + "assets/",
          i = base_path + "assetlist/",
          o = base_path + "edit/",
          a = "@";
      var s = new Map();
      var l,
          c = new Map(),
          u = new Map();

      function d(e, t, n) {
        p(Ps.RequestType.GET, void 0, e, t, n);
      }

      function f(e, t, n) {
        p(Ps.RequestType.POST, t, e, n);
      }

      function p(e, t, n, r, i) {
        var o = new XMLHttpRequest();
        o.onload = function (e) {
          r(this.responseText);
        }, o.onerror = function (e) {
          console.error("Error for request to: " + n), console.error(e), r();
        }, o.ontimeout = function () {
          console.error("Timeout for request to: " + n), r();
        }, o.open(e, n, !0);

        try {
          void 0 !== i && o.setRequestHeader("lang", i), As.isEmpty(t) || e !== Ps.RequestType.POST ? o.send() : o.send(t);
        } catch (e) {
          "NetworkError" === e.name ? console.error("If you are working locally on Chrome, please launch it with option --allow-file-access-from-files") : (console.error(e), console.trace()), r();
        }
      }

      function h(e, t, i, o) {
        As.isEmpty(e) && console.error("Trying to load empty file!");

        var l = function (e, t) {
          var i;

          switch (t) {
            case Ms.CHAR:
            case Ms.FACE:
            case Ms.SKIN:
            case Ms.PICTURE:
            case Ms.TILE:
            case Ms.AUTOTILE:
              i = r;
              break;

            case Ms.MAP:
            case Ms.SAVE:
            case Ms.STRING:
            case Ms.DIALOG:
            case Ms.GENERIC_MESSAGE:
            case Ms.TILESET:
            case Ms.AUTOTILESET:
              i = n;
              break;

            default:
              console.error("Unexpected resource type"), console.trace();
          }

          return i + t + "/" + e;
        }(e, t);

        if (void 0 === l) return console.error("Error while loading file: " + e + "/" + t), void i();

        switch (t) {
          case Ms.AUTOTILE:
          case Ms.CHAR:
          case Ms.FACE:
          case Ms.SKIN:
          case Ms.TILE:
          case Ms.PICTURE:
            var _n25 = s.get(t + a + e);

            void 0 !== _n25 ? i(_n25) : (_n25 = new Image(), _n25.onload = function () {
              s.set(t + a + e, _n25), i(_n25);
            }, _n25.src = l);
            break;

          case Ms.AUTOTILESET:
          case Ms.MAP:
          case Ms.SAVE:
          case Ms.STRING:
          case Ms.DIALOG:
          case Ms.GENERIC_MESSAGE:
          case Ms.TILESET:
            d(l, i, o);
            break;

          default:
            console.error("Unexpected resource type"), console.trace(), i(void 0);
        }
      }

      function v(e, t) {
        var n = s.get(t + a + e);
        return void 0 === n && h(e, t, function (n) {
          void 0 === n || "string" == typeof n ? console.error("Error while reading image: " + e) : s.set(t + a + e, n);
        }), n;
      }

      t.loadProperties = function (e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "l4w";
        if (c.has(t)) e(c.get(t));else {
          var _r19 = function _r19(n) {
            var r;
            void 0 !== n ? (r = function (e) {
              var t = new Map(),
                  n = e.split("\n");

              for (var r = 0; r < n.length; r++) {
                var _e46 = n[r].trim();

                if ("" !== _e46 && 0 !== _e46.indexOf("#")) {
                  var _n26 = _e46.split("="),
                      _i15 = +_n26[1];

                  isNaN(_i15) ? t.has(_n26[1]) ? t.set(_n26[0], t.get(_n26[1])) : console.error("Error parsing properties file at line " + r + ": " + _i15) : t.set(_n26[0], _i15);
                }
              }

              return t;
            }(n), c.set(t, r)) : r = new Map(), e(r);
          };

          d(n + Ms.CONFIGURATION + "/" + t + ".properties", _r19);
        }
      }, t.sendGETRequest = d, t.sendPOSTRequest = f, t.load = h, t.loadImageFromCache = v, t.loadDefaultImage = function (e) {
        return v("404.png", e);
      }, t.save = function (e, t, n, r) {
        var i = function (e, t) {
          return o + t + "/" + e;
        }(e, n);

        f(i, t, function (e) {
          void 0 !== e ? n === Ms.STRING || n === Ms.DIALOG || n === Ms.GENERIC_MESSAGE ? r(e, !0) : r(void 0, !0) : (console.error("Empty response for: " + i), r(void 0, !1));
        });
      }, t.listResources = function (e, t) {
        d(i + e, function (e) {
          if (void 0 !== e) {
            var _n27 = JSON.parse(e);

            if (void 0 !== _n27) return void t(_n27);
          }

          console.error("Empty response from " + i), t([]);
        });
      }, t.listScriptClasses = function () {
        if (void 0 !== l) return l;
        var t = Object.keys(e).filter(function (t) {
          try {
            return e[t].prototype instanceof Xs;
          } catch (e) {
            return !1;
          }
        }),
            n = new Map();

        var _iterator32 = _createForOfIteratorHelper(t),
            _step32;

        try {
          for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
            var _r20 = _step32.value;
            n.set(_r20, e[_r20].tooltip);
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
            r = Object.getOwnPropertyNames(Object.getPrototypeOf(n)).filter(function (e) {
          try {
            return "constructor" !== e && !As.isEmpty(e) && "function" == typeof n[e];
          } catch (e) {
            return !1;
          }
        });
        return u.set(t, r), r;
      }, t.listEventStateConditions = function () {
        return Object.keys(Ds);
      };
    }(al || (al = {}));
    var sl = ms.extend({
      name: "bug-reporting",
      data: function data() {
        return {
          label: void 0,
          description: "",
          flagSent: !1,
          flagReceived: !1,
          url: void 0
        };
      },
      methods: {
        send: function send() {
          if (this.description.trim().length > 0) {
            var _e47 = this;

            grecaptcha.ready(function () {
              grecaptcha.execute("6LfudvIUAAAAADY9aLIgdcbuY8kekIKAv6WYEYFb", {
                action: "bugReport"
              }).then(function (t) {
                var n = {
                  label: _e47.label,
                  description: _e47.description,
                  captchaToken: t
                };
                ms.set(_e47, "flagSent", !0), al.sendPOSTRequest("issue", JSON.stringify(n), function (t) {
                  if (ms.set(_e47, "flagReceived", !0), !As.isEmpty(t)) try {
                    var _n28 = JSON.parse(t);

                    return void ms.set(_e47, "url", _n28.url);
                  } catch (e) {
                    console.error(t);
                  }
                  console.error("Issue creation failed");
                });
              });
            });
          }
        },
        reset: function reset(e) {
          ms.set(this, "flagSent", !1), ms.set(this, "flagReceived", !1), ms.set(this, "url", void 0), e || (ms.set(this, "description", ""), ms.set(this, "label", void 0));
        }
      }
    });

    function ll(e, t, n, r, i, o, a, s) {
      var l,
          c = "function" == typeof e ? e.options : e;
      if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), o && (c._scopeId = "data-v-" + o), a ? (l = function l(e) {
        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a);
      }, c._ssrRegister = l) : i && (l = s ? function () {
        i.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
      } : i), l) if (c.functional) {
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
    }

    n(109);
    var cl = ll(sl, Cs, [function () {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("p", [e._v("\n            When you send the report "), n("strong", [e._v("what you wrote will be publicly visible on the "), n("a", {
        attrs: {
          href: "https://github.com/giovannipessiva/l4w/issues"
        }
      }, [e._v("project issue tracker")])]), e._v("."), n("br"), e._v("\n            If you want some privacy, "), n("a", {
        attrs: {
          href: "mailto:rpt@altervista.org?subject=Feedback%20on%20L4W"
        }
      }, [e._v("drop me a mail")])]);
    }, function () {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("p", [e._v("\n                An error occured :("), n("br")]);
    }], !1, null, "463340e8", null);
    cl.options.__file = "src/client/components/BugReporting.vue";
    var ul = cl.exports;

    var dl = function dl() {
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
          src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=1885551381575204"
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
          value: !e.loginStatus && e.loginEnabled,
          expression: "!loginStatus && loginEnabled"
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

    dl._withStripped = !0;
    var fl = ms.extend({
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
          loginEnabled: !1,
          loginStatus: !1,
          loginService: void 0,
          fbToken: void 0,
          flagLoggingOut: !1
        };
      },
      created: function created() {
        var _this2 = this;

        al.sendGETRequest("/health", function (e) {
          if (void 0 === e) console.error("No response from health endpoint");else if (JSON.parse(e).database) {
            _this2.loginEnabled = !0;

            var _e48 = document.createElement("meta");

            _e48.name = "google-signin-scope", _e48.content = "profile email", document.head.appendChild(_e48), _e48 = document.createElement("meta"), _e48.name = "google-signin-client_id", _e48.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com", document.head.appendChild(_e48);
            var _t33 = _this2;
            window.fbAsyncInit = function () {
              FB.init({
                appId: "1885551381575204",
                autoLogAppEvents: !1,
                cookie: !0,
                xfbml: !1,
                version: "v12.0"
              }), FB.Event.subscribe("auth.statusChange", function (e) {
                _t33.fbLoginStatusChangeCallback(e);
              }), FB.getLoginStatus(function (e) {
                _t33.fbLoginStatusChangeCallback(e);
              });
            }, window.gAsyncInit = function () {
              gapi.load("auth2", function () {
                gapi.auth2.getAuthInstance().isSignedIn.get() && (ms.set(_t33, "loginStatus", !0), ms.set(_t33, "loginService", "google"));
              });
            }, window.gLoginCallback = _this2.gLoginCallback;
          } else console.warn("Database unavailable, will not enable Social Login");
        });
      },
      methods: {
        logoutCallback: function logoutCallback() {
          ms.set(this, "loginStatus", !1), ms.set(this, "loginService", void 0), ms.set(this, "flagLoggingOut", !1);
        },
        logout: function logout() {
          if (this.loginStatus) {
            switch (this.loginService) {
              case "facebook":
                if (void 0 !== this.fbToken) {
                  ms.set(this, "flagLoggingOut", !0);

                  var _e49 = this;

                  FB.api("/me/permissions", "delete", {
                    access_token: _e49.fbToken
                  }, function (t) {
                    !0 !== t.success && console.error("Facebook permission revoking failed: ", t), FB.logout(function (t) {
                      _e49.logoutCallback();
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

            al.sendGETRequest("logout", function (e) {});
          } else console.error("Cannot logout, user is not currently logged in");
        },
        fbLoginStatusChangeCallback: function fbLoginStatusChangeCallback(e) {
          if ("connected" === e.status) {
            this.fbToken = e.authResponse.accessToken;
            var _t34 = {
              service: "facebook",
              token: e.authResponse.accessToken,
              userId: e.authResponse.userID
            };
            this.doLogin(_t34);
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
          al.sendPOSTRequest("/auth", JSON.stringify(e), function (n) {
            if (!As.isEmpty(n)) try {
              if (JSON.parse(n).result) return ms.set(t, "loginStatus", !0), void ms.set(t, "loginService", e.service);
            } catch (e) {
              console.error(e);
            }
            ms.set(t, "loginStatus", !1), ms.set(t, "loginService", void 0), console.warn("Login with " + e.service + " failed");
          });
        }
      }
    });
    n(564);
    var pl = ll(fl, dl, [], !1, null, "08ab550b", null);
    pl.options.__file = "src/client/components/Login.vue";
    var hl = pl.exports;
    var vl;
    !function (e) {
      function t(e, t, n, r, i, o, a) {
        var s = Ts.getEmptyMap();
        s.width = e, s.height = t, s.blocks = a;
        var l = Ts.getEvent();
        l.i = n, l.j = r;
        var c,
            u = {
          i: i,
          j: o
        },
            d = document.getElementById("alg").value;

        switch (d) {
          case "Basic":
            c = _s.BASIC;
            break;

          case "D* Lite":
            c = _s.D_STAR_LITE;
            break;

          default:
            console.error("Unexpected pathfinding algo: " + d), c = _s.BASIC;
        }

        var f,
            p = [],
            h = 0;

        do {
          if (f = Qs(s, l, u, c), 4 !== f && (l = ks.moveToDirection(l, f), p.push({
            cell: {
              i: l.i,
              j: l.j
            }
          })), h++, h > e * t) {
            console.error("Pathfinder has failed :(");
            break;
          }
        } while (4 !== f);

        return p;
      }

      var n, r;

      function i() {
        var e = parseInt(document.getElementById("eventX").value),
            t = parseInt(document.getElementById("eventY").value),
            n = parseInt(document.getElementById("targetX").value),
            i = parseInt(document.getElementById("targetY").value),
            o = parseInt(document.getElementById("width").value),
            a = parseInt(document.getElementById("height").value);
        void 0 !== r && r.length === o * a || (r = new Array(o * a).fill(0)), e >= o && (e = o - 1, document.getElementById("eventX").value = e + ""), n >= o && (n = o - 1, document.getElementById("targetX").value = n + ""), t >= a && (t = a - 1, document.getElementById("eventY").value = t + ""), i >= a && (i = a - 1, document.getElementById("targetY").value = i + "");
        var s = "";

        for (var _l8 = 0; _l8 < a; _l8++) {
          for (var _a13 = 0; _a13 < o; _a13++) {
            var _c4 = "cell",
                _u3 = _a13 + _l8 * o;

            n === _a13 && i === _l8 && (_c4 += " target"), 15 === r[_u3] && (_c4 += " blocked"), e === _a13 && t === _l8 && (_c4 += " event"), s += "<div id='g" + _u3 + "' class='" + _c4 + "' onclick='L4W_tester.Tester.toggleBlock(" + _u3 + ")'></div>";
          }

          s += "<br style='clear:both;'/>";
        }

        document.getElementById("map").innerHTML = s;
      }

      e.loadVueComponents = function () {
        new ms({
          el: "#loginVue",
          components: {
            login: hl
          }
        }), new ms({
          el: "#bugReportingVue",
          components: {
            "bug-reporting": ul
          }
        });
      }, e.testPathfinding = t, e.drawMap = i, e.pathfinding = function () {
        var e = parseInt(document.getElementById("eventX").value),
            o = parseInt(document.getElementById("eventY").value),
            a = parseInt(document.getElementById("targetX").value),
            s = parseInt(document.getElementById("targetY").value),
            l = t(parseInt(document.getElementById("width").value), parseInt(document.getElementById("height").value), e, o, a, s, r);
        document.getElementById("eventX").disabled = !0, document.getElementById("eventY").disabled = !0, document.getElementById("targetX").disabled = !0, document.getElementById("targetY").disabled = !0, document.getElementById("width").disabled = !0, document.getElementById("height").disabled = !0, document.getElementById("find").disabled = !0, document.getElementById("stop").disabled = !1, n = !1, document.getElementById("log").innerHTML = "", function e(t, r) {
          r < t.length && !n ? (document.getElementById("eventX").value = t[r].cell.i + "", document.getElementById("eventY").value = t[r].cell.j + "", i(), setTimeout(function () {
            e(t, r + 1);
          }, 100)) : (document.getElementById("eventX").disabled = !1, document.getElementById("eventY").disabled = !1, document.getElementById("targetX").disabled = !1, document.getElementById("targetY").disabled = !1, document.getElementById("width").disabled = !1, document.getElementById("height").disabled = !1, document.getElementById("find").disabled = !1, document.getElementById("stop").disabled = !0);
        }(l, 0);
      }, e.stop = function () {
        n = !0;
      }, e.toggleBlock = function (e) {
        15 === r[e] ? r[e] = 0 : r[e] = 15, i();
      };
    }(vl || (vl = {}));
  })(), L4W_tester = r;
})();