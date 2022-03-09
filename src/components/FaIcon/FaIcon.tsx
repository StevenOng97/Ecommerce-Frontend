import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEventHandler } from 'react';

interface IFaIcon {
    icon: IconDefinition,
    className?: string
    onClick?: FormEventHandler
}

function FaIcon({
    icon,
    className,
    onClick,
    ...props
}: IFaIcon) {
    return (
        <FontAwesomeIcon 
        icon={icon} 
        className={className}
        onClick={onClick}
        {...props}
        />
    )
}

export default FaIcon