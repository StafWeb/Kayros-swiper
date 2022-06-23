let options = {
  threshold: [0]
};
let observer = new IntersectionObserver(onEntry, options);
// let images = document.querySelectorAll('[data-img]');
let blockInfo = document.querySelector('.swiper-block__info');
let swiperDescr = document.querySelectorAll('.swiper-slide')
observer.observe(blockInfo);
// for (let img of images) {
//   observer.observe(img);
// };
for (let des of swiperDescr) {
  observer.observe(des);
};
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('slideinup');
    }
  });
};


// const swiper = new Swiper('.swiper', {
//   direction: "horizontal",
//   speed: 900,
//   slidesPerGroup: 2,
//   preloadImages: true,
//   slidesPerView: 'auto',
//   spaceBetween: 30,
//   passiveListeners: true,
//   mousewheel: {
//     releaseOnEdges: true,
//     // sensitivity: 1,
//     // thresholdTime: 100,
//     // thresholdDelta: 0.3,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'progressbar',
//     // clickable: true,
//   },
// });

(function() {

  function scrollHorizontally(e) {

    var scrollPos = this.scrollLeft;  // Сколько прокручено по горизонтали, до прокрутки (не перемещать эту строку!)

    // Горизонтальная прокрутка
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    this.scrollLeft -= (delta*10); // Multiplied by 10

    var widthElem = this.scrollWidth; // Ширина всего элемента
    var widthBrowser = document.documentElement.clientWidth;  // Ширина окна минус размер вертикального скролла


    // Прокрутка вверх, но элемент уже в крайней левой позиции, то двигаемся вверх
    if ((delta == 1 ) && (this.scrollLeft == 0)) return;
    // Прокрутка вниз, но элемент виден полностью. Или элемент до конца прокручен в правый край
    if ((widthBrowser >= widthElem) || (scrollPos == this.scrollLeft)) return;

    e.preventDefault(); // запрещает прокрутку по вертикали

  }


  var elems = document.querySelectorAll('.swiper-wrapper');
  for (var a = 0; a < elems.length; a++) {
    elems[a].addEventListener("mousewheel", scrollHorizontally, false);     // IE9, Chrome, Safari, Opera
    elems[a].addEventListener("DOMMouseScroll", scrollHorizontally, false); // Firefox
  }

})();