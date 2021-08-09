questions = [
  {
    question: "1) what is full form of html?",
    options: [
      "Hyper text making language",
      "Hyper text markup language",
      "Hyper text marking language",
      "Hyper test marking language",
    ],
    answer: "Hyper text markup language",
  },
  {
    question: "2) what is full form of css?",
    options: [
      "cascading style sheets",
      "cascading style syntax",
      "cascading syntax sheet",
      "None of these",
    ],
    answer: "cascading style sheets",
  },
  {
    question:
      "3) Which of the following element is responsible for making the text bold in HTML?",
    options: ["<pre>", "<b>", "<br>", "<h1>"],
    answer: "<b>",
  },
  {
    question:
      "4) How to create an ordered list (a list with the list items in numbers) in HTML?",
    options: ["<ul>", "<ol>", "<li>", "<i>"],
    answer: "<ol>",
  },
  {
    question: "5) The function and  var are known as:",
    options: ["Keyword", "datatypes", "declaration statements", "prototypes"],
    answer: "declaration statements",
  },
  {
    question:
      "6) Which one of the following operator is used to check weather a specific property exists or not:",
    options: ["Exist", "exists", "within", "in"],
    answer: "in",
  },
  {
    question:
      "7) ______ selectors which are used to specify a rule to bind to a particular unique element?",
    options: ["id", "class", "tag", "Both (b) and (c)"],
    answer: "id",
  },
  {
    question: "8) In css what does font-size can be called as?",
    options: ["selector", "Rule", "Property", "Property-name"],
    answer: "Property-name",
  },
  {
    question: "9) External stylesheets are stored in CSS files?",
    options: ["True", "False", "can be true or false", "can not say"],
    answer: "True",
  },
  {
    question:
      "10) The property in CSS used to change the text color of an element is?",
    options: ["bgcolor", "color", "background-color", "All of the above"],
    answer: "color",
  },
];

let heading = document.getElementById("heading");
let question_container = document.getElementById("question_container");
let title = document.getElementById("title");
let options = document.getElementById("options");
let result = document.getElementById("result");
let submit = document.getElementById("submit");
let next = document.getElementById("next");
let answersheet = document.getElementById("answersheet");
let restart = document.getElementById("restart");

let score = 0;
let question;
let current_question = 0;

submit.addEventListener("click", function (event) {
  let options = document.getElementsByName("option"); // we gave the name as option

  let checked_answer = "";

  options.forEach(function (option, index) {
    if (option.checked) checked_answer = index;
  });

  let selected_option = question.options[checked_answer];

  let is_right = question.answer === selected_option;
  //console.log(is_right);

  if (checked_answer === "") {
    alert("Plz Select an option");
    return;
  }

  if (is_right) {
    submit.style.display = "none";
    result.innerText = "Correct";
    next.style.display = "block";
    result.classList.add("correct");
    score++;
  } else {
    submit.style.display = "none";
    result.innerText = "In Correct";
    next.style.display = "block";
    result.classList.add("incorrect");
  }
  // console.log("-------", current_question, "-------");
  if (current_question === 9) showAnswerSheet();
  //submit();
});

next.addEventListener("click", function () {
  result.classList.remove("correct");
  result.classList.remove("incorrect");

  current_question++;

  result.setAttribute("class", ""); // This will simpy remove the class whatever class was added to result element
  result.innerText = "";

  options.innerHTML = "";

  createQuestion();

  submit.style.display = "block";
  next.style.display = "none";

  //next();

  //console.log(current_question);
});

// functions

function createQuestion() {
  question = questions[current_question];
  title.innerText = question.question;

  next.style.display = "none";

  question.options.forEach((option, index) => {
    let radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "option");

    let label = document.createElement("label");
    label.innerText = option;

    let list_item = document.createElement("li");

    list_item.appendChild(radio);
    list_item.appendChild(label);

    options.appendChild(list_item);
  });
}
createQuestion();

function showAnswerSheet() {
  question_container.style.display = "none";
  answersheet.style.display = "block";
  // restart.style.display = "block";

  heading.innerText = `score:${score}`;

  let answer_key = document.createElement("h2");
  answer_key.innerText = "Answer Key";

  answersheet.appendChild(answer_key);

  let list = document.createElement("ol");

  questions.forEach((value) => {
    let list_items = document.createElement("li");
    list_items.innerText = `${value.question} - ${value.answer}`;
    list.appendChild(list_items);
  });
  answersheet.appendChild(list);
  // let button = document.createElement("button");
  // button.innerText = "restart";

  restart.addEventListener("click", function () {
    reset();
    createQuestion();
    answer_key.innerText = "";
    list.innerText = "";
  });
}

function reset() {
  score = 0;
  current_question = 0;
  answersheet.style.display = "none";
  question_container.style.display = "block";
  heading.innerText = "Quiz";
  submit.style.display = "block";
  next.style.display = "none";
  result.innerText = "";
  result.setAttribute("class", "");
  options.innerText = "";
}
