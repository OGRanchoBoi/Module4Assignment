function FighterChoice()

{
    if (document.getElementById("chooseFighter").value == "Ryu")
    
    {
        document.getElementById("Ryu").style.visibility = "visible";
        document.getElementById("Ken").style.visibility = "hidden";
        
    }
    
    else if (document.getElementById("chooseFighter").value == "Ken")
    
    {
        document.getElementById("Ryu").style.visibility = "hidden";
        document.getElementById("Ken").style.visibility = "visible";
        
    }
    
    else
    
    {
    
        document.getElementById("Ryu").style.visibility = "hidden";
        document.getElementById("Ken").style.visibility = "hidden";
    
    }
    
    }
    
FighterChoice();