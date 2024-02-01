var aktualnyObraz = 1;
const MAXOBRAZ = 42;
var obrazElement = document.getElementById("obraz");
function instrukcja()
{
    aktualnyObraz = 0;
    obrazElement.setAttribute("src" , "./obrazki/epizod0.jpg");
    document.getElementById("numerObrazu").innerHTML = "instrukcja";
}
function nastepnyObraz()
{
    if(aktualnyObraz == MAXOBRAZ)
    {
        return 0;
    }
    aktualnyObraz++;
    obrazElement.setAttribute("src" , "./obrazki/epizod"+aktualnyObraz.toString()+".jpg" )
    document.getElementById("numerObrazu").innerHTML = aktualnyObraz;
}
function poprzedniObraz()
{
    if(aktualnyObraz == 1)
    {
        return 0;
    }
    else if(aktualnyObraz == 0)
    {
        return 0;
    }
    aktualnyObraz--;
    obrazElement.setAttribute("src" , "./obrazki/epizod"+aktualnyObraz.toString()+".jpg" )
    document.getElementById("numerObrazu").innerHTML = aktualnyObraz;
}
function pierwszyObraz()
{
    if(aktualnyObraz == 1)
    {
        return 0;
    }
    aktualnyObraz = 1
    obrazElement.setAttribute("src","./obrazki/epizod1"+".jpg")
    document.getElementById("numerObrazu").innerHTML = aktualnyObraz;
}
function ostatniObraz()
{
    if (aktualnyObraz == MAXOBRAZ)
    {
        return 0
    }
    aktualnyObraz = MAXOBRAZ
    obrazElement.setAttribute("src","./obrazki/epizod"+MAXOBRAZ.toString()+".jpg")
    document.getElementById("numerObrazu").innerHTML = aktualnyObraz;
}
