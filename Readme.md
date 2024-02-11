# Typescript summarised

## Installing and compiling TS

1. initialize a project and install typescript
   `npm init -y`
   `npm -i --save-dev typesript`

2. initialize TS
   `npx tsc --init`

this will generate tsconfig.json

3. compile the code with tsc
   `npx tsc script.ts` where `script.ts` is a TS code file.

## Installing TS with a bundler (vite here)

`npm create vite@latest .`
will install typescript with the help of vite in the current directory

## Types

### Basic types

`let a:number = 4`
`let name:string = "John"`

`const names: string[] = ['John', 'Mclane']`

### Object types

```
const person: { name: string, age: number, isDeveloper?: boolean } = {
    name: "John",
    age: 45,
}
```

This will create an object with props name and number. Accessing any other prop will throw error.

? means `isDeveloper` is optional and can be undefined.

`person.dob` will throw error as dob is not part of defined type.

### type

You can create a type that can be use multiple time.

```
type Person = {
    name: string;
    age: number;
    dob: string;
}

const john: Person = { name: "John", age: 45, dob: '1990-01-01' }

const people: Person[] = [john]
```

### interface

Similar to `type` but can only be used with objects.

```
interface PersonInterface {
    name: string;
    dob: string;
    address: {
        street: string;
        state: string;
        country?: string;
        PINCODE: number;
    }
}

const jane: PersonInterface = {
    name: 'Jane',
    dob: '1990-01-01',
    address: {
        street: 'Groove street',
        state: 'NA',
        country: 'USA',
        PINCODE: 12345
    }
}
```

we cannot assign a `type` to a `interface`.
`interface PersonType = number;`
This is not valid, but it can be done with type as
`type Person = number`

### functions

```
function sum(a: number, b: number): number {
    return a + b
}
```

type of params is mentioned. Optionally, return type can also be mentioned.

```
function printPerson(person: { name: string }) {
    console.log(person.name)
}

printPerson({ name: "John" });// works fine

printPerson({ name: "John", age: 28 });// since we are passing an object literal, we cannot pass unknown type

const person1 = {
    name:"John",
    age:28
}

printPerson(person1); // This will work fine
```

parameters can be marked as optional using `?`

```
function printLog(value: string, options?: { debug: boolean }) {
    console.log(value, options)
}

printLog('abc', { debug: true });
printLog('xyz');
```

destructuring with default value

```
type Options = {
    debug?: boolean;
}

function printNameAndLog(name: string, { debug = false }: Options = {}) {
    console.log(name, debug)
}
```

To specify type of rest parameters

```
function sum1(...nums: number[]) {
    return;
}

sum1(1,2)
sum1(1,2,3)
```

To specify type of a callback function

```
function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
    cb(a + b)
}

sumWithCallback(1, 2, (sum) => console.log(sum))

type SumFunction = (sum: number) => void;

function sumWithCallback2(a: number, b: number, cb: SumFunction) {
    cb(a + b)
}

sumWithCallback2(1, 2, (sum) => console.log(sum))
```

### union

combines different types

```
type PersonType = {
    id: number | string;
    status: "Active" | "Inactive"
}

let person1: PersonType = { id: 123, status: "Active" }
let person2: PersonType = { id: '123', status: "Inactive" }
```

### intersection

```
type PersonType1 = {
    name: string,
    age: number
}

type PersonWithId = PersonType1 & {
    id: string
}
```

for interfaces

```
interface PersonInteface {
    name: string,
    age: number
}

interface PersonWithIInterface extends PersonInteface {
    id: string;
}
```

### readonly

You can mark an prop or variable as readonly.

```
type Person = {
    readonly id: number;
    name: string;
    dob: string;
}

const person: Person = { id: 1, name: "John", dob: "1990-01-01" }

//person.id = 123; //this will cause error

type NumberArray = readonly number[];

const nums: NumberArray = [1, 2, 3]

//nums.push(1); // this will cause error
```

### keyof

indicates that the variable is a key of an object

