document.querySelectorAll("a")[0].addEventListener("click", () => {
    document.getElementById("text").style.visibility = "visible";
});

document.querySelectorAll("a")[1].addEventListener("click", () => {
    document.getElementById("text").style.visibility = "hidden";
});