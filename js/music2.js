import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";

const lettersContainer = document.getElementById('letters-container');
const letterize = new Letterize({
  targets: '.letterize',
  className: 'letter',
});

function animateEntrance() {
  gsap.set(letterize.list, {
    opacity: 0,
    x: () => Math.random() * window.innerWidth * 2 - window.innerWidth,
    y: () => Math.random() * window.innerHeight * 2 - window.innerHeight,
    rotate: () => Math.random() * 720 - 360,
    transformOrigin: '50% 50%',
  });

  const entranceAnimation = gsap.to(letterize.list, {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    duration: 1.2,
    ease: 'back.out(1.7)',
    });
}

animateEntrance();
