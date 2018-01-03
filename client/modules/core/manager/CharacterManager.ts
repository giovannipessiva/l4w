/// <reference path="../util/Commons.ts" />
/// <reference path="../util/Utils.ts" />
/// <reference path="../model/Character.ts" />
/// <reference path="../manager/MapManager.ts" />

/**
 * Module to handle a Character
 */
namespace CharacterManager {
    
    export function setFrequency(a: ICharacter, frequency: number) {
        switch (parseInt(frequency + "")) {
            case ScaleEnum.VERY_LOW:
                a.frequencyVal = Constant.VERY_LOW_FREQUENCY;
                break;
            case ScaleEnum.LOW:
                a.frequencyVal = Constant.LOW_FREQUENCY;
                break;
            case ScaleEnum.MEDIUM_LOW:
                a.frequencyVal = Constant.MEDIUM_LOW_FREQUENCY;
                break;
            case ScaleEnum.MEDIUM:
                a.frequencyVal = Constant.MEDIUM_FREQUENCY;
                break;
            case ScaleEnum.MEDIUM_HIGH:
                a.frequencyVal = Constant.MEDIUM_HIGH_FREQUENCY;
                break;
            case ScaleEnum.HIGH:
                a.frequencyVal = Constant.HIGH_FREQUENCY;
                break;
            case ScaleEnum.VERY_HIGH:
                a.frequencyVal = Constant.VERY_HIGH_FREQUENCY;
                break;
            default: a.frequencyVal = Constant.MEDIUM_FREQUENCY;
        }
    }

    export function setSpeed(a: ICharacter, speed: number) {
        switch (parseInt(speed + "")) {
            case ScaleEnum.VERY_LOW:
                a.mSpeed = Constant.VERY_LOW_MSPEED;
                break;
            case ScaleEnum.LOW:
                a.mSpeed = Constant.LOW_MSPEED;
                break;
            case ScaleEnum.MEDIUM_LOW:
                a.mSpeed = Constant.MEDIUM_LOW_MSPEED;
                break;
            case ScaleEnum.MEDIUM:
                a.mSpeed = Constant.MEDIUM_MSPEED;
                break;
            case ScaleEnum.MEDIUM_HIGH:
                a.mSpeed = Constant.MEDIUM_HIGH_MSPEED;
                break;
            case ScaleEnum.HIGH:
                a.mSpeed = Constant.HIGH_MSPEED;
                break;
            case ScaleEnum.VERY_HIGH:
                a.mSpeed = Constant.VERY_HIGH_MSPEED;
                break;
            default: a.mSpeed = Constant.MEDIUM_MSPEED;
        }
    }
    
    export function isVisible(a: ICharacter, onTop: boolean) {
        if(a === undefined) {
            console.error("Uninitialized character");
            console.trace();
            return false;    
        }
        // Check if it is the right time to render this Character, based on its zindex
        if(onTop !== (Utils.normalizeZIndex(a.onTop) !== Constant.ZIndex.LV0)) {
            return false
        }
        if (!Utils.isEmpty(a.visible) && !a.visible) {
            return false;
        }
        if (!Utils.isEmpty(a.opacity) && a.opacity === 0) {
            return false;
        }
        if (Utils.isEmpty(a.charaset)) {
            return false;
        }
        return true;
    }

    export function initTransientData(grid: AbstractGrid, a: ICharacter): ICharacter {
        this.setSpeed(a, a.speed);
        this.setFrequency(a, a.frequency);
        return a;
    }

};
