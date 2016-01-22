$(function() {
   $('title').html('test1');
   $('.caseOfText').mouseover(function(){
        var item=$(this);
        item.animate({'background-color':'yellow'}, 250);
   }); 
   
   $('.caseOfText').mouseleave(function() {
      var item=$(this);
      item.animate({
          backgroundColor: "white"
        }, 250 );
   });
});