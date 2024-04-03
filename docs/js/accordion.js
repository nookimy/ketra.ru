/*Для экранов до 1023px включительно*/
$(document).ready(function () {
  $(".project__title").click(function (event) {
    if ($(".projects__slider").hasClass("projects__slider--showproject")) {
      $(".project__title").not($(this)).removeClass("active");
      $(".project__content").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});
