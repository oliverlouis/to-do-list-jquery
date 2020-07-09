// Check off specific todos by clicking
$("ul").on("click", "li", (function() {
  $(this).toggleClass("completed");
}));

//Click on X to deleted Todo
$("ul").on("click", "span", (function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation;
}));

$("input[type=text]").keypress(function(event){
    //Check to see if ENTER is pressed
    if(event.which === 13){
       var todoText = $(this).val();
       $(this).val("");
       //create new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type=text]").fadeToggle();
});