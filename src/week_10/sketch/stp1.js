function setup() {
  createCanvas(400, 400);
}

function draw(params) {
  background('black');
  fill('red');
  noStroke();
  circle(mouseX, mouseY, 20);
}
