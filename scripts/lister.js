const addListItemBtn = document.querySelector(".addListItemBtn");

const listElement = document.querySelector(".list");

const inputForm = document.querySelector("#input-text");

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

  listItem.innerText = inputForm.value.trim();
  if (listItem.innerText !== "") {
    listElement.appendChild(listItem);
    listItem.appendChild(deleteBtn);
  }
};

addListItemBtn.addEventListener("click", addItem);
