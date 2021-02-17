import React from 'react'

function CharComponent(props) {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid',
        textAlign: 'center',
        cursor: 'pointer'
    }
    return (
        <div style={style} onClick={props.remove}>
            {props.char}

        </div>
    )
}


export default CharComponent

