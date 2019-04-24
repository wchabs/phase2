


$(document).ready(function() {
//    
//    $("#picShake").hover(function(){
//	$(this).trigger('startRumble');
//    }, function(){
//        $(this).trigger('stopRumble');
//    });
//    
    $("#picShake").mouseover(function() {
      $(this).effect("shake", {times: 3}, 500);
//        alert("hello?");
    });
});

