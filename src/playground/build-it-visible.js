class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            } 
        })
    }
    render(){
        return(
            <div>
            <h1>visibility toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>
            {this.state.visibility && (
                <div>
                    <p>Hiya</p>
                </div>
            )}
        </div>   
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


/*
let visibility = false; 

const toggleVis = () => {
    visibility = !visibility;
    reRender();
}

const reRender = () => {
    const template = (
        <div>
            <h1>visibility toggle</h1>
            <button onClick={toggleVis}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hiya</p>
                </div>
            )}
        </div>   
    )

    ReactDOM.render(template, document.getElementById('app'));
}

reRender();
*/