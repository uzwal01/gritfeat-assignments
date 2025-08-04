class Counter {
  private value: number;
  private decrementBtn: HTMLElement | null;
  private incrementBtn: HTMLElement | null;
  private counter: HTMLElement | null;

  constructor() {
    this.value = 0;
    this.decrementBtn = document.getElementById("decrement");
    this.incrementBtn = document.getElementById("increment");
    this.counter = document.getElementById("counter-value");

    if (!this.counter || !this.incrementBtn || !this.decrementBtn) {
      throw new Error("Counter or buttons not found in the DOM");
    }

    this.counter.innerText = this.value.toString();

    this.updateUI();
    this.addEventListeners();
  }

  private updateUI(): void {
    if (this.counter) {
      this.counter.innerText = this.value.toString();
    }
  }

  private increment = (): void => {
    this.value++;
    this.updateUI();
  }

  private decrement = (): void => {
    this.value--;
    this.updateUI();
  }

  private addEventListeners(): void {
    this.incrementBtn?.addEventListener("click", this.increment);
    this.decrementBtn?.addEventListener("click", this.decrement);
  }
}

const counter = new Counter();
