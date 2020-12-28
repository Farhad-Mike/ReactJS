
// Как правильно добавлять events на эелементы.
class App extends React.Component {
    state = {
        name: 'Farhad',
        age: 27
    };

    handleClick(e) {
        console.log(e.target);
    }

    handleCopy(e) {
        console.log('You can\'t copy the text!');
    }
    
    render() {
        return (
            <div>
                <h1>Hey, ninjas</h1>
                <p>My name is: { this.state.name } and I am { this.state.age }</p>
                <button onClick={ this.handleClick }>Click Me!</button>
                <p onCopy={ this.handleCopy }>Do not copy!</p>
            </div>
        )
    }
}

// Как правильно привязывать контекст
class App extends React.Component {
    text = 'hello'

    doSome() {
        console.log(this.text);
    }

    render() {
        return (
            <div>
                <button onClick={ this.doSome.bind(this) }>Click Me!</button>
            </div>
        )
    }
}


class App extends React.Component {
    text = 'hello'

    doSome = () => {
        console.log(this.text);
    }
    
    render() {
        return (
            <div>
                <button onClick={ this.doSome }>Click Me!</button>
            </div>
        )
    }
}


// Как менять State
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

