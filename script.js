
$(document).ready(function () {
    var move=1;
    var play=true;
    $("table tr td").click(function()
    {
        if($(this).text()=="" && play)
        {
            if(move%2==0)
            {
                $(this).append("O");
                $(this).css('color','white');
            }
            else
            {
                $(this).append("X");
                $(this).css('color','#54d5e3');
            }
            move++;
            if (checkForWinner() != -1 && checkForWinner() != "")
            {
            if(checkForWinner()=="X")
            {
            play=false;
            $("#score").text("Winner is:X");
            }
            else
            {
            play=false;
            $("#score").text("Winner is:O");
            }
            }
    } 
});
  
    function checkForWinner()
    {
        var sp1=$("table tr:nth-child(1) td:nth-child(1)").text();
        var sp2=$("table tr:nth-child(1) td:nth-child(2)").text();
        var sp3=$("table tr:nth-child(1) td:nth-child(3)").text();
        var sp4=$("table tr:nth-child(2) td:nth-child(1)").text();
        var sp5=$("table tr:nth-child(2) td:nth-child(2)").text();
        var sp6=$("table tr:nth-child(2) td:nth-child(3)").text();
        var sp7=$("table tr:nth-child(3) td:nth-child(1)").text();
        var sp8=$("table tr:nth-child(3) td:nth-child(2)").text();
        var sp9=$("table tr:nth-child(3) td:nth-child(3)").text();
        //Check for Rows
        if((sp1==sp2) && (sp2==sp3))
        return(sp3);
        else if((sp4==sp5) && (sp5==sp6))
        return(sp6);
        else if((sp7==sp8) && (sp8==sp9))
        return(sp9);
        //Check for Columns
        else if((sp1==sp4) && (sp4==sp7))
        return(sp7);
        else if((sp2==sp5) && (sp5==sp8))
        return(sp8);
        else if((sp3==sp6) && (sp6==sp9))
        return(sp9);
        //Check for Diagonals
        else if((sp1==sp5) && (sp5==sp9))
        return(sp9);
        else if((sp3==sp5) && (sp5==sp7))
        return(sp7);
        else
        return -1;
    }
   
});