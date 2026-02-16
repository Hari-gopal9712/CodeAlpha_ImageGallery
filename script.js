const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
let currentIndex = 0;

// Open modal
function openImage(index) {
    currentIndex = index;
    modal.style.display = "flex";
    modalImg.src = images[currentIndex].src;
}

// Close modal
function closeImage() {
    modal.style.display = "none";
}

// Next / Previous
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
}

// Filter
function filterImages(category) {
    document.querySelectorAll(".filters button").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    images.forEach(img => {
        img.style.display =
            category === "all" || img.dataset.category === category
            ? "block"
            : "none";
    });
}
