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

const imgs = []

imgs[0] = './assets/carousel/mountains.jpeg';
imgs[1] = './assets/carousel/computer.jpeg';
imgs[2] = './assets/carousel/trees.jpeg';
imgs[3] = './assets/carousel/turntable.jpeg';

function createCarousel (){
  const carousel = document.createElement('div'),
        leftBtn = document.createElement('div'),
        currentImg = document.createElement('img'),
        rightBtn = document.createElement('div');

  carousel.appendChild(leftBtn);
  carousel.appendChild(rightBtn);
  carousel.appendChild(currentImg);

  carousel.classList.add ('carousel');
  leftBtn.classList.add ('left-button');
  rightBtn.classList.add ('right-button');
  // currentImg.classList.add ('fade');
  leftBtn.textContent = '<';
  rightBtn.textContent = '>';

  carousel.style.zIndex = 0;

  currentImg.src = imgs[0];
  currentImg.style.display = 'inherit';
  // currentImg.style.transition = 'all 0.6s';
  currentImg.style.webkitAnimationName = 'fade';
  currentImg.style.webkitAnimationDuration = '1.5s';
  currentImg.style.animationName = 'fade';
  currentImg.style.animationDuration = '1.5s';
  
  let style = document.createElement('style');
  style.type = 'text/css';
  let keyFrames = `
  @-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }
  
  @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }
  `
  style.innerHTML = keyFrames.replace();

  let imgCounter = 0;

  leftBtn.addEventListener('click', ()=>{
    if (imgCounter === 0){
      imgCounter = imgs.length-1;
    }else {
      imgCounter--;
    }
    // console.log (imgCounter);
    currentImg.src = imgs[imgCounter];
  })

  rightBtn.addEventListener('click', ()=>{
    if (imgCounter == imgs.length-1){
      imgCounter = 0;
    }else {
      imgCounter++;
    }
    // console.log (imgCounter);
    currentImg.src = imgs[imgCounter];
  })

  return carousel;
}

const carouselLocation = document.querySelector('.carousel-container');

const topBarIndex = document.querySelector('.top-bar');
topBarIndex.style.zIndex = '1337'; //set z-index so carousel displays properly

carouselLocation.append(createCarousel());