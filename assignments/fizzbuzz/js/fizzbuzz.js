// Your code goes here
numbers = _.range(1, 101);

// for (i = 1; i <= 100; i++) {
//   numbers.push(i);
// }

_.each(numbers, function(i){
  // for (i = 1; i <= 100; i++) {
    if (i%3 == 0) {
      if (i%5 == 0) {
        console.log("Fizz Buzz");
      } else {
        console.log("Fizz");
      }
    }
    else if (i%5 == 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  // }
});