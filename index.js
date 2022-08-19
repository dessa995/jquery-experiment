$(document).ready(function(){

  
  const groceryList = [];
  const groceryName = document.querySelector(".grocery-area");
  const addButton = document.querySelector(".add-button");
  const heading = document.querySelector(".list-heading");

//funkcije

function displayAllGroceriesInHtml(groceryList) {
  const parentDiv = document.querySelector(".grocery-list-div");

  parentDiv.innerHTML = "";

  groceryList.forEach(function (addingGroceries) {
    let newItem = document.createElement('p');
    newItem.textContent = addingGroceries.name;

    newItem.classList.add('new-list-item');
    let newListItem = document.querySelector(".new-list-item")

    $(addButton).click(function() {
    $(newListItem).fadeIn(1000);
    });

    parentDiv.append(newItem);
  });
}

function addGrocery(addingGroceries) {
  addButton.disabled = true;
  $(addButton).animate({
    height: 15,
    width: 50,
    fontSize: 8,


  });
  $(addButton).fadeOut(1000);
  $(groceryName).animate({
    width: 80,
    height: 10,
  });
  $(groceryName).fadeOut(1000);
  groceryName.disabled = true;

  setTimeout(function () {
    groceryList.push(addingGroceries);
    displayAllGroceriesInHtml(groceryList);

    addButton.disabled = false;
    $(addButton).fadeIn(200);
    $(addButton).animate({
      height: 38,
      width: 80,
      fontSize: 18,
    });
    $(groceryName).fadeIn(200);
    $(groceryName).animate({
      width: 200,
      height: 30,
    });

    groceryName.disabled = false;
  }, 1000);
}

function addNewGrocery() {
  const newGrocery = {
    name: groceryName.value,
  };
  
  addGrocery(newGrocery);
  
  groceryName.value = "";
}

//events

addButton.addEventListener("click", function () {
  addNewGrocery();
});

groceryName.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addNewGrocery();
  }
});







});