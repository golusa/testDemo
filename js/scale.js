define(['drag'],function(drag) {
    var scale = function(node1, node2){
        node2.onmousedown = function(ev){
            var e = ev || window.event;
            var x = e.clientX;
            var y = e.clientY;
            var w = node1.offsetWidth;
            var h = node1.offsetHeight;
            document.onmousemove = function(ev){ 
                var e = ev || window.event;
                var l = e.clientX - x + w;
                var t = e.clientY - y + h;
                l = drag.limit(l, 200, 600);
                t = drag.limit(t, 200, 600);
                node1.style.width = l + 'px';
                node1.style.height = t +'px';
            }
            document.onmouseup = function(){
                document.onmousemove = null;
            }
        }
    }
    return {
        scale:scale
    }
});