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