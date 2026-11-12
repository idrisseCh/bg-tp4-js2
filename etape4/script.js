"use strict";

//Slide 38 la declaration des variable et des constants 
let lignes = 0;
let total_points = 0;

// Slide 41: Tableau d'objets Persons
const persons = [
  {nom : "Nom1", prenom : "Prenom1", points : 5},
  {nom : "Nom2", prenom : "Prenom2", points : 10},
  {nom : "Nom3", prenom : "Prenom3", points : 15}
];

//slide 46 appel a une fonction
init();

//Slide 46: Déclaration de fonction
function init(){

    //slide 44 l'utlisation de la boucle for of
    for (const person of persons){
        //slide 46 appel a une fonction
        doInsert(person.nom, person.prenom, person.points);
    }

}

//Slide 46: Déclaration de fonction
function doInsert(nom, prenom, points){

    //slide 41 les operation arithmitques
    total_points = total_points + points;
    lignes++;
    doInsertRowTable(lignes, nom, prenom, points);
    update_summary();
}

//Slide 46 Declaration de fonction
function doInsertRowTable(num ,nom , prenom, points){

    //Recuperer  l'element tableau
    //slide 66 recuperation de tableau en utilisant le nom de balise
    const table = document.getElementsByTagName("table")[0];

    //creation d'un element de type tr (ligne de tableau)
    //slide 104 creation d'un element html 
    const row = document.createElement("tr");

    //affectaion a l'element row
    //slide 107 l'utilisation de la methode setAttribute()
    row.setAttribute("class" , "row");

    //creation des colonnes de tableau
    //slide 104 creation d'un element html 
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    //remplissage du contenu de chaque colonne
    //slide 91 l'utlisation de innerText
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    //creation d'un element input pour la 5eme colonne
    //slide 104 creation d'un element html 
    const checkbox = document.createElement("input");

    //slide 107 l'utilisation de la methode setAttribute()
    checkbox.setAttribute("type" , "checkbox");

    //slide 103 , l'utlisation de appendChild() pour ajouter le checkbox au colonne 5
    col5.appendChild(checkbox);

    //Affectaion des classes en utlisons setAttribute()
    //slide 107 l'utilisation de la methode setAttribute()
    col1.setAttribute("class" ,"col_number");
    col2.setAttribute("class" ,"col_text");
    col3.setAttribute("class" ,"col_text");
    col4.setAttribute("class" ,"col_number");
    col5.setAttribute("class" ,"col_chkbox");

    //ajouter les colonnes a la ligne row avec la methode append()
    //slide 98 l'utlisation de append()
    row.append(col1, col2, col3, col4, col5);

    //slide 103 , l'utlisation de appendChild()
    table.appendChild(row);

}

//Slide 46 Declaration de fonction
function ConsoleTableau(){
    //affichage direct de tableau
    console.log(persons);

    //affichage ligne par ligne de tableau
    for(const person of persons){
        console.log("nom: " + person.nom + " , prenom: " + person.prenom + " , points: " + person.points);
    }
}

//Slide 46 Declaration de fonction
function update_summary(){
    
    //recuperation de l'element avec id = p1
    //slide 62 recuperation d'un element par identifiant
    const element_lignes = document.getElementById("p1");
    //recuperation de l'element avec id = p3
    const element_points = document.getElementById("p3");

    //slide 91 l'utlisation de innerText
    element_lignes.innerText = lignes + " ligns(s)";
    element_points.innerText = "Totale point(S)= " +total_points ;
}