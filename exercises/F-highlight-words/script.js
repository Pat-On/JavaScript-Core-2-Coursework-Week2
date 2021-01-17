//data
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";
const paragraphArray = paragraph.split(" ");

const colours = ["yellow", "green", "blue", "none"];

//////////////////////////////////////////////////////////
// Main function

function highlightWords(paragraph, colours) {
  pElementCreator();
  listOfColours(colours);

}

// P element creator
const pElementCreator = function () {
  let text = `<p style="background-color: white; height: auto; border: 1px solid black;"></p>`
  document.querySelector("#content").insertAdjacentHTML("afterbegin", text);
}

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
  let text = `<option value="${color}">${color}</option>`
  return text
};

//creation of spans for p
function spansCreator(array) {
  let emptyStr = '';
  paragraphArray.forEach(item => emptyStr += `<span>${item} </span>`);
  return emptyStr;
}

///////////////////////////////////////////////////////
// Main calling
highlightWords(paragraph, colours);
let pElement = document.querySelector('p')
pElement.insertAdjacentHTML("afterbegin", `${spansCreator(colours)}`)

/////////////////////////////////////////////////
//event listener + logic
let selections = document.querySelector('select')

//value checker from "input"
const readingValueInput = function () {
  return selections.value
}
// function changing p colour
const pChangingColor = function (item) {
  item.style.backgroundColor = readingValueInput();
}

const removebackground = function (item) {
  item.style.removeProperty('background-color');
}


// adding event to p-container
pElement.addEventListener('click', function (e) {
  e.stopPropagation();
  if (e.target.nodeName === "SPAN") {

    readingValueInput() !== "none" ? pChangingColor(e.target) : removebackground(e.target)

  }
});