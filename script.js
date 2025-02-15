document.addEventListener("DOMContentLoaded", function () {
    // 1. Change title color when clicked
    const title = document.querySelector("h1");
    title.addEventListener("click", function () {
        const colors = ["red", "blue", "green", "purple", "black"];
        this.style.color = colors[Math.floor(Math.random() * colors.length)];
    });

    // 2. Highlight hovered music links
    const musicLinks = document.querySelectorAll("ul li a");
    musicLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "orange";
            this.style.fontWeight = "bold";
        });
        link.addEventListener("mouseout", function () {
            this.style.color = "";
            this.style.fontWeight = "";
        });
    });

    // 3. Image hover preview effect
    const images = document.querySelectorAll("section img");
    images.forEach(img => {
        img.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.2)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
        img.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
