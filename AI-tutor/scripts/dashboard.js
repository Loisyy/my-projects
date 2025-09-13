// Dashboard page JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  // Add scroll effect to header
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    if (window.scrollY > 100) {
      header.classList.add("backdrop-blur-md", "bg-white/90")
    } else {
      header.classList.remove("backdrop-blur-md", "bg-white/90")
    }
  })

  // Add hover effects to cards
  document.querySelectorAll(".card-hover").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)"
    })
  })

  // Animate progress bars on load
  window.addEventListener("load", () => {
    document.querySelectorAll(".progress-bar").forEach((bar) => {
      const width = bar.style.width
      bar.style.width = "0%"
      setTimeout(() => {
        bar.style.width = width
        bar.style.transition = "width 1.5s ease-out"
      }, 500)
    })
  })

  // Animate chart bars on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const chartBars = entry.target.querySelectorAll(".chart-container > div > div > div")
        chartBars.forEach((bar, index) => {
          const height = bar.style.height
          bar.style.height = "0%"
          setTimeout(() => {
            bar.style.height = height
            bar.style.transition = "height 1s ease-out"
          }, index * 100)
        })
      }
    })
  }, observerOptions)

  // Observe chart container
  const chartContainer = document.querySelector(".chart-container")
  if (chartContainer) {
    observer.observe(chartContainer.parentElement)
  }
})
