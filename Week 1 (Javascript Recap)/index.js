// HIGHER ORDER FUNCTIONS ******

const fruitsList = ["Mango", "Orange", "Pineapple", "banana"];

// HOF, MAP - Map function is a HOF, which manipulates each value inside the array, 
// and returns a new array 
// Note - It doesnt change the array length
// for (let i = 0 ; i < fruitsList.length; i++)  fruitsList[i]

const fruitListPlural = fruitsList.map(function (fruit) {
    return fruit + 's';
})

console.log(fruitListPlural, "fruitsList");

// Example 2
// Where i want to tell if the employee is eligible for a gratuity or not ?
// Gratuity is if some completes 5 years with the company, the company gives them a reward 
const employeeList = [
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


// Assignemnt 1

const products = [{
    name: 'Product 1',
    price: 10
},
{
    name: 'Product 2',
    price: 20
},
{
    name: 'Product 3',
    price: 30
}];

let total = 0;

for (let i = 0 ; i < products.length; i++) {
    total = total + products[i].price
}

// accumulator == total
// currentValue == product[i]

const totalPrice = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
}, 0);

console.log(totalPrice, "total Price");

// Reduce Example

let listOfNumbers = [20, 40, 400, 50, 100, 200, -10];

// I want to see which number is the highest value inside the array

let highestValue = listOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue
}, -Infinity)

console.log(highestValue, "value");
// Infinity--> Largest Possible Value
// -Infinity --> Leaste Possible value