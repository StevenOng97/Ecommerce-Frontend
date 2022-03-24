import {
    faTruck,
    faMoneyBill1,
    faUndo,
    faClock,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

interface Delivery {
    title: string;
    icon: IconDefinition;
    text: string;
}

const benefits: Delivery[] = [
    {
        icon: faTruck,
        title: 'FREE SHIPPING',
        text: 'Suffered Alteration in Some Form',
    },
    {
        icon: faMoneyBill1,
        title: 'CASH ON DELIVERY',
        text: 'The Internet Tend To Repeat',
    },
    {
        icon: faUndo,
        title: '45 DAYS RETURN',
        text: 'Making it Look Like Readable',
    },
    {
        icon: faClock,
        title: 'OPENING ALL WEEK',
        text: '8AM - 09PM',
    },
];

export default benefits