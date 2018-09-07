/**
 * @name initParallax
 * @description
 */

function initParallax() {
  if ($("[parallax-js]").length) {
    $(function () {
      $.stellar({
        horizontalScrolling: false,
      });
    });
  }
}
