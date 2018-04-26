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

    export function show(scene: DynamicScene, name: string, messageId: number, language: LanguageEnum, skin: string, callback) {
        let message: string;
        let image: HTMLImageElement;
        loadString(messageId, language, function(msg: string) {
            message = msg;
            if(image !== undefined) {
                showDialog(scene, name, message, image, callback);   
            }
        });
        Resource.load(skin, Resource.TypeEnum.SKIN, function(img: HTMLImageElement) {
            image = img;
            if(message !== undefined) {
                showDialog(scene, name, message, image, callback);
            }  
        });
    }
    
    function showDialog(scene: DynamicScene, name: string, message: string, skin: HTMLImageElement, callback: ()=>void): void {     
        scene.showSimpleDialog(name, message, skin, callback);
    }
    
    export function renderDialog(grid: DynamicGrid, context: CanvasRenderingContext2D, name: string, message: string, skin: HTMLImageElement): void {
        let dialogBox: IRectangle = grid.getDialogBoxSize();
        renderDialogBox(dialogBox, context, skin);
        renderDialogBorder(dialogBox, context, skin);
        renderDialogText(dialogBox, context, name, message, skin);
    }
    
    function renderDialogBox(dialogBox: IRectangle, context: CanvasRenderingContext2D, skin: HTMLImageElement): void {
        //TODO
        
        context.drawImage(
            skin, // Specifies the image, canvas, or video element to use
            0, // The x coordinate where to start clipping
            0, // The y coordinate where to start clipping
            Constant.DialogBox.IMG_BOX_WIDTH, // The width of the clipped image
            Constant.DialogBox.IMG_BOX_HEIGHT, // The height of the clipped image
            dialogBox.x, // The x coordinate where to place the image on the canvas
            dialogBox.y, // The y coordinate where to place the image on the canvas
            dialogBox.w, // The width of the image to use (stretch or reduce the image)
            dialogBox.h // The height of the image to use (stretch or reduce the image)
        );
    }
    
    function renderDialogBorder(dialogBox: IRectangle, context: CanvasRenderingContext2D, skin: HTMLImageElement): void {
        //TODO
        
        context.drawImage(
            skin, // Specifies the image, canvas, or video element to use
            Constant.DialogBox.IMG_BOX_WIDTH, // The x coordinate where to start clipping
            0, // The y coordinate where to start clipping
            Constant.DialogBox.IMG_BORDER_WIDTH, // The width of the clipped image
            Constant.DialogBox.IMG_BORDER_HEIGHT, // The height of the clipped image
            dialogBox.x, // The x coordinate where to place the image on the canvas
            dialogBox.y, // The y coordinate where to place the image on the canvas
            dialogBox.w, // The width of the image to use (stretch or reduce the image)
            dialogBox.h // The height of the image to use (stretch or reduce the image)
        );
    }
    
    function renderDialogText(dialogBox: IRectangle, context: CanvasRenderingContext2D, name: string, message: string, skin: HTMLImageElement): void {
        //TODO
        context.fillStyle = Constant.Color.BLACK;
        context.font = "10px Arial";
        context.fillText(
            message,
            dialogBox.x + 11,
            dialogBox.y);
    }
};