$(document).ready(function () {
  $(".card").on("mouseenter", function () {
    $(this).closest(".card-group").addClass("is-paused");
  });

  $(".card").on("mouseleave", function () {
    $(this).closest(".card-group").removeClass("is-paused");
  });
});
