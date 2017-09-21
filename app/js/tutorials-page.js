$(document).on("click",".drop-icon",function(){
    $(".drop-menu").toggle();
});

$(document).on("click",".category-button",function(){
    if($(".content").hasClass("category-show")){
        $(".content").removeClass("category-show");
        $(this).text("Categories ");
    }else{
        $(".content").addClass("category-show");
        $(this).text("Hide ");
    }
});
