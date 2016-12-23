/**
 * Created by sam on 2016/12/20.
 */


//alert(typeof (document.getElementById("purchases")));

//alert(document.getElementsByTagName("li").length);

// var items = document.getElementsByTagName("li");
// for(var i = 0;i <items.length;i++)
// {
//     alert(typeof items[i]);
// }
//

//alert(document.getElementsByTagName("*").length);


// var shopping  = document.getElementById("purchases");
// var items = shopping.getElementsByTagName("*");
// alert(items.length);
//
// for(var i = 0;i < items.length;i++)
// {
//     alert(typeof items[i]);
// }


//alert(document.getElementsByClassName("important sale").length);
function getElementsByClassName(node,classname) {
    if(node.getElementsByClassName)
    {
        return node.getElementsByClassName(classname);
    }else
    {
        var results = new Array();
        var elems = node.getElementsByTagName("*");
        for(var i = 0;i<elems.length;i++)
        {
            if(elems[i].className.indexOf(classname) != -1)
            {
                results[results.length] = elems[i];
            }
        }
        return results;
    }
}
// var shopping = document.getElementById("purchases");
// //var sales = shopping.getElementsByClassName("sale");
// var sales = getElementsByClassName(shopping,"sale");
// alert(sales.length);

//var paras = document.getElementsByTagName("p");
// for(var i = 0;i<paras.length;i++)
// {
//     alert(paras[i].getAttribute("title"));
// }

// for(var i = 0;i<paras.length;i++)
// {
//     var title_text = paras[i].getAttribute("title");
//     if(title_text != null)
//     {
//         alert(title_text);
//     }
// }

// for(var i = 0;i<paras.length;i++)
// {
//     var title_text = paras[i].getAttribute("title");
//     if(title_text)
//     {
//         alert(title_text);
//     }
// }




//
// var shopping = document.getElementById("purchases");
// alert(shopping.getAttribute("title"));
// shopping.setAttribute("title","a list of goods");
// alert(shopping.getAttribute("title"));


var paras = document.getElementsByTagName("p");
for(var i = 0;i<paras.length;i++)
{
    var title_text = paras[i].getAttribute("title");
    if(title_text)
    {
        paras[i].setAttribute("title","brand new title text");
        alert(paras[i].getAttribute("title"));
    }
}

