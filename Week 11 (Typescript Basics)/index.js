// ****** Some type definitions ******
var userName = "Prabh123";
// This will produce an error based on different type
// userName = 24;
var age = 24;
var isEasy = true;
var date = new Date();
var collegeAddress = 1000;
collegeAddress = "Hamilton Street";
console.log(userName, age, isEasy, date);
// ****** Types with Functions ******
function findSum(num1, num2) {
    return num1 + num2; // type of value function is returning ?
}
var findMultiply = function (num1, num2) {
    return "Multiplied value is: ".concat(num1 * num2);
};
console.log(findSum(2, 4));
// Optional Parameters
function greetMe(greeting, firstName, lastName) {
    var fullName = lastName ? "".concat(firstName, " ").concat(lastName) : firstName;
    return "".concat(greeting, " ").concat(fullName);
}
console.log(greetMe('Welcome', 'Mike'));
console.log(greetMe('Hola', 'David ', 'Mike'));
// ** ARRAYS WITH TYPES **
// First way
var fruitBasket = ["Apple", "Banana", "Mango", "Orange"];
var averageMarks = [40, 80, 90, 100, 70];
// Second way
var studentNames = ["Mike", "Daniel", "Stacy"];
// Array with Multiple types
var addresList = [1054, "One zero Eight Nine", 1000, true];
var collegeNamesNames = ["VCC", "harvard", "York", 2000];
// ** TUPLES WITH TYPES **
var studentDetail = ['Mike', 'Comox Street', true, 400];
var employee = {
    id: 1000,
    name: 'David',
    department: 'CS'
};
var employeeArray = Object.entries(employee).map(function (_a) {
    var key = _a[0], value = _a[1];
    return [key, value];
});
console.log(employeeArray, 'employeeArray');
// ** ENUMS WITH TYPES **
var numberOfDays;
(function (numberOfDays) {
    numberOfDays["Monday"] = "MONDAY";
    numberOfDays["Tuesday"] = "TUESDAY";
    numberOfDays["Wednesday"] = "WEDNESDAY";
    numberOfDays["Thursday"] = "THURSDAY";
    numberOfDays["Friday"] = "FRIDAY";
    numberOfDays["Saturday"] = "SATURDAY";
    numberOfDays["Sunday"] = "SUNDAY";
})(numberOfDays || (numberOfDays = {}));
console.log(numberOfDays.Saturday);
// ENUM AS RETURN TYPE
var DAYS;
(function (DAYS) {
    DAYS[DAYS["Monday"] = 0] = "Monday";
    DAYS[DAYS["Tuesday"] = 1] = "Tuesday";
    DAYS[DAYS["Wednesday"] = 2] = "Wednesday";
    DAYS[DAYS["Thursday"] = 3] = "Thursday";
    DAYS[DAYS["Friday"] = 4] = "Friday";
    DAYS[DAYS["Saturday"] = 5] = "Saturday";
    DAYS[DAYS["Sunday"] = 6] = "Sunday";
})(DAYS || (DAYS = {}));
// USING ENUM AS A RETURN TYPE AS WELL
function getDay(day) {
    switch (day) {
        case 0:
            return DAYS.Monday;
        case 1:
            return DAYS.Tuesday;
        case 2:
            return DAYS.Wednesday;
        case 3:
            return DAYS.Thursday;
        case 4:
            return DAYS.Friday;
        case 5:
            return DAYS.Saturday;
        default:
            return DAYS.Sunday;
    }
}
// ** UNIONS **
var myAge = 'Twenty Eight';
var prabhAge = 28;
function calculateAverageMarks(marksList) {
    var totalSum = marksList.reduce(function (accumulator, cV) { return accumulator + Number(cV); }, 0);
    return totalSum / marksList.length;
}
console.log(calculateAverageMarks(['90', '95', 20, 60, 86]));
// ANY TYPE
var collegeNAme = "VCC";
collegeNAme = 29;
collegeNAme = true;
collegeNAme = {};
// Never type
function loopMeForEver() {
    while (true) {
        console.log('Always run');
    }
    // Unreachable Code
    // return 'hello';
}
// void
function printSum(a, b) {
    console.log(a + b);
    // return a + b;  // we don't want to return anything
    // Intentionally doesn't have a return statement
}
var finalSum = printSum(4, 5);
console.log(finalSum, 'final sum value');
