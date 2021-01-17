/////////////////////////////////////////////////////////
//dropdown list 

function listOfColours(colours) {
  let emptyStr = ''
  for (let item of colours) {
    emptyStr += colorCreator(item);
  }
  document.querySelector("#content").insertAdjacentHTML("beforeend",
    `<label for="colors">Choose a color:</label>
<select name="colours" id="colours">
${emptyStr}
</select>`)
}
// option "text" creator
const colorCreator = function (color) {
  // console.log(color)
  let text = `<option value="${color}">${color}</option>`
  return text
};

/////////////////////////////////////////////////////////
// Creation of <p> = for fun I made more of them :>
function pCreator(colours) {
  let emptyP = ''
  for (let color of colours) {
    emptyP += pElementCreator(color)
  }
  document.querySelector("#content").insertAdjacentHTML("afterbegin", emptyP)
}
// p text creator
const pElementCreator = function (color) {
  let text = `<p style="background-color: white; height: 30px; border: 1px solid black;"></p>`
  return text
}


// list of colours
const colours = ["red", "blue", "green", "yellow", "pink", "brown"];


///////////////////////////////////////////////////////
// Creation
pCreator(colours);
listOfColours(colours);
//////////////////////////////////////////////////////////
// Logic to change colours

//selections
let pContainer = document.querySelectorAll('div');
let selections = document.querySelector('select')

//value checker from "input"
const readingValueInput = function () {
  return selections.value
}
// function changing p colour
const pChangingColor = function (item) {
  item.style.backgroundColor = readingValueInput();
}


// adding event to p-container
pContainer.forEach(item => item.addEventListener('click', function (e) {
  if (e.target.nodeName === "P") {
    pChangingColor(e.target)
  }
}));




