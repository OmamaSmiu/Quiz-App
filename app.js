
var nextBtn = document.getElementById('nextBtn');
var scoreLabel = document.getElementById('score');

var sec = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + " " + "sec left";
    
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time Out")
    }
}

var questionsArray = [
    {
        question: "CPU stand for?",
        answer: "Central Processing Unit",
        options: [
            "Central Processing Unit",
            "Central Processor Unit",
            "Center Processing Unit",
            "None of these"
        ]
    },
    {
        question: "The term ‘Computer’ is derived from?",
        answer: "Latin",
        options: [
            "Latin",
            "German",
            "French",
            "Arabic"
        ]
    },
    {
        question: "Who is the father of Computer?",
        answer: "Charles Babbage",
        options: [
            "Allen Turing",
            "Charles Babbage",
            "Simur Cray",
            "Augusta Adaming"
        ]
    },
    {
        question: "Who is the father of Internet?",
        answer: "Vint Cerf",
        options: [
            "Chares Babbage",
            "Vint Cerf",
            "Denis Riche",
            "Martin Cooper"
        ]
    },
    {
        question: "If a computer has more than one processor then it is known as?",
        answer: "Multiprocessor",
        options: [
            "Uni-process",
            "Multiprocessor",
            "Multi-threaded",
            "Multi-programming"
        ]
    },
]

function showQuestion(e) {
    var questionElement = document.getElementById('questionElement');
    questionElement.innerHTML = questionsArray[e].question;

    var cardtext = document.getElementsByClassName('form-check-label')
    for (var i = 0; i < cardtext.length; i++) {
        cardtext[i].innerHTML = questionsArray[e].options[i]
    }
}


var questionCount = 0;
var score = 5;
function nextQuestion(e) {

    if (sec != -1) {
        if  ( nextBtn.innerText == "Submit" ) {
            scoreLabel.innerText = "Score :" + score;
            sec = -1;
            clearInterval(time);

        }

    var radios = document.getElementsByName('quiz');


    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            var userAnswer = questionsArray[questionCount].options[i];
            var answer = questionsArray[questionCount].answer;
            if (userAnswer === answer) {
                score = score + 5;
            }
            console.log(questionsArray[questionCount].options[i])
            console.log(questionsArray[questionCount].answer)
            console.log(score)
            break;
        }
    }
    questionCount++;

    if (questionCount == questionsArray.length - 1) {
        nextBtn.innerText = "Submit";
    } 
    showQuestion(questionCount)
}
}