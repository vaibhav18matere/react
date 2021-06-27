import React, { Component } from 'react'

class Eb extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: "Event bind message display"
        }
    }

    clickHandler = () => {
        this.setState({
            message: "changed the text"
        }

        )
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler} >EventBinder Click</button>
                <div>{this.state.message}</div>
            </div>
        )
    }
}

export default Eb

//Event bindlers