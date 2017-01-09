/**
 * Created by sam on 2016/12/28.
 */
function addLoadEvent(func) {
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