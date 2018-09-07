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
      inheritOriginalWidth: true,
      disableOnMobile: false
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
        statisticDataElem = $("[statistic-data-js]"),
        prevStaticVal = parseInt(statisticDataElem.find("i").text());

      $(".statistic__block-btn").removeClass("is-active");
      elem.addClass("is-active");

      statisticDataElem.html("<i>" + elemAttr + "</i><span>%</span>");

      countToCallback("[statistic-data-js] i", prevStaticVal, elemAttr);

      progressData(progressCircumference($('.progress__value').attr("r")), elemAttr);
    });
  };


  /**
   *
   */
  function countToCallback(selector, from, to, spped = 800) {
    $(selector).countTo({
      from: from,
      to: to,
      speed: spped,
    });
  }

  const initCountTo = () => {
    countToCallback("[statistic-data-js] i", 0, 72);
    countToCallback(".statistic__block-info i", 0, 100, 700);
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
    initParallax();
    initSelectricJs();
    initProgressCircle();
    statisticBtn();
    initCountTo();
  };
  initJquery();
});

