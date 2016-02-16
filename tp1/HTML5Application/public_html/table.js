var lignes = prompt("Nombre de lignes : ");
lignes = parseInt(lignes);
var colonnes = prompt("Nombre de colonnes : ");
colonnes = parseInt(colonnes);

var table = 1;
document.write("<table style='width:100%'>");
while (table < lignes) {
    j = 1;
    document.write("<tr>");
    document.write("<td>" + table + "</td>");
    while (j < colonnes) {
        document.write("<td>" + table * j + "</td>");
        j++;
    }
    document.write("</tr>");
    table++;
}
document.write("</table>");