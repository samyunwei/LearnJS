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
            return !showPic(this);
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





function showPic(whichpic) {
    if(!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : " ";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;

}

function preparePlaceholder() {
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imageGallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("choose an image");
    description.appendChild(desctext);
    document.getElementsByTagName("body")[0].appendChild(placeholder);
    document.getElementsByTagName("body")[0].appendChild(description);
    var gallery = document.getElementById("imageGallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}


function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement)
    {
        parent.appendChild(newElement);
    }else
    {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}


// function insertAfter(newElement,targetElement) {
//     var parent = targetElement.parentNode;
//     if (parent.lastChild == targetElement) {
//         parent.appendChild(newElement);
//     } else {
//         parent.insertBefore(newElement,targetElement.nextSibling);
//     }
// }

addLoadFunc(preparePlaceholder);
addLoadFunc(prepareGallery);

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType)
}


