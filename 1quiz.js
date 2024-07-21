function toggleMenu(x) {
    x.classList.toggle("open");
}

let myQuestion = [
    {
        'que': "What is the full form of HTML?",
        'a': "Hypertext Markup Language",
        'b': "Hyperlink Markup Language",
        'c': "Hypertext Market and Text Markup Language",
        'd': "None of the above",
        'correct': "a"
    },
    {
        'que': " Which one is the correct sequence of HTML tags:.",
        'a': " head, body, title, html",
        'b': "html, head, title, body",
        'c': "html, title, head, body",
        'd': "None of the above",
        'correct': "b"
    },
    {
        'que': "Which tag is used to make the underlined text?.",
        'a': "<b>",
        'b': "<u>",
        'c': "<ul>",
        'd': "<line>",
        'correct': "c"
    },
    {
        'que': "Which HTML tag attribute is used to provide a unique name to an element?.",
        'a': "Class",
        'b': "id",
        'c': "type",
        'd': "All of the above",
        'correct': "b"
    },
    {
        'que': " Which HTML tag is used to display the text with scrolling effect?.",
        'a': "<scroll>",
        'b': "<run>",
        'c': "<marquee>",
        'd': "None",
        'correct': "c"
    },
    {
        'que': "Which HTML tag is used to insert the largest heading in HTML?",
        'a': "<h6>",
        'b': "<h4>",
        'c': "<h1>",
        'd': "None",
        'correct': "c"
    },
    {
        'que': "HTML Tag Attribute provides:.",
        'b': "Style of HTML element",
        'a': "URL of html element",
        'c': "Additional Information of HTML Element",
        'd': "None",
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
        <h2>Thanks for plying with us</h2>
        <h2>${rightAns}/${quesTotal} are correct</h2>
       <img src="images/star.png" alt=""  style="background-position: center; height: 80px; width: 110px ;">
        </div >
        <div style="display:flex; justify-content:center;">
        <button style="background-color:#1B2CC1; border-radius:6px; border:none; height:2rem; width:4.5rem;" >
        <a href="css.html">Next Quiz</a>
        </button>
        </div>
        `
}
showQuestion();