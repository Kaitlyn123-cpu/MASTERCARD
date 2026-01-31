// Subtle background animation (optional). Safe: does NOT block your page content.

let dots = [];

function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);
  c.style("z-index", "-1");          // behind everything
  c.style("position", "fixed");
  c.style("top", "0");
  c.style("left", "0");

  for (let i = 0; i < 80; i++) {
    dots.push({
      x: random(width),
      y: random(height),
      r: random(1, 3),
      vx: random(-0.4, 0.4),
      vy: random(-0.4, 0.4),
    });
  }
}

function draw() {
  clear();
  background(11, 15, 24);

  noStroke();
  for (const d of dots) {
    fill(255, 255, 255, 40);
    circle(d.x, d.y, d.r * 2);
    d.x += d.vx;
    d.y += d.vy;

    if (d.x < 0) d.x = width;
    if (d.x > width) d.x = 0;
    if (d.y < 0) d.y = height;
    if (d.y > height) d.y = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
