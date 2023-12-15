


function animateAccordionItem(element) {
    if (!element) return;
    let isToggled = false;
    element.addEventListener("click", (event) => {
        event.preventDefault();
        const imageSelector = element.children[1];
        const titleSelector = element.children[0].children[0];
        const textSelector = element.children[0].children[1];
        isToggled = !isToggled;
        if (isToggled) {
            titleSelector.style.fontWeight = "700";
            element.style.backgroundColor = "#FF2BF1";
            element.style.height = "415px";
            setTimeout(() => {
                imageSelector.style.display = "block";
                textSelector.style.display = "block";
                imageSelector.style.opacity = "1";
                textSelector.style.opacity = "1";
            }, 200)
        } else {
            titleSelector.style.fontWeight = "300";
            element.style.backgroundColor = "#232323";
            element.style.height = "110px";
            setTimeout(() => {
                imageSelector.style.display = "none";
                textSelector.style.display = "none";
                imageSelector.style.opacity = "0";
                textSelector.style.opacity = "0";
            }, 200)
        }
    })
}


document.querySelectorAll(".accordion-list > .accordion-list__item").forEach(animateAccordionItem);
