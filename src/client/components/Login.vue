<template>
    <div class="root">
        <script type="application/javascript" async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1885551381575204"></script>
        <script type="application/javascript" async defer src="https://apis.google.com/js/platform.js"></script>

        <div v-if="!loginStatus">
            <!-- Google login -->
            <div id="login" class="g-signin2" data-onsuccess="gLoginCallback" data-theme="dark"></div>
            <!-- Facebook login -->
            <div class="fb-login-button" data-size="medium" data-button-type="login_with" data-layout="default" data-auto-logout-link="false"
                data-use-continue-as="false" data-width=""></div>
            <br>
            <slot name="whenLoggedOut"></slot>
        </div>
        <div v-else>
            Welcome, {{ user }}!
            <br>
            <button v-on:click="logout">Logout</button>
            <slot name="whenLoggedIn"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"

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
        logged: {
            type: Boolean,
            required: false,
            default: false
        },
        user: {
            type: String,
            required: false
        }
    },
    data: function (): {
        loginStatus: boolean,
        loginService?: "facebook" | "google"
    } {
        return {
            loginStatus: this.logged,
            loginService: undefined
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
                version : "v6.0"
            });

            // Init Facebook login
            FB.Event.subscribe("auth.statusChange", function(response: FBLoginResponse) {
                vueScope.fbLoginStatusChangeCallback(response);
            });
        };
    },
    methods: {
        logoutCallback: function(vueScope: any) {
            Vue.set(vueScope, "loginStatus", false);
            Vue.set(vueScope, "loginService", undefined);
            location.reload();
        },
        logout: function logout() {
            // Check which service is used, only logout from that service
            if(this.loginStatus) {
                switch(this.loginService) {
                case "facebook":
                    // Facebook logout
                    let vueScope = this;
                    FB.logout(function(response: any) {
                        console.log(response); //TODO test
                        vueScope.logoutCallback(vueScope);
                    });
                    break;
                case "google":
                    // Google logout
                    let auth2 = gapi.auth2.getAuthInstance();
                    auth2.signOut().then(this.logoutCallback(this));
                    break;
                default:
                    console.warn("Unexpected loginService: " + this.loginService);
                }
            } else {
                console.warn("Cannot logout, user is not currently logged in")
            }
        },
        fbLoginStatusChangeCallback: function(response: FBLoginResponse) {
            if(response.status === "connected") {
                Vue.set(this, "loginStatus", true);
                Vue.set(this, "loginService", "facebook");
                console.log("Logged with Facebook");
            }
        },
        gLoginCallback: function(googleUser: any) {           
            let f = document.createElement("form");
            f.setAttribute("method","post");
            f.setAttribute("action",".");
            let i;
            
            i = document.createElement("input");
            i.setAttribute("type","text");
            i.setAttribute("name","token");
            i.setAttribute("value",googleUser.getAuthResponse().id_token);
            f.appendChild(i);

            f.style.display="none";
            document.body.appendChild(f);
            f.submit();
            Vue.set(this, "loginStatus", true);
            Vue.set(this, "loginService", "google");
            console.log("Logged with Google");
        }
    }
});
</script>

<style scoped>
.root {
    width: auto;
    text-align: left;
}
.root div {
    margin:0.5em;
}
</style>