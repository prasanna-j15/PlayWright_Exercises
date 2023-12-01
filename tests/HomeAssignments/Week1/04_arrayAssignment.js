/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]

2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/


//Array problem 1

let swap = [0,1,0,3,12];
swap.sort();
for (let swaplast = swap.length - 1; swaplast >=0; swaplast--) {
    let temp = swap[swaplast];
    if (temp == 0) {
        swap.shift();
        swap.push(0);
    }
}
console.log(swap);


//Array problem 2
let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];
let num3 = [];

for (let x = 0; x < nums1.length; x++) {

    for (let j = 0; j < nums2.length; j++) {

        if (nums1[x] == nums2[j]) {
            if (!num3.includes(nums1[x])) {
                num3.push(nums1[x]);
            }
        }

    }

}
console.log(num3);


//Array problem 3
let inputnums = [34, 7, 21, 89, 54, 10, 91, 67]
console.log("Minimum Element : " + Math.min(...inputnums) + "  Index : " + inputnums.indexOf(Math.min(...inputnums)));
console.log("Maximum Element : " + Math.max(...inputnums) + "  Index : " + inputnums.indexOf(Math.max(...inputnums)));

//Array problem 4

iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];
resultarray = [];

for (let x = 0; x < iputArray.length; x++) {

    if (!resultarray.includes(iputArray[x])) {
        resultarray.push(iputArray[x]);
    }
}
console.log(resultarray);