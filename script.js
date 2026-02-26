const images = document.querySelectorAll(".gallery img");
const modal = document.createElement("div");
modal.classList.add("modal");

const modalImg = document.createElement("img");
modal.appendChild(modalImg);
document.body.appendChild(modal);

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.add("active");
        modalImg.src = img.src;
    });
});

modal.addEventListener("click", () => {
    modal.classList.remove("active");
});
