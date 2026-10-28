$(document).ready(function () {
  $(".card").on("mouseenter", function () {
    $(this).addClass("is-paused");
  });

  $(".card").on("mouseleave", function () {
    $(this).removeClass("is-paused");
  });
});
