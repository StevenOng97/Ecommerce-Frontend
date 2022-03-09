import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FocusEventHandler, FormEventHandler } from 'react';

interface IIcon {
    icon: IconDefinition,
    className?: string
    onClick?: FormEventHandler,
    onBlur?: FocusEventHandler
}

function Icon({
    icon,
    className,
    onClick,
    onBlur,
}: IIcon) {
    return (
        <FontAwesomeIcon
            icon={icon}
            className={className}
            onClick={onClick}
            onBlur={onBlur}
        />
    )
}

export default Icon