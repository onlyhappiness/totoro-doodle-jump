document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const doodler = document.createElement('div');

  let doodlerLeftSpace = 50;
  let doodlerBottomSpace = 150;

  let isGameOver = false;

  // 한 화면에 platform 개수
  let platformCount = 9;
  let platforms = [];

  let upTimerId;
  let downTimerId;

  // game background
  function createDoodler() {
    grid.appendChild(doodler);
    doodler.classList.add('doodler');
    doodlerLeftSpace = platforms[0].left;
    doodler.style.left = doodlerLeftSpace + 'px';
    doodler.style.bottom = doodlerBottomSpace + 'px';
  }

  class Platform {
    constructor(newPlatBottom) {
      this.bottom = newPlatBottom;
      // platform 양 옆 폭
      this.left = Math.random() * 400;
      this.visual = document.createElement('div');

      const visual = this.visual;
      visual.classList.add('platform');
      visual.style.left = this.left + 'px';
      visual.style.bottom = this.bottom + 'px';
      grid.appendChild(visual);
    }
  }

  function createPlatforms() {
    for (let i = 0; i < platformCount; i++) {
      // platform 위 아래 폭
      let platformGap = 850 / platformCount;
      let newPlatBottom = 100 + i * platformGap;
      let newPlatform = new Platform(newPlatBottom);
      platforms.push(newPlatform);

      console.log(platforms);
    }
  }

  // 위로 점점 올라감
  function movePlatforms() {
    if (doodlerBottomSpace > 200) {
      platforms.forEach((platform) => {
        platform.bottom -= 4;

        let visual = platform.visual;
        visual.style.bottom = platform.bottom + 'px';
      });
    }
  }

  function jump() {
    clearInterval(downTimerId);
    upTimerId = setInterval(function () {
      doodlerBottomSpace += 20;
      doodler.style.bottom = doodlerBottomSpace + 'px';
      if (doodlerBottomSpace > 350) {
        fall();
      }
    }, 30);
  }

  function fall() {
    clearInterval(upTimerId);
    downTimerId = setInterval(function () {
      doodlerBottomSpace -= 5;
      doodler.style.bottom = doodlerBottomSpace + 'px';
      if (doodlerBottomSpace <= 0) {
        gameOver();
      }
    }, 30);
  }

  function gameOver() {
    console.log('game over');
    isGameOver = true;
    clearInterval(upTimerId);
    clearInterval(downTimerId);
  }

  function start() {
    if (!isGameOver) {
      createPlatforms();
      createDoodler();
      setInterval(movePlatforms, 30);
      // jump();
    }
  }

  start();
});
