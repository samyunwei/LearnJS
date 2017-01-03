/**
 * Created by sam on 2017/1/3.
 */
function addClass(element,value) {
    if(!element.className)
    {
        element.className = value;
    }else
    {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}