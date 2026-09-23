var tab = ["image1", "image2", "image3", "image4", "image5"];

tab.forEach(element => {
    document.getElementById(element).addEventListener("mouseenter", () => {
        document.getElementById(element).src = `images/${element}_2.jpg`;
    });
});