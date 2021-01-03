class App extends React.Component {
    state = {
        todos: [
            { id: 1, content: 'Learn HTML' },
            { id: 2, content: 'Learn CSS' },
            { id: 3, content: 'Learn JavaScript' }
        ]
    }

    deleteTodo = (id) => {
        let todos = this.state.todos.filter( todo => todo.id !== id );

        this.setState({
            todos
        })
    }

    addTodo = (todo) => {
        if(!todo.content) return;
        
        todo.id = Math.random();
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    render() {
        return (
            <div className='todo-app container'>
                <h1 className="center blue-text">Todo's</h1>
                <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo }/>
                <AddTodo addTodo={this.addTodo}/>
            </div>
        )
    }
}






function Todos({ todos, deleteTodo }) {
    let noTodos = (<p className='center'>You have no todos left</p>);
    
    let todosList = todos.length ? (
        todos.map( todo => {
            return (
                <div className="collection-item" key={ todo.id }>
                    <span onClick={ () => deleteTodo(todo.id) }>{ todo.content }</span>
                </div>
            )
        })
    ) : noTodos;
        

    return (
        <div className="todos collection">
            { todosList }
        </div>
    )
}






class AddTodo extends React.Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }


    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label> Add new todo: </label>
                <input type="text" onChange={ this.handleChange } value={ this.state.content }/>
            </form>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('app'));