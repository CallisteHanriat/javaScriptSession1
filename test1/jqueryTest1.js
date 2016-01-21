$(function() {
   $('title').html('test1');
   $('.caseOfText').mouseover(function(){
        var item=$(this);
        item.css({'background-color':'yellow'});
   }); 
   
   $('.caseOfText').mouseleave(function() {
      var item=$(this);
      item.css({'background-color':'rgb(255,255,255)'});
   });
});