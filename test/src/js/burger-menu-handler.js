




const element = document.querySelector("#nav-icon");
element.addEventListener("click", () => {
    element.classList.toggle("open");
    const contentBlock = document.querySelector(".tfc-header__content-burger");
    const isOpened = element.classList.contains("open");
    if (isOpened) {
        contentBlock.style.setProperty("top", "72px", "important");
    } else {
        contentBlock.style.setProperty("top", "-100vh", "important");
    }
})
