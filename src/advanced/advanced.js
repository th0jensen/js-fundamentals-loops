const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10
let hasTen = false
let indexOfTen = -1

for (let i = 0; i <= nums.length; i++) {
  if (nums[i] === 10) {
    hasTen = true
    indexOfTen = i
    break
  } else {
    hasTen = false
  }
}

// 2. Use a for loop to count how many numbers in the array are divisible by 3
let divisibleByThreeCount = 0

for (let i = 0; i <= nums.length; i++) {
  if (nums[i] % 3 === 0) {
    divisibleByThreeCount += 1
  }
}

// 3. use a for loop to find the average of the numbers in the array
let average = 0
let i = 0
for (i = 0; i < nums.length; i++) {
  average += nums[i]
}
if (i === nums.length) {
  average = average / Number(nums.length)
}

// 4. use a for loop to find the largest number in the array
let largest = 0

for (i = 0; i < nums.length; i++) {
  if (nums[i] > (largest || nums[i - 1])) {
    largest = nums[i]
    console.log(largest)
  }
}

// 5. use a for loop to find the smallest number in the array
let smallest = 100000

for (i = 0; i < nums.length; i++) {
  if (nums[i] < (smallest || nums[i - 1])) {
    smallest = nums[i]
  }
}

// 6. find the median of the numbers in the array
let median = 0

const orderedList = nums.sort(function (a, b) {
  return a - b
})

const middleIndex = Math.floor(orderedList.length / 2)

if (orderedList.length % 2 === 0) {
  median = Math.floor(
    (orderedList[middleIndex - 1] + orderedList[middleIndex]) / 2
  )
} else {
  median = orderedList[middleIndex]
}

module.exports = {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average,
  largest,
  smallest,
  median
}
