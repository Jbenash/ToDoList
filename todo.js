var listContainer = document.getElementById("listContainer");

function add() {
    var inputBox = document.getElementById("inputBox");

    if (inputBox.value.trim() === "") return; // Prevent adding empty tasks

    var listItem = document.createElement("li");
    listItem.textContent = inputBox.value;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        listContainer.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    listContainer.appendChild(listItem);

    inputBox.value = ""; // Clear input field after adding
}
