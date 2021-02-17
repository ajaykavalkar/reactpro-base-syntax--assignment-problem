import React from 'react'

function UserOutput(props) {
    const style = {
        width: '60%',
        margin: '10px auto',
        border: '1px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        padding: '16px'
    }
    return (
        <div style={style}>
            <p>Hi from {props.username}</p>
            <p>Nice to Meet you</p>
        </div>
    )
}

export default UserOutput
