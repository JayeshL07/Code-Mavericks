

document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtns = document.querySelectorAll(".read-more-button");

  readMoreBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const blogCard = btn.closest(".blog-card");
      const hiddenContent = blogCard.querySelector(".hidden");

      if (window.getComputedStyle(hiddenContent).display === "none") {
        hiddenContent.style.display = "block";
        animateText(hiddenContent);
        btn.innerHTML = "Read Less";
      } else {
        hiddenContent.style.display = "none";
        btn.innerHTML = "Read More";
      }
    });
  });

  function animateText(element) {
    const text = element.textContent;
    element.innerHTML = "";

    const lines = text.split("\n");

    lines.forEach(function (line, index) {
      setTimeout(function () {
        element.innerHTML += line + "<br>";
      }, index * 70); // You can adjust the interval (500 milliseconds in this example)
    });

    element.style.transition = "opacity 0.5s linear";
    element.style.opacity = 1;
  }
});


document.addEventListener("DOMContentLoaded", function () {
  var blogLink = document.querySelector('a[href="#blogs-section"]');

  blogLink.addEventListener("click", function (e) {
    e.preventDefault();

    var blogsSection = document.getElementById("blogs-section");

    // Scroll smoothly to the blogs section
    blogsSection.scrollIntoView({ behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('section');

  document.querySelectorAll('nav a, span a, footer a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          sections.forEach(section => {
              section.style.display = 'none';
          });

          const targetSection = document.getElementById(targetId);
          targetSection.style.display = 'block';

          // Scroll to the top of the target section with smooth scrolling
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
  });
});


// script for login and sign in 








//script for experts
function findExperts() {
  const selectedLocation = document.getElementById('location').value;
  const experts = [
    { name: 'Dr. Patel', specialty: 'Psychiatrist', location: 'Pune', contact: 'drpatel@example.com' },
    { name: 'Dr. Deshmukh', specialty: 'Clinical Psychologist', location: 'Pune', contact: 'drdeshmukh@example.com' },
    { name: 'Dr. Sharma', specialty: 'Clinical Psychologist', location: 'Pune', contact: 'drsharma@example.com' },
    { name: 'Dr. Sharma', specialty: 'Clinical Psychologist', location: 'Pune', contact: 'drsharma@example.com' },
    { name: 'Dr. Gupta', specialty: 'Clinical Psychologist', location: 'Mumbai', contact: 'drgupta@example.com' },
    { name: 'Dr. Kumar', specialty: 'Clinical Psychologist', location: 'Mumbai', contact: 'drkumar@example.com' },
    { name: 'Dr. Deshpande', specialty: 'Clinical Psychologist', location: 'Mumbai', contact: 'dreshpande@example.com' }
    // Add more experts here
  ];

  // Filter experts based on the selected location
  const filteredExperts = experts.filter(expert => expert.location === selectedLocation);

  // Display expert list
  const expertList = document.querySelector('.expert-list');
  expertList.innerHTML = ''; // Clear existing content

  filteredExperts.forEach((expert) => {
    const expertItem = document.createElement('div');
    expertItem.classList.add('expert-item');
    expertItem.innerHTML = `
      <h3>${expert.name}</h3>
      <p>Specialty: ${expert.specialty}</p>
      <p>Contact: ${expert.contact}</p>
    `;
    expertList.appendChild(expertItem);
  });

  // Update the embedded map URL based on the selected location
  const map = document.querySelector('.map');
  map.innerHTML = getEmbeddedMap(selectedLocation);
}

// Function to get the embedded map based on the selected location
function getEmbeddedMap(location) {
  if (location === 'Pune') {
    return '<iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d121067.51147720689!2d73.76674977842882!3d18.512639019032644!3m2!1i1024!2i768!4f13.1!2m1!1smental%20health%20experts%20pune!5e0!3m2!1sen!2sin!4v1708000002416!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  } else if (location === 'Mumbai') {
    return '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d170655.49287580253!2d72.76813426710646!3d19.0642098995867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smental%20health%20experts%20mumbai!5e0!3m2!1sen!2sin!4v1708000096863!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  } else {
    return ''; // Default to an empty string for other locations
  }
}








var currentQuestion = 1;
var totalScore = 0;
var ind=1;

function showQuestion() {
    document.getElementById("question-number").innerHTML = currentQuestion;
    var questionContainer = document.getElementById("question-container");
    var questionText = document.getElementById("question-text");
    var optionsContainer = document.getElementById("options-container");
    var submitButton = document.getElementById("submit-button");
  

    switch (currentQuestion) {
        case 1:
            questionText.innerHTML = "Little interest or pleasure in doing things?";
            break;
        case 2:
            questionText.innerHTML = "Feeling down, depressed, or hopeless?";
            break;
        case 3:
            questionText.innerHTML = "Trouble falling or staying asleep, or sleeping too much?";
            break;
        case 4:
            questionText.innerHTML = "Feeling tired or having little energy?";
            break;
        case 5:
            questionText.innerHTML = "Poor appetite or overeating?";
            break;
        case 6:
            questionText.innerHTML = "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?";
            break;
        case 7:
            questionText.innerHTML = "Trouble concentrating on things, such as reading the newspaper or watching television?";
            break;
        case 8:
            questionText.innerHTML = "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?";
            break;
        case 9:
            questionText.innerHTML = "Thoughts that you would be better off dead, or of hurting yourself in some way?";
            submitButton.value = "Get Results";
            break;
    }

    // Display options
    optionsContainer.innerHTML = "";
    for (var i = 0; i < 4; i++) {
        var optionButton = document.createElement("button");
        optionButton.type = "button";
        optionButton.innerHTML = getOptionLabel(i);
        optionButton.onclick = function (index) {
            return function () {
                handleButtonClick(index);
            };
        }(i);
        optionsContainer.appendChild(optionButton);


        optionButton.classList.add("button");
        optionsContainer.appendChild(optionButton);

    }

    // Show question container
    questionContainer.style.display = "block";
}

function handleButtonClick(index) {
    var selectedValue = index;
    totalScore += parseInt(selectedValue);

    // Automatically move to the next question
    nextQuestion();
}

function nextQuestion() {
    var selectedButton = document.querySelector("#options-container button[style='background-color: lightblue;']");
    if (selectedButton) {
        selectedButton.style.backgroundColor = ""; // Reset the background color
    }

    for(var i=0;i<1;i++){

    currentQuestion++;
    if (currentQuestion <= 9) {
        showQuestion();
    } else {
        if (ind < 10) {
            break;
        } else {
            calculateScore();
            break; // Call the calculateScore function when all questions are answered
        }
    }

    ind=ind+1;
    }
}

var getResultsButton = document.getElementById("submit-button");
getResultsButton.addEventListener("click", function () {
    calculateScore();
});


function calculateScore() {
    var resultContainer = document.getElementById("result");
    if (totalScore <= 9) {
        resultContainer.innerHTML = "Your total score is <strong class=strong1>" + totalScore + "</strong> . You have <strong class=strong1>minimal depressive symptoms</strong>.";
    } else if (totalScore <= 18) {
        resultContainer.innerHTML = "Your total score is <strong class=strong2>" + totalScore + "</strong> . You may be experiencing <strong class=strong2>mild to moderate depressive symptoms</strong>. Consider seeking support.";
    } else {
        resultContainer.innerHTML = "Your total score is <strong class=strong3>" + totalScore + "</strong> . You may be experiencing <strong class=strong3>significant depressive symptoms. Please seek professional help</strong>.";
    }
}

function getOptionLabel(index) {
    switch (index) {
        case 0:
            return "Not at all";
        case 1:
            return "Several days";
        case 2:
            return "More than half the days";
        case 3:
            return "Nearly every day";
    }
}

showQuestion();