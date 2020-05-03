<template>
    <div>
        <div v-if="!flagSent">
            <p>
                <label for="issueLabel">Do you what to report something?</label><br>
                <select v-model="label" id="issueLabel">
                    <option selected disabled />
                    <option value="bug">Problem</option>
                    <option value="question">Question</option>
                    <option value="enhancement">Enhancement suggestion</option>
                    <option value="other">Other</option>
                </select>
            </p>
            <p>
                <label for="issueDescription">What's on your mind?</label><br>
                <textarea v-model="description" id="issueDescription" class="description" type="text"></textarea>
            </p>
            <p>
                When you send the report <strong>what you wrote will be publicly visible on the <a href="https://github.com/giovannipessiva/l4w/issues">project issue tracker</a></strong>.<br>
                If you want some privacy, <a href="mailto:rpt@altervista.org?subject=Feedback%20on%20L4W">drop me a mail</a>
            </p>
            <button v-on:click="send()" v-bind:disabled="description.trim().length === 0">Send</button>
        </div>
        <div v-else>
            <div v-if="!flagReceived">
                <img class="loading" src="/style/ui/ajax-loader.webp" alt="loading..." />
            </div>
            <div v-else-if="url !== undefined">
                <p>
                    Thank you for your feedback!<br>
                    You can find it on the project issue tracker: <a v-bind:href="url">{{ url }}</a><br>
                </p>
                <button v-on:click="reset()">Dismiss</button>
            </div>
            <div v-else>
                <p>
                    An error occured :(<br>
                </p>
                <button v-on:click="reset(true)">Dismiss</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"

import { Resource } from "../core/util/Resource";
import { Utils } from "../../common/Utils";
import { IIssueRequest, IIssueResponse } from "../../common/ServerAPI"

export default Vue.extend({
    name: "bug-reporting",
    data: function(): {
        label?: string,
        description: string,
        flagSent?: boolean,
        flagReceived?: boolean,
        url?: string
    } {
        return {
            label: undefined,
            description: "",
            flagSent: false,
            flagReceived: false,
            url: undefined
        }
    },
    methods: {
        send: function() {
            if(this.description.trim().length > 0) {
                Vue.set(this, "flagSent", true);
                let request: IIssueRequest = {
                    label: this.label, 
                    description: this.description
                };
                let vueScope = this;
                Resource.sendPOSTRequest("issue", JSON.stringify(request), function(response?: string) {
                    Vue.set(vueScope, "flagReceived", true);
                    if(!Utils.isEmpty(response)) {
                        try {
                            let resp: IIssueResponse = JSON.parse(response!);
                            Vue.set(vueScope, "url", resp.url);
                            return;
                        } catch(e) {
                            console.error(response);
                        }
                    }
                    console.error("Issue creation failed");
                });
            }
        },
        reset: function(flagPreserveRequest?: boolean) {
            Vue.set(this, "flagSent", false);
            Vue.set(this, "flagReceived", false);
            Vue.set(this, "url", undefined);
            if(!flagPreserveRequest) {
                Vue.set(this, "description", "");
                Vue.set(this, "label", undefined);
            }
        }
    }
});
</script>

<style scoped>
.description{
    width: 21em;
    height: 4em;
    font-family: Oldenburg, Verdana, Geneva, Arial, Helvetica, sans-serif;
    font-size: medium;
    resize: vertical;
}
.loading {
    width: 2em;
    height: 2em;   
}
</style>