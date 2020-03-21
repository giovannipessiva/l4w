import { LanguageEnum } from "./model/Commons"

export const gameConfig = {
    maps: {
        start: {
            map: "0",   // id of the map where game will start
            i: 0,   // position i of the hero when the game will start
            j: 0    // position i of the hero when the game will start
        }
    },
    hero: {
        name: "Fart",   // default name of the hero
        charaset: "fart.png"    // starting charaset of the hero
    },
    ui: {
        lang: LanguageEnum.EN,  // default language
        skin: "ld3-webskin1.png"    // default game UI skin
    }
}