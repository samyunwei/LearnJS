/**
 * Created by sam on 2016/12/28.
 */

function getNewContent() {
    var request = getHttpObject();
    if(request)
    {
        request.open("GET","example.txt",true);
        request.onreadystatechange = function () {
            if(request.readyState == 4)
            {
                alert("Response Received");
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else {
        alert("Sorry ,your browser doesn\'t support XMLHttpRequest");
    }
}
addLoadEvent(getNewContent);