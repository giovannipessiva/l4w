import { gameConfig } from "../../../common/GameConfig";

/**
 * FAQ
 * Q: Why?
 * A: Yes
 */
export namespace CLI {

    let flagGodMode = false;

    const STYLE_LOGO = "background: black; color: #bada55; font-size: large";
    const STYLE_HEADER = "background: black; color: #bada55; font-size: large";
    const STYLE_TITLE = "background: black; color: white; font-weight: bold; font-size: large";
    const STYLE_BODY = "background: black; color: white; font-size: large";

    export function start() {
        if(!gameConfig.ui.enableCLI) {
            return;
        }
        console.log("%c"
            + "                      ____       _____  __      __                      \r\n"
            + "                     |    |     /  |  |/  \\    /  \\                     \r\n"
            + "                     |    |    /   |  |\\   \\/\\/   /                     \r\n"
            + "                     |    |___/    ^   /\\        /                      \r\n"
            + "                     |_______ \\____   |  \\__/\\  /                       \r\n"
            + "                             \\/    |__|       \\/                        "
        , STYLE_LOGO);
        console.log("%c"
            + "Welcome to L4W command line interface! Type 'help' for listing commands ", STYLE_HEADER);
        Object.defineProperty(window, "help", { get: function() {
            console.log("%c"
                + "Accepted commands                                                       \n\r%c"
                + "------------------------------------------------------------------------\n\r"
                + "help    lists accepted commands                                         \n\r"
                + "iddqd   activates God Mode (only Talos supported)                       \n\r"
                + "man     open manual pages                                               \n\r"
                , STYLE_TITLE, STYLE_BODY);
        }});
        Object.defineProperty(window, "iddqd", { get: function() {
            flagGodMode = !flagGodMode;
            let state = flagGodMode? "enabled " : "disabled";
            console.log("%c"
                + "God Mode " + state + "                                                       \n\r"
                , STYLE_BODY);
        }});
        Object.defineProperty(window, "man", { get: function() {
            console.log("%c"
                + "Opening manual pages...                                                 \n\r"
                , STYLE_BODY);

            window.open("https://github.com/giovannipessiva/l4w/wiki",'_blank');
        }});
        Object.defineProperty(window, "su", { get: function() {
            console.log("%c"
                + "I don't think so.                                                       \n\r"
                , STYLE_BODY);

        }});
    }
}
