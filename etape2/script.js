"use strict";

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