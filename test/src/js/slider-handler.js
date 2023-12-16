document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const container = document.querySelector(".quote-item__list");
    const allLeftButtons = document.querySelectorAll(".quote-controls__left");
    const allRightButtons = document.querySelectorAll(".quote-controls__right");
    const quoteIcon = document.querySelector(".eighth-section__quote-icon");
    allLeftButtons.forEach((button) => {
        button.addEventListener("click", (evt) => {
            if (currentSlide <= 0) return;
            currentSlide = currentSlide-1;
            const perc = currentSlide * 100;
            quoteIcon.style.transform = `translateX(${currentSlide * 30}%)`
            container.style.transform = `translateX(-${perc}%)`;
        })
    })
    allRightButtons.forEach((button) => {
        button.addEventListener("click", (evt) => {
            if (currentSlide >= 3) return;
            currentSlide = currentSlide+1;
            const perc = currentSlide * 100;
            quoteIcon.style.transform = `translateX(${currentSlide * 30}%)`
            container.style.transform = `translateX(-${perc}%)`;
        })
    })
});
