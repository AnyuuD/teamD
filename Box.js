class Box {
  constructor(x, y, size, number, frame) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.number = number;
    this.active = false;
    this.frame = frame;
  }

  show() {
    // stroke(0);
    // fill(this.active ? 'green' : 'grey');
    // rect(this.x, this.y, this.size, this.size);
    // fill(0);
    // textAlign(CENTER, CENTER);
    // text(this.number, this.x + this.size / 2, this.y + this.size / 2);


    if (this.active) {
      image(this.frame, this.x + this.size / 2, this.y + this.size / 2 - 2, 100, 102);
    }

  }

  contains(px, py) {
    return px > this.x && px < this.x + this.size && py > this.y && py < this.y + this.size;
  }

  clicked() {
    this.active = !this.active;
    if (this.active) {
      clickedBoxes.push(this.number);

    } else {
      let index = clickedBoxes.indexOf(this.number);
      if (index > -1) {
        clickedBoxes.splice(index, 1);
      }
    }
  }
}