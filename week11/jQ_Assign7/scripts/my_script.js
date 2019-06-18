$(function(){
    
    var position = 0;
    function clickright(){
        if(position == 0){
            position ++;
            $("#slider").css("backgroundPositionX", "-787px");
        } 
        else if(position == 1){
            position ++;
            $("#slider").css("backgroundPositionX", "-1583px");
        }
        else if(position == 2){
            position ++;
            $("#slider").css("backgroundPositionX", "-2377px");
        }
        else if(position == 3){
            position = 0;
            $("#slider").css("backgroundPositionX", "-0px");
            
        }
    }

    function clickleft(){
        if(position == 3){
            position --;
            $("#slider").css("backgroundPositionX", "-1583px");
        } 
        else if(position == 2){
            position --;
            $("#slider").css("backgroundPositionX", "-787px");
        }
        else if(position == 1){
            position --;
            $("#slider").css("backgroundPositionX", "0px");
        }
        else if(position == 0){
            position = 3;
            $("#slider").css("backgroundPositionX", "-2377px");
            
        }
    }
    

    $("#rightArrow").click(function(){
        clickright();
    });

    $("#leftArrow").click(function(){
       clickleft();
    });

});