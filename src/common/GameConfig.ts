import { LanguageEnum } from "./Commons"

//TODO migrate here values from l4w.properties
/**
 * Contains game configuration variables.
 * This should be customized according to the needs of the specific game.
 * 
 * Having these constant values in the code instead of a resource file
 * is preferrable in order to enable compiler optimizations.
 * (Is it? Perhaps... may be true for numerical values...)
 * 
 * This is ok as long as there is no need for:
 * - different profiles for the same fork/branch
 * - changing config wihtout running the build
 * - conformity to universally recognized best practices
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
         * This can also be used for stuff like: profanity-free language options 
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
    },
    services: {
        facebook: {
            url: "https://graph.facebook.com",
            applicationId: "1885551381575204"
        },
        google: {
            oauth: {
                url: "https://www.googleapis.com",
                applicationId: "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com"
            },
            recaptcha: {
                url: "www.google.com",
            }
        },
        github: {
            url: "api.github.com"
        }
    }
}