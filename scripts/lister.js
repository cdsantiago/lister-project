
const addListItemBtn = document.querySelector(".addListItemBtn");

const listElement = document.querySelector(".list");

const inputForm = document.querySelector("#input-text");

//This array will store all the <li><li/> items as they are created.
const listItems = [];

//This array will contain only unique values
let uniqueListItems = [];

const addItem = () => {
  //Assign the non repeating values to the array based on the contents of the other array.
  uniqueListItems = [...new Set(listItems)];

  //create an new empty <li><li/> element every time the button is clicked
  let listItem = document.createElement("li");

  //Add text inside the new <li><li/>, the text is equal to the value of the input set to lower case.
  listItem.innerText = inputForm.value.toLowerCase().trim();

  //Add the text inside the <li><li/>  to the array for storage and comparison later
  listItems.push(listItem.innerText);

  if (uniqueListItems.indexOf(listItem.innerText) === -1) {
    listElement.appendChild(listItem);
  }
};

addListItemBtn.addEventListener("click", addItem);
