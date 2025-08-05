let marks1 = Array(6)
let marks2 = new Array(45,55,44,11,33,77)
var marks = [45,55,44,11,33,77]

console.log(marks)
console.log(marks[3])
console.log(marks.length)
marks.push(66)
console.log(marks)
marks.pop()
console.log(marks)
marks.unshift(12)
console.log(marks)
console.log(marks.indexOf(44))

//check if 120 is present in the array or not
console.log(marks.includes(120))

//break the array into sub array
subMarks = marks.slice(3,5)
console.log(subMarks)

//iterate through array
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i])
}

//print sum of all the elements of the array
var sum=0
for(let i=0;i<marks.length;i++)
{
    sum = sum + marks[i]
}
console.log("The sum of the elements is: "+sum)
