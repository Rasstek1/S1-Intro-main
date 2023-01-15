function  ajouter(){
    var item = document.getElementById("desc").value;
   document.getElementById("maListe").append(item);
    alert("L'item est bien ajouté");
}




var Title ="Offre spéciale de Martin";
var Message = '<a href= \"index.html \">25% off!</a>';

var elTitle = document.getElementById('title');
elTitle.innerHTML = title;
var elNote = document.getElementById('note');
elNote.innerHTML = message;

//Ceci est un commentaire
/*Ceci est un autre commentaire*/


console.log("Bonjour");
function afficher(){
    alert("eeeee");
    var saison = document.getElementById("IdText").value;

    var element = document.getElementById("IdDiv");
    switch (saison) {
        case 'printemps' :
            // document.getElementById("IdDiv").innerHTML
            element.innerHTML ='<H1>Voilà le printemps...</H1>';
            break
        case 'été' :
            element.innerHTML ='<H1>Voilà l\'été...</H1>';
            break
        case 'automne' :
            element.innerHTML ='<H1>Voilà l\'automne...</H1>';
            break
        case 'hiver' :
            element.innerHTML ='<H1>Voilà l\'hiver...</H1>';
            break
        default :
            element.innerHTML ='<H1>Désolé, mais là je ne sais pas</H1>';
    }
}

var m= window.prompt("Entrez le numéro du mois :","");
var a= window.prompt("Entrez la valeur d'année ","20")
switch(m) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
        j=31;
        break;
    case "4":
    case "6":
    case "9":
    case "11":
        j=30;
        break;
    case "2":
        if (a%4==0){
            j=29;
        }else{
            j=28;
        }
}
alert("le nombre des jours du mois n° " + m +" est = " +j+ " de l'année: "+a);

function quantité(selectObject) {
    let qtéSélectionnée = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            qtéSélectionnée++;
        }
    }
    return qtéSélectionnée;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    alert('Nombre d\'options choisies : ' + quantité(document.selectForm.typesMusique))
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function msg(){
    alert("Bonjour! Je suis une fonction pedro!!");
}