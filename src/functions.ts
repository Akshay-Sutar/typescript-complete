function printName(name: string) {
    console.log(name)
}

function sum(a: number, b: number): number {
    return a + b
}

const c = sum(1, 2)

function printPerson(person: { name: string }) {
    console.log(person.name)
}

printPerson({ name: "John" });// works fine

//printPerson({ name: "John", age: 28 });// since we are passing an object literal, we cannot pass unknown type

const person1 = {
    name: "John",
    age: 28
}

printPerson(person1); // This will work fine

// optionals parameters
function printLog(value: string, options?: { debug: boolean }) {
    console.log(value, options)
}

printLog('abc', { debug: true });
printLog('xyz');

// destructuring

type Options = {
    debug?: boolean;
}

function printNameAndLog(name: string, { debug = false }: Options = {}) {
    console.log(name, debug)
}


// rest parameter
function sum1(...nums: number[]) {
    return;
}

sum1(1, 2)
sum1(1, 2, 3)

// callbacks
function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
    cb(a + b)
}

sumWithCallback(1, 2, (sum) => console.log(sum))

type SumFunction = (sum: number) => void;

function sumWithCallback2(a: number, b: number, cb: SumFunction) {
    cb(a + b)
}

sumWithCallback2(1, 2, (sum) => console.log(sum))