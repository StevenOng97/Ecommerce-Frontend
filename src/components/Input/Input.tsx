import React, { ChangeEventHandler } from 'react'

interface IInput {
    className?: string,
    name: string,
    type?: string,
    onChange?: ChangeEventHandler

}

function Input({
    className = "form-control",
    type = "text",
    name,
    onChange }: IInput) {

    function capitalizeFirstLetter(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    return (
        <input
            className={className}
            type={type}
            id={name}
            name={name}
            aria-label={capitalizeFirstLetter(name)}
            placeholder={capitalizeFirstLetter(name)}
            onChange={onChange}
        />
    )
}

export default Input