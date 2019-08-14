/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselCreator = (obj) => {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const carouselLeftDiv = document.createElement('left-button');
  carouselLeftDiv.classList.add('left-button');
  carouselLeftDiv.textContent = ' < ';

  const mountainIMG = document.createElement('img');
  mountainIMG.src = './assets/carousel/mountains.jpeg';

  const computerIMG = document.createElement('img');
  computerIMG.src = './assets/carousel/computer.jpeg';

  const treesIMG = document.createElement('img');
  treesIMG.src = './assets/carousel/trees.jpeg';

  const turntableIMG = document.createElement('img');
  turntableIMG.src = './assets/carousel/turntable.jpeg';

  const carouselRightDiv = document.createElement('div');
  carouselRightDiv.classList.add('right-button');
  carouselRightDiv.textContent = ' > ';

  carousel.appendChild(carouselLeftDiv);
  carousel.appendChild(mountainIMG);
  carousel.appendChild(computerIMG);
  carousel.appendChild(treesIMG);
  carousel.appendChild(turntableIMG);
  carousel.appendChild(carouselRightDiv);

  return carousel;
}