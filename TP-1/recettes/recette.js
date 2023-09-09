// Sélectionnez la liste de textes
const liste = document.getElementById("maListe");

// Ajoutez un gestionnaire d'événements au clic sur la liste
liste.addEventListener("click", function (e) {
  // Vérifiez si l'élément cliqué est un <li>
  if (e.target && e.target.nodeName === "LI") {
    // Vérifiez si la classe "barrer" est déjà appliquée à l'élément
    if (e.target.classList.contains("barrer")) {
      // Si oui, retirez la classe pour débarrer le texte
      e.target.classList.remove("barrer");
    } else {
      // Si non, ajoutez la classe pour barrer le texte
      e.target.classList.add("barrer");
    }
  }
});
