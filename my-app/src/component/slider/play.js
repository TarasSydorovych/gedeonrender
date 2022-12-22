export default function play() {
    document.querySelector(".deskTitle").className = "deskTitle";
    window.requestAnimationFrame(function(time) {
      window.requestAnimationFrame(function(time) {
        document.querySelector(".deskTitle").className = "deskTitle changing";
    });
});
}
