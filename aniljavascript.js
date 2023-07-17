const n=5
const getMultiplyData=(n)=>{

    let value=n*2
    return value 

}
const resultData=[]
for(let i=1;i<n+1;i++){
const result=getMultiplyData(i)
resultData.push(result)
}
console.log(resultData,"%%%%")

*
//Counting the number of occurrence of a given element using JavaScript
function countOccurrences(arr, num) {
  var counts = {};

  for (var i = 0; i < arr.length; i++) {
    var currentNum = arr[i];

    if (currentNum === num) {
      if (counts[num] === undefined) {
        counts[num] = 1;
      } else {
        counts[num]++;
      }
    }
  }

  return counts;
}

var numbers = [1, 6, 3, 1, 5, 9, 7, 2, 1, 9, 3, 7, 8, 9, 10];
var targetNumber = 7;

var occurrences = countOccurrences(numbers, targetNumber);

for (var key in occurrences) {
  console.log(key + " present " + occurrences[key] + " times.");
}
