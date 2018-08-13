/// <reference path="../util/Constant.ts" />
/// <reference path="../../../../common/src/model/Map.ts" />

/**
 * Helper class for managing dialogs and alfanumeric input/output
 */
namespace DialogManager {
    
    export const languages: string[] = [];
    languages[LanguageEnum.IT] = "Italiano 🇮🇹";
    languages[LanguageEnum.EN] = "English 🇬🇧";

    const DIALOG_FRAME_ID = "dialog1";
    const DIALOG_FACE_ID = "dialogFace";
    const DIALOG_NAME_ID = "dialogName";
    const DIALOG_AREA_ID = "dialogArea";

    export function loadString(stringId: number, language: LanguageEnum, callback: (str?: string) => void): void {
        if(isNaN(stringId)) {
            callback();
            return;    
        }
        Resource.load(stringId + "", Resource.TypeEnum.STRING, function(resourceText) {
            if (Utils.isEmpty(resourceText)) {
                console.error("Error while loading string: " + stringId);
                callback();
            } else if(typeof resourceText === "string") {
                callback(resourceText);
            }
        });
    }

    export function saveString(id: number, strings: string[], callback: (nmb?: number) => void) {
        let value : string = JSON.stringify(strings);
        Resource.save(id + "", value, Resource.TypeEnum.STRING, function(stringId: number) {
            if (Utils.isEmpty(stringId)) {
                console.error("Error while saving string");
                callback();
            } else {
                callback(stringId);
            }
        });
    }

    export function show(scene: DynamicScene, name: string, messageId: number, language: LanguageEnum, skin: string, callback: IEmptyCallback, faceset?: string) {
        loadString(messageId, language, function(msg?: string) {
            if(msg === undefined) {
                console.error("MessageId not foud: " + messageId);
            } else {
                showDialog(scene, name, msg, skin, callback, faceset);   
            }
        });
    }
    
    function showDialog(scene: DynamicScene, name: string, message: string, skin: string, callback: IEmptyCallback, faceset?: string): void {     
        var dlgFrame: HTMLElement | null = document.getElementById(DIALOG_FRAME_ID);
        let dlgFace: HTMLElement | null = document.getElementById(DIALOG_FACE_ID);
        let dlgName: HTMLElement | null = document.getElementById(DIALOG_NAME_ID);
        let dlgArea: HTMLElement | null = document.getElementById(DIALOG_AREA_ID);
      
        if(dlgFrame === null) {
            console.error("Element not foud: " + DIALOG_FRAME_ID);
            return;
        } else {
            // TODO il messaggio deve sparire solo quanto l'utente clicca
            setTimeout(function() {
                dlgFrame!.style.display = "none";
                callback();
            }, 3000);
        }
        if(dlgFace === null) {
            console.error("Element not foud: " + DIALOG_FACE_ID);
            return;
        }
        if(dlgName === null) {
            console.error("Element not foud: " + DIALOG_NAME_ID);
            return;
        }
        if(dlgArea === null) {
            console.error("Element not foud: " + DIALOG_AREA_ID);
            return;
        }

        dlgFrame.style.display = "block";
        dlgFrame.style.borderImageSource = "url('/assets/skin/" + skin + "')";
        if(faceset !== undefined) {
            dlgFace.style.display = "block";
            dlgFace.style.backgroundImage = "url('/assets/faceset/" + faceset + "')";
        } else {
            dlgFace.style.display = "none";
        }
        dlgName.innerText = name;
        dlgArea.innerText = message;
    }
};