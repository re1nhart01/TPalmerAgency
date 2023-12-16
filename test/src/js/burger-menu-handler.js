document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector(".burger-button")
    const burgerContent = document.querySelector(".burger-menu__content");
    button.addEventListener('click', function() {
        button.classList.toggle('open');
        if (button.classList.contains("open")) {
            burgerContent.style.height = '40px';
        } else {
            burgerContent.style.height = '0px';
        }
    });
});
