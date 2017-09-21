$(document).ready(function() {



    for (var i = 0; i < 5; i++) {
        $('.right-content').append(
            '<div class="list-item">'+
            '<div class="item-image border"></div>'+
            '<div class="item-desc">Miming Beginner Course</div>'+
            '</div>'
        );

        $('.creative-feed').append(
            '<div class="box border">' +
            '<div class="box-image"></div>' +
            '<div class="box-info">' +
            '<div class="profile-image border"></div>' +
            '<div class="box-desc">' +
            '<div class="profile-name"></div>' +
            '<div class="post-desc"></div>' +
            '</div>' +
            '</div>' +
            '</div>'


        );
    }


});

$(document).on("click",".drop-icon",function(){
    $(".drop-menu").toggle();
});
/*
$(document).ready(function() {
        $.post('PopulateTable',function(responseJson) {
            if(responseJson!=null){
                //console.log("ok");
                var x = 1;
                $.each(responseJson, function(key,value) {
                    //console.log("this : " + key);


                        $('.creative-feed').append(
                            '<div class="box border">' +
                            '<div class="box-image"  id="post' + x + '"></div>' +
                            '<div class="box-info">' +
                            '<div class="profile-image" id="propic' + x + '"></div>' +
                            '<div class="box-desc">' +
                            '<div class="profile-name">' + value['name']+'</div>' +
                            '<div class="post-desc">' + value['description']+'</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>'


                        );
                   // console.log("end : " + value['profileImageUrl']);

                        $("#post" + x).css("background-image","url("+  value['url'] +")");
                        $("#propic" + x).css("background-image","url("+  value['profileImageUrl'] +")");

                    //console.log(x);
                   // console.log("end : " + value['url']);
                    x++;


                });
            }
        });
    });
*/


$(document).on("click",".close",function(){
  invisible();
});

$(document).on("click",".work-upload-button",function(){
  if (  $(".upload-work-window").hasClass("upload-work-window-show")) {
    remove_upload_working();
    setTimeout( function(){
        $("body").css("overflow-y","scroll");
      },500);
  }else{

    if($(".advanced-search-window").hasClass("advanced-search-window-show")){
      remove_advanced_search();
    }

      $(".upload-work-window").addClass("upload-work-window-show");
      work_opaque();
  }

});

function remove_upload_working(){
  $(".upload-work-window").removeClass("upload-work-window-show");
  $(".creative-feed , .right-section").css("opacity",1);


  setTimeout( function(){
      $(".upload-work-window").css("z-index","-1");
    },500);
}

function work_opaque(){
  $(".creative-feed , .right-section").css("opacity",0.3);
  $("body").css("overflow-y","hidden");
  $(".upload-work-window").css("z-index","1");
}




$(document).on("click",".advanced-search",function(){
  if (  $(".advanced-search-window").hasClass("advanced-search-window-show")) {
    remove_advanced_search();
    setTimeout( function(){
        $("body").css("overflow-y","scroll");
      },500);
  }else{

    if($(".upload-work-window").hasClass("upload-work-window-show")){
      remove_upload_working();
    }

    $(".advanced-search-window").addClass("advanced-search-window-show");
    search_opeque();
  }

});

function remove_advanced_search(){
  $(".advanced-search-window").removeClass("advanced-search-window-show");
  $(".creative-feed , .right-section").css("opacity",1);
}

function search_opeque(){
  $(".creative-feed , .right-section").css("opacity",0.3);
  $("body").css("overflow-y","hidden");
}


$(document).on("click",".creative-feed , .right-section",function(){
  invisible();
});

function invisible(){
  //console.log("hi");
  $(".upload-work-window").removeClass("upload-work-window-show");
  $(".advanced-search-window").removeClass("advanced-search-window-show");
  $(".creative-feed , .right-section").css("opacity",1);

  setTimeout( function(){
      $("body").css("overflow-y","scroll");
    },500);
  setTimeout( function(){
      $(".upload-work-window").css("z-index","-1");
    },500);

}

$(".search-text").keyup(function(event){
  var text = $(".search-text").val();
  $(".search-result").append('<div style="height:20px;width:100%;background:blue">'+text+'</div>')
});


$(document).on('click','.work-upload-button',function(){
  $(".upload-notify").css("opacity","0");
});