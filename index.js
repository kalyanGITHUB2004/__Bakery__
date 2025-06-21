
  let currentSlide = 0;
  const slides = document.querySelectorAll('.home .slide');
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function next() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prev() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  // autoplay every 4 seconds
  setInterval(next, 3000);

  // manual controls
  document.getElementById('next-slide').addEventListener('click', next);
  document.getElementById('prev-slide').addEventListener('click', prev);


document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('search-btn').addEventListener('click', function() {
    var searchInput = document.getElementById('search-input');
    searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('cart-btn').addEventListener('click', function() {
    alert("Redirecting to your cart!");
    setTimeout(function() {
        window.location.href = "cart.html";
    }, 1000);
});

document.getElementById('login-btn').addEventListener('click', function() {
    var loginForm = document.getElementById('login-form');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
});
