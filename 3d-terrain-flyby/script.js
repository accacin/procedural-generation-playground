let cols;
let rows;
let scale = 20;
let w = 1400;
let h = 1000;
let xoff = 0;
let yoff = 0;
const mult = 100;
const terrain = [];
let fly = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  cols = w / scale;
  rows = h / scale;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0;
    }
  }
}

function draw() {
  fly -= 0.04;
  yoff = fly;
  for (let y = 0; y < rows; y++) {
    xoff = 0;
    for (let x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -mult, mult);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  noFill();
  background(0);
  rotateX(PI / 3);
  translate(0, 50);
  translate(-w / 2, -h / 2);
  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      stroke(map(x, 0, rows, y, 255));
      vertex(x * scale, y * scale, terrain[x][y]);
      vertex(x * scale, (y + 1) * scale, terrain[x][y + 1]);
    }
    endShape();
  }
}
