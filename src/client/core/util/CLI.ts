import { gameConfig } from "../../../common/GameConfig";
import { Resource } from "./Resource";
import { Speaker } from "./Speaker";

/**
 * FAQ
 * Q: Why?
 * A: Yes
 */
export namespace CLI {

    //TODO add command "uname" for getting L4W version from server

    let flagGodMode = false;

    const STYLE_LOGO = "background: black; color: #bada55; font-size: 18px";
    const STYLE_HEADER = "background: black; color: #bada55; font-size: 18px";
    const STYLE_TITLE = "background: black; color: white; font-weight: bold; font-size: 18px"
    const STYLE_BODY = "background: black; color: white; font-size: 18px";
    const STYLE_ASCII_ART = "background: black; color: white; font-size: 9px; line-height: 9px";

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
            , STYLE_TITLE, STYLE_BODY)
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
        console.log("%c\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWWW@WWxxW@W@@@@@@WWWWWWWWWWWMMMMMWWMMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WW@@Wx#+#nW@@@@@@@W@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWWWWWWnMW@@WW@@@WWWWWWWWWWWWMMMMMMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@@WMz+#zx@@@@@W@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWWWWWMxMW@W@@@@@@@WWWWWWWWWWMMMMMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WW@WWWWWW@@@Wn#+#nW@@@@@@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWWWWWMxM@W@@@@@@@@@WWWWWWWWWMMMMWWWMWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@WWWxz+#zM@@@@@@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWW@@@@xxM@@@@@@@@@@@@@WWWWWWWWWWWWMWWWWWWWWWWWWWWW@@@@@WWWWWWWWWWWWWWWWWWWWWW@@@@@@@WWW@@@@@@WWWMn###xW@@@@@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWzzzzzxWnzzzn@@@W#;::izWWWWWzzzzzWxzzzzxWWWWWWW@ni:::*n@WWWMzzzzx@zzzzzWWWWzzzzzzzMWW@Mzzzzx@WWWz##+#M@W@@@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWW@:   :MW.   i@@n.      ,MWWW`   `W+    +WWWWWWW;       :WW@#    *@.   `MWWW`      +@W@z    i@WW@:    n@@@@@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWW@#   .MM`   n@M`        ,WWW`   `W+    +WWWWWW+         i@@#    *@.   `MWWx`      *@W@z    i@@@@:    nW@@@@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWM`  `Mn   .W@*    i;    zWW`   `W+    +WWWWWW,   `+.   ,@@#    *@.   `MW@z       :@W@z    i@@@@:    zW@@@@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWW@,   n*   ;@@:   `Mn    *WW`   `W+    +WWWWWW`   :#*   `W@#    *@.   `MW@#   `   .@W@z    i@WW@;    zW@@@@W@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWW@*   +;   z@@,   `Mn    ;WW`   `W+    +WWWWWW`   :#*   `W@#    *@.   `MW@*   ,`  `WW@z    i@WW@;    zM@@@@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWW@n   i.  `M@@,   `Mn    ;WW`   `W+    +WWWWWW`   .Mn+++#W@#    *@,   `MW@:   ;.   x@@z    i@WW@:    #xW@@@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWWW`  ,`  :@@@,   `Mn    :WW`   `W+    +WWWWWW,    .z@@W@W@#    ,*`   `MW@,   +,   z@@z    i@WW@:    #zW@W@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWW@;      +@@@,   `Mn    :@W`   `W+    +WWWWWW#      ;M@WW@#          `MWW.   #:   +@@z    i@WW@:    #zMW@@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWW@#      M@@@,   `Mn    :@W`   `W+    +WWWWWWW;      .z@W@#          `MWM`   xi   ;@@z    i@WW@;    ##nW@@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWWWn`    ,@@@@,   `Mn    :@W`   `W+    +WWWWWWWW+`     `z@W#          `MWx   `Mi   :@@z    i@WW@;    z#xM@@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWW@Mx,    i@@@@,   `Mn    :@W`   `W+    +WWWWWWWWWx,     .WW#    .;`   `M@z   `W+   .W@z    i@WW@;    z#xM@@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWWxn*    n@@@@,   `Mn    :@W`   `W+    +WWWWWWWWWWW*     x@#    +@,   `M@*   .M#   `M@z    i@W@@;    zznxW@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWWnn#   `M@@@@,   `Mn    ;@W`   `W+    +WWWWWM,```:@i    #@#    *@.   `M@i    ``    x@z    i@WW@:    zznxx@@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWWzx#   `M@@@@,   `Mn    ;@W.   `W+    +WWMMxM.   :Mz    #@#    *@.   `M@:          #@z    i@WW@;    znnxnW@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWWzx#   `M@WW@:   `Mn    i@W.   `W+    +Wxxz+z,   :xz    #@#    *@.   `MW.          +@z    iWMW@:    zxxxnW@W@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWMzM#   `M@@@@;    n+    +W@:   `x;    #M#*;i#;   .xi    zM#    *@.   `MW`   .z#    ;@z     ``;#;    ```#nM@@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWxzW#   `M@W@@n    `    `MWW+    `    `x+:;ii+*    `    `xM#    *@.   `Mx    ,@M`   ,@z       ;#;       #xx@WW@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWnn@#   `M@@@W@i       `#WWWW;       `+*:;;;i*z:        *nx#    *@.   `Mz    :@W`   `@z       ;#;       #nnWW@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWWzx@n::::M@@W@@@z:`  `:n@WWWWW#,`  `:z+;::;i*i*#*,` ``:#n#z#::::#@;::::Wz::::*@@;::::Mn:::::::*@*:::::::znzW@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWMzM@@@@@@@@@W@@W@@WMMW@WWWWWWWWWWxxMM+;;;;iiii;i*#zzznz##+#xWW@@WWW@@@@W@@@@@@WW@@@@@@@@@@@@@@@@@@@@@@MMnz#M@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWxnW@@@@@@@@@@@@WWWWWWWWWWWWWWWWWWWWMn;ii;iiiii;;;ii****++##nxMWWWWWWWWWWWWWWWWWWWWWW@@@@@@W@@W@@@@@@@@MxnzzM@@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWnxW@@@@@@@@@@@@@WWWWWWWWWWWWWWWWWWMx*iiii*iii;iiiii***+++#zzxMMWWWWWWWWWWWWWWWWWWWWWWWWW@@@@@@@@@@@@@@MxnznxW@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWWzx@@@@@@@@@W@@@@@WWWWWWWWWWWWWWWWWM#ii*ii**iiiiiiii***+#++#znxxMMWWWWWWWWWWWWWWWWWWWWWWWWW@@@@@@@@@@@@WxxnnnW@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWMzM@@@@@@@W@@@@@@@WWWWWWWWWWWWWWWWM#;;**+***iii;;iiii*+###++#znxMMWWWWWWWWWWWWWWWWWWWWWWWWW@@@@@@@@@@@@@Mxnzzx@@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWxzM@@@@@@@W@@@@@@@@WWWWWWWWWWWWWWW#;;i*+****i;i;i;i*#####zz##zznxxMMWWWWWWWWWWWWWWWWWWWWWWWW@@@@@@@@@@@@WxnzznW@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWnnW@@@@@@@@@@@@@WW@WWWWWWWWWWWWWWx*;ii+++++++ii;;i*+++#zzzz#++#nnxMMWWWWWWWWWWWWWWWWWWWWWWW@@@@@@@@@@@@@@xnz#zW@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWWzxW@@@@@@@@@@@@@@WWWWWWWWWWWWWWWMz*i*+++##+*++iiii*****#z#z#++#znxMWMWWWWWWWWWWWWWWWWWWWWWWW@@@@@@@@@@@@@Mnz##x@@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWW#MW@@@@@@@@@@@@@@@WWWWWWWWWWWWWWM#***#z##****++ii+++z#*+z##++++#nxMWMWWWWWWWWWWWWWWWWWWWWWWWWWWWW@@@@@@@@Wxn#+nW@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWx#M@@@@@@@@@@@@@@@@@W@WWWWWWWWWWMxz+*+#n##+#z#****+****++###**++#zxxMMWWWWWWWWWWWWWWWWWWWWWWWWWWWW@@@@@@@@Wxxz+nW@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWWWnzW@@@@@@@@@@@@@@@@WW@WWWWWWWWWWMx#i*+#z#+*+*iii***iiii**+++**++#znxxMWWWWWWWWWWWWWWWWWWWWWWWWWWWW@W@@@@@@@MxnzzM@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWW@WWWWWWWWWW#nW@@@@@@@@@@@@@@@@@@@WWWWWWWWWWM#ii*+zz+***iii****i*ii**++#**+##zznxMWWWWWWWWWWWWWWWWWWWWWWWWWWW@W@@@@@@@@Mxnz#M@@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWW@WWWWWWWW@W#xW@@@@@@@@@@@@@@@@@WWWWWWWWWWMz+ii**+zn+****ii***+*i****+##+**#z#zznxMWWWWWWWWWWWWWWWWWWWWWWWWWWWW@@@@@@@@Wxxn#xW@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWW@M+x@@@@@@@@@@@@@@@@@@WWWWWWWWWxn+*i+++#zx#+**iii***+*iii***#z#+*####zzxMWWWWWWWWWWWWWWWWWWWWWWWWW@WW@@WWW@@@@Mxn#zM@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWW@x#M@@@@@@@@@@@@@@@@@WWWWWWWMMxz#+**+#+z#n#+**i;i*ii+*ii***+zzn#++++#z#xMMWMWWW@@@WWWWWWWWWWWWWWWWWWWWWWWW@@@@Wxxn#n@@@@@@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWW@zzWW@@@@@@@@@@@@@@@WWWWWWWWWxn#*ii+++#zzz+#***i++**##ii*++#zzxz+*+++zzzMMMMWxWWWWWWWWWWWWWWWWWWWWWWWWWWW@@@@@WxnnzzxzxMW@@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWWWW#nWW@@@@@@@@@@@@@@@@@WWWWWWMxz*iii*+++#z#+#++*i+nzznz*i+###zzxz#**#++zzxnxMMMWWW@WWWWWWWWWWWWWWWWWWWWWWWW@@@@WMxnnz+*#nnM@@@@@@@@@@\n"
            + "WWWWWWWWWWWWWWWWW@W+xW@@@@@@@@@@@@@@@@@WWWWWWMnz*;iii*#z++##++++*i*#z###*i++####zzn#i##+*#xxxxMWMWW@WWWWWWWWWWWWWWWWWWWW@@@W@@@@WMxnn+*i+nznM@@@@@@@@@\n"
            + "WWWWWWWWW@@@W@@@@@x+MWW@@@@@@@@@@@@@@@@@WWWWMn+**+***#z##+##++++ii****+*ii*++++#zznz++n#+*nxxMMxxWW@@WWWWWWWWWW@WWWWWWWWW@W@@@@WnMMxz***znnznM@@@@@@@@\n"
            + "WWWWWWWWW@@WW@WWWWn#M@W@@@@@@@@@@@@@@@@WWWWWMxz#zzz++#++++##+++*ii**********++++znz##*zz+*zMxxnxWWWW@@@WW@WWWWWWWWWWWWWW@@@W@@WxnMMn+i*#nn#nzxM@@@@@@@\n"
            + "WWWWWWWWWWWWW@W@@W#zWW@@@@@@@@@@@@@@@W@WWWWWWx#nnnz+++*++###+**i*+zxnzzz++***++++z#+#+zn#*nxxxxMWWWWWW@@@WWWWWWWWWWWWWW@@@@W@@Mz*+zn#+#zz###znx@@@@@@@\n"
            + "WWWWWWWWWW@WW@@@@W#nWW@@@@@@@@@@@@@@@W@WWWWWWznMxn#+++*#+###+**i*++##++#+#+*+###+#z+#+znz+nxxMMWWWWWWWWWWWWWWWWWWWWWWWW@@@@@@@M+*##+nz+*+#zznzxM@@@@@@\n"
            + "WWWWWWWWWW@@@@@@@MnxW@@@@@@@@@@@@@@WW@WWWWWWWnnMn#*+#**#+##++**i**+****++++++####+##z+#nn+znxMxMWWW@WWWWWWWWWWWWWWWWWWW@@@@@@@Mn+#+##+*+#zzzzzxx@@@@@@\n"
            + "WWWWWWWWWWWW@@@@WMxxWW@@@@@@@@@@@@@@@@WWWWWWMMnnn*++*+*#+#+++****i*+#z##**++*+#####zz#znxz###nnMWMWWW@WWWW@WWWWWWWWWW@@@@@@@@@MxMzzz+++#z####zxxW@@@@@\n"
            + "WWW@WWWWWWW@WWW@WMxx@@@@@@@@@@@@@@W@@@WWWWWWMMz+i*i*++*#+#+++**+*i**+++*i*+#+*#####nzzznxxnzzznnnnzxW@W@@WWW@WWWWWWWWWWW@@@@@@Wx@WW#*+##+++zzzxxW@@@@@\n"
            + "WWWWWWWWWWW@WW@@WMxM@@@@@@@@@@@@@WW@WWWWMxzxxz+**;;+#++#####+******++++*i*+++#####zx#n#znnnnnnnznnnxMW@@@WWWWWWWWWWWWW@@@@@@@@Wx@@Wn+##+++#zzznxM@@@@@\n"
            + "@@WWWWWWWWWWWWWWnnMW@@@@@@@@@@@@@WW@@WWxz++#++*i;;i****#z+##++******++****+++#z###nMzn##znnnnzzzznnnxWWWWWWWWWWWWWWWWWW@@@@@@@WnW@MMz###zzz##nnxM@@@@@\n"
            + "WWWW@W@@@W@@WxMWxxMWWMWW@@@@W@@@@@@WWxxnzzzz#+*iii+****#z+##+*+***i*******+++#zz##xMnnz#znnnznznzznznnMWW@@WWWWWWWWWWW@@@@@@@@WnW@Wn++###+++#nnxM@@@@@\n"
            + "W@WWWWW@@WMnn+inWMMWxMMnW@@@@@@@@@WMxxnnnnzz#+**+#++**#n####+****ii********++#zzzzxMnnz#nnxxxnnnnznnnzznMMWWWW@WWWWWW@@@@@@@@@WnM@Mnz#+**+##znxxM@@@@@\n"
            + "WWWWWWWWWx+#nnzxWWxzxMznW@@@@@@@@Mxxxnxnnnnzz#+*#z#z++zz##z#++***i**********+#zzzzxMnxnnznxxxxnnznnnnnnnzzxWWW@WWWWWW@@@@@@@@@Wxx@WMnz+*+znnnMxxM@@@@@\n"
            + "WWWWWWWWM+zxxz#zxxnMMnnMW@@@@@@Wxxxnnxnxxnnnn#++#nzn+znn#zz#++**************+##znznxnn#zzxxxxxxnnnnnnnnnnnzMWWWWWWWW@@@@@@@@@@@xn@@WznzzxMMWMMMxM@@@@@\n"
            + "WWWWWWWWzzxMz#++#MWWMMWW@@@@@Wxnnzznnnxxnnnnn#++#xnn+nn##zz#+++*********+****+#zzzzxz#+zznxxxxnnnnxxnnznnnnnMWWWWW@@W@@@@@@@@@@xnW@WWWWMMnnWWMMxM@@@@@\n"
            + "WWWWWW@x#nxnzz+++zW@@@@@@@@Mnz###zxxxMxxxnnxn#zzzxnz+nz##zz#+++*********+****+#zzzznn##zzzxxxMxnnnnnnnnnnxxxxWWWWWW@@@@@@WW@@@@xnW@WW@MnnzzxMMMxW@@@@@\n"
            + "WWWWWWWznxn##nnz#zxW@@@@@Wn#zzznxMxxMxxxxxxxxzxnnxnn#zz#zz#++++****++********++#zzznxnz#nzxnnxMxxxxxnnnnnnxxxxWWWWW@@@@@WWW@@@@xnM@WW@MnxzzxWMMMW@@@@@\n"
            + "WWWWW@Wnxxnz###zz#nMW@@@WnnxxxxMMxMMMMxxxxMMxnxxxxnnzzz#zz##++++****+*********++#zznxxn#znxnnnnxxnxxnnnnxxxxxnnMWWWW@@@@@@WW@@Wnnx@@MWWxxnznMMxMW@@@@@\n"
            + "@@@@@WMnxMxz##++#zMMW@@@MWW@WWWMMWWWWWMxxxWWW@@@WWxzMxxxxxnxnnnnzz+*+*+#znnzznnzzzznxxxxxMWWMxxxxnxxMWWW@@WMxnnnMW@@@@@@@@@@@@Wnnx@@MMWMxnzzMMMMW@@@@@\n"
            + "@@@@@@Mnxxnz###zzznMWWWxx@nnnnxWWMnnnnWxxW@ni:,;*xWMMWzzzzzzzzzzznn*+*#xzzzzzzzxMWxnxxxzzznzzzMMxxMWM+;::;+MWxnnxWni;,:iz@@@WMnnnnW@WMWWxzzzxMMM@@@@@@\n"
            + "@@@@@@xnxxx###znznnMxnnnxW.   :@@*   .@MWW;      `i@xM`          ix***zn`       `iWxnM+       #MxxW#`      `+WnxW;       ,x@nnnnnnW@WMW@MnzzxMMM@@@@@@\n"
            + "@@@@@@xnxxxnz#+znnMWMxxxM@.   `M#*   .@M@;         *WW`          iM***zx          iWxWi       +WxWn`         nMW*         .WxxxxnxM@@MW@MxnnxMMW@@@@@@\n"
            + "W@@W@@Mnxxxxnz#nxnxWWMMxM@.    ##*   .@Wx`   `i`   `MW`          iM+**zx     `    `Mx@:       ;@M@i    ,:    iWW.    ;.    nMMxxnxx@@WW@WMnnxMMW@@@@@@\n"
            + "WWW@W@MnxxxnznxxxxMWWWMMM@.    :#*   .@@+    ;#:    zWiii`    :ii+n+**zx     x+    xx@.       ,@M@,   `MM`   :@M`   ,@#    #WMMxnxxW@W@#@MnxxxM@@@@@@@\n"
            + "@WWWWWMxxxxx#+#zzxWWW@WMW@.    `W*   .@@*    i#:    +@WW@,    zWMn#+++zx     MM`   xMW`   .   .@W@,   `WW`   :@M`   :##    #WMMMnxxW@@@#@WxxnxW@@@@@@@\n"
            + "@@WWWWWxxxxMnzzzzM@@W@WM@@.     #*   .@@;    i#:    +Wnz@,    #n+**+++zx     MM`   xMx    i   `MM@,    zWi;;;*WM`   .Wn;;;;nWMMMnxnW@@##@WMxnxM@@@@@@@\n"
            + "@@WWWWWxMMxxMxMMM@@@@@WM@@.     ;*   .@@;    i#:    iWnz@,    #n++*+*+zx     MM`   xWn    #`   nW@;    .n#@@@WMW`    :M#@@@WMMMMnxxM@@##@WMxxxx@@@@@@@\n"
            + "@@WWWWWxWWMMWWW@@@@@@W@WW@.     `i   .@@;    i#:    iW#z@,    #x++*++*zx     Mz    xW#   `x`   #W@#      ;MWMxM@:     `+@@MMMMMMnxxM@@##WWWxxxxW@@@@@@\n"
            + "@@WW@@MM@@@W@W@@@@@@@W@WW@.      `   .@@;    i#:    i@xx@,    #x++++++zx     ,`   `M@*   `M.   i@WW:      `z@MMWx`      ,M@WMMMxnxxM@##@MMWMxxxW@@@@@@\n"
            + "@@WWWWMW@##@@W@@@@W@@W@WW@.          .@@;    i#:    i@MM@,    #x++++#+zx          .W@;   .W,   ;@MWW;       *@MM@n.      `n@WMMMnxxM@##@MxWMxxxM@@@@@@\n"
            + "@@@WWWMW@###WW@@@@W@@W@@W@.          .@@;    i#:    i@Mx@,    #x++++#+zx         `zMW,   :@:   ,@MMW@#`      #@MMWWi      `MWWMMnxxxW##@xxWMxnnxW@@@@@\n"
            + "@@@WWMW@@##@WW@@@@@@@@@@@@.   :`     .@@;    i#:    i@xx@,    #x#+++##zx     ;ii#MMnW.   ;#i   `WMWW@#M:     ,@MW@@@z.     +@WWMnxxxW##WxxMWxxnxW@@@@@\n"
            + "@@@WWMWW@##@WW@@@@@@@@@@@@.   *,     .@@;    i#:    i@nx@,    #x##++##zx    `MWMnz#zW`   :#:   `M@z++++M*    `WW#+++#M,    :@WWMxxxxW##WxxMWMxnxM@@@@@\n"
            + "@@@WMWWWW##@M@@@@@@@@WW@@@.   +*     .@@;    i#:    *@xx@,    #M##+++#nx     Mz++++nx           z@;    n@.    MW.   .@n    ,@MWWMxMxW##MxxMMWxnnM@@@@@\n"
            + "@@@WMWWWW##WW@@@@@@@@@W@@@.   *n     .@@i    i#:    +@MM@,    #M###+##nx     Mz++++xz           +#;    n@,    MW.   .@M`   ,@MMWWMMMW##WxxxxMMxnMW@@@@\n"
            + "@@@WMWWWW#@WM@@@@@@@@@@@@@.   *@.    .@@*    i#:    #WxM@,    #x##z+##nx     Mz++++M+     `     i#i    x@,    M@.   .@M`   ,@MMMMMMMW##WxxxxMMxxxW@@@@\n"
            + "@@@WMWMWW#@MM@@@@@@@@@@@@@.   +#;    .@@n    .n.    xWxM@,    #x##z+##nx     Mz+#+#Wi    ;W#    ,##    *z`   `W@:   `n*    :@MMMMMMMM##WMxxxxMxxxM@@@@\n"
            + "@@@MWWWW@#@xM@@@@@@@@@@@@@.   +#z    .@WW,         :@WMM@,    #x#zz+##nx     Mz+#++W:    i@x    .@M`         :@W#          #@MMMMMMMM#@WMMxxxxMxxxW@@@\n"
            + "@@@MWWWW@#WnW@@@@@@@@@@@@@.   +#W`   .@MWx.       .MWMMM@,    #x#zz+##nx     Mz+#+#W.    +@x    `W@#`       .xWxW;        :WWWMMMWMMM@@WMMxxxxMxnxW@@@\n"
            + "@@WMWWWW@#WxW@@@@@@@@@@@@@i;;;z@@*;;;i@MMWM*.```.*WWMnMx@*;;;;nx###++#zx;;;;;x#+#+#M;;;;;nWM;;;;;MW@x;.```.*MWxnMW#:````,#@WMMMMWWMMM@@WMMxxxxxxxxM@@@\n"
            + "@@WWWWW@@@Mx@@@@@@@@@@@@@@@@@@@@@@@@@@WMMxW@WMMWWWMxxzxnMWW@WWWz#*#+*++xMMWWMn#++++zxWWW@WxM@WWWWWMMWWWMMWWWMxxxxMWWWMMW@@WWMMMMMMMMM@@WMMxxxMMxxxxW@@\n"
            + "@@WWWWWW@@xx@@@@@@@@@@@@@WMW@WWWW@WWWWMMMnxxxnMxnxxxxznxzzxznnnx+*z#+++*++#+z+#**+i+*##zMxzznnnnxWMxxxxMMxxxxxxxxxxxxMMWWMWMMMMMMMMMMW@WMMMMMMWxxxxW@@\n"
            + "@@MWWWWW@WxM@@@@@@@@@@@@WWMWWWWWWWWWWMMMMMzzMzzxn#xxnzzxnzxznnnx#*z##+#+++z+n##+++i+*#z#xxzznnxnxWMMxxxxxxxxxxxxxxxxxxxWWMMWWMMMMWWMMM@WMMMMMM@xxnxM@@\n"
            + "@@WWWWW@WMnM@@@@@@@@@@@@WWW@@WWWWWWWWMMMMWnnMnzMMzMnnnnzxnxxnxnnn+zz###+#+#+nzz#++**+##nnxnzxnxxnWMMxxxxxxxxxxxxxxxxxxxWWMWWMWWWWWWWMM@WMMMMMMWWxxnxW@\n"
            + "@@WWWWWWxxzM@@@@@@@@@@#@@WW@@WWWWWWWWMMMMWMMMxxMMMMMxMxxxxxMMMMMx#zzzz#zzz#znnnn##**+znxxxMMMMMMMWWMxxxxxxxxxxxxxxxxxxxWWMWWWWWMMWWMMMWWMMMMMMWWxxxxW@\n"
            + "@@MWWW@@WxzM@@@@@@@@@@@@@WW@@WWWWWMMMMMMWMMMMMMMMMMWxxxMxMxxMMMMxnzzzzzzzn##nnxnz####znxxMMxMMMMMMWMMxxxxxxxxxxxxxxxxxMWWMWWWWWMMWMMWMWWMMMMMMWWMxxxM@\n"
            + "@@WWWW@@@MMW@@@@WW@@@@@@WWW@@@WWWWWMMMMWWMMMMMMMMMxWxxxMxMMxxMMWxnzzzz#znnn#znnxz###zznMMMMMMMMMxMWMMxxxxxxxxxxxxxxxxxxWWMWWWWWMMznzzzznzzzzzzzxznz#zM\n"
            , STYLE_ASCII_ART);
    }
}
