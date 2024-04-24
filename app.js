"use strict";
document.body.onload = addTodos;
const to_do = [
    "Alimentar al perro",
    "Estudiar para prueba escrita",
    "Pagar taxes",
    "Pasear a perro",
    "Comprar entradas para el cine",
];

function addTodos() {
    const todoContainer = document.getElementById("todo-container");
    const listContainer = document.createElement("ul");

    to_do.forEach((todoItem) => {
        const item = createListItem(todoItem);
        listContainer.appendChild(item);
    });

    todoContainer.appendChild(listContainer);
}

const onCheckBoxChange = (event) => {
    const item = event.target.parentNode;
    const isChecked = event.target.checked;
    if (isChecked) {
        item.style["text-decoration"] = "line-through";
        item.style["color"] = "gray";
    } else {
        item.style["text-decoration"] = "none";
        item.style["color"] = "black";
    }
};

const createListItem = (item) => {
    const itemNode = document.createElement("li");
    const textNode = document.createTextNode(item);
    itemNode.appendChild(textNode);

    const checkBoxNode = document.createElement("input");
    checkBoxNode.setAttribute("type", "checkbox");
    itemNode.appendChild(checkBoxNode);

    checkBoxNode.addEventListener("change", onCheckBoxChange);

    return itemNode;
};
