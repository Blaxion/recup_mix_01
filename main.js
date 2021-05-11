// ### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa class
let exo1 = document.getElementsByClassName('tartine')[0].innerText
console.log(exo1)


// ### 2. Pareil que le précédent mais cette fois si c'est via l'id "toast"
let exo2 = document.getElementById('toast')
console.log(exo2)


// ### 3. Affiche le dernier élément ayant la class tartine ( pas son contenu, l'élément entier)
let exo3 = document.getElementsByClassName('tartine')[1]
console.log(exo3)


