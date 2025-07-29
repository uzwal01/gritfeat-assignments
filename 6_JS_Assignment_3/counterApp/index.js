class Counter {
  constructor() {
    this.value = 0;
    this.decrementBtn = document.getElementById("decrement");
    this.incrementBtn = document.getElementById("increment");
    this.counter = document.getElementById("counter-value");
    this.counter.innerText = this.value;

    this.updateUI();
    this.addEventListeners();
  }
  updateUI() {
    this.counter.innerText = this.value;
  }
  increment = () => {
    this.value++;
    this.updateUI();
  }
  decrement = () => {
    this.value--;
    this.updateUI();
  }

  addEventListeners() {
    this.incrementBtn.addEventListener("click", this.increment);
    this.decrementBtn.addEventListener("click", this.decrement);
  }
}

const counter = new Counter();
