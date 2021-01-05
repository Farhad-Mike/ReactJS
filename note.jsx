// npx create-react-app myapp
// npm install react-router-dom
// npm install axios // Можно использовать вместо fetch запросов. Не обязательная библиотека

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


// Передача функции через props
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
            users
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
        hair: null
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


// Как правильно удалять элементы
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


// Жизненные циклы компонентов
class AddUser extends React.Component {
    state = {
        name: null,
        age: null,
        id: null
    }

    componentDidMount() { // Вызывает после самого первого монтирования компонента.
        console.log('The component mounted');
    }

    componentDidUpdate(prevProps, prevState) { // Вызывает после кажлого обновления компонента. Содержит параметры предыдущих props и state
        console.log('The component updated');
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
                <input type="text" id='name' value={ this.state.name }/> <br/> <br/>

                <label htmlFor="age">Age: </label>
                <input type="text" id='age' value={ this.state.age }/> <br/> <br/>

                <button>Submit!</button>
            </form>
        )
    }
}


// Как осуществлять multi landing страницы сайта с запросом на сервер
import { BrowserRouter, Route } from 'react-router-dom';
class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className="root">
                    <Navbar />
                    <Route exact path='/' component={ Home }/>
                    <Route path='/about' component={ About }/>
                    <Route path='/contact' component={ Contact }/>
                </div>
            </BrowserRouter>
        )
    }
}

function Navbar() {
    return (
        <nav className='nav-wrapper red darken-3'>
            <div className="container">
                <a href='/' className="brand-logo">BrowserRoute</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}


// Как осуществлять multi landing страницы сайта без запросов на сервер
import { BrowserRouter, Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'; // Использование <NavLink> вместо <Link> просто будет добавлять className='active' на выбранную (активную в данный момент) ссылку <a>
class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className="root">
                    <Navbar />
                    <Route exact path='/' component={ Home }/>
                    <Route path='/about' component={ About }/>
                    <Route path='/contact' component={ Contact }/>
                </div>
            </BrowserRouter>
        )
    }
}

function Navbar() {
    return (
        <nav className='nav-wrapper red darken-3'>
            <div className="container">
                <a href='/' className="brand-logo">BrowserRoute</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}



// Как осуществлять forwarding на другой линк
import { BrowserRouter, Route } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom'; // Метод props.history.push(path, state); существует только <Route> тегов которые хранятся внутри <BrowserRouter> тега. Чтобы компонент <Navbar /> тоже мог использовать forwarding нужно его экспортировать как export default withRouter(Navbar);
class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className="root">
                    <Navbar />
                    <Route exact path='/' component={ Home }/>
                    <Route path='/about' component={ About }/>
                    <Route path='/contact' component={ Contact }/>
                </div>
            </BrowserRouter>
        )
    }
}

function Navbar(props) {
    setTimeout(() => {
        props.history.push('/contact')
    }, 2000)
    return (
        <nav className='nav-wrapper red darken-3'>
            <div className="container">
                <a href='/' className="brand-logo">BrowserRoute</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>  
                    <li><Link to="/contact">Contact</Link></li> 
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);


// HOC (High Order Component) Компонент высокого порядка. Как правильно создавать компонент обертку.
function Rainbow(WrappedComponent) {
    const colours = ['red', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 4)];
    const className = `${randomColour}-text`;

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent { ...props } />
            </div>
        )
    }
}


function Contact() {
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium ipsam, quaerat perferendis eveniet fugiat autem sed, fugit, sequi illum voluptates vel iure! Ut repellat sunt expedita debitis possimus natus.</p>
        </div>
    )
}

export default Rainbow(Contact);


// Fetch requests
class Home extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => this.setState({
                posts: posts.slice(0, 10)
            }))
    }

    render() {
        const { posts } = this.state;
        const noPosts = <div className='center'>No posts yet</div>;
        const postsList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={ post.id }>
                        <div className="card-content">
                            <span className="card-title">{ post.title }</span>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                )
            })
        ) : noPosts;


        return (
            <div className="container">
                <h4 className="center">Home</h4>
                { postsList }
            </div>
        )
    }
}


// Route parameters #1 Меняет url в зависимости от содержимого
class Post extends React.Component {
    state = {
        id: null
    }

    componentDidMount() {
        const id = this.props.match.params.post_id;
        this.setState({
            id
        })
    }


    render() {
        return (
            <div className='container'>
                <h4>{ this.state.id }</h4>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className="root">
                    <Route path='/:post_id' component={ Post }/>
                </div>
            </BrowserRouter>
        )
    }
}


// Route parameters #2 Меняет url и контент
// Я сделал /post/:post_id вместо /:post_id чтобы избежать бага, который будет рендерить страницу /:post_id даже при навигации по другому компоненту
class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className="root">
                    <Navbar />
                    <Route exact path='/' component={ Home }/>
                    <Route path='/about' component={ About }/>
                    <Route path='/contact' component={ Contact }/>
                    <Route path='/post/:post_id' component={ Post }/> 
                </div>
            </BrowserRouter>
        )
    }
}


class Home extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => this.setState({
                posts: posts.slice(0, 10)
            }))
    }

    render() {
        const { posts } = this.state;
        const noPosts = <div className='center'>No posts yet</div>;
        const postsList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={ post.id }>
                        <div className="card-content">
                            <Link to={ `/post/${ post.id }`}>
                                <span className="card-title">{ post.title }</span>
                            </Link>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                )
            })
        ) : noPosts;


        return (
            <div className="container">
                <h4 className="center">Home</h4>
                { postsList }
            </div>
        )
    }
}


class Post extends React.Component {
    state = {
        post: null
    }

    componentDidMount() {
        const id = this.props.match.params.post_id;
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    post: json
                })
            })
    }


    render() {
        const loadPost = <div className="center">Loading post...</div>
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{ this.state.post.title }</h4>
                <p>{ this.state.post.body }</p>
            </div>
        ) : loadPost;

        return (
            <div className='container'>
                { post }
            </div>
        )
    }
}


// Route params #3. Если ты не хочешь нарушать структуризацию url то можно воспользоваться тегом <Switch> который как и команда Switch/case в JS будет проверять каждый path сверху до низу пока не найдет точное совпадение, и как первое совпадение будет найдено то сразу же выберет его
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className="root">
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={ Home }/>
                        <Route path='/about' component={ About }/>
                        <Route path='/contact' component={ Contact }/>
                        <Route path='/:post_id' component={ Post }/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}


// Как правильно добавлять IMG
import ReactIMG from '../img/react.png';

class App extends React.Component {
    render() {
        return (
            <div>
                <img src={ ReactIMG }/>
            </div>
        )
    }
}