//ban掉weixin
window.onload = function () {
    if (noweixin()) {}
}

function noweixin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        $("#html").empty();
        document.getElementById("html").innerHTML =
            "<head><meta charset='UTF-8'><title>请使用浏览器打开</title><meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' name='viewport'/><meta content='yes' name='apple-mobile-web-app-capable'/><meta content='black' name='apple-mobile-web-app-status-bar-style'/><meta name='format-detection' content='telephone=no'/><meta content='false' name='twcClient' id='twcClient'/><meta name='aplus-touch' content='1'/><script language=javascript>  window.onload = function(){ if(noweixin()){ }}function noweixin(){ var ua = window.navigator.userAgent.toLowerCase(); if(ua.match(/MicroMessenger/i) == 'micromessenger'){ }else{ window.location.href='https://www.cno1.top';} } </script><style>body,html{width:100%;height:100%}*{margin:0;padding:0}body{background-color:#fff}.top-bar-guidance{font-size:15px;color:#fff;height:70%;line-height:1.8;padding-left:20px;padding-top:20px;background:url(https://cdn.u1.huluxia.com/g4/M02/1C/A4/rBAAdl620OaAC9uTAAB7Z9ucnyQ025.png) center top/contain no-repeat}.top-bar-guidance .icon-safari{width:60px;height:50px;vertical-align:middle;margin:0 .2em}.app-download-tip{margin:0 auto;width:290px;text-align:center;font-size:15px;color:#2466f4;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAcAQMAAACak0ePAAAABlBMVEUAAAAdYfh+GakkAAAAAXRSTlMAQObYZgAAAA5JREFUCNdjwA8acEkAAAy4AIE4hQq/AAAAAElFTkSuQmCC) left center/auto 15px repeat-x}.app-download-tip .guidance-desc{background-color:#fff;padding:0 5px}.app-download-btn{display:block;width:214px;height:40px;line-height:40px;margin:18px auto 0 auto;text-align:center;font-size:18px;color:#2466f4;border-radius:20px;border:.5px #2466f4 solid;text-decoration:none}</style></head><body><div class='top-bar-guidance'><p>点击右上角<img src='https://cdn.u1.huluxia.com/g4/M02/1C/A3/rBAAdl620KqAHSp6AAAXnrC-sQA125.png' class='icon-safari' /> <span id='openm'>浏览器打开</span></p><p>可以继续浏览本站哦~</p></div><div class='app-download-tip'><span class='guidance-desc'>您也可以复制本站网址，到其它浏览器打开</span></div></body>";
    } else {}
}

//标题变化
    /*自动刷新页面，避免无法访问*/
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
                        document.title = 'www.cno1.top';
            clearTimeout(titleTime);
                    }
        else {
                        document.title = '网站已自动恢复啦q(≧▽≦q)';
            titleTime = setTimeout(function() {
                document.title = OriginTitile;
            }, 3000);
                    }
    });

//防反代
if (window["\x6c\x6f\x63\x61\x74\x69\x6f\x6e"]["\x68\x6f\x73\x74"] != 'www.cno1.top') {
    window["\x6c\x6f\x63\x61\x74\x69\x6f\x6e"]["\x68\x72\x65\x66"] = 'https://' + 'www.cno1.top/';
}
