/**
 * Created by ddsss on 2017/1/8.
 */
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