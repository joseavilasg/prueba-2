"use strict";
document.body.onload = addTodos;
function addTodos() {
    const to_do = [
        "Alimentar al perro",
        "Estudiar para prueba escrita",
        "Pagar taxes",
        "Pasear a perro",
        "Comprar entradas para el cine",
    ];

    const todoHelper = document.getElementById("todo-helper");
    const todoContainer = document.getElementById("todo-container");
    const todoUl = document.createElement("ul");

    to_do.forEach((todo) => {
        const el = document.createElement("li");
        const textNode = document.createTextNode(todo);
        el.appendChild(textNode);

        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.addEventListener("change", function () {
            if (checkBox.checked) {
                el.style["text-decoration"] = "line-through";
                el.style["color"] = "gray";
            } else {
                el.style["text-decoration"] = "none";
                el.style["color"] = "black";
            }
        });
        todoUl.appendChild(el);
        todoUl.appendChild(checkBox);
    });

    todoContainer.appendChild(todoUl);
}
