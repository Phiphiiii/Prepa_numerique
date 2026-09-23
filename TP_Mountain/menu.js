const menu = document.getElementById("menu");
const burgerBtn = document.getElementById("burger");
const header = document.getElementById("home");


burgerBtn.addEventListener('click', () => {
    menu.classList.toggle("hidden");
    header.classList.toggle("brightness-50")
});

menu.addEventListener('click', () => {
    menu.classList.toggle("hidden");
    header.classList.toggle("brightness-50")
});

document.addEventListener('click', (e) => {
    const clicDansMenu = menu.contains(e.target);
    const clicSurBurger = burgerBtn.contains(e.target);

    if (!clicDansMenu && !clicSurBurger && !menu.classList.contains("hidden")) {
        menu.classList.add("hidden");
        header.classList.remove("brightness-50");
    }
});

