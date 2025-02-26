// Theme Toggle
const lightModeButton = document.getElementById("lightMode")
const darkModeButton = document.getElementById("darkMode")
const body = document.body

lightModeButton.addEventListener("click", () => {
  body.classList.remove("dark")
})

darkModeButton.addEventListener("click", () => {
  body.classList.add("dark")
})

// Generate Feature Cards
const featuresGrid = document.querySelector(".features-grid")
const features = [
  {
    title: "Feature 1",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon-02APsn8MN64IGD8xBzrXvCs6M32yk8.png",
  },
  {
    title: "Feature 2",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20(1)-918kO8WcZ3jWb1w5pHmfGkGah36ezY.png",
  },
  {
    title: "Feature 3",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20(2)-SLHs9dXlUtprKx9ogTY0JBnJlUkE0C.png",
  },
  {
    title: "Feature 4",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon-02APsn8MN64IGD8xBzrXvCs6M32yk8.png",
  },
  {
    title: "Feature 5",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20(1)-918kO8WcZ3jWb1w5pHmfGkGah36ezY.png",
  },
  {
    title: "Feature 6",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20(2)-SLHs9dXlUtprKx9ogTY0JBnJlUkE0C.png",
  },
]

features.forEach((feature) => {
  const featureCard = document.createElement("div")
  featureCard.className = "feature-card"
  featureCard.innerHTML = `
        <div class="feature-image">
            <img src="${feature.image}" alt="${feature.title}" width="300" height="200">
        </div>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
        <button class="button button-link">Learn More</button>
    `
  featuresGrid.appendChild(featureCard)
})

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Add scroll-based animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  },
  {
    threshold: 0.1,
  },
)

document.querySelectorAll(".feature-card, .transaction-card").forEach((element) => {
  observer.observe(element)
})

// Handle button hover effects
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-2px)"
  })

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)"
  })
})

// Toggle
