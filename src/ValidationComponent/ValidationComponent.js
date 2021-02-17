import React from 'react'

function ValidationComponent(props) {
    return (
        <div>
            {/* <p>{props.userInput}</p> */}
            {
                props.userInput <= 5 ?
                    <p>Text too short</p> :
                    <p>Text long enough</p>
            }
        </div>
    )
}

export default ValidationComponent

