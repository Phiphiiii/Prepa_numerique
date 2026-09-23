var tab = ["green", "red", "blue"];

tab.forEach(element => {
    document.querySelector("." + element).addEventListener("click", () => {
        document.getElementById("text").style.color = element;
    });
});