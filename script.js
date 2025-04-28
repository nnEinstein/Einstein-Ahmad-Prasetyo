const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Klik di luar navbar untuk menghilangkan class 'active'
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

  //Efek slide
  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.slide-left, .slide-right, .slide-top, .slide-bottom');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('active');
        }
        // Untuk animasi berulang saat scroll lagi:
        else {
            entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0.3
    });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });

// Certificate modal show/hide
(() => {
  const cta = document.querySelector('.skills-content .cta');
  const modal = document.getElementById('show-certificate');
  const img = modal.querySelector('img');

  // Open modal on .cta click
  cta.addEventListener('click', e => {
    e.preventDefault();
    modal.style.display = 'block';
  });

  // Close modal when clicking outside image
  modal.addEventListener('click', e => {
    if (e.target !== img) modal.style.display = 'none';
  });
})();

// Global spark effect on click
(function() {
    document.addEventListener('click', e => {
      const sparkCount = 20;           // number of sparks
      const sparkSize  = 5;            // size of each spark
      const duration   = 600;          // animation duration (ms)
  
      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('span');
        spark.classList.add('spark');
        spark.style.width  = spark.style.height = `${sparkSize}px`;
  
        // random direction and distance
        const angle = Math.random() * 2 * Math.PI;
        const distance = 50 + Math.random() * 30;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
  
        // position at click
        spark.style.left = `${e.clientX - sparkSize/2}px`;
        spark.style.top  = `${e.clientY - sparkSize/2}px`;
  
        // set custom CSS properties for animation
        spark.style.setProperty('--dx', `${dx}px`);
        spark.style.setProperty('--dy', `${dy}px`);
        spark.style.animationDuration = `${duration}ms`;
  
        document.body.appendChild(spark);
  
        // remove after animation
        spark.addEventListener('animationend', () => spark.remove());
      }
    });
  })();