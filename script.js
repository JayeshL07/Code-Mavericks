

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

  document.querySelectorAll('nav a').forEach(anchor => {
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



// SIGN IN BASIC SCRIPT  


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});