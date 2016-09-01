$(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
  $(".clickable1").click(function() {
    $("#initially-hiddeninfo").show();

  });
});
