function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");


  for (let item of arrayOfPeople) {
    content.insertAdjacentHTML('afterbegin',
      `<h1>${item.name}</h1>
    <h2>${item.job}</h2>`);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);

