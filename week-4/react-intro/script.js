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

function updateDom(state) {
  const parent = document.getElementById("todos");
  parent.innerHTML = "";

  for (let i = 0; i < state.length; i++) {
    parent.appendChild(createChild(state[i].title, state[i].description, state[i].id));
  }
}
let state = [
  {
    title: "DSA",
    description: "Study dsa for 4 hours",
    id: 1,
  },
  {
    title: "development",
    description: "Study dsa for 3 hours",
    id: 2,
  },
  {
    title: "Gym",
    description: "Gym from 6-7pm",
    id: 3,
  },
];
// window.setInterval(async function () {
//   const res = await fetch("https://sum-server.100xdevs.com/todos");
//   const json = await res.json();
//   updateDom(json.todos);
// }, 5000);

updateDom(state);
