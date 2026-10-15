(() => {
  const section = document.getElementById('home-reviews');
  if (!section) return;
  const track = section.querySelector('.home-review-track');
  const cards = [...track.children];
  const previous = section.querySelector('.home-review-prev');
  const next = section.querySelector('.home-review-next');
  const pages = section.querySelector('.home-review-pages');
  let starts = [], active = 0;
  if (!window.Swiper) return;
  const wrapper = document.createElement("div");
  wrapper.className = "swiper-wrapper";
  cards.forEach(card => { card.classList.add("swiper-slide"); wrapper.append(card); });
  track.append(wrapper);
  track.classList.add("swiper", "home-review-swiper-ready");
  const carousel = new Swiper(track, {
    init:false, loop:true, speed:450, slidesPerView:1, slidesPerGroup:1, spaceBetween:16,
    grabCursor:true, threshold:8, watchOverflow:true,
    a11y:{enabled:true},
    breakpoints:{600:{slidesPerView:2,slidesPerGroup:1},992:{slidesPerView:3,slidesPerGroup:3,spaceBetween:16},1200:{slidesPerView:3,slidesPerGroup:3,spaceBetween:26}}
  });
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = window.matchMedia('(max-width: 767px)');
  const autoplayButton = section.querySelector('.home-review-autoplay');
  const heldPointers = new Set();
  let timer, visible = false, manuallyPaused = false, keyboardFocus = false, windowFocused = true;
  let pauseUntil = 0;
  function scheduleRotation(delay = 3000) {
    clearTimeout(timer);
    if (!mobile.matches || reducedMotion.matches || !visible || document.hidden || !windowFocused || manuallyPaused || keyboardFocus || heldPointers.size) return;
    timer = setTimeout(() => {
      carousel.slideNext();
      scheduleRotation();
    }, Math.max(delay, pauseUntil - Date.now()));
  }
  function pauseAfterInteraction() {
    pauseUntil = Date.now() + 10000;
    scheduleRotation();
  }
  function update() {
    active = Math.floor(carousel.realIndex / carousel.params.slidesPerGroup);
    [...pages.children].forEach((button, index) => button.setAttribute('aria-current', index === active ? 'true' : 'false'));
  }
  function go(index) {
    const page = (index + starts.length) % starts.length;
    carousel.slideToLoop(page * carousel.params.slidesPerGroup, reducedMotion.matches ? 0 : 450);
  }
  function layout() {
    starts = Array.from({length:Math.ceil(cards.length / carousel.params.slidesPerGroup)}, (_, index) => index);
    pages.replaceChildren();
    starts.forEach((_, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', `Show review page ${index + 1} of ${starts.length}`);
      button.setAttribute('aria-controls', track.id);
      button.addEventListener('click', () => go(index));
      pages.append(button);
    });
    update();
  }
  previous.hidden = next.hidden = pages.hidden = false;
  previous.addEventListener('click', () => carousel.slidePrev());
  next.addEventListener('click', () => carousel.slideNext());
  track.addEventListener('keydown', event => {
    if (event.target !== track || !['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'ArrowLeft') carousel.slidePrev();
    else if (event.key === 'ArrowRight') carousel.slideNext();
    else go(event.key === 'Home' ? 0 : starts.length - 1);
  });
  carousel.on('realIndexChange', update);
  carousel.on('resize', layout);
  carousel.on('breakpoint', () => requestAnimationFrame(layout));
  carousel.on('sliderFirstMove', pauseAfterInteraction);
  carousel.init();
  wrapper.setAttribute('aria-live', 'off');
  section.addEventListener('pointerdown', event => {
    heldPointers.add(event.pointerId);
    clearTimeout(timer);
  });
  function releasePointer(event) {
    if (heldPointers.delete(event.pointerId)) pauseAfterInteraction();
  }
  document.addEventListener('pointerup', releasePointer);
  document.addEventListener('pointercancel', releasePointer);
  section.addEventListener('wheel', pauseAfterInteraction, {passive:true});
  section.addEventListener('keydown', pauseAfterInteraction);
  section.addEventListener('focusin', event => {
    if (event.target.matches(':focus-visible')) {
      keyboardFocus = true;
      clearTimeout(timer);
    }
  });
  section.addEventListener('focusout', event => {
    if (!section.contains(event.relatedTarget)) {
      keyboardFocus = false;
      pauseAfterInteraction();
    }
  });
  autoplayButton.addEventListener('click', () => {
    manuallyPaused = !manuallyPaused;
    autoplayButton.setAttribute('aria-label', manuallyPaused ? 'Start automatic review rotation' : 'Pause automatic review rotation');
    autoplayButton.querySelector('span').textContent = manuallyPaused ? '▷' : 'Ⅱ';
    scheduleRotation();
  });
  function motionChanged() {
    autoplayButton.hidden = reducedMotion.matches || !mobile.matches;
    carousel.params.speed = reducedMotion.matches ? 0 : 450;
    scheduleRotation();
  }
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting && entries[0].intersectionRatio >= 0.4;
    scheduleRotation();
  }, {threshold:0.4}).observe(track);
  document.addEventListener('visibilitychange', () => scheduleRotation());
  window.addEventListener('blur', () => { windowFocused = false; heldPointers.clear(); clearTimeout(timer); });
  window.addEventListener('focus', () => { windowFocused = true; scheduleRotation(); });
  mobile.addEventListener('change', motionChanged);
  reducedMotion.addEventListener('change', motionChanged);

  layout();
  motionChanged();
})();
