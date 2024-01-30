  const blogCards = document.querySelectorAll('.blog-card');

blogCards.forEach((card) => {
  const readMoreButton = card.querySelector('.read-more-button');

  readMoreButton.addEventListener('click', () => {
    // Redirect to the blog post page
    window.location.href = 'blog-post.html';
  });
});