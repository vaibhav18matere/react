import React, { Component } from 'react';
import ChildParent from './ChildParent';
class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: "parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(ChildName) {
        alert(`hello! ${this.state.parentName} from ${ChildName}`)
    }

    render() {
        return (
            <div>
                <ChildParent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent


//method as a props