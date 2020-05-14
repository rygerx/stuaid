(function() {
    var iframeID = 'box-upload-widget-iframe-' + Math.random().toString(36).substr(2);

    document.write('<iframe id="' + iframeID + '" src="https://maine.app.box.com/upload-widget/view/ryhv7c7vcwajce421kcnx4kd2ly07hk9/72363521449?height=420&amp;instructions=&amp;title=UMaine+Secure+File+Upload&amp;isDescriptionFieldShown=1&amp;isEmailRequired=1" width="100%" allowTransparency="true" frameborder="0" scrolling="no" style="border:none;"></iframe>');

    window.addEventListener('message', function(event) {
    if (event.data.action === 'resize') {
    document.getElementById(iframeID).height = event.data.height;
    }
    }, false);
}());