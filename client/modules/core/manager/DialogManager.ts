/// <reference path="../util/Constant.ts" />
/// <reference path="../model/Map.ts" />

/**
 * Helper class for managin dialogs and alfanumeric input/output
 */
namespace DialogManager {
    
    export const languages: string[] = [];
    languages[LanguageEnum.IT] = "Italiano 🇮🇹";
    languages[LanguageEnum.EN] = "English 🇬🇧";

    export function loadString(stringId: number, language: LanguageEnum, callback: (string) => void): void {
        if(isNaN(stringId)) {
            callback(undefined);
            return;    
        }
        Resource.load(stringId + "", Resource.TypeEnum.STRING, function(resourceText: string) {
            if (Utils.isEmpty(resourceText)) {
                console.error("Error while loading string: " + stringId);
                callback(undefined);
            } else {
                callback(resourceText);
            }
        });
    }

    export function saveString(id: number, strings: string[], callback: (number) => void) {
        let value : string = JSON.stringify(strings);
        Resource.save(id + "", value, Resource.TypeEnum.STRING, function(stringId: number) {
            if (Utils.isEmpty(stringId)) {
                console.error("Error while saving string");
                callback(undefined);
            } else {
                callback(stringId);
            }
        });
    }

    export function show(name: string, messageId: number, language: LanguageEnum, skin: string, callback) {
        let message: string;
        let image: HTMLImageElement;
        loadString(messageId, language, function(msg: string) {
            message = msg;
            if(image !== undefined) {
                showDialog(name, message, language, image, callback);   
            }
        });
        Resource.load(skin, Resource.TypeEnum.SKIN, function(img: HTMLImageElement) {
            image = img;
            if(message !== undefined) {
                showDialog(name, message, language, image, callback);
            }  
        });
    }
    
    function showDialog(name: string, message: string, language: LanguageEnum, skin: HTMLImageElement, callback) {     
        //TODO
        console.log(name + "> " + message);
        callback();
    }
};