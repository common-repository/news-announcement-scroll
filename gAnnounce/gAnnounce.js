v_ua = navigator.userAgent;
v_nS4 = document.layers ? 1 : 0;
v_iE = document.all && !window.innerWidth && v_ua.indexOf("MSIE") != -1 ? 1 : 0;
v_oP = v_ua.indexOf("Opera") != -1 && document.clear ? 1 : 0;
v_oP7 = v_oP && document.appendChild ? 1 : 0;
v_oP4 = v_ua.indexOf("Opera") != -1 && !document.clear;
v_kN = v_ua.indexOf("Konqueror") != -1 && parseFloat(v_ua.substring(v_ua.indexOf("Konqueror/") + 10)) < 3.1 ? 1 : 0;
v_count = v_content.length;
v_cur = 1;
v_cl = 0;
v_d = v_slideDirection ? -1 : 1;
v_TIM = 0;
v_fontSize2 = v_nS4 && navigator.platform.toLowerCase().indexOf("win") != -1 ? v_fontSizeNS4 : v_fontSize;
v_canPause = 0;

function v_getOS(a) {
    return v_iE ? document.all[a].style : v_nS4 ? document.layers["v_container"].document.layers[a] : document.getElementById(a).style
};

function v_start() {
    var o, px;
    o = v_getOS("v_1");
    px = v_oP && !v_oP7 || v_nS4 ? 0 : "px";
    if (parseInt(o.top) == v_paddingTop) {
        v_canPause = 1;
        if (v_count > 1) v_TIM = setTimeout("v_canPause=0;v_slide()", v_timeout);
        return
    }
    o.top = (parseInt(o.top) - v_slideStep * v_d) * v_d > v_paddingTop * v_d ? parseInt(o.top) - v_slideStep * v_d + px : v_paddingTop + px;
    if (v_oP && o.visibility.toLowerCase() != "visible") o.visibility = "visible";
    setTimeout("v_start()", v_slideSpeed)
};

function v_slide() {
    var o, o2, px;
    o = v_getOS("v_" + v_cur);
    o2 = v_getOS("v_" + (v_cur < v_count ? v_cur + 1 : 1));
    px = v_oP && !v_oP7 || v_nS4 ? 0 : "px";
    if (parseInt(o2.top) == v_paddingTop) {
        if (v_oP) o.visibility = "hidden";
        o.top = v_height * v_d + px;
        v_cur = v_cur < v_count ? v_cur + 1 : 1;
        v_canPause = 1;
        v_TIM = setTimeout("v_canPause=0;v_slide()", v_timeout);
        return
    }
    if (v_oP && o2.visibility.toLowerCase() != "visible") o2.visibility = "visible";
    if ((parseInt(o2.top) - v_slideStep * v_d) * v_d > v_paddingTop * v_d) {
        o.top = parseInt(o.top) - v_slideStep * v_d + px;
        o2.top = parseInt(o2.top) - v_slideStep * v_d + px
    } else {
        o.top = -v_height * v_d + px;
        o2.top = v_paddingTop + px
    }
    setTimeout("v_slide()", v_slideSpeed)
};
if (v_nS4 || v_iE || v_oP || document.getElementById && !v_kN && !v_oP4) {
    document.write("<style>.vnewsticker,a.vnewsticker{font-family:" + v_font + ";font-size:" + v_fontSize2 + ";color:" + v_fontColor + ";text-decoration:" + v_textDecoration + ";font-weight:" + v_fontWeight + "}a.vnewsticker:hover{font-family:" + v_font + ";font-size:" + v_fontSize2 + ";color:" + v_fontColorHover + ";text-decoration:" + v_textDecorationHover + ";}td.vnewsticker{text-align:" + v_textAlign + ";vertical-align:" + v_textVAlign + ";}</style>");
    v_temp = "<div " + (v_nS4 ? "name" : "id") + "=v_container style='position:" + v_position + ";top:" + v_top + "px;left:" + v_left + "px;width:" + v_width + "px;height:" + v_height + "px;background:" + v_bgColor + ";layer-background" + (v_bgColor.indexOf("url(") == 0 ? "-image" : "-color") + ":" + v_bgColor + ";clip:rect(0," + v_width + "," + v_height + ",0);overflow:hidden'>" + (v_iE ? "<div style='position:absolute;top:0px;left:0px;width:100%;height:100%;clip:rect(0," + v_width + "," + v_height + ",0)'>" : "");
    for (v_i = 0; v_i < v_count; v_i++)
        v_temp += "<div " + (v_nS4 ? "name" : "id") + "=v_" + (v_i + 1) + " style='position:absolute;top:" + (v_height * v_d) + "px;left:" + v_paddingLeft + "px;width:" + (v_width - v_paddingLeft * 2) + "px;height:" + (v_height - v_paddingTop * 2) + "px;clip:rect(0," + (v_width - v_paddingLeft * 2) + "," + (v_height - v_paddingTop * 2) + ",0);overflow:hidden" + (v_oP ? ";visibility:hidden" : "") + ";text-align:" + v_textAlign + "' class=vnewsticker>" + (!v_nS4 ? "<table width=" + (v_width - v_paddingLeft * 2) + " height=" + (v_height - v_paddingTop * 2) + " cellpadding=0 cellspacing=0 border=0><tr><td width=" + (v_width - v_paddingLeft * 2) + " height=" + (v_height - v_paddingTop * 2) + " align=" + v_textAlign + " valign=" + v_textVAlign + " class=vnewsticker>" : "") + (v_content[v_i][0] != "" ? "<a href='" + v_content[v_i][0] + "' target='" + v_content[v_i][2] + "' class=vnewsticker" + (v_pauseOnMouseOver ? " onmouseover='if(v_canPause&&v_count>1){clearTimeout(v_TIM);v_cl=1}' onmouseout='if(v_canPause&&v_count>1&&v_cl)v_TIM=setTimeout(\"v_canPause=0;v_slide();v_cl=0\"," + v_timeout + ")'" : "") + ">" : "<span" + (v_pauseOnMouseOver ? " onmouseover='if(v_canPause&&v_count>1){clearTimeout(v_TIM);v_cl=1}' onmouseout='if(v_canPause&&v_count>1&&v_cl)v_TIM=setTimeout(\"v_canPause=0;v_slide();v_cl=0\"," + v_timeout + ")'" : "") + ">") + v_content[v_i][1] + (v_content[v_i][0] != "" ? "</a>" : "</span>") + (!v_nS4 ? "</td></tr></table>" : "") + "</div>";
    v_temp += (v_iE ? "</div>" : "") + "</div>";
    jQuery('#display_news').html(v_temp);
    setTimeout("v_start()", 1000);
    if (v_nS4) onresize = function() {
        location.reload()
    }
}