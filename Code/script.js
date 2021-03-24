// var seconds = document.querySelector("#seconds_left");
// var quizQuestion = document.querySelector("#text");
// var start = document.querySelector(("#start"))
// var toDelete = document.querySelector("#para")
// var answerBoxes = document.querySelectorAll(".answer_boxes")
// var answers = document.querySelectorAll("#flex_answers")

// var questions = [
//     {
//         question: "Another word for hi?",
//         answers: [
//             {correctAnswer: "Hello", correct: true},
//             {other: "Bye", correct: false},
//             {other: "Ciao", correct: false},
//             {other: "Lmao", correct: false}

//         ]
           
//     },
//     {
//         question: "Short for goodbye?",
//         answers: [
//             {correctAnswer: "Bye", correct: true},
//             {other: "Say", correct: false},
//             {other:  "Toe", correct: false},
//             {other: "Boat", correct: false}

//         ]
    
            
//     }
// ];

// console.log(answerBoxes)
// console.log(questions.length)

// function gameStart(){
    
//     start.style.display = "none"
//     for (var i = 0; i < answerBoxes.length; i++){
//         answerBoxes[i].style.display = "block"
//     }
//     toDelete.innerHTML = " "

    
// }


// function setText(){
//     var counter = 0
//     quizQuestion.innerHTML = questions[counter].question
//     questions[counter].answers.forEach(answer => {
//         var button = document.createElement("button")
//         button.innerHTML = answer.text
//         button.classList.add("answer_boxes")
//         if (answer.correct){
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener("click", selectAnswer)
//         answers.appendChild(button)

        


//     })

    
    



// }

// start.addEventListener("click", function(){
//     gameStart()
//     // timerStart()
//     // setText()
       
// })

// // function selectAnswer(){
    
// }






var seconds = document.querySelector("#seconds_left");
var heading = document.querySelector("#text");
var start = document.querySelector("#start")
var description = document.querySelector("#para")
var answerBoxes = document.querySelectorAll(".answer_boxes")
var answers = document.querySelectorAll("#flex_answers")
var buttonOne = document.getElementById("one")
var buttonTwo = document.getElementById("two")
var buttonThree = document.getElementById("three")
var buttonFour = document.getElementById("four")
var result_div = document.querySelector("#result_div")
var result = document.querySelector("#result")
var scoreSubmit = document.querySelector("#hidden")
var initialText = document.querySelector("#initialText")

var myQuestions = [
    {
        question: "Favourite Sport",
        answers: [
            "Basketball",
            "Baseball",
            "Football",
            "Soccor"
        ],
        correctAnswer: "Basketball"

    },
    {
        question: "Favourite food",
        answers: [
            "Pasta",
            "Parmi",
            "KFC",
            "Pizza"
        ],
        correctAnswer: "KFC"

    },
    {
        question: "Favourite drink",
        answers: [
            "sprite",
            "lemonade",
            "milkshake",
            "smoothie"
        ],
        correctAnswer: "sprite"

    }
]



start.addEventListener("click", function(){
    gameStart()
    questionText()
    getAnswer()
    
    // timerStart()
    // setText()
       
})



function gameStart(){
    
    start.style.display = "none"
    heading.innerHTML = ''
    for (var i = 0; i < answerBoxes.length; i++){
        answerBoxes[i].style.display = "block"
    }
    description.innerHTML = " "
    
}

var counter = 0

function questionText(){
    console.log(myQuestions[counter].question)
    heading.innerHTML = myQuestions[counter].question
    buttonOne.innerHTML = myQuestions[counter].answers[0]
    buttonTwo.innerHTML = myQuestions[counter].answers[1]
    buttonThree.innerHTML = myQuestions[counter].answers[2]
    buttonFour.innerHTML = myQuestions[counter].answers[3]
    
    

}


function getAnswer(){
    console.log(myQuestions[counter].question)
    let buttons = document.querySelectorAll(".answer_boxes")

    buttons.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
        var selected = event.target.innerHTML
        
        if (counter != myQuestions.length - 1){
            if (selected === myQuestions[counter].correctAnswer){
                counter++
                questionText()
                result_div.style.display = "block"
                result.innerHTML = "Correct!"
            }
            else {
                counter++
                questionText()
                result_div.style.display = "block"
                result.innerHTML = "Incorrect!"
            }
        
        }
        else {
            if (selected === myQuestions[counter].correctAnswer){
                result_div.style.display = "block"
                result.innerHTML = "Correct!"
                displayEnd()


            }
            else {
                result_div.style.display = "block"
                result.innerHTML = "Incorrect!"
                displayEnd()
            }


            
        }
        
        });

        
        
    });
    


}

function displayEnd(){
    for (var i = 0; i < answerBoxes.length; i++){
        answerBoxes[i].style.display = "none"
    }
    heading.innerHTML = "All Done!"
    initialText.style.textAlign = "left"
    description.innerHTML = "your final score is "
    scoreSubmit.style.display = "block"
}


