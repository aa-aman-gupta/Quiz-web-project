function toggleMenu(x) {
    x.classList.toggle("open")
};
let myQuestion = [
    {
        'que': "Which statement cannot be used to declare a variable in JavaScript?",
        'a': "Let",
        'b': "Var",
        'c': "Const",
        'd': "Int",
        'correct': "d"
    },
    {
        'que': "Which of the following is block scoped?",
        'a': "Var.",
        'b': "Let",
        'c': "Both B and d",
        'd': "Const",
        'correct': "c"
    },
    {
        'que': "What are Functions in JavaScript?",
        'a': "Functions are basically a statement which returns a constant value.",
        'b': "Functions are basically a set of statements that perform some task.",
        'c': "Functions are one of the data types in JavaScript.",
        'd': "All Of these",
        'correct': "b"
    },
    {
        'que': " Which of the following is an array method?",
        'a': "Map",
        'c': "Reduce",
        'b': "Filter",
        'd': "All of these",
        'correct': "d"
    },
    {
        'que': "What is destructuring in JavaScript?",
        'a': "Through destructuring, we can unpack values from arrays or object properties into separate variables.",
        'b': "Destructuring allows us to restructure object properties",
        'c': "Destructuring allows us to restructure array elements.",
        'd': "All of these",
        'correct': "a"
    },
    {
        'que': "What do you mean by Function Composition?",
        'a': "It is the process of combining two or more functions to create a new function.",
        'b': "The function declaration is termed as function composition in JavaScript.",
        'c': "Both a and b",
        'd': "None of these",
        'correct': "a"
    },
    {
        'que': "Which is the correct way to bind an object to the current method?",
        'a': "Func=func.bind(this).",
        'b': "Let func = () => {}.",
        'c': "Both a and b.",
        'd': "None of these.",
        'correct': "c"
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
        <h3>Thanks for plying quiz</h3>
        <h2>${rightAns}/${quesTotal} are correct</h2>
        <img src="images/star.png" alt=""  style="background-position: center; height: 100px; width: 130px ;">
        </div >
        `
}
showQuestion();