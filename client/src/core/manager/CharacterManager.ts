import { Constant } from "../util/Constant"
import { Utils } from "../util/Utils"
import { ICharacter } from "../../../../common/src/model/Character"
import { ScaleEnum } from "../../../../common/src/model/Commons"
import { AbstractGrid } from "../AbstractGrid"

/**
 * Module to handle a Character
 */
export namespace CharacterManager {
    
    export function setFrequency(c: ICharacter, frequency?: number) {
        switch (parseInt(frequency + "")) {
            case ScaleEnum.VERY_LOW:
                c.frequencyVal = Constant.VERY_LOW_FREQUENCY;
                break;
            case ScaleEnum.LOW:
                c.frequencyVal = Constant.LOW_FREQUENCY;
                break;
            case ScaleEnum.MEDIUM_LOW:
                c.frequencyVal = Constant.MEDIUM_LOW_FREQUENCY;
                break;
            case ScaleEnum.MEDIUM:
                c.frequencyVal = Constant.MEDIUM_FREQUENCY;
                break;
            case ScaleEnum.MEDIUM_HIGH:
                c.frequencyVal = Constant.MEDIUM_HIGH_FREQUENCY;
                break;
            case ScaleEnum.HIGH:
                c.frequencyVal = Constant.HIGH_FREQUENCY;
                break;
            case ScaleEnum.VERY_HIGH:
                c.frequencyVal = Constant.VERY_HIGH_FREQUENCY;
                break;
            default: c.frequencyVal = Constant.MEDIUM_FREQUENCY;
        }
    }

    export function setSpeed(c: ICharacter, speed?: number) {
        switch (parseInt(speed + "")) {
            case ScaleEnum.VERY_LOW:
                c.mSpeed = Constant.VERY_LOW_MSPEED;
                break;
            case ScaleEnum.LOW:
                c.mSpeed = Constant.LOW_MSPEED;
                break;
            case ScaleEnum.MEDIUM_LOW:
                c.mSpeed = Constant.MEDIUM_LOW_MSPEED;
                break;
            case ScaleEnum.MEDIUM:
                c.mSpeed = Constant.MEDIUM_MSPEED;
                break;
            case ScaleEnum.MEDIUM_HIGH:
                c.mSpeed = Constant.MEDIUM_HIGH_MSPEED;
                break;
            case ScaleEnum.HIGH:
                c.mSpeed = Constant.HIGH_MSPEED;
                break;
            case ScaleEnum.VERY_HIGH:
                c.mSpeed = Constant.VERY_HIGH_MSPEED;
                break;
            default: c.mSpeed = Constant.MEDIUM_MSPEED;
        }
    }
    
    export function isVisible(c: ICharacter | undefined, onTop: boolean) {
        if(c === undefined) {
            return false;    
        }
        // Check if it is the right time to render this Character, based on its zindex
        if(onTop !== (Utils.normalizeZIndex(c.onTop) !== Constant.ZIndex.LV0)) {
            return false
        }
        if (!Utils.isEmpty(c.visible) && !c.visible) {
            return false;
        }
        if (!Utils.isEmpty(c.opacity) && c.opacity === 0) {
            return false;
        }
        if (Utils.isEmpty(c.charaset)) {
            return false;
        }
        return true;
    }
    
    export function getNewCharacter(): ICharacter {
        let c: ICharacter = {
           charaset: ""
        };
        return c;
    };
     
    export function initTransientData(grid: AbstractGrid, c?: ICharacter): ICharacter {
        if(c === undefined) {
            c = getNewCharacter();
        }
        setSpeed(c, c.speed);
        setFrequency(c, c.frequency);
        return c;
    }

};
