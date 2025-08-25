import Logo from '../images/logo.svg?react'
import Eye from '../images/icons/eye.svg?react'
import EyeClose from '../images/icons/eye-close.svg?react'
import ArrowUp from '../images/icons/arrowUp.svg?react'
import ArrowDown from '../images/icons/arrowDown.svg?react'


export const ICONS = {
    logo: Logo,
    eyeOpen: Eye,
    eyeClose: EyeClose,
    arrowUp: ArrowUp,
    arrowDown: ArrowDown,
}

const IMAGES = import.meta.glob('../images/homepage/*.{jpg,png}', { eager: true, as: 'url' })

export const SCROLL_IMAGES = [
    {
        key: 'image_1',
        title: 'Grass',
        // src: '/src/images/homepage/screen1.jpg',
        src: IMAGES['../images/homepage/screen1.jpg'],
        description: 'This is a beautiful place.'
    },
    {
        key: 'image_2',
        title: 'Dogs',
        src: IMAGES['../images/homepage/screen2.png'],
        description: 'Freedom??!!'
    },
    {
        key: 'image_3',
        title: 'Ocean',
        src: IMAGES['../images/homepage/screen3.png'],
        description: 'Just beautiful?'
    }
];

