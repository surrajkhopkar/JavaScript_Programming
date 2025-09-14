const employee = {
    firstName: 'John',
    lastName: 'McGinn',
    empId: 123,
    joiningYear: 2001,
    job: 'engineer',
    hasAward : true,
    // calcExp: function(joiningYear){
    //     return 2037  - joiningYear;
    // }
    calcExp: function(){
        return 2037  - this.joiningYear;
    }
};

console.log(employee);
console.log(employee.calcExp(2002));