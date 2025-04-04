const body = document.body;
const title = document.getElementById("title");
const cards = document.getElementsByClassName("page-card");


function translateTitle() {
    let transformY = Math.min(this.scrollY / 2, 400);
    title.style.transform = `translateY(-${transformY}px)`;
}

translateTitle();

window.onscroll = () => {
    translateTitle();
}

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];

    card.onmouseenter = function() {
        this.style.transform = "scale(1.03)";
        this.style.width = "70vw";
    }

    card.onmouseleave = function() {
        this.style.transform = "scale(1)";
        this.style.width = "60vw";
    }
}