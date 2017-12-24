
import filter from './feature/filter';
import reddot from './feature/reddot';
import search from './feature/search';
import sort from './feature/sort';
import util from './feature/util';

const modulename = 'product.js: ';
console.log(modulename + filter().iam());
console.log(modulename + reddot().iam());
console.log(modulename + search().iam());
console.log(modulename + sort().iam());
console.log(modulename + util().iam());