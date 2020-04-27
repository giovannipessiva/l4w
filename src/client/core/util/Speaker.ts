import { LanguageEnum } from "../../../common/model/Commons"
import { Compatibility } from "./Compatibility";

export namespace Speaker {

    export function speak(text: string, lang: LanguageEnum) {
        if(!Compatibility.webSpeech()) {
            return;
        }
        let ssu = new SpeechSynthesisUtterance(text); 
        ssu.lang = lang;   
        speechSynthesis.speak(ssu);
    }

    export function gandalf() {
        if(!Compatibility.webSpeech()) {
            return;
        }
        let voice = null;
        for(let v of window.speechSynthesis.getVoices()) {
            if([
                "Google UK English Male",
                "Microsoft David Desktop - English (United States)",
                "Google US English"
            ].includes(v.name)) {
                voice = v;
                break;
            }
        }

        let ssu = new SpeechSynthesisUtterance("You shall not pass"); 
        ssu.lang = LanguageEnum.EN;   
        ssu.pitch = 0;
        ssu.rate = 0.1;
        ssu.voice = voice;
        speechSynthesis.speak(ssu);
    }
}