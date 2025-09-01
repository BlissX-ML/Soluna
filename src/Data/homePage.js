import Logo from '../icons/logo.svg?react'
import Eye from '../icons/eye.svg?react'
import EyeClose from '../icons/eye-close.svg?react'
import ArrowUp from '../icons/arrowUp.svg?react'
import ArrowDown from '../icons/arrowDown.svg?react'
import ArrowRightDark from '../icons/arrowRightDark.svg?react'
import ArrowRightLight from '../icons/arrowRightLight.svg?react'
import Hint from '../icons/hint.svg?react'

export const ICONS = {
    logo: Logo,
    eyeOpen: Eye,
    eyeClose: EyeClose,
    arrowUp: ArrowUp,
    arrowDown: ArrowDown,
    arrowRightDark: ArrowRightDark,
    arrowRightLight: ArrowRightLight,
    hint: Hint,
}

// const IMAGES = import.meta.glob('/images/homepage/*.{jpg,png}', { eager: true, query: '?url', import: 'default' })

export const SCROLL_IMAGES = [
    {
        key: 'image_1',
        title: 'Grass',
        src: 'images/png/screen1.jpg',
        webp: 'images/webp/screen1.webp',   // 新增 webp 路径
        // src: IMAGES['../images/homepage/screen1.jpg'],
        description: 'This is a beautiful place.'
    },
    {
        key: 'image_2',
        title: 'Dogs',
        src: 'images/png/screen2.png',
        webp: 'images/webp/screen2.webp',
        description: 'Freedom??!!'
    },
    {
        key: 'image_3',
        title: 'Ocean',
        src: 'images/png/screen3.png',
        webp: 'images/webp/screen3.webp',
        description: 'Just beautiful?'
    }
];


export const WELCOME_IMAGE = [
    {
        key: 'welcome_1',
        src: 'images/png/welcome.jpg',
        webp: 'images/webp/welcome.webp',
    }
]
