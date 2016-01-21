$(function() {
   $('title').html('test1');
   $('.caseOfText').mouseover((this),function(){
        var item=$(this);
        item.css({'background-color':'yellow'});
   }); 
   
   $('.caseOfText').mouseleave((this), function() {
      var item=$(this);
      item.css({'background-color':'rgb(255,255,255)'});
   });
});