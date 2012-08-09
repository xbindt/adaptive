(function(w, d){

    // Build htmlutje
    var html = '<div class="container"><div onclick="javascript:xb_adaptive_close();"';
    html += '<h1>window</h1>';
    html += '</div></div>';

    // Add styles
    var styles = '<style>' +
        '#xb_adaptive .container{font:11px/12px Arial,sans-serif;font-size: 105%;text-align: center;position: fixed; z-index:2147483646; background-color: #fff; padding: 10px; width: 100%; top:0;left:0; border: solid 1px #000; border-width: 1px 0 1px 0; box-shadow: 0 2px 2px 1px rgba(51, 51, 51, 0.35); text-shadow: 1px 1px 1px #CDCDCD;}' +
        '</style>';
    html += styles;

    // Append html to body
    var xb_adaptive = d.createElement('div');
    xb_adaptive.id = 'xb_adaptive';
    xb_adaptive.innerHTML = html;
    d.body.appendChild(xb_adaptive);
alert("test")
    // Close resizer
    w.xb_adaptive_close = function() {
        d.body.removeChild(d.getElementById('xb_adaptive'));
    };

}(window, document));