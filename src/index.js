

class App extends React.Component {
    state = {
        name: 'Farhad',
        age: 27
    };

    render() {
        return (
            <div>
                <h1>Hey, ninjas</h1>
                <p>My name is: { this.state.name } and I am { this.state.age }</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));