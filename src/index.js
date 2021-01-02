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


    render() {
        return (
            <div>
                <Users users={ this.state.users }/>
                <AddUser addUser={ this.addUser } />
            </div>
        )
    }
}


function Users(props) {
    let users = props.users.map(user => {
        return (
            <div key={ user.id }>
                <div>{ user.name }</div>
                <div>{ user.age }</div>
                <div>{ user.id }</div>
                <br/>
            </div>
        )
    })

    return (
        <div>
            {users}
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