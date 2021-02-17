import React from 'react'
import './UserInput.css'
function UserInput(props) {
    return (
        <div className="UserInput">
            <input type="text" value={props.username} onChange={props.changeUsername} />
        </div>
    )
}

export default UserInput

