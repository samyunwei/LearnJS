/**
 * Created by sam on 2017/1/1.
 */

function displayAccessKeys() {
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode )
    {
        return false;
    }
    var links = document.getElementsByTagName("a");
    var akyes = new Array();
    for(var i =0;i<links.length;i++)
    {
        var current_links = links[i];
        if(!current_links.getAttribute("accesskey"))
        {
            continue;
        }
        var key = current_links.getAttribute("accesskey");
        var text = current_links.lastChild.nodeValue;
        akyes[key] = text;
     }

    var list = document.createElement("ul");
    for(key in akyes)
    {
        var text = akyes[key];
        var str = key + ":" + text;
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header = document.createElement("h3");
    var header_text = document.createTextNode("AccessKeys");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}
addLoadEvent(displayAccessKeys);