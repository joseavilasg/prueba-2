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

    const GI = {
        createElement(tag, atributes) {
            let element = document;
            return document.createElement(tag);
        },
    };

    const todoHelper = document.getElementById("todo-helper");
    const todoContainer = document.getElementById("todo-container");
    const todoUl = document.createElement("ul");

    to_do.forEach((todo) => {
        const el = document.createElement("li");
        el.createTextNode(todo);
        const isChecked = el.getAttribute("checked");
        if (isChecked) {
            el.style["text-decoration"] = "line-through";
            el.style["color"] = "gray";
        }
        todoUl.appendChild(el);
    });

    todoContainer.appendChild(todoUl);

    todoContainer.insertBefore(todoContainer, todoHelper);
}
