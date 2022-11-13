const addListItemBtn = document.querySelector(".addListItemBtn");

const listElement = document.querySelector(".list");

const itemsInput = document.querySelector("#items-input");

const addListTitleBtn = document.querySelector(".addListTitleBtn");

const inputTitle = document.querySelector("#input-title");



const addTitle = () => {
  let title = document.createElement("h2");
  title.classList.add("list-title");
  title.innerText = inputTitle.value;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "\u{1F7AC}"; // this is how to add a unicode char
  deleteBtn.setAttribute("type", "button");
  deleteBtn.classList.add("deleteBtn");

  const deleteItem = () => {
    deleteBtn.parentElement.remove();
  };

  deleteBtn.addEventListener("click", deleteItem);
  title.innerText = inputTitle.value.trim();
  if (title.innerText !== "") {
    listElement.appendChild(title);
    title.appendChild(deleteBtn);
  }
};

const addItem = () => {
  let listItem = document.createElement("li");
  let deleteBtn = document.createElement("button");

  deleteBtn.textContent = "\u{1F7AC}"; // this is how to add a unicode char
  deleteBtn.setAttribute("type", "button");
  deleteBtn.classList.add("deleteBtn");

  const deleteItem = () => {
    deleteBtn.parentElement.remove();
  };

  deleteBtn.addEventListener("click", deleteItem);

  listItem.innerText = itemsInput.value.trim();
  if (listItem.innerText !== "") {
    listElement.appendChild(listItem);
    listItem.appendChild(deleteBtn);
  }
};

addListItemBtn.addEventListener("click", addItem);

addListTitleBtn.addEventListener("click", addTitle);
