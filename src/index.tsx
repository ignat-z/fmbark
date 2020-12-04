const pick = (num_images: number) => "images/" + Math.ceil(Math.random() * num_images) + ".jpg";

const load = function (num_images: number, el: HTMLElement) {
  const src = pick(num_images);
  const image = new Image;

  image.addEventListener('load', () => {
    el.classList.add('loaded');
    el.style.backgroundImage = "url('/" + src + "')";
  })
  image.src = src;
}

class Clock {
  date: Date;
  hoursDiv: HTMLElement;
  minutesDiv: HTMLElement;
  meridiemDiv: HTMLElement;

  constructor(hoursDiv: HTMLElement, minutesDiv: HTMLElement, meridiemDiv: HTMLElement) {
    this.hoursDiv = hoursDiv;
    this.minutesDiv = minutesDiv;
    this.meridiemDiv = meridiemDiv;
  }

  start() {
    this.tick();
    return setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.date = new Date();
    this.draw();
  }

  draw() {
    this.hoursDiv.innerHTML = this.leftPad((this.date.getHours() % 12 || 12).toString(), '0');
    this.minutesDiv.innerHTML = this.leftPad(this.date.getMinutes().toString(), '0');
    this.meridiemDiv.innerHTML = this.date.getHours() >= 12 ? 'PM' : 'AM';
  }

  leftPad(value: string, pad: string) {
    return (value.length) == 1 ? (pad.concat(value)) : value;
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  const el = document.querySelectorAll('.bg')[0] as HTMLElement;
  new Clock(
    document.querySelectorAll('.hours')[0] as HTMLElement,
    document.querySelectorAll('.minutes')[0] as HTMLElement,
    document.querySelectorAll('.meridiem')[0] as HTMLElement
  ).start();

  load(5, el);
});
