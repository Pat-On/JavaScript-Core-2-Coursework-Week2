function shoppingList(arrayOfPeople) {
  // Write your code here...
  let emptyStr = '';
  for (let item of arrayOfPeople) emptyStr = emptyStr + `<li>${item}</li>`;
  content.insertAdjacentHTML('afterbegin', `<ul> ${emptyStr} </ul>`);
}

let content = document.querySelector('#content');

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
