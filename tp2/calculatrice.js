var zoneAffichage = document.getElementById("zone_affichage");
var memory;
var editable = false;
var bouttonsSimples = document.getElementsByClassName("bouton_simple");
var bouttonsLibres = document.getElementsByClassName("bouton_libre");


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 

function moveZoneAffichageHaut(zone) {
    var div = document.getElementById("ligne_affichage");
    div.appendChild(zone);
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



/**
 * la fonction ajoute un cookie sur le navigateur pour conserver le bouton du site
 * @param {type} bouton le bouton sur lequel on veut rajouter le cookie
 * @returns {undefined}
 */
function save(bouton) {
    setCookie(bouton.id, bouton.value, 2);
}

/**
 * cette fonction met le bouton sur lequel on a double cliqué en mode textuel
 * @param {type} bouton le bouton sur lequel on a double cliqué
 * @returns {undefined}
 */
function edit(bouton) {
    bouton.setAttribute("type", "text");
    bouton.setAttribute("ondblclick", "fix(this)");
    bouton.setAttribute("onblur", "save(this)");
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

/**
 * fonction appellée au tout début lors du onload
 * @returns {undefined}
 */
function init() {
    var tableBouton = document.getElementsByClassName("bouton_simple");
    for (var i = 0; i < tableBouton.length; i++) {
        tableBouton[i].setAttribute("onClick", "affiche(this)");
    }
    for (var i = 0; i < bouttonsLibres.length; i++) {
        bouttonsLibres[i].value = getCookie(bouttonsLibres[i].id);
    }
}