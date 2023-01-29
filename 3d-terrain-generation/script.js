const terrainValues = [];
const mult = 70;
let xoff = 0;
let yoff = 0;
const inc = 0.05

function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);

  for (let y = 0; y < 60; y++) {
    terrainValues.push([]);
    xoff = 0;
    for (let x = 0; x < 60; x++) {
      terrainValues[y][x] = map(noise(xoff, yoff), 0, 1, -mult, mult);
      xoff += inc;
    }
    yoff += inc;
  }
}

function draw() {
  background(0);

  stroke(255);
  noFill();

  rotateX(70);
  translate(-width / 2, -height / 2);
  for (let y = 0; y < 60; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < 60; x++) {
      vertex(x * 10, y * 10, terrainValues[x][y]);
      vertex(x * 10, (y + 1) * 10, terrainValues[x][y]);
    }
    endShape();
  }
}
