
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

// Как передать параметры другому под компоненту
class App extends React.Component {
    render() {
        return (
            <div>
                <User name='Farhad' age={27} />
            </div>
        )
    }
}

class User extends React.Component {  // Использование Class вместо обычной функции называется Container component
    render() {
        return (
            <div>
                <h1>{ this.props.name }</h1>
                <h2>{ this.props.age }</h2>
            </div>
        )
    }
}


// Как правильно обрабатывать и передавать данные
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

// Использование UI component то есть если не нужно state то почему бы не использовать вместо Class обычную функцию
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


// Создания условия и в зависимости от условия рендеринг компонента
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


// Как правильно использовать forms
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