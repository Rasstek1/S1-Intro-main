compteur = 4;//variable globale

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

function ajouterEmail(){
    var email = document.getElementById("email").value;
    document.forms[0].action ="mailto:"+email;
}

function effacer(){
    document.forms[0].action = "";
}

console.log("Whats up Dude!")




    nouveauInput = document.createElement("input");
    nouveauInput.setAttribute("hidden", true);
    nouveauInput.setAttribute("name", "Item_"+compteur);
    nouveauInput.setAttribute("value",item);
    compteur++;
    document.forms[0].append(nouveauInput);
    alert("L'item est bien ajouté connard!!");// Pop-up




function ajouterEmail() {
    var email = document.getElementById("email").value;
    document.forms[0].action = "mailto:" + email;
}

console.log("Bonjour");

