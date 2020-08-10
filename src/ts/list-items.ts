import { CHART, TRAINING, DASHBOARD, ASSESSMENT, MANAGEMENT, USER, COURSE, CHECK } from './icons';
interface item {
    icon: string,
    title: string,
    subtitle?: string,
    bg_color?: string
}

const colors = {
    BLUE: 'blue',
    PURPLE: 'purple',
    LIGHT_BLUE: 'light_blue',
}
export const items: item[] = [
    {
        icon: CHART,
        title: 'Reports'
    },
    {
        icon: TRAINING,
        title: 'Training'
    },

    {
        icon: DASHBOARD,
        title: 'DashBoard'
    },
    {
        icon: ASSESSMENT,
        title: 'Assesment'
    },
    {
        icon: MANAGEMENT,
        title: 'Management'
    },
    {
        icon: COURSE,
        title: 'Course'
    },
    {
        icon: USER,
        title: 'User'
    }
];

interface card {
    icon: string,
    quantity: number,
    title?: string,
    bg_color?: string
}

export const sumatoria = () => {
    let sum = 0;
    cards.forEach(card => {
        sum = sum + card.quantity;
    });
    return sum;
}
export const cards: card[] = [
    {
        icon: CHECK,
        title: 'Quiz attepms Today',
        quantity: 4567,
        bg_color: colors.PURPLE
    },
    {
        icon: USER,
        quantity: 2201,
        title: 'New participants Today',
        bg_color: colors.BLUE
    },
    // {
    //     icon: CHECK,
    //     quantity: 1000,
    //     title: 'New Participant last day',
    //     bg_color: colors.PURPLE
    // },
];


