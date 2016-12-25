/**
 * Created by sam on 2016/12/20.
 */

function prepareGallery() {
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    if(!document.getElementById("imageGallery"))
    {
        return false;
    }
    var gallery = document.getElementById("imageGallery");
    var links = gallery.getElementsByTagName("a");
    for(i = 0;i<links.length;i++)
    {
        links[i].onclick = function () {
            showPic(links[i]);
            return false;
        }
    }
}


function addLoadFunc(func) {
    var oldonload = window.onload;
    if(typeof oldonload != 'function')
    {
        window.onload = func;
    }else
    {
        window.onload =  function () {
            oldonload();
            func();
        }
    }

}


addLoadFunc(prepareGallery);



function showPic(whichpic) {
    if(document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType)
}


