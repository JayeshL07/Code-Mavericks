document.addEventListener('DOMContentLoaded', () => {
    // Your JavaScript code here
    const blogCards = document.querySelectorAll('.blog-card');
  
    blogCards.forEach((card) => {
      const readMoreButton = card.querySelector('.read-more-button');
  
      readMoreButton.addEventListener('click', () => {
        window.location.href = 'blog-post.html';
      });
    });
  });

//   use if want to add js to body 
//   const blogCards = document.querySelectorAll('.blog-card');

// blogCards.forEach((card) => {
//   const readMoreButton = card.querySelector('.read-more-button');

//   readMoreButton.addEventListener('click', () => {
//     // Redirect to the blog post page
//     window.location.href = 'blog-post.html';
//   });
// });