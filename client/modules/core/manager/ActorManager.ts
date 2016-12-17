/// <reference path="../util/Commons.ts" />
/// <reference path="../model/Actor.ts" />

/**
 * Module to handle an actor
 */
namespace ActorManager {

    export function update(event: IActor, time: number) {
        //TODO
    }

    export function render(a: IActor, x: number, y: number, context: CanvasRenderingContext2D, grid: DynamicGrid) {
        let image: HTMLImageElement;
        if(!Utils.isEmpty(a.charaset)) {
            image = Resource.loadImageFromCache(a.charaset, Resource.TypeEnum.CHAR); 
        } else if (!Utils.isEmpty(a.gid)) {
            //TODO gestisci actor con grafica da tile
        }
    
        if(Utils.isEmpty(image)){
            image = Resource.loadDefaultImage(Resource.TypeEnum.CHAR);     
        }

        if(!Utils.isEmpty(image)){       
            let charaWidth: number = Math.floor(image.width / 4);
            let charaHeight: number = Math.floor(image.height / 4);

			//TODO calcola l'animazione
            let charaX: number = 0;
            let charaY: number = 0;
            
            x += Math.floor((grid.cellW - charaWidth) / 2); //In the middle
            y += Math.floor(- charaHeight + charaWidth * 2 / 3); //Foots on the ground
            
            let globalAlpha = context.globalAlpha;
            if (!Utils.isEmpty(a.opacity)) {
                context.globalAlpha = a.opacity;
            }
 
            context.drawImage(
                image, //     Specifies the image, canvas, or video element to use     
                charaX, //  Optional. The x coordinate where to start clipping  
                charaY, //  Optional. The y coordinate where to start clipping  
                charaWidth, //  Optional. The width of the clipped image    
                charaHeight, //     Optional. The height of the clipped image   
                x, //   The x coordinate where to place the image on the canvas     
                y, //   The y coordinate where to place the image on the canvas
                charaWidth,
                charaHeight
            );
            
            context.globalAlpha = globalAlpha;
        }
    }

    export function getNewActor(): IActor {
        let actor: IActor = {
            id: 0,
            name: "",
            i: 0,
            j: 0
        };
        return actor;
    }
    
    export function getNewHero(): IActor {
        let actor: IActor = getNewActor();
        actor.name = "Hero";
        return actor;
    }
    
    export function isVisible(e: IActor, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        if(!Utils.isEmpty(e.visible) && !e.visible) {
            return false;    
        }
        if(!Utils.isEmpty(e.opacity) && e.opacity === 0) {
            return false;    
        }
        return e.i >= minColumn && e.i <= maxColumn && e.j >= minRow && e.j <=maxRow;
    }

};
