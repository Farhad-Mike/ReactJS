class App extends React.Component {

    state = {
        users: [
            { name: 'Farhad', age: 27, id: 1 },
            { name: 'Ayten', age: 24, id: 2 },
            { name: 'Liza', age: 0, id: 3 }
        ]
    }

    addUser = (user) => {
        user.id = Math.random();
        let users = [...this.state.users, user];
        this.setState({
            users: users
        })
    }

    deleteUser = (id) => {
        let users = this.state.users.filter(user => {
            return user.id !== id;
        });

        this.setState({
            users
        })
    }


    render() {
        return (
            <div>
                <Users deleteUser={ this.deleteUser } users={ this.state.users }/>
                <AddUser addUser={ this.addUser } />
            </div>
        )
    }
}


function Users({users, deleteUser}) {
    let listUsers = users.map(user => {
        return (
            <div key={ user.id }>
                <div>{ user.name }</div>
                <div>{ user.age }</div>
                <div>{ user.id }</div>
                <button onClick={ () => {deleteUser(user.id)} }>Delete User</button>
                <br/>
            </div>
        )
    })

    return (
        <div>
            {listUsers}
        </div>
    )
}

class AddUser extends React.Component {
    state = {
        name: null,
        age: null,
        id: null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit } onChange={ this.handleChange }>
                <label htmlFor="name">Name: </label>
                <input type="text" id='name' /> <br/> <br/>

                <label htmlFor="age">Age: </label>
                <input type="text" id='age' /> <br/> <br/>

                <label htmlFor="hair">Hair: </label>
                <input type="text" id='hair' /> <br/> <br/>

                <button>Submit!</button>
            </form>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('app'));