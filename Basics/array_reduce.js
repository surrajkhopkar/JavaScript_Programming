var marks = [45,55,44,11,33,77]
var sum = 0

let total = marks.reduce((sum,mark) => sum+mark,0)
console.log(total)