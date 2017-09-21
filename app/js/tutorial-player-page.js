$(document).on("click",".drop-icon",function(){
    $(".drop-menu").toggle();
});

for(var i = 0 ; i < 20 ; i++){
    $(".comments-list").append(
        '<div class="comment-wrapper">'+
        '<div class="comment-user-image"></div>'+
        '<div class="comment-user-desc">'+
            '<div class="comment-username">Ervin Arnold</div>'+
            '<div class="comment">'+
                'The following figure represents a histogram for the above weight data. Notice that if a statistical'+
                'package is used to draw a histogram, it automatically decides the width of the classes, but some of'+
                'them have options to change the widths as needed by the user'+
            '</div>'+
        '</div>'+
        '</div>'
    );

    $(".list-container").append(
        '<div class="item">'+
        '<div class="thumbnail"></div>'+
        '<div class="desc">'+
            'This is the First in the playlist <br><br>'+
            '<small>By</small> <strong>Luis Carter</strong><br>'+
            '<small>2311 views</small>'+
        '</div>'+
    '</div>'
    );
}