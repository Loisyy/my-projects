// Progress page JavaScript functionality
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

  // Animate circular progress on load
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.querySelectorAll(".progress-ring").forEach((ring) => {
        const progress = Number.parseInt(ring.dataset.progress)
        const circumference = 2 * Math.PI * 50 // radius = 50
        const offset = circumference - (progress / 100) * circumference
        ring.style.strokeDashoffset = offset
      })
    }, 500)
  })

  // Animate skill bars on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillFills = entry.target.querySelectorAll(".skill-fill")
        skillFills.forEach((fill, index) => {
          const width = fill.dataset.width
          fill.style.width = "0%"
          setTimeout(() => {
            fill.style.width = width
          }, index * 200)
        })
      }
    })
  }, observerOptions)

  // Observe skills section
  const skillsSection = document.querySelector(".bg-white")
  if (skillsSection) {
    observer.observe(skillsSection)
  }

  // Add hover effects to cards
  document.querySelectorAll(".card-hover").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)"
    })
  })
})