```
 type Person = {
        name: string;
        age: number
    }

    function getValue(key: keyof Person, person: Person) {
        return person[key]
    }

    const person: Person = { name: "John", age: 45 }

    const age = getValue('age', person)
```

### typeof

returns the type of a variable

```
    const person: Person = { name: "John", age: 45 }

    // person variable is used, instead of the type Person
    const persons: typeof person[] = [];
    persons.push(person)
```

### index types

Used to reference the key of a type
Using `Person['skillLevel']`, we can access the prop `skillLevel` of type `Person`

```
type Person = {
    name: string;
    skillLevel: 'Beginner' | 'Intermediate' | 'Expert';
}

function printSkillLevel(skillLevel : Person['skillLevel']) {
    console.log(skillLevel)
}

```

```
type Person = {
        name: string;
        skillLevel: 'Beginner' | 'Intermediate' | 'Expert';
    }

    type PeopleGroupedBySkillLevel = {
        [index in Person['skillLevel']]: Person[]
    }
```

The above code will create a type `PeopleGroupedBySkillLevel` which is an object which must have all 3 keys 'Beginner' , 'Intermediate' , 'Expert'. And the value of these keys must be an array of type `Person`.

```
const a = [123, "asd"]

type A = (typeof a);
```

`A` will be `number|string`

### const

```
let nums = [1,2,3] as const;
//nums.push(1);// this will throw error as nums is a constant now
```

`const` can be paired with `typeof` to work as `enum`

```
let SKILLS = ['novice', 'intermediate', 'master'] as const;
type SkillType = (typeof SKILLS)[number];// SkillType now works as enum

{
    type Person = {
        name: string;
        skillLevel: SkillType
    }
}
```

### Tuple

A Tuple is an array of types. It can be used while working with 2D data, like a row of a table or an excel.

`type TableRow = [number, string, number]`

### Generics

Generics are used to create reusable code where value can be of many type

```
    function getSecondElement<T>(array: T[]) {
        return array[1];
    }

    const a = [1, 2, 3];
    const b = ['a', 'b', 'c'];

    const res1 = getSecondElement(a)
    const res2 = getSecondElement(b)
```

A generic type `<T>` is specified for function `getSecondElement`

```
    type APIResponse<TData> = {
        data: TData,
        isError: boolean
    }

    type UserResponse = APIResponse<{ name: string, age: number }>

    const userRes: UserResponse = {
        data: {
            name: "ABC",
            age: 25
        },
        isError: false
    }
```

`<TData>` is used to specify type of `data`. It is later specified in
`APIResponse<{ name: string, age: number }>`

```
    function aToO<T>(arr: [string, T][]) {
        let obj: {
            [index: string]: T
        } = {};

        arr.forEach(([key, value]) => {
            obj[key] = value
        });

        return obj;
    }

    const arr: [string, number | boolean][] = [
        ['key1', 1], ['key2', 2], ['key3', true]
    ]

    let convertedObj = aToO(arr);
```

Using generics to create a function to convert a 2D array into an object

### Async functions

```
async function wait(duration: number): Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve('Hi'), duration);
    })
}


wait(1000).then(value => console.log(value.length))
```

Need to specify the return type of a `Promise`. Here, since we are returning a string, `Promise<string>` is specified. We can also use the same for return type of the function.

### Pick and Omit

```
    type Todo = {
        id: string;
        name: string;
        status: string;
        completed: boolean;
    }

    // want to create a new Type NewTodo, which has all the props of Todo, except for id. Use <Pick> to pick selected props from Todo
    type NewTodo = Pick<Todo, 'name' | 'status' | 'completed'>;

    //Omit. Similar to Pick but omits the specified the props

    type NewTodo1 = Omit<Todo, 'id'>

    function saveTodo(todo: NewTodo) {
        return { ...todo, id: crypto.randomUUID() }
    }

    function renderTodo(todo: Todo) {
        const div = document.createElement('div')
        div.id = todo.id
    }
```
