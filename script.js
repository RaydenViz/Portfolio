// Lightbox
const images = document.querySelectorAll(".item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

/* ===== Dropdown Portfolio (Click Only) ===== */
const dropdown = document.querySelector(".dropdown");
const toggle = document.querySelector(".dropdown-toggle");

toggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle("active");
});

/* Tutup jika klik di luar */
document.addEventListener("click", () => {
    dropdown.classList.remove("active");
});

/* Cegah dropdown tertutup saat klik di dalam menu */
dropdown.querySelector(".dropdown-menu").addEventListener("click", (e) => {
    e.stopPropagation();
});
