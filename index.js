////////////////////////
// Quadrillage coloré //
////////////////////////

var tab_quadrillage = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

tab_quadrillage.forEach(span => {
    var nb = 0;
    const color = ["red", "black", "brown", "green", "blue", "yellow", "white"]

    document.getElementById(span).addEventListener("click", () => {
        if (nb == color.length) {
            nb = 0;
        }

        document.getElementById(span).style.backgroundColor = color[nb];
        nb++;
    });
});

////////////
// Survol //
////////////

var tab_survol = ["first_case", "second_case", "third_case", "fourth_case"];

tab_survol.forEach(case_span => {
    document.getElementById(case_span).addEventListener("mouseenter", () => {
        document.getElementById(case_span).style.opacity = "100%";
        document.getElementById(case_span).style.border = "2px red solid";
    })

    document.getElementById(case_span).addEventListener("mouseleave", () => {
        document.getElementById(case_span).style.opacity = "60%";
        document.getElementById(case_span).style.border = "2px black solid";
    })

    document.getElementById(case_span).addEventListener("mousedown", () => {
        document.getElementById(case_span).style.width = "400px";
    })

    document.getElementById(case_span).addEventListener("mouseup", () => {
        document.getElementById(case_span).style.width = "200px";
    })
});

//////////////
// Carousel //
//////////////

var image_carrousel = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
var nb = 0;

document.getElementById("button_image").addEventListener("click", () => {
    document.getElementById("image").style.visibility = "visible";
    document.getElementById("image").style.backgroundImage = `url("images/${image_carrousel[(nb > 0 ? nb % image_carrousel.length : -nb % image_carrousel.length)]}")`;
})

document.getElementById("right").addEventListener("click", () => {
    nb++;
    document.getElementById("image").style.backgroundImage = `url("images/${image_carrousel[(nb > 0 ? nb % image_carrousel.length : -nb % image_carrousel.length)]}")`;
});

document.getElementById("left").addEventListener("click", () => {
    nb = nb - 1 + image_carrousel.length;
    document.getElementById("image").style.backgroundImage = `url("images/${image_carrousel[(nb > 0 ? nb % image_carrousel.length : -nb % image_carrousel.length)]}")`;
});