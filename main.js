document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('video');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    });
    videos.forEach((video) => {
      observer.observe(video);
    });
  });
  
  const btn = document.querySelector('.nav-button');
  const nav = document.querySelector('nav');
  
  btn.addEventListener('click', () => {
    nav.classList.toggle('toggle');
  });