{
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

}