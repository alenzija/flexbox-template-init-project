(function ($) {
  $(document).ready(function () {
    $("body").niceScroll();
  });

  $(".header-menu__btn").click(function () {
    $(this).toggleClass("active");
    $(".header-menu__list").toggleClass("active");
  });
})(jQuery);

$(document).ready(function () {
  $(".navbar-icon").click(function () {
    $(this).toggleClass("open");
  });
});
