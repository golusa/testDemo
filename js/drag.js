define(function(node){
    var drag = function(node){
        node.onmousedown = function(ev){
            var e = ev || window.event;
            var offsetX = e.clientX - node.offsetLeft;
            var offsetY = e.clientY - node.offsetTop;
            document.onmousemove = function(ev){
                var e = ev || window.event;
                var l = e.clientX - offsetX;
                var t = e.clientY - offsetY;
                var windowWith = document.documentElement.clientWidth || document.body.clientWidth;
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                l = limit(l, 0, windowWith - node.offsetWidth);
                t = limit(t, 0, windowHeight - node.offsetHeight);
                node.style.left = l + 'px';
                node.style.top = t + 'px';
            }
            document.onmouseup = function(){
                document.onmousemove =  null;
            }
        }
    };
    var limit = function(iCur, iMin, iMax){
        if(iCur >= iMax){
            return iMax;
        }else if(iCur <= iMin){
            return iMin;
        }else{
            return iCur;
        }
    }
    return {
        drag:drag,
        limit:limit
    }
});