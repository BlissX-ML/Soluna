import { ICONS } from '../../../Data/homePage.js';

export default function FiledSetTitle({ children }) {
    const Hint = ICONS.hint;

    return (
        <legend>
            <p>{children}</p>
            <Hint />
        </legend>
    )
}