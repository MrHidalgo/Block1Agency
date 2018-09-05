/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


  /**
   * =============================================
   * CALLBACK
   * =============================================
   */
  /**
   *
   */
  const initSelectricJs = () => {
    const langBtn = $("[lang-js]");

    langBtn.selectric({
      responsive: true,
      inheritOriginalWidth: true
    });

    langBtn.on("selectric-select", function (event, element, selectric) {
      const langAttr = $(element).find("option:selected").data("lang"),
        indicator = $(".lang__indicator p");

      indicator.html(langAttr);
    });
  };



  /**
   * @description Init all method
   */
  const initJquery = () => {
    initWebFontLoader();
    initPreventBehavior();
    initObjectFitImages();
    // ...
    initSelectricJs();
  };
  initJquery();
});

