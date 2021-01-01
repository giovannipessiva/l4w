import { LanguageEnum } from "./Commons"

//TODO migrate values from l4w.properties
/**
 * Contains game configuration variables.
 * This should be customized according to the needs of the specific game.
 * 
 * Having these constant values in the code instead of a resource file
 * is preferrable in order to enable compiler optimizations.
 */
export const gameConfig = {
    maps: {
        /**
         * Starting position in the game
         */
        start: {
            map: "0",   // id of the map
            i: 2,   // position i of the hero
            j: 4    // position i of the hero
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