// HIGHER ORDER FUNCTIONS ******

const fruitsList = ["Mango", "Orange", "Pineapple", "banana"];

// HOF, MAP - Map function is a HOF, which manipulates each value inside the array, 
// and returns a new array 
// Note - It doesnt change the array length
// for (let i = 0 ; i < fruitsList.length; i++)  fruitsList[i]

const fruitListPlural = fruitsList.map(function(fruit) {
   return fruit + 's';
})

console.log(fruitListPlural, "fruitsList");

// Example 2
// Where i want to tell if the employee is eligible for a gratuity or not ?
// Gratuity is if some completes 5 years with the company, the company gives them a reward 
const employeeList =  [
    {
        name: "Prabh",
        age: 28,
        experienceWithCompany: 6
    },
    {
        name: "Daniel",
        age: 35,
        experienceWithCompany: 12
    },
    {
        name: "Mike",
        age: 32,
        experienceWithCompany: 2
    }
]


const modifiedEmployeeList = employeeList.map((employee) => {
    if (employee.experienceWithCompany > 5) {
        employee.eligibleForGratuity = true;
    } else {
        employee.eligibleForGratuity = false;
    }
    return employee;
})

console.log(modifiedEmployeeList, "Modied EMployee");



// Filter Function
// Filter function is a HOF which filters the array based on a condition
// The length of the array may change

const employeeeNotEligible = modifiedEmployeeList.filter((employee) => {
    if (employee.experienceWithCompany < 5) {
        return true;
    }
})

console.log(employeeeNotEligible, "Not Eligible");