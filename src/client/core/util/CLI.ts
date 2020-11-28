import { gameConfig } from "../../../common/GameConfig";
import { Resource } from "./Resource";
import { Speaker } from "./Speaker";

/**
 * FAQ
 * Q: Why?
 * A: Yes
 */
export namespace CLI {

    export let flagGodMode = false; //TODO support multiple deities

    const STYLE_LOGO = "background: black; color: #bada55; font-size: 18px";
    const STYLE_HEADER = "background: black; color: #bada55; font-size: 18px";
    const STYLE_TITLE = "background: black; color: white; font-weight: bold; font-size: 18px"
    const STYLE_BODY = "background: black; color: white; font-size: 18px";
    const STYLE_ASCII_ART = "background: black; color: bada55; font-size: 12px";
    const ASCII_ART_GANDALF = "%c\n" +
        "                                                         █                             █                         \n" +
        "                  ╓▄▄                                    ██                           ▐█                         \n" +
        "                  ████                                  ▐██                           ▐█                         \n" +
        "                  ████▌                                 ████                          ▐█                         \n" +
        "                   ▀██                                  ████                          ▐█                         \n" +
        "                    ▐█                                 ▐█████                          █                         \n" +
        "                     █                                 ██████                          █                         \n" +
        "                     ██                            ▄▄▄████████▄▄▄▄▄                    █                         \n" +
        "                      █                  ▄▄▄▄█████████████████████████████▄▄          ▐█▄                        \n" +
        "                      █▌                   ╙▀▀▀██████████████████████▀▀▀▀           ╙▀███▀▀                      \n" +
        "                      ▐█                            ▐███████████                 ▄▄ ╔████                        \n" +
        "                      ████▄ ██▄▄▄,                  █████▀▀▀████             ▄█████▌▐████                        \n" +
        "                      █████▌█████████▄▄▄,     ▄▄▄▄▄▄███ ╙▀▀▀ ████▄▄▄▄▄▄▄▄██████████▌  ▐█                         \n" +
        "                      ▀███▀  █████████████████████████        █████████████████████▌   ╙                         \n" +
        "                        █▌   ▀███████████████████████▌        ▐█████████████████████                             \n" +
        "                        ▐█    ███████████████████████         ▐█████████████████████                             \n" +
        "                         █    ███████████████████████         ▐████      ▀██████████▄                            \n" +
        "                         ██   ██████████▀▀▀    ▀█████▌        ▐████          ▀██████▌                            \n" +
        "                         ▐█   ▀▀▀▀▀              █████        █████                                              \n" +
        "                          █▌                    ▐█████▌      ▄█████▌                                             \n" +
        "                          ▐█                    ████████,  ,████████                                             \n" +
        "                           █                   ▐████████████████████▌                                            \n" +
        "                           ██                  ██████████████████████                                            \n" +
        "                           ▐█                 ▐██████████████████████▌                                           \n" +
        "                            █▌                ████████████████████████                                           \n" +
        "                            ▐█               ]████████████████████████▌                                          \n" +
        "                             █               ██████████████████████████                                          \n" +
        "                             ██             ]██████████████████████████▌                                         \n" +
        "                             ▐█             ████████████████████████████                                         \n" +
        "                              █▌           ]████████████████████████████▌                                        \n" +
        "                              ▐█           ██████████████████████████████                                        \n" +
        "                               █          ]██████████████████████████████▌                                       \n" +
        "                               █▌         ████████████████████████████████                                       \n" +
        "                               ▐█        ]████████████████████████████████▄                                      \n" +
        "                                '        ██████████████████████████████████                                      \n" +
        "                                        ▀▀▀▀▀▀▀▀██████▀▀▀▀▀▀███████▀▀▀▀▀▀▀                                       \n" +
        "                                                ▀▀▀▀▀         ▀▀▀▀▀                                              ";

    export function start() {
        if(!gameConfig.ui.enableCLI) {
            return;
        }
        console.log("%c"
            + "                       ____       _____  __      __                        \n"
            + "                      |    |     /  |  |/  \\    /  \\                       \n"
            + "                      |    |    /   |  |\\   \\/\\/   /                       \n"
            + "                      |    |___/    ^   /\\        /                        \n"
            + "                      |_______ \\____   |  \\__/\\  /                         \n"
            + "                              \\/    |__|       \\/                          \n%c"
            + "Welcome to L4W command line interface! Type 'help' for listing commands    ", STYLE_LOGO, STYLE_HEADER);
        
        // Hacky way to invoke methods without using parentheses
        Object.defineProperty(window, "help", { get: function() {
            setTimeout(help, 0);
        }});
        Object.defineProperty(window, "iddqd", { get: function() {
            setTimeout(iddqd, 0);
        }});
        Object.defineProperty(window, "man", { get: function() {
            setTimeout(man, 0);
        }});
        Object.defineProperty(window, "su", { get: function() {
            setTimeout(su, 0);
        }});
        Object.defineProperty(window, "uname", { get: function() {
            setTimeout(uname, 0);
        }});
    }

    function help(): void {
        console.log("%c"
            + "Accepted commands                                                          \n%c"
            + "---------------------------------------------------------------------------\n"
            + "help    lists accepted commands                                            \n"
            + "iddqd   activates God Mode (only Talos supported)                          \n"
            + "man     opens manual pages                                                 \n"
            + "uname   show system info                                                   \n"
        , STYLE_TITLE, STYLE_BODY);
    }

    function iddqd(): void {
        flagGodMode = !flagGodMode;
        let state = flagGodMode? "enabled " : "disabled";
        console.log("%c"
            + "God Mode " + state + "                                                          \n"
        , STYLE_BODY);
    }

    function man(): void {
        console.log("%c"
            + "Opening manual pages...                                                    \n"
        , STYLE_BODY);
        window.open("https://github.com/giovannipessiva/l4w/wiki","_blank");
    }

    function uname(): void {
        Resource.sendGETRequest("/v", function(response?: string) {
            response = response?.padEnd(20);
            console.log("%c"
                + response +  "                                                       \n"
            , STYLE_BODY);
        })
    }

    function su(): void {
        Speaker.gandalf();
        console.warn(ASCII_ART_GANDALF, STYLE_ASCII_ART);
    }
}
