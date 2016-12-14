// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// console.log(inventors.filter(obj => obj.year >= 1500 && obj.year <= 1599));

// Array.prototype.map()
// 2. Give us an array of the inventor's first and last names
// console.log(inventors.map(inventor => `${inventor.first} ${inventor.last}`));

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// console.log(inventors.sort((a, b) => {
//   if (a.year < b.year) {
//     return -1;
//   }
//   if (a.year > b.year) {
//     return 1;
//   }
//   return 0;
// }));

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// console.log(inventors.reduce((total, inventor) => {
//   return total + (inventor.passed - inventor.year);
// }, 0));

// 5. Sort the inventors by years lived
// console.log(inventors.sort((a, b) => {
//   const lastGuy = a.passed - a.year;
//   const nextGuy = b.passed - b.year;
//   return lastGuy > nextGuy ? -1 : 1;
// }));

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
const people = ['test, one', 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
// Sort the people alphabetically by last name
// console.log(people.sort((lastOne, nextOne) => {
//   const [aLast, aFirst] = lastOne.split(', ');
//   const [bLast, bFirst] = nextOne.split(', ');
//   return aLast > bLast ? 1 : -1;
// }));
// ----------------------
// console.log(people.sort((a, b) => {
//   const arrA = a.split(', ');
//   const arrB = b.split(', ');
//   return arrA[0] > arrB[0] ? 1 : -1;
// }));

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
// console.log(data.reduce((obj, item) => {
//   if (!obj[item]) {
//     obj[item] = 0;
//   }
//   obj[item]++;
//   return obj;
// }, {}));
