$(function(){
    $("#start").click(function(){
        $("#circle").animate({left:"+=1000px"}, 3000)
    });
    
    $("#stop").click(function(){
        $("#circle").finish();
    });
    
});