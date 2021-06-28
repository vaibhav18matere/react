import React, { Component } from 'react'
class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // if (this.state.isLoggedIn) {
        //     return <div>CONDITIONAL RENDERING if-result</div>
        // } else {
        //     return <div>CONDITIONAL RENDERING else-result</div>
        // }

        return (
            // this.state.isLoggedIn ?
            //     <div>Welcome to party : TERNARY VARIABLE APPROACH</div> :
            //     <div>Buy your ticket first : TERNARY VARIABLE APPROACH</div>


            this.state.isLoggedIn && <div>SHORT CIRCUIT OPERATOR result</div>

        )

    }

}
export default UserGreeting



//Conditional rendering