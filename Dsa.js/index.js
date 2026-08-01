// 1. Find the First Non-Repeating Element

// Given an array of integers, return the first element that appears only once.

// Example:

// Input: [4, 5, 1, 2, 1, 4, 5]
// Output: 2

function firstNonRepeating(arr) {
  let countMap = {};
  for (let i = 0; i < arr.length; i++) {
    countMap[arr[i]] = (countMap[arr[i]] || 0) + 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (countMap[arr[i]] == 1) {
      return arr[i];
    }
  }
  return null;
}
console.log(firstNonRepeating([4, 5, 1, 2, 1, 4, 5]), "output");




// 2. Group Students by Course

// Given an array of student objects, group them by their course.

// Input:

// [
//   { name: "Rahul", course: "React" },
//   { name: "Priya", course: "Node" },
//   { name: "Amit", course: "React" }
// ]

// Output:

// {
//   React: [
//     { name: "Rahul", course: "React" },
//     { name: "Amit", course: "React" }
//   ],
//   Node: [
//     { name: "Priya", course: "Node" }
//   ]
// }


function groupByCourse(students) {
  let result = {};
  for (let i = 0; i < students.length; i++) {
    let course = students[i].course;
    if (!result[course]) {
      result[course] = [];
    }
    result[course].push(students[i]);
  }
  return result;
}
const students = [
  { name: "Rahul", course: "React" },
  { name: "Priya", course: "Node" },
  { name: "Amit", course: "React" },
];
console.log(groupByCourse(students), "output");



// 3. Find Duplicate Elements

// Given an array of numbers, return all duplicate elements without repeating them.

// Example:

// Input: [1, 2, 3, 2, 4, 5, 1, 6]
// Output: [1, 2]


function findDuplicates(arr) {
  let countMap = {};
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    countMap[arr[i]] = (countMap[arr[i]] || 0) + 1;
  }
  for (let key in countMap) {
    if (countMap[key] > 1) {
      duplicates.push(Number(key));
    }
  }
  return duplicates;
}
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6]), "output"); // [1, 2]


// 4. Find the Second Highest Number

// Given an array of integers, return the second largest unique number.

// Example:

// Input: [10, 5, 20, 8, 20, 15]
// Output: 15


function secondHighest(arr) {
  let unique = [...new Set(arr)]; // duplicate hata diye
  unique.sort((a, b) => b - a); // descending sort
  return unique[1];
}
console.log(secondHighest([10, 5, 20, 8, 20, 15]), "output"); // 15

// 5. Count Word Frequency

// Given an array of strings, return an object containing the frequency of each word.

// Example:

// Input: ["apple", "banana", "apple", "orange", "banana", "apple"]

// Output:
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }

function wordFrequency(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
  }
  return freq;
}
console.log(
  wordFrequency(["apple", "banana", "apple", "orange", "banana", "apple"]),
  "output"
);