{
    function getSecondElement<T>(array: T[]) {
        return array[1];
    }

    const a = [1, 2, 3];
    const b = ['a', 'b', 'c'];

    const res1 = getSecondElement(a)
    const res2 = getSecondElement(b)

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

}