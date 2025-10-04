/**
 * Main JavaScript File
 * Expert Tehnic în Construcții
 */

// ============================================
// Mobile Menu Toggle
// ============================================

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });
}

// ============================================
// Smooth Scroll for Navigation Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ============================================
// Header Scroll Effect
// ============================================

const header = document.getElementById("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// ============================================
// Lazy Loading Images
// ============================================

const lazyImages = document.querySelectorAll(".lazy");

const lazyImageObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;

        // For img elements
        if (img.tagName === "IMG") {
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          img.classList.add("loaded");
        }

        observer.unobserve(img);
      }
    });
  },
  {
    rootMargin: "50px 0px",
    threshold: 0.01,
  }
);

lazyImages.forEach((image) => {
  lazyImageObserver.observe(image);
});

// ============================================
// Scroll Reveal Animation
// ============================================

const revealElements = document.querySelectorAll(
  ".service-card, .equipment-card, .target-card, .faq-item"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal", "active");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});

// ============================================
// FAQ Accordion
// ============================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all FAQ items
    faqItems.forEach((faq) => {
      faq.classList.remove("active");
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// ============================================
// Calculator Functionality (RON/Year)
// ============================================

const calculatorForm = document.getElementById("calculator-form");
const calculatorResult = document.getElementById("calculator-result");
const baseCostElement = document.getElementById("base-cost");
const additionalCostElement = document.getElementById("additional-cost");
const totalCostElement = document.getElementById("total-cost");

// Pricing structure (LEI per year) - UCE P130-2025
const pricingRates = {
  bloc: {
    baseCost: 3990, // LEI per year
  },
  casa: {
    baseCost: 2990, // LEI per year
  },
  hala: {
    baseCost: 5490, // LEI per year
  },
  birouri: {
    baseCost: 4490, // LEI per year
  },
};

// Additional services (LEI)
const additionalServices = {
  instrumentare: 1500, // LEI (1 sesiune instrumentare de bază)
};

if (calculatorForm) {
  calculatorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const propertyType = document.getElementById("property-type").value;
    const surfaceArea = parseFloat(
      document.getElementById("surface-area").value
    );
    const instrumentare = document.getElementById("instrumentare")
      ? document.getElementById("instrumentare").checked
      : false;

    if (!propertyType || !surfaceArea) {
      alert("Te rugăm să completezi toate câmpurile obligatorii!");
      return;
    }

    // Calculate base cost (UCE P130-2025)
    const rates = pricingRates[propertyType];
    let baseCost = rates.baseCost;

    // Add cost based on surface (15% per 100 m²)
    const surfaceFactor = Math.ceil(surfaceArea / 100) * 0.15;
    baseCost = Math.round(baseCost * (1 + surfaceFactor));

    // Calculate additional costs
    let additionalCost = 0;
    if (instrumentare) {
      additionalCost += additionalServices.instrumentare;
    }

    // Calculate total
    const totalCost = baseCost + additionalCost;

    // Display results
    baseCostElement.textContent = `${baseCost.toLocaleString("ro-RO")} lei`;
    additionalCostElement.textContent = `${additionalCost.toLocaleString(
      "ro-RO"
    )} lei`;
    totalCostElement.textContent = `${totalCost.toLocaleString("ro-RO")} lei`;

    // Show result with animation
    calculatorResult.classList.remove("hidden");
    calculatorResult.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // Add animation
    calculatorResult.style.opacity = "0";
    setTimeout(() => {
      calculatorResult.style.transition = "opacity 0.5s ease-in-out";
      calculatorResult.style.opacity = "1";
    }, 100);
  });
}

// ============================================
// Contact Form Handler (mailto)
// ============================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Create mailto link
    const subject = encodeURIComponent("Solicitare Servicii - " + name);
    const body = encodeURIComponent(
      `Nume: ${name}\n` +
        `Email: ${email}\n` +
        `Telefon: ${phone}\n\n` +
        `Mesaj:\n${message}\n\n` +
        `---\n` +
        `Trimis de pe website la: ${new Date().toLocaleString("ro-RO")}`
    );

    const mailtoLink = `mailto:contact@expert-tehnic.ro?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    const successMessage = document.createElement("div");
    successMessage.className =
      "mt-4 p-4 bg-emerald/10 border-2 border-emerald rounded-lg text-emerald font-semibold text-center";
    successMessage.textContent = "Se deschide clientul tău de email...";
    contactForm.appendChild(successMessage);

    // Remove success message after 3 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 3000);
  });
}

// ============================================
// Floating Buttons Animation on Scroll
// ============================================

const floatingButtons = document.querySelector(".floating-buttons");

if (floatingButtons) {
  window.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 300) {
      floatingButtons.style.opacity = "1";
      floatingButtons.style.transform = "translateY(0)";
    } else {
      floatingButtons.style.opacity = "0";
      floatingButtons.style.transform = "translateY(20px)";
    }
  });

  // Initial state
  floatingButtons.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  if (window.pageYOffset <= 300) {
    floatingButtons.style.opacity = "0";
    floatingButtons.style.transform = "translateY(20px)";
  }
}

// ============================================
// Active Navigation Link Highlight
// ============================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ============================================
// Performance: Debounce Scroll Events
// ============================================

function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Apply debounce to scroll-heavy functions
const debouncedScrollHandler = debounce(() => {
  // Any additional scroll handlers can go here
});

window.addEventListener("scroll", debouncedScrollHandler);

// ============================================
// Accessibility: Keyboard Navigation
// ============================================

// Trap focus in mobile menu when open
if (mobileMenu) {
  const focusableElements = mobileMenu.querySelectorAll(
    "a[href], button:not([disabled])"
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  mobileMenu.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }

    if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      mobileMenuBtn.focus();
    }
  });
}

// ============================================
// Console Welcome Message
// ============================================

console.log(
  "%c👷 Expert Tehnic în Construcții %c\n" +
    "Website dezvoltat cu Tailwind CSS & Vanilla JavaScript\n" +
    "Pentru asistență tehnică: contact@expert-tehnic.ro",
  "color: #0E7B6B; font-size: 18px; font-weight: bold;",
  "color: #666; font-size: 12px;"
);

// ============================================
// Page Load Complete
// ============================================

window.addEventListener("load", () => {
  console.log("✅ Website loaded successfully");

  // Remove any loading states
  document.body.classList.add("loaded");
});

// ============================================
// Service Worker Registration (Optional for PWA)
// ============================================

if ("serviceWorker" in navigator) {
  // Uncomment to enable service worker for offline functionality
  /*
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
    */
}
