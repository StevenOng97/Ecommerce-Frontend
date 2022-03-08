import React, { FormEventHandler, MouseEventHandler } from 'react'

interface IButton {
    context: string,
    type?: "button" | "reset" | "submit" | undefined,
    contextStyle?: string,
    className?: string,
    onChange?: FormEventHandler
    onClick?: MouseEventHandler,
}

function Button({
    context,
    contextStyle,
    type = "button",
    className = "main-btn",
    onChange,
    onClick
}: IButton) {
    return (
        <button
            className={`btn ${className}`}
            type={type}
            onChange={onChange}
            onClick={onClick}
        >
            <span className={contextStyle}>{context}</span>
        </button>
    )
}

export default Button