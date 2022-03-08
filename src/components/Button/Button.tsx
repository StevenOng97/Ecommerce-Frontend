import React, { FormEventHandler, MouseEventHandler } from 'react'

interface IButton {
    context: string,
    contextStyle?: string,
    className?: string,
    onChange?: FormEventHandler
    onClick?: MouseEventHandler,
}

function Button({
    context,
    contextStyle,
    className = "main-btn",
    onChange,
    onClick
}: IButton) {
    return (
        <div
            className={`btn ${className}`}
            onChange={onChange}
            onClick={onClick}
        >
            <span className={contextStyle}>{context}</span>
        </div>
    )
}

export default Button