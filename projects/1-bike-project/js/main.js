const btn__container_b_o_g = document.querySelector('.primary-content');
const jumbotron = document.querySelector('.jumbotron');
const btn__donate__a__bike = document.querySelector('.buttons').firstElementChild;
const btn__volunteer = document.querySelector('.buttons').lastElementChild;



const changes__after__btn = function (options) {
    jumbotron.style.backgroundColor = options.jumbotronColor;
    btn__donate__a__bike.style.backgroundColor = options.btnDonateBackColor;
    btn__volunteer.style.backgroundColor = options.btnVolunteerBackColor;
    btn__volunteer.style.color = options.btnVolunteerTextColor;
};


const configuration = [{
    blueBtn:
    {
        jumbotronColor: "#588fbd",
        btnDonateBackColor: "#ffa500",
        btnVolunteerBackColor: `black`,
        btnVolunteerTextColor: `white`,
    }
},
{
    orangeBtn:
    {
        jumbotronColor: "#f0ad4e",
        btnDonateBackColor: "#5751fd",
        btnVolunteerBackColor: `#31b0d5`,
        btnVolunteerTextColor: `white`,
    }
},
{
    greenBtn:
    {
        jumbotronColor: "#87ca8a",
        btnDonateBackColor: "black",
        btnVolunteerBackColor: `black`,

    },
}
];

btn__container_b_o_g.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn') && e.target.id !== "form__submit") {
        const id = e.target.getAttribute('id');
        const dataSetIndexOfObject = e.target.dataset.index;
        console.log(configuration[dataSetIndexOfObject][id])
        changes__after__btn(configuration[dataSetIndexOfObject][id])
    }
});



// Users Inputs

// const inputFromInputTags = document.querySelectorAll('.form-group input');
// const inputFromFormTag = document.querySelectorAll('.form-group textarea')

const inputFromForm = [...document.querySelectorAll('.form-group input'), ...document.querySelectorAll('.form-group textarea')]
const btnSubmit = document.querySelectorAll('form button');

const redBackground = function (element) {
    element.style.backgroundColor = 'red';
}


const submission = function (e) {
    let counter = 0
    e.preventDefault();

    for (let item of inputFromForm) {
        console.log(item)
        if (item.id === "email") {
            if (item.value.includes('@') && item.value.length !== 0) {
                counter++
            }
        } else if (item.value !== '') {
            counter++
        }
        redBackground(item)
    }
    if (counter === inputFromForm.length) {
        inputFromForm.forEach(item => {
            item.value = ""
            item.style.backgroundColor = 'white'
        });
        alert("thank you for filling out the form")
    }
};

btnSubmit[0].addEventListener('click', submission)


