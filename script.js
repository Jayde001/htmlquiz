const startButton = document.getElementById("start-btn");
const nextbutton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
let shuffledQuestions,currectQuestionIndex;
let quizscore =0;


startButton.addEventListener("click", startGame);

nextbutton.addEventListener("click" ,() =>{
    currectQuestionIndex++;
    setnextQuestion();
});

function startGame(){
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() =>Math.random() -0.5);
    currectQuestionIndex=0; 
    questionContainerElement.classList.remove("hide");
    setnextQuestion();
    quizscore=0;
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currectQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText= question.question;
    question.answers.forEach((answer) =>{
        const button =document.createElement('button');
        button.innerText=answer.text;
        button.classList.add('btn');
        if( answer.correct) {
            button.dataset.correct= answer.correct
        }
        button.addEventListener('click',selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}


function resetState(){
    clearStatusClass(document.body);
    nextbutton.classList.add('hide');
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton =e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currectQuestionIndex + 1) {
        nextbutton.classList.remove("hide");
    }else {
        startButton.innerText ="Restart";
        startButton.classList.remove("hide");
    }
    if(selectedButton.dataset = correct) {
        quizScore++;
    }
    document.getElementById('right-answers').innerText=quizscore;
}


function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add("correct");
    }else {
        element.classList.add("wrong");
    }
}




function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
const questions =[
    {
        question: 'which one of these is a JavaScript framework?',
        answers :[
            { text: 'python', correct: false},
            { text: 'Django', correct: false},
            { text: 'React', correct: true},
            { text: 'Eclipse', correct: false},
        ],
    },
    {
        question: 'what is my name?',
        answers :[
            { text: 'lulu', correct: false},
            { text: 'mia', correct: false},
            { text: 'Jade', correct: true},
            { text: 'Nwekpeke', correct: false},
        ]
    },
    {
        question: 'which one of these is a prime number?',
        answers :[
            { text: '8', correct: false},
            { text: '10', correct: false},
            { text: '11', correct: true},
            { text: '6', correct: false},
        ],
    },
]

