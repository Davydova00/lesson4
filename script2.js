// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.


let createCounter  = function (init) {
  let i = init;
  return {
      increment: () => ++i,
      resert: () => (i = init),
      decrement: () => --i,
  };
      };
      let counter = createCounter(5);
      let rez = [];
      rez.push(counter.increment());
      rez.push(counter.resert());
      rez.push(counter.decrement());
      console.log(rez);