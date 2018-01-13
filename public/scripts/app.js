'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                'This is from Header'
            );
        }
    }]);

    return Header;
}(React.Component);

var jsx = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Title'
    ),
    React.createElement(Header, null)
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
