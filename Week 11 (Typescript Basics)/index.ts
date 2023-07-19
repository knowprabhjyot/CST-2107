// ****** Some type definitions ******

let userName: string = "Prabh123";

// This will produce an error based on different type
// userName = 24;

let age: number = 24;

let isEasy: boolean = true;

let date: Date = new Date();

let collegeAddress: number | string = 1000;

collegeAddress = "Hamilton Street";

console.log(userName, age, isEasy, date);


// ****** Types with Functions ******

function findSum(num1: number, num2: number): number {
    return num1 + num2; // type of value function is returning ?
}

const findMultiply = (num1: number, num2: number): string => {
    return `Multiplied value is: ${num1 * num2}`;
}

console.log(findSum(2, 4));


// Optional Parameters

function greetMe(greeting: string, firstName: string, lastName?: string): string {
    const fullName = lastName ? `${firstName} ${lastName}` : firstName;
    return `${greeting} ${fullName}`
}

console.log(greetMe('Welcome', 'Mike'));

console.log(greetMe('Hola', 'David ', 'Mike'));


// ** ARRAYS WITH TYPES **

// First way
let fruitBasket: string[] = ["Apple", "Banana", "Mango", "Orange"];

let averageMarks: number[] = [40, 80, 90, 100, 70];

// Second way
let studentNames: Array<string> = ["Mike", "Daniel", "Stacy"];

// Array with Multiple types
let addresList: (string | number | boolean)[]  = [1054, "One zero Eight Nine", 1000, true];

let collegeNamesNames: Array<string | number> = ["VCC", "harvard", "York", 2000];


// ** TUPLES WITH TYPES **

let studentDetail: [string, string, boolean, number] = ['Mike', 'Comox Street', true, 400];

let employee = {
    id: 1000,
    name: 'David',
    department: 'CS'
}

const employeeArray = Object.entries(employee).map(([key, value]: [string, string| number]) => {
    return [key, value];
})

console.log(employeeArray, 'employeeArray');

// ** ENUMS WITH TYPES **

enum numberOfDays {
    Monday = 'MONDAY',
    Tuesday = 'TUESDAY',
    Wednesday = 'WEDNESDAY',
    Thursday = 'THURSDAY',
    Friday = 'FRIDAY',
    Saturday = 'SATURDAY',
    Sunday = 'SUNDAY'
}

console.log(numberOfDays.Saturday);

// ENUM AS RETURN TYPE


enum DAYS {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// USING ENUM AS A RETURN TYPE AS WELL
function getDay(day: number): DAYS {
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
            return DAYS.Saturday
        default:
            return DAYS.Sunday
    }
}


// ** UNIONS **

let myAge: number | string = 'Twenty Eight';

let prabhAge = 28 as number;


function calculateAverageMarks(marksList: (number | string)[]): number {
    const totalSum =  marksList.reduce((accumulator, cV) => accumulator as number + Number(cV), 0);
    return totalSum as number / marksList.length;
}

console.log(calculateAverageMarks(['90', '95', 20, 60, 86]));


// ANY TYPE

let collegeNAme: any = "VCC";

collegeNAme = 29;
collegeNAme = true;
collegeNAme = {};

// Never type

function loopMeForEver(): never {
    while(true) {
        console.log('Always run');
    }

    // Unreachable Code
    // return 'hello';
}

// void

function printSum(a: number, b: number): void {
    console.log(a + b);

    // return a + b;  // we don't want to return anything
    // Intentionally doesn't have a return statement
}

let finalSum = printSum(4, 5);
console.log(finalSum, 'final sum value');


// TYPE INFERENCE (TS Automatically guesses the type)

let orange = "orange";

function printMe(name = "Prabh"): string {
    return 'Hey how are you ' + name;
}

let printvalue = printMe("Mike");

type Person = {
    name: string;
    age: number;
    email: string;
    address: string;
  }
  
  // Using Partial to create a new type with all properties optional
  type PartialPerson = Partial<Person>;
  
  // Usage
  const person1: PartialPerson = {
    name: 'Alice',
    age: 30,
  };
  
  const person2: PartialPerson = {
    name: 'Mike',
    email: 'Mike@gmail.com',
    // Both age and address are optional and can be omitted
  };




// ** INTERFACES **

interface Product {
    title: string,
    price: number,
    createdAt: Date,
    description: string,
    categories: Category[],
    calculateUserRating: () => number;
}

interface Category {
    title: string,
    description: string;
}

const tshirt: Product = {
    title: 'Chinese Color Tshirt',
    price: 40,
    createdAt: new Date(),
    description: "Its an awesome tshirt",
    categories: [
        { title: 'Clothing', description: 'Clothing is what you wear'},
        { title: 'Fashion',description: 'Something that"s classic' },
        { title: 'Trending', description: 'What People use most'}
     ],
     calculateUserRating: () => 5
}

const Jeans: Product = {
    title: 'Denim',
    price: 80,
    createdAt: new Date(),
    description: "Its an awesome jeans",
    categories: [
        { title: 'Clothing', description: 'Clothing is what you wear'},
        { title: 'Fashion',description: 'Something that"s classic' },
     ],
     calculateUserRating: () => 4

}

let productList: Product[] = [];

productList.push(tshirt, Jeans );



// ** TYPES **

type age =  number;

type Student = {
    name: string;
    department: string;
    studentId: number;
}

let CST2107Students: Student[] = [
    {
        name: 'Mark',
        department: 'CST',
        studentId: 123
    },
    {
        name: 'Stacy',
        department: 'CST',
        studentId: 2000
    }
]


// UTILITIES WITH TYPE (Advance)

// PICK

type People = {
    name: string;
    age: string;
    address: string;
}

// You can pick values from one type to another type
type Employee = Pick<People, 'name' | 'address'>;

let prabh: Employee = {
    name: "prabh",
    address: 'Vancouver'
}


// RECORD

type Level = 'Debug' | 'Log' | 'Info' | 'Error' | 'Warn';

type Logger = Record<Level, string>

let newLogger: Logger = {
    Debug: 'This will debug on the console',
    Log: 'This will log on the console',
    Info: 'This will info',
    Error: 'This will error',
    Warn: 'This will provide a warning'
};


// Partial

type StudentType = Partial<People>

let student1: StudentType = {
    name: "prabh"
}