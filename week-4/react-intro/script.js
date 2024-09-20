// create childDiv
let globalId = 0;

function markAsDone(todoId) {
  const parent = document.getElementById(todoId);
  parent.children[2].innerHTML = "Done!";
}
function createChild(title, description, id) {
  const child = document.createElement("div");

  const firstGrandChild = document.createElement("div");
  firstGrandChild.innerHTML = title;

  const secondGrandChild = document.createElement("div");
  secondGrandChild.innerHTML = description;

  const thirdGrandChild = document.createElement("button");
  thirdGrandChild.innerHTML = "Mask as done";

  thirdGrandChild.setAttribute("onclick", `markAsDone(${id})`);

  child.appendChild(firstGrandChild);
  child.appendChild(secondGrandChild);
  child.appendChild(thirdGrandChild);
  child.setAttribute("id", id);

  return child;
}

function addTodo() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc")?.value;
  const parent = document.getElementById("todos");

  parent.appendChild(createChild(title, desc, globalId++));
}
