// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]
let small = array [0]
let big = array [0]

for (let i = 0; i < array.length; i++) {
  if (array [i] > big) {
      big = array [i];
  }
  if (array [i] < small) {
      small = array [i];
  }
}
console.log(`Largest Number is: ${big}`);
console.log(`Smallest Number is: ${small}`);
// Write your solution below: