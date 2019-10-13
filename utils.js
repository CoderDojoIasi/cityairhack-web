function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
  const amountOfRed = randomIntFromInterval(0, 255);
  const amountOfGreen = randomIntFromInterval(0, 255);
  const amountOfBlue = randomIntFromInterval(0, 255);
  return `rgb(${amountOfRed}, ${amountOfGreen}, ${amountOfBlue})`;
}
