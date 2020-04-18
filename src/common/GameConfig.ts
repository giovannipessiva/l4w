import { LanguageEnum } from "./model/Commons"

//TODO place in a yml file
/**
 * Contains game configuration values.
 * This should be customized according to the needs of the specific game
 */
export const gameConfig = {
    maps: {
        /**
         * Starting position in the game
         */
        start: {
            map: "0",   // id of the map
            i: 0,   // position i of the hero
            j: 0    // position i of the hero
        }
    },
    hero: {
        /**
         * Default name of the hero
         */
        name: "Fart",

        /**
         * Starting charaset of the hero
         * Other charasets can be placed in: /assets/charaset/ 
         */
        charaset: "fart.png"
    },
    ui: {
        /**
         * Default language of the game.
         * Every text string defined using the editors (such as dialog messages) will be considered to be expressed in this language.
         * Additional supported languages can be added by manually creating a customized clone file here: /data/lang/
         * The default language will be used as fallback whenever a string is not available in another supported language;
         * so while default language file should cointains every possible text strings, files for additional languages can omit them.
         * This can also be used for stuff like profanity-free language options 
         */
        lang: LanguageEnum.EN,

        /**
         * Default game UI skin.
         * Other skins can be placed in: /assets/skin/ 
         */
        skin: "ld3-webskin1.png",

        /**
         * Enable or disable L4W command line interface
         */
        enableCLI: true
    }
}