var pays = [{'NomPays' : 'France', 'NomImage' : 'fr'},
            {'NomPays' : 'Brésil', 'NomImage' : 'br'},
            {'NomPays' : 'Grèce', 'NomImage' : 'gr'}];



$(function() {
    // $.each(pays, function(index, value){
    //     $('<div></div>')
    //         .append($('<div></div>', {text: value.NomPays}))
    //         .append($('<img/>', {src:'flags/' + value.NomImage + '.gif'}))
    //         .appendTo('body');
    // });

    $('img')
        .css({'border' : 'solid 3px gray',
              'width' : 200});
    $('div div')
        .css({'text-align' : 'center'});

    $('body')
        .css({'font-family' : 'arial',
              'font-size' : 'x-large'});

    $('body>div')
        .css({'width' : 206,
              'border' : '2px solid black',
              'padding' : '24px',
              'display' : 'inline-block',
              'margin' : '1ex'});
    createOne();
});


function createOne() {
    var i = Math.floor(pays.length*Math.random());
    var code = pays[i].NomImage;
    var name = pays[i].NomPays;
    var qu = $('<div id="qu"/>')
        .append($('<div></div>', {text:name,id:'ans'}))
        .append($('<img></img>', {src:'flags/'+code+'.gif'}))
        .appendTo('body');
    qu.append($('<div></div>', {text:name,id:'ans'}));
    qu.append($('<input></input>', {id:'response'}));

    $('#response').keyup(function() {
        if($('#response').val() == name) {
            alert("Well Done");
        }
    });
//$('ans').text()
}
