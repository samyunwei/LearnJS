/**
 * Created by sam on 2016/12/25.
 */

function insetParagraph(text) {
    var str = "<p>";
    str += text;
    str =+ "</p>";
    document.write(str);
}

// window.onload = function () {
//     var testdiv = document.getElementById("testdiv");
//     testdiv.innerHTML = "<p>I inseted <em>my</em> content.</p>"
// }


// window.onload = function () {
//     var para = document.createElement("p");
//     // var info = "nodeName: ";
//     // info += para.nodeName;
//     // info += " nodeType: ";
//     //info += para.nodeType;
//     var testdiv = document.getElementById("testdiv");
//     testdiv.appendChild(para);
//     var txt = document.createTextNode("Hello world!");
//     para.appendChild(txt);
// }



window.onload = function () {
    var para = document.createElement("p");
    var txt1 = document.createTextNode("This is ");
    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode("my");
    var txt3 = document.createTextNode(" content.");
    para.appendChild(txt1);
    emphasis.appendChild(txt2);
    para.appendChild(emphasis);
    para.appendChild(txt3);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}