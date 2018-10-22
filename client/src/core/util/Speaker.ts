import { LanguageEnum } from "../../../../common/src/model/Commons"

export namespace Speaker {

    export function speak(text: string, lang: LanguageEnum) {
        let ssu = new SpeechSynthesisUtterance(text); 
        ssu.lang = lang;   
        speechSynthesis.speak(ssu);
    }
}