function toggleMenu(x) {
    x.classList.toggle("open")
};
let myQuestion = [
    {
        'que': "What is the CSS?",
        'a': "CSS is a stylesheet language",
        'b': " CSS is designed to separate the presentation and content, including layout colors, and fonts",
        'c': "CSS is the language used to style the HTML documents",
        'd': "All of the Mentioned ",
        'correct': "d"
    },
    {
        'que': "Which of the below CSS class is used to change the text color of CSS ?",
        'a': "background-color",
        'b': " color",
        'c': "color-background",
        'd': "None of the above",
        'correct': "b"
    },
    {
        'que': "Which below property of CSS is used to set the indentation of the first line in a block of text ?",
        'a': "text-indent property",
        'b': " text-underline property",
        'c': "text-decoration none",
        'd': "text-overflow property ",
        'correct': "a"
    },
    {
        'que': "Which of the below CSS properties represent the order of flex items in the grid container ?",
        'a': "order",
        'b': "float",
        'c': "overflow",
        'd': "All of the above",
        'correct': "a"
    },
    {
        'que': "Which element is used to represent the transparency of an element in CSS ?",
        'a': "Hover",
        'b': " opacity",
        'c': "Transparent",
        'd': "overlay ",
        'correct': "b"
    },
    {
        'que': "Which of the below CSS property is used to add a stroke in the text ?",
        'a': "text-stroke",
        'b': " text-transform",
        'c': "text-decoration",
        'd': "None of the above",
        'correct': "a"
    },
    {
        'que': "How do we set the default width of the font in CSS ?",
        'a': "Font-stretch",
        'b': "Font-weight",
        'c': "Font-variant",
        'correct': "a"
    },
]
let index = 0;
let quesTotal = myQuestion.length;
let rightAns = 0,
    wrongAns = 0;
let mainQues = document.getElementById("mainQues")
let someopt = document.querySelectorAll(".someopt")
function showQuestion() {
    if (index === quesTotal) {
        return endQues();
    }
    resetInp();
    let data = myQuestion[index]
    mainQues.innerText = `${index + 1}) ${data.que}`;
    someopt[0].nextElementSibling.innerText = data.a;
    someopt[1].nextElementSibling.innerText = data.b;
    someopt[2].nextElementSibling.innerText = data.c;
    someopt[3].nextElementSibling.innerText = data.d;
}

function submitQuiz() {
    let data = myQuestion[index]
    let myAns = showAns()
    if (myAns == data.correct) {
        rightAns++
    } else {
        wrongAns++
    }
    index++;
    showQuestion();
    return;
}

function showAns() {
    let myAnswer;
    someopt.forEach(
        (input) => {
            if (input.checked) {
                myAnswer = input.value;
            }
        }
    )
    return myAnswer;
}


function resetInp() {
    someopt.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

function endQues() {
    let con = document.getElementById("quesContainer").innerHTML = `
    <div style="text-align:center">
        <h2>Thanks for plying with us</h2>
        <h2>${rightAns}/${quesTotal} are correct</h2>
       <img src="images/star.png" alt=""  style="background-position: center; height: 80px; width: 110px ;">
        </div >
        <div style="display:flex; justify-content:center;">
        <button style="background-color:#1B2CC1; border-radius:6px; border:none; height:2rem; width:4.5rem;" >
        <a href="QUIZ 2.html">Next Quiz</a>
        </button>
        </div>
        `
}
showQuestion();