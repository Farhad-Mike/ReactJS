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

function Users({usersInfo}) {
    const usersList = usersInfo.map(user => {
        if(user.age < 20) {
            return null;
        }
        return (
            <div key={user.id}>
                <div>{ user.name }</div>
                <div>{ user.age }</div>
                <br/>
            </div>
        )
    });

    return (
        <div>
            { usersList }
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));