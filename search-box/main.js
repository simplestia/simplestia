$(document).ready(function() {
  $(".icon").click(function() {
    $(".icon").addClass("rotate");
    setTimeout(function() {
      $("input").focus();
      $("input").addClass("increase");
    }, 500);
  });
  $("input").focusout(function() {
    $(".icon").removeClass("rotate");
    $("input").removeClass("increase");
  });
});
