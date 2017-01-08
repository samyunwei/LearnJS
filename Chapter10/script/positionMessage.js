/**
 * Created by ddsss on 2017/1/8.
 */
function positionMessgae() {
    if(!document.getElementById)
    {
        return false;
    }
    if(!document.getElementById("message"))
    {
        return false;
    }
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
}

function moveMessage() {
    if(!document.getElementById)
    {
        return false;
    }
    if(!document.getElementById("message"))
    {
        return false;
    }
    var elem = document.getElementById("message");
    elem.style.left = "200px";
}

addLoadEvent(positionMessgae);
addLoadEvent(moveMessage);


