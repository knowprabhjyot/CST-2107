// Generics in Functions

function getAge<T>(value: T): T {
    return value;
}

const age1 = getAge<number>(20);
const age2 = getAge<string>('Twenty');

console.log(age1, age2);

// Generics in Arrays as well