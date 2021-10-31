<template>
    <div class="root">
        <script type="application/javascript" async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=1885551381575204"></script>
        <script type="application/javascript" async defer src="https://apis.google.com/js/platform.js?onload=gAsyncInit"></script>
        <div v-show="!loginStatus">
            <!-- <img class="statusIcon unloggedIcon" src="/style/ui/unlogged.png" alt="Unlogged icon" title="You are not currently logged in"> -->
            <!-- Google login -->
            <div class="g-signin2" data-onsuccess="gLoginCallback" data-theme="dark"></div>
            <!-- Facebook login -->
            <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false"
                data-use-continue-as="false" data-width="" data-scope="email" ></div>
            <br>
            <slot name="unlogged"></slot>
        </div>
        <div v-if="loginStatus">
            <img class="statusIcon loggedIcon" src="/style/ui/logged.png" alt="Logged icon" title="You are currently logged in!">
            <br>
            <div v-if="flagLoggingOut">
                <img class="loading" src="/style/ui/spinner.gif" alt="logging out..." />
            </div>
            <div v-else>
                <button v-on:click="logout">Logout</button>
                <br><br>
                <slot name="logged"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Resource } from "../core/util/Resource"
import { AuthService, IAuthRequest, IAuthResponse } from "../../common/ServerAPI"
import { Utils } from "../../common/Utils";

declare let FB: any; // Loaded from Facebook script
declare let gapi: any; // Loaded from Google script

interface FBLoginResponse {
    status: "connected" | "not_authorized" | "unknown",
    authResponse?: {
        accessToken: string,
        expiresIn: any,
        signedRequest: any,
        userID: string
    }
}

export default Vue.extend({
    name: "login",
    props: {
        showIcons: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    data: function (): {
        loginStatus: boolean,
        loginService?: AuthService,
        fbToken?: string,
        flagLoggingOut: boolean
    } {
        return {
            loginStatus: false,
            loginService: undefined,
            fbToken: undefined,
            flagLoggingOut: false
       }
    },
    created: function() {
        // Add Google login meta tags
        let meta = document.createElement("meta");
        meta.name = "google-signin-scope";
        meta.content = "profile email";
        document.head.appendChild(meta);

        meta = document.createElement("meta");
        meta.name = "google-signin-client_id";
        meta.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com";
        document.head.appendChild(meta);

        // Init Facebook login
        let vueScope = this;
        window["fbAsyncInit"] = function() {
            FB.init({
                appId: "1885551381575204",
                autoLogAppEvents: false,
                cookie: true,
                xfbml: false,
                version : "v12.0"
            });
            FB.Event.subscribe("auth.statusChange", function(response: FBLoginResponse) {
                vueScope.fbLoginStatusChangeCallback(response);
            });
            FB.getLoginStatus(function(response: FBLoginResponse) {
                vueScope.fbLoginStatusChangeCallback(response);
            });
        };

        // Init Google login
        window["gAsyncInit"] = function() {
            gapi.load("auth2", function() {
                const authInstance = gapi.auth2.getAuthInstance();
                if(authInstance.isSignedIn.get()) {
                    Vue.set(vueScope, "loginStatus", true);
                    Vue.set(vueScope, "loginService", "google");
                }
            });
        };
        window["gLoginCallback"] = this.gLoginCallback;
    },
    methods: {
        logoutCallback: function() {
            Vue.set(this, "loginStatus", false);
            Vue.set(this, "loginService", undefined);
            Vue.set(this, "flagLoggingOut", false);
        },
        logout: function logout() {
            // Check which service is used, only logout from that service
            if(this.loginStatus) {
                switch(this.loginService) {
                case "facebook":
                    // Facebook logout
                    if(this.fbToken !== undefined) {
                        // Since Facebook logout is slow, display an animation and hide the buttons
                        Vue.set(this, "flagLoggingOut", true);
                        let vueScope = this;
                        // Remove permission, so that the user is asked to authenticate the app again
                        // (seems like FB.logout() isn't enough, if you refresh the page you are still logged)
                        FB.api("/me/permissions", "delete", {
                            access_token: vueScope.fbToken
                        }, function(response: any) {
                            if(response.success !== true) {
                                console.error("Facebook permission revoking failed: ", response);
                            }
                            FB.logout(function(response: FBLoginResponse)  {
                                vueScope.logoutCallback();
                            });
                        });
                        this.fbToken = undefined;
                    }
                    break;
                case "google":
                    // Google logout
                    let auth2 = gapi.auth2.getAuthInstance();
                    auth2.signOut().then(this.logoutCallback());
                    break;
                default:
                    console.error("Unexpected loginService: " + this.loginService);
                }
                Resource.sendGETRequest("logout", function(response?: string) {
                    // Nothing to do
                });
            } else {
                console.error("Cannot logout, user is not currently logged in")
            }
        },
        fbLoginStatusChangeCallback: function(response: FBLoginResponse) {
            if(response.status === "connected") {
                this.fbToken = response.authResponse!.accessToken;
                let request: IAuthRequest = {
                    service: "facebook",
                    token: response.authResponse!.accessToken,
                    userId: response.authResponse!.userID
                };
                this.doLogin(request);
            }
        },
        gLoginCallback: function(googleUser: any) {
            let request: IAuthRequest = {
                service: "google",
                token: googleUser.getAuthResponse().id_token
            };
            this.doLogin(request);
        },
        doLogin(request: IAuthRequest) {
            let vueScope = this;
            Resource.sendPOSTRequest("/auth", JSON.stringify(request), function(response?: string) {
                if(!Utils.isEmpty(response)) {
                    try {
                        let authResponse: IAuthResponse = JSON.parse(response!);
                        if(authResponse.result) {
                            Vue.set(vueScope, "loginStatus", true);
                            Vue.set(vueScope, "loginService", request.service);
                            return;
                        }
                    } catch(e) {
                        console.error(e);
                    }
                }
                Vue.set(vueScope, "loginStatus", false);
                Vue.set(vueScope, "loginService", undefined);
                console.warn("Login with " + request.service + " failed");
            });
        }
    }
});
</script>

<style scoped>
.root {
    width: auto;
    text-align: center;
    margin-bottom: 1em;
}
.root div {
    margin:0.5em;
    text-align: center;
}
.statusIcon {
    margin: 0.5em;
    border-radius: 100%;
    width: 40px;
    height: 40px;
}
.loggedIcon {
    border-width: 2px;
    border-style: solid;
    border-color: green;
    background-color: lightgreen;
}
.unloggedIcon {
    border-width: 2px;
    border-style: dashed;
    border-color: gray;
    background-color: lightgray;
}
.loading {
    width: 2em;
    height: 2em;   
}
</style>