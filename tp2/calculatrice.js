var zoneAffichage = document.getElementById("zone_affichage");
var memory;
var editable = false;
var bouttonsSimples = document.getElementsByClassName("bouton_simple");
var bouttonsLibres = document.getElementsByClassName("bouton_libre");

function moveZoneAffichageHaut(zone) {
    var calc = document.getElementById("calc");
    calc.firstElementChild = zone;
    zone.setAttribute("ondblclick", "moveZoneAffichageBas(this)");
}

function moveZoneAffichageBas(zone) {
    var calc = document.getElementById("calc");
    calc.appendChild(zone); 
    zone.setAttribute("ondblclick", "moveZoneAffichageHaut(this)");
}

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
    for (var i = 0; i < bouttonsSimples.length; i++) {
        bouttonsSimples[i].removeAttribute("onClick");
    }
    for (var i = 0; i < bouttonsLibres.length; i++) {
        bouttonsLibres[i].setAttribute("ondblClick", "edit(this)");
    }    
}

function fix(bouton){
    bouton.setAttribute("value", bouton.value);
    bouton.setAttribute("type", "button");
    bouton.setAttribute("ondblclick", "edit(this)");
}

function edit(bouton) {
    bouton.setAttribute("type", "text");
    bouton.setAttribute("ondblclick", "fix(this)");
}

function mode_calcul(buttonE) {
    buttonE.setAttribute("onClick", "mode_edition(this)");
    editable = false;
    buttonE.style.color = "black";   
    init();
    for (var i = 0; i < bouttonsLibres.length; i++) {
        bouttonsLibres[i].removeAttribute("ondblClick");
    }    
}

function init() {
    var tableBouton = document.getElementsByClassName("bouton_simple");
    for (var i = 0; i < tableBouton.length; i++) {
        tableBouton[i].setAttribute("onClick", "affiche(this)");
    }
}