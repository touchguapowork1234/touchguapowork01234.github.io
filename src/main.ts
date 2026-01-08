// Create floating particles
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random size between 2 and 8 pixels
    const size = Math.random() * 6 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation delay and duration
    particle.style.animationDelay = `${Math.random() * 20}s`;
    particle.style.animationDuration = `${15 + Math.random() * 15}s`;

    container.appendChild(particle);
  }
}

// FAQ Accordion
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  for (const item of faqItems) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        // Close all other items
        for (const otherItem of faqItems) {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        }

        // Toggle current item
        item.classList.toggle('active');
      });
    }
  }
}

// Mobile menu toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    const menuLinks = mobileMenu.querySelectorAll('a');
    for (const link of menuLinks) {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    }
  }
}

// Section dots navigation
function initSectionDots() {
  const dots = document.querySelectorAll('.section-dots .dot');
  const sections = document.querySelectorAll('section');

  // Update active dot on scroll
  function updateActiveDot() {
    let currentSection = '';

    for (const section of sections) {
      const sectionElement = section as HTMLElement;
      const sectionTop = sectionElement.offsetTop;
      const sectionHeight = sectionElement.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id') || '';
      }
    }

    for (const dot of dots) {
      dot.classList.remove('active');
      if (dot.getAttribute('data-section') === currentSection) {
        dot.classList.add('active');
      }
    }
  }

  window.addEventListener('scroll', updateActiveDot);
  updateActiveDot();
}

// Smooth scroll for navigation links
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  for (const link of navLinks) {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    });
  }
}

// Navbar background on scroll - disabled, keeping consistent style
function initNavbarScroll() {
  // No longer changing navbar background on scroll
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  initFAQ();
  initMobileMenu();
  initSectionDots();
  initSmoothScroll();
  initNavbarScroll();
});
