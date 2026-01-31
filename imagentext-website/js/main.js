// ImagenText Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function() {
      // Close other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });

  // Animate elements on scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe feature cards, platform cards, pricing cards
  document.querySelectorAll('.feature-card, .platform-card, .pricing-card, .download-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // Add animate-in styles
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // Typing animation for demo preview
  const typingElement = document.querySelector('.typing-cursor');
  if (typingElement) {
    const fullText = 'Key decisions made regarding Q1 objectives...';
    let index = 0;

    function typeText() {
      if (index < fullText.length) {
        typingElement.textContent = fullText.substring(0, index + 1);
        index++;
        setTimeout(typeText, 50);
      } else {
        // Reset after a pause
        setTimeout(() => {
          index = 0;
          typeText();
        }, 3000);
      }
    }

    // Start typing animation after a delay
    setTimeout(typeText, 2000);
  }

  // Stats counter animation
  const statValues = document.querySelectorAll('.hero-stats .stat-value');

  function animateCounter(element, target) {
    let current = 0;
    const increment = target / 30;
    const duration = 1000;
    const stepTime = duration / 30;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, stepTime);
  }

  // Trigger counter animation when hero is visible
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statValues.forEach(stat => {
          const value = parseInt(stat.textContent);
          if (!isNaN(value)) {
            stat.textContent = '0';
            animateCounter(stat, value);
          }
        });
        heroObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    heroObserver.observe(heroStats);
  }

  // Video placeholder click handler
  const videoPlaceholder = document.querySelector('.video-placeholder');
  if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function() {
      // In production, this would open a video modal or embed
      alert('Demo video coming soon! Check back later.');
    });
  }

  // Preview window hover effect
  const previewWindow = document.querySelector('.preview-window');
  if (previewWindow) {
    previewWindow.addEventListener('mouseenter', function() {
      this.style.transform = 'rotateY(0) rotateX(0) scale(1.02)';
    });

    previewWindow.addEventListener('mouseleave', function() {
      this.style.transform = 'rotateY(-5deg) rotateX(5deg)';
    });
  }

  // Add stagger animation to grids
  function addStaggerAnimation(selector, delay = 100) {
    const items = document.querySelectorAll(selector);
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * delay}ms`;
    });
  }

  addStaggerAnimation('.feature-card');
  addStaggerAnimation('.platform-card');
  addStaggerAnimation('.pricing-card');
  addStaggerAnimation('.download-card');
});

// Console Easter egg
console.log('%c ImagenText ', 'background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; font-size: 24px; padding: 10px 20px; border-radius: 8px;');
console.log('%c Built with AI, for extracting text from images with AI. ', 'color: #64748b; font-size: 14px;');
console.log('%c https://imagentext.com ', 'color: #6366f1; font-size: 12px;');
