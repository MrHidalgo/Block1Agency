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
   *
   * @param circumference
   * @param value
   */
  const progressData = (circumference, value) => {
    const elem = $('.progress__value');

    let progress = value / 100,
      dashoffset = circumference * (1 - progress);

    elem.animate({
      "strokeDashoffset": dashoffset
    }, 500);
  };

  /**
   *
   * @param radius
   * @returns {number}
   */
  const progressCircumference = (radius) => {
    return (2 * Math.PI * radius);
  };

  /**
   *
   */
  const initProgressCircle = () => {
    const progressValue = $('.progress__value'),
      radius = progressValue.attr("r");

    progressValue.css({
      "strokeDasharray": progressCircumference(radius)
    });

    progressData(progressCircumference(radius), 72);
  };

  const statisticBtn = () => {
    $(".statistic__block-btn").on("click", (e) => {
      const elem = $(e.currentTarget),
        elemAttr = elem.data("val"),
        statisticDataElem = $("[statistic-data-js]");

      $(".statistic__block-btn").removeClass("is-active");
      elem.addClass("is-active");

      statisticDataElem.html(elemAttr + "<span>%</span>");

      progressData(progressCircumference($('.progress__value').attr("r")), elemAttr);
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
    initHamburger();
    initSelectricJs();
    initProgressCircle();
    statisticBtn();
  };
  initJquery();
});

