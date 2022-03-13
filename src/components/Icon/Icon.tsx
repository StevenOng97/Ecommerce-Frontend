import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type OptinalFlags<Type> = {
    [Property in keyof Type]?: Type[Property] | any;
};

type OptinalHTMLAttributes = OptinalFlags<React.HTMLAttributes<HTMLDivElement>>;

interface IIcon extends OptinalHTMLAttributes {
    icon: IconDefinition,
};

function Icon({ icon, ...divAttributes }: IIcon) {
    return (
        <FontAwesomeIcon
            icon={icon}
            {...divAttributes}
        />
    )
}

export default Icon