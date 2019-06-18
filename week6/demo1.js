$(function(){
    // $("#temp").text("This is very cool");
    $("#temp").html("<em>This is very cool</em>"); 
    $("h1").html("<em>This is a very cool page.</em>");
    $("<input type='button' value='Hide' id='btnShowHide' />").insertBefore("#temp");

    $("#btnShowHide").click(function(){
        $("p").toggle();
        if($("p").is(":visible")){
            // this.value = "Hide";
            $(this).val("Hide");
        }
        else
        {
            // this.value = "Show";
            $(this).val("Show");
        }
    });

    $("div").append("<p>Append me to the list.</p>");
    $("<strong>Hello </strong>").prependTo("#temp");
    $("<em> Goodbye!</em>").appendTo("p");
    $("#temp").remove();
    // $("p").remove();
    $("p").remove(":contains('goodies')");
});