// Sélectionnez les éléments du DOM
const taskInput = document.getElementById("taskInput"); // Sélectionne l'élément input avec l'ID "taskInput"
const addTaskButton = document.getElementById("addTaskButton"); // Sélectionne le bouton avec l'ID "addTaskButton"
const taskList = document.getElementById("taskList"); // Sélectionne la liste ul avec l'ID "taskList"

// Ajoutez une tâche à la liste lorsque le bouton est cliqué
addTaskButton.addEventListener("click", function () {
  // Récupère le texte de la tâche et supprime les espaces vides au début et à la fin
  const taskText = taskInput.value.trim();

  // Vérifie si le champ de texte n'est pas vide
  if (taskText !== "") {
    // Crée un nouvel élément li pour la tâche
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      ${taskText}
      <button class="delete-button">Supprimer</button>
    `;

    // Ajoute l'élément li à la liste ul
    taskList.appendChild(listItem);

    // Efface le champ de texte après avoir ajouté la tâche
    taskInput.value = "";

    // Ajoute la fonctionnalité de suppression à la tâche nouvellement ajoutée
    const deleteButton = listItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
      // Supprime l'élément li lorsque le bouton de suppression est cliqué
      listItem.remove();
    });
  }
});

// Ajoutez la possibilité d'appuyer sur "Entrée" pour ajouter une tâche
taskInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    // Simule un clic sur le bouton "Ajouter" lorsque la touche "Entrée" est pressée
    addTaskButton.click();
  }
});
