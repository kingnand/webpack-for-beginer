
import filter from './feature/filter';
import reddot from './feature/reddot';
import sort from './feature/sort';
import util from './feature/util';

const modulename = 'ga.js: ';
console.log(modulename + filter().iam());
console.log(modulename + reddot().iam());
console.log(modulename + sort().iam());
console.log(modulename + util().iam());