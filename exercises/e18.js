/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from './e17.js';
  
export function getGreatestDiscoveryYear(data) {
  const yearCount = data.asteroids
  .reduce(function(accumulator, asteroidObj) {
    let count = data.asteroids.filter(function(obj) {
      return obj.discoveryYear === asteroidObj.discoveryYear;
    }).length;
    return [ ...accumulator, {[asteroidObj.discoveryYear]: count}]
  }, []);
  let highestCount = maxBy(yearCount, (year) => Object.values(year)[0]);
  return Number(Object.keys(highestCount)[0]);
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
