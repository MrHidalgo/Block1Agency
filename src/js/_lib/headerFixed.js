/**
 * @name initHeaderFixed
 * @description
 */
function initHeaderFixed() {

  let countScroll = $(window).scrollTop(),
    headerElement = $('.header');

  if (countScroll > 5) {
    headerElement.addClass("header--fixed");
  } else {
    headerElement.removeClass("header--fixed");
  }

}