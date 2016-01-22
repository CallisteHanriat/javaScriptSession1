$(function() {
   $('title').html('test1');
   $('#myTable').on('mouseover', '.caseOfText', function(){
        var item=$(this);
        item.animate({'background-color':'yellow'}, 250);
   });

   $('#myTable').on('mouseleave', '.caseOfText', function() {
      var item=$(this);
      item.animate({
          backgroundColor: "white"
        }, 250 );
   });

   $('#myTable').on('click', '.caseOfText', function() {
      var item=$(this);
      item.animate({
          backgroundColor: "white"
        }, 250 );
   });

   var buttonAdd = $('<button/>').html('add')
           .css({'margin':'auto',
            'display':'block'})
           .appendTo('body');

    buttonAdd.click(function() {
        $('<tr/>')
            .append($('<td/>')
                .text('ThirdElement')
                .addClass('caseOfText'))
            .append($('<td/>')
                .text('FourthElement')
                .addClass('caseOfText'))
            .appendTo('table');
    });
});
