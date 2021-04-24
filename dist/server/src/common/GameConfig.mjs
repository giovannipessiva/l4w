import { LanguageEnum } from "./Commons";
export const gameConfig = {
    maps: {
        start: {
            map: "0",
            i: 2,
            j: 4
        }
    },
    hero: {
        name: "Fart",
        charaset: "fart.png"
    },
    ui: {
        lang: LanguageEnum.EN,
        skin: "ld3-webskin1.png",
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
};
