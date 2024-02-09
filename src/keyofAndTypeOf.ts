{
    type Person = {
        name: string;
        age: number
    }

    function getValue(key: keyof Person, person: Person) {
        return person[key]
    }


    const person: Person = { name: "John", age: 45 }
    const age = getValue('age', person)

    const persons: typeof person[] = [];
    persons.push(person)

}
{
    type Person = {
        name: string;
        skillLevel: 'Beginner' | 'Intermediate' | 'Expert';
    }

    type PeopleGroupedBySkillLevel = {
        [index in Person['skillLevel']]: Person[]
    }
}