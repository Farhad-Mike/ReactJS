class App extends React.Component {
    state = {
        usersInfo: [
            { name: 'Farhad', age: 27, id: 1 },
            { name: 'Ayten', age: 24, id: 2 },
            { name: 'Liza', age: 0, id: 3 }
        ]
    }

    render() {
        return(
            <div className="family">
                <Users usersInfo = { this.state.usersInfo } />
            </div>
        )
    }
}

class Users extends React.Component {
    render() {
        const { usersInfo } = this.props;
        const userList = usersInfo.map(user => {
            return (
                <div key={user.id}>
                    <div>Name: { user.name }</div>
                    <div>Age: {user.age }</div>
                    <br/>
                </div>
            )
        });

        return(
            <div>
                { userList }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));