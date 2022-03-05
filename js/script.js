document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const doodler = document.createElement('div');

  console.log('그리드', grid);

  let doodlerLeftSpace = 50;
  let doodlerBottomSpace = 150;

  let isGameOver = false;

  // 한 화면에 platform 개수
  let platformCount = 8;
  let platforms = [];

  // game background
  function createDoodler() {
    grid.appendChild(doodler);
    doodler.classList.add('doodler');
    doodler.style.left = doodlerLeftSpace + 'px';
    doodler.style.bottom = doodlerBottomSpace + 'px';
  }

  class Platform {
    constructor(newPlatBottom) {
      this.bottom = newPlatBottom;
      // platform 양 옆 폭
      this.left = Math.random() * 315;
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

  function start() {
    if (!isGameOver) {
      createDoodler();
      createPlatforms();
    }
  }

  start();
});
