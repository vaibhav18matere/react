import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        //OBJECT

        //     this.setState({
        //         count: this.state.count + 1
        //     }, () => { console.log("callback value", this.state.count) })
        //     console.log(this.state.count)
        //here we were using object   }

        //FUNCTION

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>
                    Count is {this.state.count}
                </div>
                <button onClick={() => this.incrementFive()}>Increment btn</button>
            </div>
        )
    }
}

export default Counter




//setState