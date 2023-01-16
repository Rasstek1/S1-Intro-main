compteur = 1;

function ajouter() {
    let item = document.getElementById("desc").value;
    let prix = document.getElementById("valeur").value;
    let nouveauP = document.createElement("p");
    let nouveauSpan = document.createElement("span")
    nouveauP.innerText = item + " : ";
    nouveauSpan.innerText = prix + "$";
    document.getElementById("maListe").append(nouveauP);
    nouveauP.append(nouveauSpan);


//Ajouté le prix au total
    let ancienPrix = document.getElementById("total").innerText;
    let nouveauPrix = +ancienPrix + +prix;
    document.getElementById("total").innerText = nouveauPrix;

}







   /* nouveauInput = document.createElement("input");
    nouveauInput.setAttribute("value", item);
    nouveauInput.setAttribute("hidden", true);
    nouveauInput.setAttribute("name", "item", +compteur);
    compteur++;
    document.forms[0].append(nouveauInput);
    //alert("L'item est bien ajouté");// Pop-up


}

function ajouterEmail() {
    var email = document.getElementById("email").value;
    document.forms[0].action = "mailto:" + email;
}

console.log("Bonjour");

*/