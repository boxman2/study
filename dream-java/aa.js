class Counter {
    constructor(runEveryFiveTimes) {
      this.counter = 0;
      this.callback = runEveryFiveTimes;
    }
  
    increase () {
      this.counter ++;
      console.log(this.counter);
      if(this.counter%5 === 0){
        this.callback(this.counter);
      }
    }
  }

  function printSomething (number) {
    console.log(`${number} wow`)
  }
  
  function alertSomething (number) {
    alert(`${number} wow`)
  }

  const counterNum = new Counter(printSomething);
  counterNum.increase();
  counterNum.increase();
  counterNum.increase();
  counterNum.increase();
  counterNum.increase();
  counterNum.increase();
  