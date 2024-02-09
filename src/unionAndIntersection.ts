type PersonType = {
    id: number | string;
    status: "Active" | "Inactive"
}

let person3: PersonType = { id: 123, status: "Active" }
let person4: PersonType = { id: '123', status: "Inactive" }

type PersonType1 = {
    name: string,
    age: number
}

type PersonWithId = PersonType1 & {
    id: string
}

interface PersonInteface {
    name: string,
    age: number
}

interface PersonWithIInterface extends PersonInteface {
    id: string;
}

const person5: PersonWithId = { id: "123", name: "John", age: 45 }
const perso6: PersonWithIInterface = { id: "123", name: "John", age: 45 }
