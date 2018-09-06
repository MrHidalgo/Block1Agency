/**
 * @name initChangeImageSVG
 * @description
 */
const initChangeImageSVG = () => {
  document.querySelectorAll('img.svg').forEach(function (element) {
    let imgID = element.getAttribute('id'),
      imgClass = element.getAttribute('class'),
      imgURL = element.getAttribute('src');

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let svg = xhr.responseXML.getElementsByTagName('svg')[0];

        if (imgID != null) {
          svg.setAttribute('id', imgID);
        }

        if (imgClass != null) {
          svg.setAttribute('class', imgClass + ' replaced-svg');
        }

        svg.removeAttribute('xmlns:a');

        if (!svg.hasAttribute('viewBox') && svg.hasAttribute('height') && svg.hasAttribute('width')) {
          svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'))
        }
        element.parentElement.replaceChild(svg, element)
      }
    };

    xhr.open('GET', imgURL, true);
    xhr.send(null);
  })
};
