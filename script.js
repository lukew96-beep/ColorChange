function getRandomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 80%, 55%)`;
}

function getRandomShape() {
  // Add more dynamic shapes
  const shapes = [
    { borderRadius: '50%' }, // circle
    { borderRadius: '0%' }, // square
    { borderRadius: '50% / 30%', width: '120px', height: '80px' }, // oval
    { borderRadius: '10%', width: '140px', height: '70px' }, // rectangle
    { borderRadius: '25%' }, // rounded square
    { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }, // blob
    { borderRadius: '70% 30% 50% 50% / 30% 60% 40% 70%' }, // abstract
  ];
  return shapes[Math.floor(Math.random() * shapes.length)];
}

function getRandomSize() {
  const min = 60;
  const max = 200;
  const width = Math.floor(Math.random() * (max - min)) + min;
  const height = Math.floor(Math.random() * (max - min)) + min;
  return { width: width + 'px', height: height + 'px' };
}

function getRandomShadow() {
  const x = Math.floor(Math.random() * 20) - 10;
  const y = Math.floor(Math.random() * 20) - 10;
  const blur = Math.floor(Math.random() * 40) + 10;
  const color = getRandomColor();
  return `${x}px ${y}px ${blur}px ${color}`;
}

const ball = document.getElementById('ball');
const btn = document.getElementById('changeBtn');

btn.addEventListener('click', () => {
  // Change color
  ball.style.background = getRandomColor();
  // Change shape
  const shape = getRandomShape();
  ball.style.borderRadius = shape.borderRadius;
  if (shape.width && shape.height) {
    ball.style.width = shape.width;
    ball.style.height = shape.height;
  } else {
    // If not specified, randomize size
    const size = getRandomSize();
    ball.style.width = size.width;
    ball.style.height = size.height;
  }
  // Add dynamic shadow
  ball.style.boxShadow = getRandomShadow();
  // Add a slight rotation for more dynamism
  ball.style.transform = `rotate(${Math.floor(Math.random()*360)}deg)`;
});

// Initial random state
btn.click();
