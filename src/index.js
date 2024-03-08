// let company = {
//   sales: [
//     { name: 'hampus', salary: 30000 },
//     { name: 'marica', salary: 15000 },
//   ],
//   development: {
//     sites: [
//       { name: 'Peter', salary: 25000 },
//       { name: 'Alex', salary: 18000 },
//     ],
//     internals: [{ name: 'Jack', salary: 13000 }],
//   },
// };

// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((prev, current) => prev + current.salary, 0);
//   }
//   let sum = 0;
//   for (let subdep of Object.values(department)) {
//     sum += sumSalaries(subdep);
//   }
//   return sum;
// }

// console.log(sumSalaries(company));

function fibSeq(n, sum = 0) {
  if (curN !== n) fibSeq(curN + 1);
}

function fibIteration(n) {
  let i = [];
  while (n > i.length) {
    if (i.length < 1) i.push(0);
    if (i.length < 2) i.push(1);
    i.push(i.slice(-2).reduce((tot, cur) => tot + cur, 0));
  }
  console.log(i);
}
// fibIteration(8);

function fibRec(n, list = [0, 1]) {
  list.push(list.slice(-2).reduce((tot, cur) => tot + cur, 0));
  if (list.length < n) fibRec(n, list);
  return list;
}
// console.log(fibRec(10));

function cfibsRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  return [...cfibsRec(n - 1), cfibsRec(n - 1)[n - 2] + cfibsRec(n - 2)[n - 3]];
}
// console.log(cfibsRec(5));

const arrayUnsorted = [3, 2, 1, 13, 8, 5, 0, 1];
const arraySorted = [];
let arrayMerge = [];

function sort(array) {
  if (array.length === 1) return array;
  if (array[0] > array[1]) return array[1];
  return array[0];
}

function merge(left, right) {
  const merged = [];
  let lIndx = 0;
  let rIndx = 0;
  while (lIndx < left.length && rIndx < right.length) {
    if (left[lIndx] < right[rIndx]) {
      merged.push(left[lIndx]);
      lIndx += 1;
    } else {
      merged.push(right[rIndx]);
      rIndx += 1;
    }
  }
  while (lIndx < left.length) {
    merged.push(left[lIndx]);
    lIndx += 1;
  }
  while (rIndx < right.length) {
    merged.push(right[rIndx]);
    rIndx += 1;
  }

  console.log(`merged ${merged}`);
  return merged;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const [...arrHalfLeft] = array.slice(0, array.length / 2);

  const [...arrHalfRight] = array.slice(array.length / 2);

  return merge(mergeSort(arrHalfLeft), mergeSort(arrHalfRight));
  // if (arrayMerge.length > 1) merge(arrayMerge[0], arrayMerge[1]);
  // console.log(`left ${arrHalfLeft}`);
  // console.log(`right ${arrHalfRight}`);
  // mergeSort(arrHalfLeft);
  // const [...arrHalfRight] = array.slice(array.length / 2);
}
console.log(mergeSort(arrayUnsorted));

// console.log(mergeSort(arrayUnsorted));

// fib(6);
// let i = [1, 2, 3, 4, 5];
// console.log(i.slice(-2).reduce((tot, cur) => tot + cur, 0));
