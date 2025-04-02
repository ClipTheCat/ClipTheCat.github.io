var body = document.body;
var title = document.getElementById("title");

window.onscroll = function() {
    let transformY = Math.min(this.scrollY / 2, 400);
    title.style.transform = `translateY(-${transformY}px)`;
}