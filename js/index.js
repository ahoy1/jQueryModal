var modalInit = function(target){
    var modal = "." + target
    //create a dark overlay
    $("body").append("<div class='overlay'></div>");
    //add a close button
    $(modal).append("<button class='modal-close' data-target=" + target + ">X</button>");
    //give the overlay and the modal the active class
    $(".overlay, " + modal).addClass("active");
}

var modalDestroy = function(target){
    var modal = "." + target;
    //remove the active class from the modal
    $(modal).removeClass("active");
    //destroy the overlay and close button
    $(".overlay").remove();
    $(modal + " .modal-close").remove();
}

$(function(){
    $(".modal-anchor").click(function(){
        modalInit($(this).attr("data-target"));
    })
    
    //using .on() instead of .click() here, because .modal-close 
    //doesn't exist when we define the function
    $(".modal").on('click', '.modal-close', (function(){
            modalDestroy($(this).attr("data-target"));
        })
    )
});