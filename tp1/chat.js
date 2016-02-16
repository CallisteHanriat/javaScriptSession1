function Chat(nom, couleur, age) {
    this.nom = nom;
    this.couleur = couleur;
    this.age = age;
};

Chat.prototype.miauler = function () {
    alert("miaou");
};

var chat1 = new Chat("Harry", "blanc", 5);
var chat2 = new Chat("Celestin", "roux", 3);

chat2.miauler = function () {
    alert("ouaim");
};

chat1.miauler();
chat2.miauler();