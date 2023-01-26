$(document).ready(function () {
  // nav menu
  $(".navBtn").click(function () {
    $(this).toggleClass("active");
    $(".navMenu").toggleClass("active");
  });
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if (appScroll >= 1) {
      $("header").addClass("headerAnimate");
    } else {
      $("header").removeClass("headerAnimate");
    }
  });
  // modal
  //////////////////////////////////////////

});
