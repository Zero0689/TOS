function decodeBoard() {
    var b64 = atob(document.getElementById('boardB64').value);
    var dt = b64.charCodeAt(2);
    var seq = b64.slice(6, b64.length);
    if (dt == 1)
        WriteBoard(decode1(seq));
    if (dt == 2)
        WriteBoard(decode2(seq));
}
function decode1(seq) {
    var board = new Array(30).fill(0);
    var i = 0;
    do {
        var r = seq.charCodeAt(i++);
        if (r < 1)
            continue;
        var rpt = 0;
        do {
            var a = seq.charCodeAt(i++);
            var b = a & 127;
            var j = 7 * rpt;
            while (b > 0) {
                if (b % 2)
                    board[j] = r;
                j++;
                b = b >> 1;
            }
            rpt++;
        } while (a & 128)
    } while (i < seq.length)return board;
}
function decode2(seq) {
    var c = new Array();
    var i = 0;
    var rpt = 0;
    do {
        var a = seq.charCodeAt(i++);
        var b = a & 127;
        var j = 7 * rpt;
        while (b > 0) {
            if (b % 2 > 0)
                c.push(j);
            j++;
            b = b >> 1;
        }
        rpt++;
    } while (a & 128)var board = new Array(30).fill(0);
    j = 0;
    do {
        var r = seq.charCodeAt(i++);
        if (r < 1)
            continue;
        var l = seq.charCodeAt(i++);
        while (l-- > 0)
            board[c[j++]] = r;
    } while (i < seq.length)return board;
}
function WriteBoard(board) {
    var l = board.length;
    var a = "";
    var b = "";
    var c = 0;
    for (var i = 0; i < l; i++) {
        b += `<td><img src="images/p/${icons[board[i]]}.png"></td>`;
        c++;
        if (c == 6) {
            a = `<tr>${b}</tr>${a}`;
            b = "";
            c = 0;
        }
    }
    document.getElementById('result').innerHTML = a;
}
let icons = new Object();
icons[0] = "p0";
icons[1] = "p1";
icons[2] = "p2";
icons[3] = "p3";
icons[4] = "p4";
icons[5] = "p5";
icons[6] = "p6";
icons[8] = "p8";
icons[9] = "p9";
icons[10] = "p10";
icons[11] = "p11";
icons[12] = "p12";
icons[13] = "p13";
icons[16] = "p16";
icons[15] = "p15";
icons[17] = "p17";
icons[18] = "p18";
icons[19] = "p19";
icons[20] = "p20";
icons[22] = "p22";
icons[23] = "p23";
icons[24] = "p24";
icons[25] = "p25";
icons[26] = "p26";
icons[27] = "p27";
icons[29] = "p29";
icons[30] = "p30";
icons[31] = "p31";
icons[32] = "p32";
icons[33] = "p33";
icons[34] = "p34";
icons[36] = "p36";
icons[37] = "p37";
icons[38] = "p38";
icons[39] = "p39";
icons[40] = "p40";
icons[41] = "p41";
icons[43] = "p43";
icons[44] = "p44";
icons[45] = "p45";
icons[46] = "p46";
icons[47] = "p47";
icons[48] = "p48";
icons[50] = "p50";
icons[51] = "p51";
icons[52] = "p52";
icons[53] = "p53";
icons[54] = "p54";
icons[55] = "p55";
icons[57] = "p57";
icons[58] = "p58";
icons[59] = "p59";
icons[60] = "p60";
icons[61] = "p61";
icons[62] = "p62";
icons[64] = "p64";
icons[65] = "p65";
icons[66] = "p66";
icons[67] = "p67";
icons[68] = "p68";
icons[69] = "p69";
icons[71] = "p71";
icons[72] = "p72";
icons[73] = "p73";
icons[74] = "p74";
icons[75] = "p75";
icons[76] = "p76";
icons[78] = "p78";
icons[79] = "p79";
icons[80] = "p80";
icons[81] = "p81";
icons[82] = "p82";
icons[83] = "p83";
icons[85] = "p85";
icons[86] = "p86";
icons[87] = "p87";
icons[88] = "p88";
icons[89] = "p89";
icons[90] = "p90";
icons[92] = "p92";
icons[93] = "p93";
icons[94] = "p94";
icons[95] = "p95";
icons[96] = "p96";
icons[97] = "p97";
icons[99] = "p99";
icons[100] = "p100";
icons[101] = "p101";
icons[102] = "p102";
icons[103] = "p103";
icons[104] = "p104";
icons[106] = "p106";
icons[107] = "p107";
icons[108] = "p108";
icons[109] = "p109";
icons[110] = "p110";
icons[111] = "p111";