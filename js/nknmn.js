//显示ip节点
$(function() {
        $.get("/cdn-cgi/trace",
        function(data) {
                var sip = data.match(/(ip=?)(\S*)/)[2];
                var str = data.match(/(colo=?)(\S*)/)[2];
                var every = [['HKG', 'CloudFlare香港'], ['MFM', 'CloudFlare澳门'], ['BKK', 'CloudFlare曼谷'], ['TPE', 'CloudFlare台北'], ['NRT', 'CloudFlare东京'], ['KIX', 'CloudFlare大阪'], ['ICN', 'CloudFlare仁川'], ['LHR', 'CloudFlare伦敦'], ['SIN', 'CloudFlare新加坡'], ['CDG', 'CloudFlare巴黎'], ['FRA', 'CloudFlare法兰克福'], ['KUL', 'CloudFlare马来西亚'], ['LAX', 'CloudFlare洛杉矶'], ['SJC', 'CloudFlare圣何塞'], ['KBP', 'CloudFlare乌克兰'], ['PRG', 'CloudFlare布拉格']];
                for (var i = 0; i < every.length; i++) {
                        if (str == every[i][0]) {
                                $("#getipnode").append("当前CDN节点:[" + str + "]" + every[i][1] + ",本地IP:" + sip);
                        }
                }
                
        });
})

//console
console.clear();
console.log("%c 希望DDOS的大佬手下留情 %c","background:#24272A; color:#ffffff","","https://blog.cno1.top/");
console.log("%c 希望CC的大佬手下留情 %c","background:#24272A; color:#ffffff","","https://blog.cno1.top/");
console.log("%c 希望扒站的大佬手下留情 %c","background:#24272A; color:#ffffff","","https://blog.cno1.top/");
console.log('%c 页面加载完毕消耗了'+Math.round(performance.now()*100)/100+'ms','background:#fff;color:#333;text-shadow:0 0 2px #eee,0 0 3px #eee,0 0 3px #eee,0 0 2px #eee,0 0 3px #eee;');
