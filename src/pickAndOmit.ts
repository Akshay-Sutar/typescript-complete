{
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
}