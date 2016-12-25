window.onload = prepareLinks;
function prepareLinks() {
    if(!document.getElementsByTagName ) return false;
    var links = document.getElementsByTagName("a");
    for(var i =0;i<links.length;i++)
    {
        if(links[i].getAttribute("class") == "popup")
        {
            links[i].onclick = function () {
                popup(links[i].getAttribute("href"));
                return false
            }
        }
    }
}/**
 * Created by sam on 2016/12/23.
 */



function popup(winURL) {
    window.open(winURL,"popup","width = 320,height = 480");
}