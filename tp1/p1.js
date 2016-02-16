function inputvalue() {
    j = 0;
    cpt = 0;
    cpt = parseInt(cpt);
    while(j !== -1) {
        j = prompt("entrez une valeur");
        j = parseInt(j);
        i = i + j;
        cpt++;
    }
    return i;
}
var i;
i = prompt("entrez une valeur");
i = parseInt(i);
r = inputvalue();
var text = document.getElementsByTagName("h1");
text[0].innerHTML = 'resultat : ' + r;
alert("moyenne : " + r/cpt);

