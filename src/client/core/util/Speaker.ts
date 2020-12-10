import { LanguageEnum } from "../../../common/Commons"
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

    export function gandalf(retry?: number) {
        if(!Compatibility.webSpeech()) {
            return;
        }
        let voice = null;
        let availableVoices = window.speechSynthesis.getVoices()
        if(availableVoices.length === 0) {
            // At first call it is empty, so let's try again
            if(retry === undefined) {
                setTimeout(()=> gandalf(3), 0);
                return;
            } else if (retry > 0){
                setTimeout(()=> gandalf(retry - 1), 10); 
                return;
            } else {
                // Failed to load preferred voices :(
            }
        }
        for(let v of availableVoices) {
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
        if(voice !== null) {
            ssu.voice = voice;
        }
        speechSynthesis.speak(ssu);
    }
}