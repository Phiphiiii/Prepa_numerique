
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

//////////////////
// MODAL CACHE //
/////////////////

const modale = document.getElementById('modalCache');
const btn = document.getElementById('modalBtn');
const body = document.body;

btn.addEventListener('click', () => {
    const isVisible = modale.style.visibility === 'visible';
    modale.style.visibility = isVisible ? 'hidden' : 'visible';
    body.style.backgroundColor = isVisible ? 'white' : 'gray';
});

document.addEventListener('click', (e) => {
    const clicModale = modale.contains(e.target);
    const clicBtn = btn.contains(e.target);
    

    if (!clicBtn && !clicModale) {
        modale.style.visibility = 'hidden';
        body.style.backgroundColor = 'white';
    }
});

/////////////////
// COMBINAISON //
/////////////////

const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');
const touchesActives = {};

window.addEventListener('keydown', (event) => {
    touchesActives[event.key.toLocaleLowerCase()] = true;

    if (touchesActives['p'] && touchesActives['d']) {
        event.preventDefault();
        para2.textContent = 'vous avez appuyé sur le raccourcis simple (P + D)';
    }

    if (touchesActives['p'] && touchesActives['d'] && touchesActives['f']) {
        event.preventDefault();
        para2.textContent = 'vous avez appuyé sur le raccourcis complexe (P + D + F)';
        para2.style.color = 'red';
    }
    if (touchesActives['x']) {
        para2.textContent = '';
        para2.style.color = 'black';
    }
})

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

///////////////
// Carrousel //
///////////////

const image_carrousel = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
let nb = 0;

function updateImage() {
    const index = ((nb % image_carrousel.length) + image_carrousel.length) % image_carrousel.length;
    document.getElementById("image").style.backgroundImage = `url("images/${image_carrousel[index]}.jpg")`;
}

document.getElementById("button_image").addEventListener("click", () => {
    document.getElementById("image").style.visibility = "visible";
    updateImage();
});

document.getElementById("right").addEventListener("click", () => {
    nb++;
    updateImage();
});

document.getElementById("left").addEventListener("click", () => {
    nb--;
    updateImage();
});