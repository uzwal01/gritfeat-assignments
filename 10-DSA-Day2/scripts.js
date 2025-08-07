// // 1. Find if a duplicate exists in a list of numbers.
// function findDuplicates(arr) {
//     const counts = {};
//     const duplicates = new Set();

//     for (const num of arr) {
//         if (counts[num]) {
//             duplicates.add(num);
//         }
//         else {
//             counts[num] = 1;
//         }
//     }

//     return Array.from(duplicates);
// }

// const data = [1, 3, 5, 2, 4, 5];
// console.log(findDuplicates(data));


// //2. Check if any item from user roles exists in required roles.
// function hasRequiredRole(userRoles, requiredRoles) {
//     const requiredSet = new Set(requiredRoles);

//     for (const role of userRoles) {
//         if (requiredSet.has(role)) {
//             return true;
//         }
//     }

//     return false;
// }

// const roles = ['admin', 'manager', 'supervisor', 'editor', 'viewer', 'owner', ''];
// const userRoles = ['user', 'editor'];
// const requiredRoles = ['admin', 'editor'];

// console.log(hasRequiredRole(userRoles, requiredRoles)); 


// // Find Common Elements Between Two Arrays
// function commonElements(arr1, arr2) {
//     const setB = new Set(arr2);
//     const result = [];

//     for (const item of arr1) {
//         if (setB.has(item)) {
//             result.push(item);
//         }
//     }
//     return result;
// }

// const a1 =  [1,4,2,8,9];
// const a2 = [7,5,0,4,1];

// console.log(commonElements(a1, a2));


// // Filter items based on allowed keys
// function filterByAllowedKeys(data, allowedKeys) {
//     const allowedSet = new Set(allowedKeys);

//     return data.filter((item) => {
//         return allowedSet.has(item.key)
//     });
// }
// const data = [
//   { key: 'name', value: 'John' },
//   { key: 'email', value: 'john@example.com' },
//   { key: 'age', value: 20 },
// ];

// const allowedKeys = ['name', 'age'];

// console.log(filterByAllowedKeys(data, allowedKeys));


// Determine whether both keys and values  of two objects are equal 
// function sameObject(obj1, obj2) {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length) {
//         return false;
//     }

//     for (const key of keys1) {
//         if (!(key in obj2)) {
//             return false;
//         }
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// const d1 = { name: 'John', email: 'john@example.com', age: 20 };
// const d2 = { name: 'John', email: 'john@example.com', age: 20 };
// const d3 = { name: 'Jane', email: 'jane@example.com', age: 20 };

// console.log(sameObject(d1, d2)); // true
// console.log(sameObject(d1, d3)); // false


// // Group the related data by category 
// function groupByCategory(products) {
//     const grouped = {};

//     for (const product of products) {
//         const key = product.categoryId;

//         if (!grouped[key]) {
//             grouped[key] = [];
//         }

//         grouped[key].push(product);
//     }
//     return grouped;
// }

// const products = [
//   { id: 1, name: 'Phone', categoryId: 2 },
//   { id: 2, name: 'Shirt', categoryId: 1 },
//   { id: 3, name: 'Charger', categoryId: 2 }
// ];

// // console.log(groupByCategory(products));


// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;

//     // Move elements of arr[0..i-1], that are greater than key, to one position ahead
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = key;
//   }
//   return arr;
// }

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return -1; // Not found
// }

// // Example usage:
// const inputArray = [12, 4, 7, 9, 1, 15, 3];
// const sortedArray = insertionSort([...inputArray]); // Clone input array to avoid mutation
// const target = 9;

// const index = binarySearch(sortedArray, target);

// console.log("Sorted Array:", sortedArray);
// console.log(`Index of ${target}:`, index);


// // BST Implementation:

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     const newNode = new Node(value);
//     if (!this.root) return this.root = newNode;

//     let current = this.root;
//     while (true) {
//       if (value === current.value) return; // avoid duplicates
//       if (value < current.value) {
//         if (!current.left) return current.left = newNode;
//         current = current.left;
//       } else {
//         if (!current.right) return current.right = newNode;
//         current = current.right;
//       }
//     }
//   }

//   search(value) {
//     let current = this.root;
//     while (current) {
//       if (value === current.value) return true;
//       current = value < current.value ? current.left : current.right;
//     }
//     return false;
//   }
// }

// const tree = new BST();
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);

// console.log(tree.search(5));   // true
// console.log(tree.search(12));  // false