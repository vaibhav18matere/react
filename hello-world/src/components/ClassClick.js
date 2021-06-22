import React, { Component } from 'react'

export class ClassClick extends Component {

    ClickHandler() {
        console.log("class btn clicked")
    }


    render() {
        return (
            <div>
                <button onClick={this.ClickHandler} >Class Click Button</button>
            </div>
        )
    }
};

export default ClassClick

