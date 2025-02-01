
var menuIcon = document.querySelector("#nav i");
var closeIcon = document.querySelector("#full i");
var timeLine = gsap.timeline();

timeLine.to("#full", {
    right: "0",
    duration: 0.5,
});
timeLine.from("#full h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
});

timeLine.from("#full i", {
    opacity: 0,
});

timeLine.pause();

menuIcon.addEventListener("click", function(event) {
    timeLine.play();
});

closeIcon.addEventListener("click", function(event) {
    timeLine.reverse();
});



