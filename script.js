// Theme Toggle with Safe Event Listeners
const lightModeButton = document.getElementById("lightMode");
const darkModeButton = document.getElementById("darkMode");
const body = document.body;

if (lightModeButton && darkModeButton) {
  lightModeButton.addEventListener("click", () => {
    body.classList.remove("dark");
  });

  darkModeButton.addEventListener("click", () => {
    body.classList.add("dark");
  });
}

// Generate Feature Cards
const featuresGrid = document.querySelector(".features-grid");

const features = [
  {
    title: "CARD MANAGEMENT SYSTEM",
    description: "The CMS REST API's enable you to integrate your systems with Cuscal's CMS programmatically.",
    image: "https://files.readme.io/4e043921cffb69fd6f27b27888f3f61ee9fa2767610cc5373bf8517faf28fd2b-issuing-cms.png",
    Guides: "https://www.developerhub.cuscal.com.au/hub/docs/issuing-cms",
    apiReference: "https://www.developerhub.cuscal.com.au/hub/reference/overview",
  },
  {
    title: "PAYMENTS",
    description: "The NPP is a collaboratively built Australian banking industry payments platform that provides real-time clearing and settlement of payments to the Australian marketplace.",
    image: "https://files.readme.io/1e97df3eeed8d10fca973e245ff2f3778ac5611b2f785d1497333e81cf80198a-payments.png",
    Guides: "https://www.developerhub.cuscal.com.au/hub/docs/getting-started",
    apiReference: "https://www.developerhub.cuscal.com.au/hub/reference/account-maintenance",
  },
  {
    title: "DATA HOLDER",
    description: "The Cuscal solution provides Data Holders (Clients) with a set of services that allow Cuscal to provide all CDR-facing activities on their behalf.",
    image: "https://files.readme.io/2be616302122adb8a5b9c9854558546b31a9873f045cabd6edf505b0416fdc13-Dataholder.png",
    Guides: "",
    apiReference: "",
  },
];

if (featuresGrid) {
  features.forEach((feature) => {
    const featureCard = document.createElement("div");
    featureCard.className = "feature-card";

    let buttonsHTML = [];
    
    // If Guides exists, show the button; otherwise, show "Coming Soon"
    if (feature.Guides) {
      buttonsHTML.push(`<button class="button button-link guides-button" data-url="${feature.Guides}">Guides</button>`);
    } else {
      buttonsHTML.push(`<span class="coming-soon">Coming Soon...</span>`);
    }

    // If API Reference exists, show the button
    if (feature.apiReference) {
      buttonsHTML.push(`<button class="button button-link api-button" data-url="${feature.apiReference}">API Reference</button>`);
    }

    let buttonsSection = buttonsHTML.join(" | ");

    featureCard.innerHTML = `
      <div class="feature-image">
          <img src="${feature.image}" alt="${feature.title}" width="300" height="200">
      </div>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
      <div class="buttons">${buttonsSection}</div>
    `;

    featuresGrid.appendChild(featureCard);
  });


  // Attach event listeners for dynamically created buttons
  document.querySelectorAll(".guides-button").forEach((button) => {
    button.addEventListener("click", function () {
      const url = this.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });

  document.querySelectorAll(".api-button").forEach((button) => {
    button.addEventListener("click", function () {
      const url = this.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
}

// Smooth Scroll with Valid Target Check
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Add scroll-based animations with Element Check
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".feature-card, .transaction-card").forEach((element) => {
  observer.observe(element);
});

// Handle button hover effects
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-2px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});

// Buttons with Existence Check
const guidesBtn = document.getElementById("guidesBtn");
const apiBtn = document.getElementById("apiBtn");
const loginBtn = document.getElementById("login8");

if (guidesBtn) {
  guidesBtn.addEventListener("click", () => {
    window.open("https://www.developerhub.cuscal.com.au/hub/docs", "_blank");
  });
}

if (apiBtn) {
  apiBtn.addEventListener("click", () => {
    window.open("https://www.developerhub.cuscal.com.au/hub/reference", "_blank");
  });
}

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    window.open("https://www.developerhub.cuscal.com.au/login?redirect_uri=/", "_blank");
  });
}



