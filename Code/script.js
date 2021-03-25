
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
        question: "What does HTML stand for?",
        answers: [
            "Hyperlinks and Text Markup Language",
            "Hypertext Markup Language",
            "Hyper Tuning Merc Land",
            "His teddy made lemonade"
        ],
        correctAnswer: "Hypertext Markup Language"

    },
    {
        question: "What goes inside the <> to link a stylesheet to HTML",
        answers: [
            "link",
            "div",
            "body",
            "style"
        ],
        correctAnswer: "<link>"

    },
    {
        question: "When was Javascript created?",
        answers: [
            "2001",
            "1981",
            "2010",
            "1995"
        ],
        correctAnswer: "1995"

    },
    {
        question: "Who developed HTML?",
        answers: [
            "Lee Andersons",
            "Bob Kahn",
            "Tim Berners-Lee",
            "Larry Page"
        ],
        correctAnswer: "Tim Berners-Lee"

    },
    {
        question: "How do you create a window Alert in Javascript?",
        answers: [
            "display('Hello')",
            "window('Hello')",
            "alert('Hello')",
            "popUp('Hello')"
        ],
        correctAnswer: "alert('Hello')"

    },
    {
        question: " Why wont this following function work? <br>function helloWorld{ console.log('hello world')}",
        answers: [
            "missing () after helloWorld",
            "[] instead of {}",
            "should be log.console",
            "function before helloWorld"
        ],
        correctAnswer: "missing () after helloWorld"

    }
]



start.addEventListener("click", function(){
    timer()
    gameStart()
    questionText()
    getAnswer()
       
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
                scoreDecrease()
                questionText()
                result_div.style.display = "block"
                result.innerHTML = "Incorrect!"
            }
        
        }
        else {
            if (selected === myQuestions[counter].correctAnswer){
                counter++
                finalScore = countdown
                result_div.style.display = "block"
                result.innerHTML = "Correct!"   
                displayEnd()
                


            }
            else {
                scoreDecrease()
                finalScore = countdown
                counter++
                result_div.style.display = "block"
                result.innerHTML = "Incorrect!"
                displayEnd()
                
                
            }


            
        }
        
        });

        
        
    });
    


}




var countdown = 75;
var finalScore = -1
function timer(){
    
    seconds.innerHTML = countdown
    var timeInterval = setInterval(function () {
        
        if (finalScore != -1){
            seconds.innerHTML = countdown
            return;
        }
        
        else if(countdown > 0) {
            seconds.innerHTML = countdown;
            countdown--;
          
        }
        
    
        else if (countdown === 0){
            seconds.innerHTML = countdown;
            clearInterval(timeInterval);
            timedOut()
          
        }
    
    
    
      }, 1000);
    
    

}

function scoreDecrease(){
    countdown -= 15
}

function timedOut(){
    finalScore = 0
    displayEnd()
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



// Index2.html (highscore page):

var highscoreList = document.querySelector("#highscore_list");
var highscores = [];
var initials = [];
var enterInitials = document.querySelector("#submit");
var mainScreen = document.querySelector("#mainScreen");
var hsScreen = document.querySelector("#highscorePage")

init()

scoreSubmit.addEventListener("submit", function(event){
    event.preventDefault()
    var textEntered = enterInitials.value.trim()
    if (textEntered === "") {
        return;
    }
    
    initials.push(textEntered)
    enterInitials.value = ""

    highscores.push(finalScore.toString())
    storeInfo()
    renderInitials()
    mainScreen.style.display = "none"
    hsScreen.style.display = "block"
    


})

function storeInfo(){
    localStorage.setItem("initials", JSON.stringify(initials));
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

function init(){
    var storedInitials = JSON.parse(localStorage.getItem("initials"));
    if (storedInitials != null){
        initials = storedInitials
    }

    var storedHighscores = JSON.parse(localStorage.getItem("highscores"));
    if (storedHighscores != null){
        highscores = storedHighscores
    }

    
}

function renderInitials(){
    highscoreList.innerHTML = ""
    if (initials.length > 0){
        for (var i = 0; i < initials.length; i++) {
            var initialsText = initials[i];
            var highscoreText = highscores[i]
            var number = i+1
            
            var li = document.createElement("li");
            li.textContent = number +". " + initialsText + " - " + highscoreText;

            highscoreList.appendChild(li)
        }
    }
    else{
        return;
    }
}



var goBack = document.querySelector("#goBack")
var clearScores = document.querySelector("#clearHighscores")
var stylingMainText = document.querySelector("#initialText")
var stylingMainStart = document.querySelector(".start")

goBack.addEventListener("click", function(){
    location.reload();
})

clearScores.addEventListener("click", function(){
    highscores = []
    initials = []
    storeInfo()
    renderInitials()


})

var viewHighscores = document.querySelector("#highscores")


viewHighscores.addEventListener("click", function(){
    mainScreen.style.display = "none";
    hsScreen.style.display = "block";
    renderInitials()
})