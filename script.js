

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

  document.querySelectorAll('nav a, .btn a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          sections.forEach(section => {
              section.style.display = 'none';
          });

          document.getElementById(targetId).style.display = 'block';
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