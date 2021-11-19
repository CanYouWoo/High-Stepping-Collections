var menuItems = document.getElementById("menuItems")

menuItems.style.maxHeight = "0px";

function menuToggle(){
    if(menuItems.style.maxHeight == "0px")
    {
        menuItems.style.maxHeight = "200px";
    }
    else
    {
        menuItems.style.maxHeight = "0px";
    }
}   

var a;
function show_hide()
{
    if(a==1)
    {
        document.getElementById("image").style.display="inline";
        return a=0;
    }
    else
    {
        document.getElementById("image").style.display="none";
        return a=1;
    }

}