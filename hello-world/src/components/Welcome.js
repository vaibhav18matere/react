import React, { Component } from 'react';

class Welcome extends Component {
    render() {

        const { name, heroName } = this.props

        return (
            <div>
                <h5>
                    {name} class based component and de-structuring {heroName}
                </h5>
            </div>
        )
    }
}

export default Welcome;



// props 
//de-structuring in class component