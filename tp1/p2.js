function nbZero(tableau) {
    nbZ = 0;
    tableau.forEach(function (y) {
        if (y === 0) {
            nbZ++;
        }
    });
    return nbZ;
};

function moyenne(tableau) {
    return addition(tableau) / tableau.length;
}

function addition(tableau) {
    i = 0;
    tableau.forEach(function (y) {
        i = i + y;
    });
    return i;
};

function inputvalue() {
    var tableau = [i];
    j = 0;
    while (j !== -1) {
        j = prompt("entrez une valeur");
        j = parseInt(j);
        tableau.push(j);
    }
    return tableau;
};

var i;
i = prompt("entrez une valeur");
i = parseInt(i);
tab = inputvalue();
var somme = addition(tab);
var text = document.getElementsByTagName("h1");
text[0].innerHTML = 'resultat : ' + somme;
alert("moyenne : " + moyenne(tab) + " nbZ :" + nbZero(tab));


