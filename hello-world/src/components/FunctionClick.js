import React from 'react'

function FunctionClick() {

    function ClickHandler() {
        console.log("function btn click")
    }

    return (
        <div>
            <button onClick={ClickHandler} >Function CLick Button</button>
        </div>
    )
};

export default FunctionClick;


//event handling