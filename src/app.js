class Header extends React.Component {
    render() {
        return <p>This is from Header</p>;
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header/>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));



































/*
console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer ya bish',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        reRender();
    }   
}

const destroy = () =>{
    app.options = []
    reRender();
}

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randNum];
    alert(option);
}

// JSX - JavaScript XML
const reRender = () => {
    const template = ( 
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? 'Here are your options' : 'No options'}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick = {destroy}>Remove All</button>      
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, approot);
};

const approot = document.getElementById('app');
reRender();

//user object
/*const user = {
    name: 'Austin',
    age: '22',
    location: 'Florida' 
};
function getLocation(location){
    if (location) {
        return <p>Location: {location}</p>;
    }
}
const userName = 'Austin!';
const userAge = '22';
const userLocation = 'Florida';
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
*/
