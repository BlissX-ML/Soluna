const SCROLL_IMAGES = [
    {
        key: 'image_1',
        title: 'Grass',
        src: './images/homepage/screen1.jpg',
        description: 'This is a beautiful place.'
    },
    {
        key: 'image_2',
        title: 'Dogs',
        src: './images/homepage/screen2.png',
        description: 'Freedom??!!'
    }
];

const initialState = {
    images: SCROLL_IMAGES,
    totals: SCROLL_IMAGES.length,
    currentImage: 0
}

export function homeImagesReducer(state = initialState, action) {
    if (action.type === 'right') {
        return {
            ...state,
            currentImage: (state.currentImage + 1) % SCROLL_IMAGES.length
        }
    }

    if (action.type === 'left') {
        return {
            ...state,
            currentImage: (state.currentImage - 1 + SCROLL_IMAGES.length) % SCROLL_IMAGES.length
        }
    }

    return state;
}

