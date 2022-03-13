import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0}
        this.increment = this.increment.bind(this);
    }


    increment(props) {
        props.preventDefault();
        console.log(this.state.counter + 1)
        this.setState({
            counter: this.state.counter + 1
        });
    }


    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>This is a counter: {this.state.counter}</h2>
                <button onClick={this.increment}>Click to increment</button>
            </div>
        )
    }
}

export default Counter;