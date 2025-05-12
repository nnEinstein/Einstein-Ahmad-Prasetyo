// Hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');
// certificate python
const pythonCta = document.querySelector('#python-btn');
const pythonCertificate = document.querySelector('#show-python');
// certificate javascript
const jsCta = document.querySelector('#js-btn');
const jsCertificate = document.querySelector('#show-javascript');

// certificate linux

// certificate networking
const networkCta = document.querySelector('#networking-btn');
const networkCertificate = document.querySelector('#show-networking');

// certificate machine learning
const mlCta = document.querySelector('#ml-btn');
const mlCertificate = document.querySelector('#show-ml');

// variabel remove certificate
const containerRemove = document.querySelector('.ctr-container');

// menambahkan kelas active hamburger
hamburger.onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

// menambahkan kelas active python certificate
pythonCta.onclick = (e) => {
  pythonCertificate.classList.toggle('active');
  e.preventDefault();
};

// menambahkan kelas active javascript certificate
jsCta.onclick = (e) => {
  jsCertificate.classList.toggle('active');
  e.preventDefault();
};

networkCta.onclick = (e) => {
  networkCertificate.classList.toggle('active');
  e.preventDefault();
};

mlCta.onclick = (e) => {
  mlCertificate.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar navbar untuk menghilangkan class 'active'
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
    if (!pythonCta.contains(e.target) && !containerRemove.contains(e.target)) {
      pythonCertificate.classList.remove('active');
    }
    if (!jsCta.contains(e.target) && !containerRemove.contains(e.target)) {
      jsCertificate.classList.remove('active');
    }
    if (!networkCta.contains(e.target) && !containerRemove.contains(e.target)) {
      networkCertificate.classList.remove('active');
    }
    if (!mlCta.contains(e.target) && !containerRemove.contains(e.target)) {
      mlCertificate.classList.remove('active');
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