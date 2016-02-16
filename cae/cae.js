$(function(){
    var doc = $.parseJSON($('#embeddedData').val());
    $('body').data('doc',doc); // This saves the doc object
    $('#bcf').text(doc.bcf);   // bcf is "balance carried forward"
    $('#cname').text(doc.cname);
    $('#caddr').text(doc.caddr.street + ", " + doc.caddr.town
                     + ", " + doc.caddr.pc);
    $('#cdetails').text(doc.cdetails);
    $('#odl').text(doc.odl);

    var tr = $('<tr/>');
    tr.append($('<td/>',{text:doc.spf}));
    tr.append($('<td/>',{text:'Balance carried forward'}));
    tr.append($('<td/>'));
    tr.append($('<td/>'));
    tr.append($('<td/>',{text:doc.bcf,'class':'num'}));
    $('#transactions').append(tr);
    var balance = doc.bcf;
    for(var i=0;i<doc.trn.length;i++) {
        var tr = $('<tr/>');
        tr.append($('<td/>',{text:doc.trn[i].whn}));
        tr.append($('<td/>',{text:doc.trn[i].nar}));
            if (doc.trn[i].amt > 0) {
                tr.append($('<td/>',{text:doc.trn[i].amt,'class':'num'}));
                tr.append($('<td/>'));
            } else {
                tr.append($('<td/>'));
                tr.append($('<td/>',{text:doc.trn[i].amt,'class':'num'}));
            }
            balance += doc.trn[i].amt;
            tr.append($('<td/>'), {text:balance, 'class':'num'});
            tr.appendTo($('#transactions'));
    }
});
