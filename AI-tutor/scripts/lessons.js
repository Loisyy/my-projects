// Lessons page JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  // Video player functionality
  const videoPlayers = document.querySelectorAll(".video-player")

  videoPlayers.forEach((player) => {
    const video = player.querySelector("video")
    const playBtn = player.querySelector(".play-btn")
    const progressBar = player.querySelector(".progress-bar")
    const currentTime = player.querySelector(".current-time")
    const duration = player.querySelector(".duration")

    if (video && playBtn) {
      playBtn.addEventListener("click", () => {
        if (video.paused) {
          video.play()
          playBtn.innerHTML =
            '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>'
        } else {
          video.pause()
          playBtn.innerHTML =
            '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>'
        }
      })
    }

    if (video && progressBar) {
      video.addEventListener("timeupdate", () => {
        const progress = (video.currentTime / video.duration) * 100
        progressBar.style.width = progress + "%"

        if (currentTime) {
          currentTime.textContent = formatTime(video.currentTime)
        }
      })

      video.addEventListener("loadedmetadata", () => {
        if (duration) {
          duration.textContent = formatTime(video.duration)
        }
      })
    }
  })

  // Subject filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn")
  const lessonCards = document.querySelectorAll(".lesson-card")

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter

      // Update active button
      filterButtons.forEach((b) => b.classList.remove("bg-primary", "text-white"))
      filterButtons.forEach((b) => b.classList.add("bg-gray-200", "text-gray-700"))
      btn.classList.remove("bg-gray-200", "text-gray-700")
      btn.classList.add("bg-primary", "text-white")

      // Filter lessons
      lessonCards.forEach((card) => {
        if (filter === "all" || card.dataset.subject === filter) {
          card.style.display = "block"
          card.classList.add("animate-fade-in")
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Search functionality
  const searchInput = document.querySelector("#lesson-search")
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase()

      lessonCards.forEach((card) => {
        const title = card.querySelector("h3").textContent.toLowerCase()
        const description = card.querySelector("p").textContent.toLowerCase()

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  }

  // Add scroll effect to header
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    if (window.scrollY > 100) {
      header.classList.add("backdrop-blur-md", "bg-white/90")
    } else {
      header.classList.remove("backdrop-blur-md", "bg-white/90")
    }
  })

  // Helper function to format time
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }
})
