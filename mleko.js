var aktualnyObraz = 1;
const MAXOBRAZ = 42;
var obrazElement = document.getElementById("obraz");
function instrukcja()
{
    aktualnyObraz = 0;
    obrazElement.setAttribute("src" , "./obrazki/tutorial-milkman.jpg");
    document.getElementById("numerObrazu").innerHTML = "instrukcja";
}
function nastepnyObraz()
{
    if(aktualnyObraz == MAXOBRAZ)
    {
        alert("To jest ostatni obraz dzbanie")
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
        alert("to jest pierwszy obraz dzbanie");
        return 0;
    }
    else if(aktualnyObraz == 0)
    {
        alert("nie ma nic za instrukcją dzbanie");
        return 0;
    }
    aktualnyObraz--;
    obrazElement.setAttribute("src" , "./obrazki/epizod"+aktualnyObraz.toString()+".jpg" )
    document.getElementById("numerObrazu").innerHTML = aktualnyObraz;
}
