import React, { Component } from 'react'


class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent() {
        console.log(`hello from ${this.state.parentName}`)
    }

    render() {
        return (
            <div>
                <button></button>
            </div>
        )
    }
}

export default ParentComponent
