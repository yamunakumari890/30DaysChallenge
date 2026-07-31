const quiz = [
  {
  question: " 1. What is the primary function of a computer?",
  options: [
    "To perform calculations ",
    "To process and store data",
    "To connect to the internet",
    "To play games"
  ],
  answer: "To process and store data"
},
{
  question: " 2. Which of the following is NOT a type of computer?",
  options: [
    "Supercomputer",
    "Smartphone",
    "Microwave",
    "Laptop"
  ],
  answer: "Microwave"
},
{
  question: " 3. What does CPU stand for in computing?",
  options: [
    "Central Processing Unit",
    "Computer Power Unit",
    "Central Program Utility",
    "Core Processing Unit"
  ],
  answer:  "Central Processing Unit"
},
{
question: " 4. What was the name of the first programmable computer?",
options: [
 "ENIAC",
 "UNIVAC",
 "Z1",
 "IBM 701"
],
answer: "Z1"
},
{
question: " 5. Which component is considered the brain of the computer?",
  options: [
  "GPU",
  "CPU",
  "RAM",
  "Hard Drive"
  ],
  answer: "CPU"
},
{
  question: " 6. What is the purpose of RAM in a computer?",
  options: [
    "Long-term storage",
    "Temporary storage for running applications",
    "Processing graphics",
    "Connecting to the internet"
  ],
  answer: "Temporary storage for running applications"
},
{
  question: " 7. Who is known as the Father of Computers?",
  options: [
    "Charles Babbage",
    "Alan Turing",
    "Bill Gates",
    "Steve Jobs"
  ],
  answer:   "Charles Babbage"
},
  {
    question: " 8. What is the smallest unit of data in a computer?",
    options: [
      "Byte",
      "Bit",
      "Kilobyte",
      "Megabyte"
    ],
    answer: "Bit"
  },


];

let currentQuestion = 0;
let score = 0;

function showQuestion(){

    document.getElementById("question").innerText =
    quiz[currentQuestion].question;

    let optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    quiz[currentQuestion].options.forEach(function(option){

        optionsDiv.innerHTML += `
        <label class="option">
            <input type="radio" name="answer" value="${option}">
            ${option}
        </label><br>
        `;

    });

}

function nextQuestion(){

    let selected = document.querySelector('input[name="answer"]:checked');

    if(selected == null){
        alert("Please select an answer.");
        return;
    }

    if(selected.value === quiz[currentQuestion].answer){
        score++;
    }

    currentQuestion++;

    if(currentQuestion < quiz.length){

        showQuestion();

    }
    else{

        document.querySelector(".container").innerHTML = `
        <h1>🎉 Quiz Completed!</h1>

        <h2>Your Score : ${score}/${quiz.length}</h2>

        <button onclick="location.reload()">
        Restart Quiz
        </button>
        `;
    }

    document.getElementById("score").innerText =
    "Score : " + score;

}

showQuestion();