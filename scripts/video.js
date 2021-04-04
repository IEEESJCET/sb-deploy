$("#play-video").on("click", function (e) {
  e.preventDefault();

  $("#video-overlay").addClass("open");
  $("#video-overlay").append(
    '<iframe width="560" height="315" src="https://youtube.com/embed/d6iTBY9YSrA" frameborder="0" allowfullscreen></iframe>'
  );
});

$(".video-overlay, .video-overlay-close").on("click", function (e) {
  e.preventDefault();
  close_video();
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    close_video();
  }
});

function close_video() {
  $(".video-overlay.open").removeClass("open").find("iframe").remove();
}
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
