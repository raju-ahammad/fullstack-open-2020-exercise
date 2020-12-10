import React from 'react'

const Notification = ({message}) => {
    const errorMessageStyle = {
        borderStyle:"solid",
        borderColor:"green",
        backgroundColor:"#BEBEBE",
        color: "#006600",
        padding:"5px",
        fontSize:"16px"
    }
    return (
        <div style={errorMessageStyle}>
            {message}
        </div>
    )
}

export default Notification
