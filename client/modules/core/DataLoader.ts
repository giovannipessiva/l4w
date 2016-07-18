///<reference path="util/Resource.ts" />
///<reference path="model/Map.ts" />

/**
 * Module to manage data assets loading and synchronization
 */
namespace DataLoader {

    export function loadEvent(): IEvent {
        //TODO
        return null;
    };

    export function loadHero(): IEvent {
        //TODO
        return null;
    };

    export function loadMap(name: string, callback) {
        Resource.load(name, Resource.TypeEnum.MAP, function(response: string) {
            console.log(response);
            if (!Utils.isEmpty(response)) {
                var map: IMap;
                map = JSON.parse(response);
            }
        });
    };

    export function saveMap(map: IMap, callback: IBooleanCallback) {
        Resource.save(JSON.stringify(map), Resource.TypeEnum.MAP, callback);
    };
};