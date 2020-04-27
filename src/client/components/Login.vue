<template>
    <div>
        <script type="application/javascript" async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1885551381575204"></script>
        <script type="application/javascript" async defer src="https://apis.google.com/js/platform.js"></script>

        <div v-if="!logged">
            <!-- Google login -->
            <div id="login" class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
            <!-- Facebook login -->
            <div class="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false"
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
let FB: any; // Loaded from Facebook script
let gapi: any; // Loaded from Google script

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
                autoLogAppEvents : true, // Enable cookies to allow the server to access the session
                xfbml: true, // Parse social plugins on this webpage
                version : "v6.0"
            });

            // Init Facebook login
            FB.Event.subscribe("auth.statusChange", function(response: FBLoginResponse) {
                vueScope.fbLoginStatusChangeCallback(response);
            });
        };
    },
    methods: {
        logout: function logout() {
            //TODO check which service is used, only logout from that service

            if(this.logged) {
                let vueScope = this;
                // Facebook logout
                FB.logout(function(response: any) {
                    Vue.set(vueScope, "logged", false);
                    location.reload();
                });

                // Google logout
                let auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut().then(function () {
                    Vue.set(vueScope, "logged", false);
                    location.reload();
                });
            } else {
                console.warn("Cannot logout, user is not currently logged in")
            }
        },
        fbLoginStatusChangeCallback: function(response: FBLoginResponse) {
            if(response.status === "connected") {
                // L'utente ha effettuato l'accesso a Facebook e alla tua pagina Web.
                console.log(response.authResponse);
                
                let vueScope = this;
                FB.api("/me", function(responseMe: any) {
                    console.log('Successful login for: ' + responseMe.name);
                    Vue.set(vueScope, "user", responseMe.name);
                });
            } else console.log("Status: " + response.status)
        }
    }
});
</script>