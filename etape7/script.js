"use strict";

//Slide 38 la declaration des variable et des constants 
let lignes = 0;
let total_points = 0;
let moyenne = 0;
let min = 20;
let max = 0;

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
    moyenne = (moyenne * lignes + points)/(lignes + 1)
    lignes++;
    if(points < min){
        min = points;
    }
    if(points > max){
        max = points;
    }
    
    

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
    
    //recuperation de l'element avec id = p1,p2,p3,p4,p5
    //slide 62 recuperation d'un element par identifiant
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");
    const element_moyenne = document.getElementById("p2");
    const element_min = document.getElementById("p5")
    const element_max = document.getElementById("p4")

    //slide 91 l'utlisation de innerText
    element_lignes.innerText = lignes + " ligns(s)";
    element_points.innerText = "Totale point(S)= " +total_points ;
    element_min.innerText = "Min= " +min;
    element_max.innerText = "Max=" + max ;
    element_moyenne.innerText = "Moyenne= " + moyenne;
}

//Slide 46 Declaration de fonction
function doNewData(){

    //slide 62 recuperation d'un element par identifiant
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    //slide 107 acceder aux attributs de l'element
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    const points = parseInt(elt_points.value);

    //verification que aucun champ est vide
    //slide 42 les conditions if..else
    if(nom === "" || prenom === "" || Number.isNaN(points)){
        //slide 116 l'utilsation de la fonction alert de window
        window.alert("Formulaire incomplet !");
        return;
    }else{

        //slide 46 appel a une fonction
        doInsert(nom, prenom, points);

        //slide 38 Methodes utlis de tableau
        persons.push({nom, prenom, points});

        //slide 107 modifier les attributs de l'element
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

function deleteRow(){
    //slide 42 les conditions if..else
    if(lignes === 0){
        //slide 116 l'utilsation de la fonction alert de window
        window.alert("le Tableau est vide!!");
        return;
    }

    //slide 76 l'utilisation de querySelectorAll et querySelector
    const elt_table = document.querySelector("div table");
    const elt_chkbox = document.querySelectorAll("div table .col_chkbox input[type='checkbox']:checked");

    //slide 42 les conditions if..else
    if(elt_chkbox.length === 0){
        //slide 116 l'utilsation de la fonction alert de window
        window.alert("Selectionnez au moins une ligne !");
        return;
    }

    //la methode confirm de window from w3Schools website
    const confirmation  = confirm("Voulez-vous vraiment supprimer " + elt_chkbox.length + " ligne(s) ?");

    //slide 42 les conditions if..else
    if(!confirmation){
        return;
    }

    //slide 74 l'utilisation de la methode getElementsByClassName
    const elt_rows = document.querySelectorAll("tr.row");

    //slide 44 l'utlisation de la boucle for of
    for(let row of elt_rows){

        //slide 76 l'utilisation querySelector
        const checkedBox = row.querySelector(".col_chkbox input[type='checkbox']");
        //slide 42 les conditions if..else
        if(checkedBox.checked){

            //slide 66 l'utilisation de la methode getElementsByTagName()
            //la 4e cellule se trouve dans l'index 3 de la collection
            const val_points = parseInt(row.getElementsByTagName("td")[3].innerText);

            //slide 41 les operation arithmitques
            total_points = total_points - val_points;
            lignes--;


            //finding the row index in the table using rowIndex of the html element
            const index = row.rowIndex - 1;
            //supperision de la ligne
            //slide 100 l'utilisation de la methode reomve()
            row.remove();

            //la supperision dans le tableau
            //l'utilisation de methode splice from w3School
            persons.splice(index, 1);
            
        }

    }

    //slide 116 l'utilsation de la fonction alert de window
     window.alert(elt_chkbox.length + " ligne(s) supprimee(s) avec succes.");

    //updating the lignes and the total Points
    update_summary();
}

//etape 7 1st function
//Slide 46 Declaration de fonction
function doSelectAll(){

    //slide 62 recuperation d'un element par identifiant
    const header_box = document.getElementById("select_all");
    //slide 76 l'utilisation de querySelectorAll
    const boxes = document.querySelectorAll("tr.row .col_chkbox input[type='checkbox']");

    //slide 44 l'utlisation de la boucle for of
    for(let box of boxes) {
        box.checked = header_box.checked
    }

}

//etape 7 2end function
let sortColumn = -1;     // the column currently sorted (-1 = none)
let sortAsc = true;      // true = ascending, false = descending

function doSort(column) {

    //slide 42 les conditions if..else
    // Same column: reverse the direction. New column: start ascending.
    if (sortColumn === column) {
        sortAsc = !sortAsc;
    } else {
        sortColumn = column;
        sortAsc = true;
    }

    //slide 76 l'utilisation de querySelector
    const table = document.querySelector("#table_container table");

    // Array.from converts the NodeList to a real array
    //slide 76 l'utilisation de querySelectorAll
    const rows = Array.from(table.querySelectorAll("tr.row"));

    //function sort that already exist
    //slide 42 les conditions if..else
    rows.sort(function (a, b) {

        const x = a.getElementsByTagName("td")[column].innerText;
        const y = b.getElementsByTagName("td")[column].innerText;

        let result;
        if (column === 0 || column === 3) {
            result = parseInt(x) - parseInt(y);     // numbers
        } else {
            result = x.localeCompare(y);            // text
        }

        return sortAsc ? result : -result;
    });

    // Put the rows back in the new order (appendChild moves them)
    //slide 44 l'utlisation de la boucle for of
    for (let row of rows) {
        //slide 104 l'utilisation de appendChild()
        row.parentNode.appendChild(row);
    }

    // Keep the persons array in the same order as the table for the button supprimer
    persons.length = 0;
    //slide 44 l'utlisation de la boucle for of
    for (let row of rows) {
        //slide 66 l'utilisation de la methode getElementsByTagName()
        const cells = row.getElementsByTagName("td");
        //slide 38 l'utilisation de la methode push
        persons.push({
            nom: cells[1].innerText,
            prenom: cells[2].innerText,
            points: parseInt(cells[3].innerText)
        });
    }

    updateSortArrows(table, column);
}

function updateSortArrows(table, column) {

    //slide 76 l'utilisation de querySelectorAll
    const headers = table.querySelectorAll("th.sortable");

    //slide 44 l'utlisation de la boucle for of
    for (let th of headers) {
        //slide 108 l'utilisation de la methode classList.remove()
        th.classList.remove("sort_asc", "sort_desc");
    }

    //slide 108 l'utilisation de la methode classList.add()
    headers[column].classList.add(sortAsc ? "sort_asc" : "sort_desc");
}