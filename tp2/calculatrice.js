var zoneAffichage = document.getElementById("zone_affichage");
var memory;
var editable = false;

function rab() {
    zoneAffichage.value = "";
}

function calcul() {
    var result = eval(zoneAffichage.value);
    zoneAffichage.value = result;
}

function affiche(boutonOnClick) {
    zoneAffichage.value = zoneAffichage.value + boutonOnClick.value;
}

function plusmoins(plusMoinsElement) {
    var premierElement = zoneAffichage.value[0];
    if (!zoneAffichage.value.startsWith("-")) {
        zoneAffichage.value = "-" + zoneAffichage.value;
    } else {
        zoneAffichage.value = zoneAffichage.value.substr(1, zoneAffichage.value.length);
    }
}

function range_memory() {
    memory = zoneAffichage.value;
}

function affiche_memory() {
    if (memory !== undefined) {
        zoneAffichage.value = zoneAffichage.value + memory;
    }
}

function raz_memory() {
    memory = undefined;
}

function mode_edition(buttonE) {
    buttonE.setAttribute("onClick", "mode_calcul(this)");
    editable = true;
    buttonE.style.color = "red";
}

function mode_calcul(buttonE) {
    buttonE.setAttribute("onClick", "mode_edition(this)");
    editable = false;
    buttonE.style.color = "black";   
}

function init() {
    var tableBouton = document.getElementsByClassName("bouton_simple");
    for (var i = 0; i < tableBouton.length; i++) {
        tableBouton[i].setAttribute("onClick", "affiche(this)");
    }
}