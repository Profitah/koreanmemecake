
$(".slide").children().css("width", "8em");


(function() {
    var method;
    var noop = function() {};
    var methods = [
      'Rei', '', 'Liz', 'Gaeul', 'Leeseo', 'An Yujin', 'Jang Wonyoung',
      
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
    
        if (!console[method]) {
          console[method] = noop;
        }
      }
$('.slide li').hover(
    function() {
        $(this).css({
            'background-color': 'black',
            'color': 'white'
        });
    },
    function() {
        $(this).css({
            'background-color': '',
            'color': ''
        });
    }
);
    }());