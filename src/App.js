import React from "react";
import Child from "./Child";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: 25,
            name: 'Stepan',
            buttonText: 'Show',
            isVisible: true
        }
    }

    setAge= ()=>{

        if (this.state.buttonText === 'Show') {
            this.setState({
                age: 30,
                name: 'Mykola',
                buttonText: 'Hide',
                isVisible: true
            });
        } else {
            this.setState({
                age: 25,
                name: 'Stepan',
                buttonText: 'Show',
                isVisible: false
            });
        }
    }
    render() {
        return (
            <div>
                <Child isVisible={this.state.isVisible} name={this.state.name} age={this.state.age} />
                <button onClick={this.setAge}>{this.state.buttonText}</button>
            </div>
        );
    }
}

export default App;
