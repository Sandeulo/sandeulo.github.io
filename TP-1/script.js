// Définition de la fonction clickRecette qui prend un élément en argument
function clickRecette(element) {
  // Extrait l'ID de l'élément passé en argument
  const id = element.id;

  // Redirige l'utilisateur vers une nouvelle URL basée sur l'ID de l'élément
  window.location = `/TP-1/recettes/${id}.html`;
}
