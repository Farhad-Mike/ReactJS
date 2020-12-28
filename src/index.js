

class App extends React.Component {
    state = {
        name: 'Farhad',
        age: 27
    };

    handleChangeString = (e) => {
        this.setState({
            name: 'Liza',
            age: 0
        })
    }

    render() {
        return (
            <div>
                <h1>Hey, ninjas</h1>
                <p> Hello! My name is { this.state.name } and I am { this.state.age } </p>
                <button onClick={ this.handleChangeString }>Change!</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));