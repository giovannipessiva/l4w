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

    export function show(scene: DynamicScene, name: string, messageId: number, language: LanguageEnum, skin: string, callback: IEmptyCallback) {
        let message: string | undefined;
        let image: HTMLImageElement;
        loadString(messageId, language, function(msg?: string) {
            message = msg;
            if(message !== undefined && image !== undefined) {
                showDialog(scene, name, message, image, callback);   
            }
        });
        Resource.load(skin, Resource.TypeEnum.SKIN, function(img) {
            image = <HTMLImageElement> img;
            if(message !== undefined) {
                showDialog(scene, name, message, image, callback);
            }  
        });
    }
    
    function showDialog(scene: DynamicScene, name: string, message: string, skin: HTMLImageElement, callback: ()=>void): void {     
        scene.showSimpleDialog(name, message, skin, callback);
    }
    
    export function renderDialog(grid: DynamicGrid, context: CanvasRenderingContext2D, name: string, message: string, skin: HTMLImageElement): void {
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
        //TODO manage facesets
        //dlgFace.style.backgroundImage = "url('/assets/faceset/" + face + "')";
        dlgFace.style.display = "none";
        dlgName.innerText = name;
        dlgArea.innerText = message;

        //let dialogBox: IRectangle = grid.getDialogBoxSize();
        //let translation: IPoint = grid.getCurrentTranslation();
        //renderDialogBox(dialogBox, translation, context, skin);
        //renderDialogBorder(dialogBox, translation, context, skin);
        //renderDialogText(dialogBox, context, name, message, skin);
    }
    
    /**
     * Draw the dialog background
     */
    function renderDialogBox(dialogBox: IRectangle, translation: IPoint, context: CanvasRenderingContext2D, skin: HTMLImageElement): void {
        context.drawImage(
            skin, // Specifies the image, canvas, or video element to use
            Constant.DialogBox.IMG_BOX_X_OFFSET, // The x coordinate where to start clipping
            Constant.DialogBox.IMG_BOX_Y_OFFSET, // The y coordinate where to start clipping
            Constant.DialogBox.IMG_BOX_WIDTH, // The width of the clipped image
            Constant.DialogBox.IMG_BOX_HEIGHT, // The height of the clipped image
            dialogBox.x + translation.x, // The x coordinate where to place the image on the canvas
            dialogBox.y + translation.y, // The y coordinate where to place the image on the canvas
            dialogBox.w, // The width of the image to use (stretch or reduce the image)
            dialogBox.h // The height of the image to use (stretch or reduce the image)
        );
    }
    
    function renderDialogBorder(dialogBox: IRectangle, translation: IPoint, context: CanvasRenderingContext2D, skin: HTMLImageElement): void {
        //TODO

        // Top border
        context.drawImage(
            skin, // Specifies the image, canvas, or video element to use
            Constant.DialogBox.IMG_BORDER_X_OFFSET + Constant.DialogBox.IMG_BORDER_CELL_SIZE, // The x coordinate where to start clipping
            Constant.DialogBox.IMG_BORDER_Y_OFFSET, // The y coordinate where to start clipping
            Constant.DialogBox.IMG_BORDER_CELL_SIZE * 2, // The width of the clipped image
            Constant.DialogBox.IMG_BORDER_CELL_SIZE, // The height of the clipped image
            dialogBox.x + translation.x, // The x coordinate where to place the image on the canvas
            dialogBox.y + translation.y - Constant.DialogBox.BORDER_OFFSET, // The y coordinate where to place the image on the canvas
            dialogBox.w, // The width of the image to use (stretch or reduce the image)
            Constant.DialogBox.IMG_BORDER_CELL_SIZE // The height of the image to use (stretch or reduce the image)
        );

        // Bottom border
        context.drawImage(
            skin, // Specifies the image, canvas, or video element to use
            Constant.DialogBox.IMG_BORDER_X_OFFSET + Constant.DialogBox.IMG_BORDER_CELL_SIZE, // The x coordinate where to start clipping
            Constant.DialogBox.IMG_BORDER_Y_OFFSET + Constant.DialogBox.IMG_BORDER_CELL_SIZE * 3, // The y coordinate where to start clipping
            Constant.DialogBox.IMG_BORDER_CELL_SIZE * 2, // The width of the clipped image
            Constant.DialogBox.IMG_BORDER_CELL_SIZE, // The height of the clipped image
            dialogBox.x + translation.x, // The x coordinate where to place the image on the canvas
            dialogBox.y + translation.y - Constant.DialogBox.IMG_BORDER_CELL_SIZE + Constant.DialogBox.BORDER_OFFSET, // The y coordinate where to place the image on the canvas
            dialogBox.w, // The width of the image to use (stretch or reduce the image)
            Constant.DialogBox.IMG_BORDER_CELL_SIZE // The height of the image to use (stretch or reduce the image)
        );

        // Left border
        context.drawImage(
            skin, // Specifies the image, canvas, or video element to use
            Constant.DialogBox.IMG_BORDER_X_OFFSET, // The x coordinate where to start clipping
            Constant.DialogBox.IMG_BORDER_Y_OFFSET + Constant.DialogBox.IMG_BORDER_CELL_SIZE, // The y coordinate where to start clipping
            Constant.DialogBox.IMG_BORDER_CELL_SIZE, // The width of the clipped image
            Constant.DialogBox.IMG_BORDER_CELL_SIZE * 2, // The height of the clipped image
            dialogBox.x + translation.x - Constant.DialogBox.BORDER_OFFSET, // The x coordinate where to place the image on the canvas
            dialogBox.y + translation.y, // The y coordinate where to place the image on the canvas
            Constant.DialogBox.IMG_BORDER_CELL_SIZE, // The width of the image to use (stretch or reduce the image)
            dialogBox.h // The height of the image to use (stretch or reduce the image)
        );
                
        // Right Border
        context.drawImage(
            skin, // Specifies the image, canvas, or video element to use
            Constant.DialogBox.IMG_BORDER_X_OFFSET + Constant.DialogBox.IMG_BORDER_CELL_SIZE * 3, // The x coordinate where to start clipping
            Constant.DialogBox.IMG_BORDER_Y_OFFSET + Constant.DialogBox.IMG_BORDER_CELL_SIZE, // The y coordinate where to start clipping
            Constant.DialogBox.IMG_BORDER_CELL_SIZE, // The width of the clipped image
            Constant.DialogBox.IMG_BORDER_CELL_SIZE * 2, // The height of the clipped image
            dialogBox.x + translation.x - Constant.DialogBox.IMG_BORDER_CELL_SIZE, // The x coordinate where to place the image on the canvas
            dialogBox.y + translation.y, // The y coordinate where to place the image on the canvas
            Constant.DialogBox.IMG_BORDER_CELL_SIZE + Constant.DialogBox.BORDER_OFFSET, // The width of the image to use (stretch or reduce the image)
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