type Person = {
    name: string;
    age: number;
    dob: string;
}

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

const john: Person = { name: "John", age: 45, dob: '1990-01-01' }

const people: Person[] = [john]

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

