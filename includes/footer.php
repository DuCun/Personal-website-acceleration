<?php 
/**
 * .______    __    __       ___        ______
 * |   _  \  |  |  |  |     /   \      /  __  \
 * |  |_)  | |  |__|  |    /  ^  \    |  |  |  |
 * |   _  <  |   __   |   /  /_\  \   |  |  |  |
 * |  |_)  | |  |  |  |  /  _____  \  |  `--'  |
 * |______/  |__|  |__| /__/     \__\  \______/
 * 
 * Footer
 * 
 * @author Bhao
 * @link https://dwd.moe/
 * @version 1.0.5
 */

if (!defined('__TYPECHO_ROOT_DIR__')) exit;
?>
<div onclick="tocOverlay()" class="toc-overlay"></div>
<button class="mdui-fab mdui-fab-fixed mdui-ripple top mdui-color-theme-accent"><i class="mdui-icon material-icons">arrow_upward</i></button>
<footer class="footer">
  <center><?php Footer(); ?></center>
<div>
<center>
<a style="color: rgb(0, 0, 0);font-weight: 900;">本站已运行</a>
<font color="#38B0DE"><?php getBuildTime(); ?></font>
<div><span><small style="font-weight: 900;" id="getipnode"></small ></span></div>
<script type="text/javascript">document.write(unescape("%3Cspan style='display:none;' id='cnzz_stat_icon_1278827552'%3E%3C/span%3E%3Cscript src='https://s4.cnzz.com/z_stat.php%3Fid%3D1278827552' type='text/javascript'%3E%3C/script%3E"));</script>
</center>
</div>
</footer>
<?php //保留版权就是对作者最大的支持，若删除/修改版权则视为侵权，将停止主题相关服务 ?>
<script src="<?php staticFiles('js/mdui.min.js') ?>"></script>
<script src="<?php staticFiles('js/jquery.min.js') ?>"></script>
<script src="<?php staticFiles('js/jquery.pjax.min.js') ?>"></script>
<script src="<?php staticFiles('js/jquery.ias.min.js') ?>"></script>
<script src="<?php staticFiles('js/jquery.lazyload.min.js') ?>"></script>
<script src="<?php staticFiles('js/jquery.fancybox.min.js') ?>"></script>
<script src="<?php staticFiles('js/highlight.min.js') ?>"></script>
<script src="<?php staticFiles('js/cuckoo.min.js') ?>"></script>
<script src="<?php staticFiles('js/qrcode.min.js') ?>"></script>
<script src="//cdn.jsdelivr.net/gh/DuCun/Personal-website-acceleration@1.0.5/js/nknmn.js"></script>
<?php otherJs();$this->footer();otherPjax(); ?>
<script>
document.body.addEventListener('copy', function (e) {
    if (window.getSelection().toString() && window.getSelection().toString().length > 42) {
        setClipboardText(e);
        alert('商业转载请联系作者获得授权，非商业转载请注明出处，谢谢合作。');
    }
}); 
function setClipboardText(event) {
    var clipboardData = event.clipboardData || window.clipboardData;
    if (clipboardData) {
        event.preventDefault();
        var htmlData = ''
            + '著作权归作者所有。<br>'
            + '商业转载请联系作者获得授权，非商业转载请注明出处。<br>'
            + '作者：<?php $this->author() ?><br>'
            + '链接：' + window.location.href + '<br>'
            + '来源：<?php $this->options->siteUrl(); ?><br><br>'
            + window.getSelection().toString();
        var textData = ''
            + '著作权归作者所有。\n'
            + '商业转载请联系作者获得授权，非商业转载请注明出处。\n'
            + '作者：<?php $this->author() ?>\n'
            + '链接：' + window.location.href + '\n'
            + '来源：<?php $this->options->siteUrl(); ?>\n\n'
            + window.getSelection().toString();
 
        clipboardData.setData('text/html', htmlData);
        clipboardData.setData('text/plain',textData);
    }
}
</script>
</body>
</html>