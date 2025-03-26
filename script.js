const form = document.createElement("form");
form.classList.add("c-form");
const h1 = document.createElement("h1");
h1.innerText = "ToDo List";
console.log(h1);
const task = document.createElement("text");
const buttom = document.createElement("button");
task.appendChild(buttom);
buttom.innerText = "Inserisci";
form.onsubmit = function (a) {
  a.preventDefault();
};
