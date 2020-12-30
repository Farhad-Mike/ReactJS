class App extends React.Component {
    state = {
        name: null,
        age: null,
        hair: null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
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