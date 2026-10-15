document.addEventListener('DOMContentLoaded', function () {
  var section = document.getElementById('reviews');
  if (!section) return;
  function updateReadMore() {
    section.querySelectorAll('.review-copy').forEach(function (copy) {
      var quote = copy.querySelector('blockquote');
      var more = copy.querySelector('.review-read-more');
      var card = copy.closest('.review-entry');
      var photos = card.querySelectorAll('.review-media').length;
      card.dataset.photoCount = String(photos);
      card.classList.remove('review-photos-large');
      // A short quote leaves room for a second, consistent thumbnail size.
      var lineHeight = parseFloat(window.getComputedStyle(quote).lineHeight);
      if (photos && quote.scrollHeight <= lineHeight * 4 + 12) {
        card.classList.add('review-photos-large');
      }
      if (more) more.hidden = quote.scrollHeight <= quote.clientHeight + 2;
    });
  }
  if (window.Swiper) {
    new Swiper('#reviewSlider', {
      slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 20,
      loop: true, speed: 450, grabCursor: true,
      navigation: { nextEl: '.review-slider-next', prevEl: '.review-slider-prev' },
      pagination: {
        el: '.review-slider-pagination', clickable: true,
        renderBullet: function (index, className) {
          return '<button type="button" class="' + className + '" aria-label="Go to review ' + (index + 1) + '"></button>';
        }
      },
      a11y: { enabled: true, prevSlideMessage: 'Previous review', nextSlideMessage: 'Next review', paginationBulletMessage: 'Go to review {{index}}' },
      keyboard: { enabled: true, onlyInViewport: true },
      breakpoints: { 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } },
      on: { init: updateReadMore, resize: updateReadMore }
    });
  }
  updateReadMore();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(updateReadMore);
  window.addEventListener('resize', updateReadMore);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      document.body.classList.toggle('dc-reading-reviews', entries[0].isIntersecting);
    }).observe(section);
  }
});
