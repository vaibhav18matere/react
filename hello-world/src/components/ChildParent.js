import React from 'react'

function ChildParent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')} >Greet Parent</button>
        </div>
    )
}

export default ChildParent


//method as a props