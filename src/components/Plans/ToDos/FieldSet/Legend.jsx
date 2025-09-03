import { ICONS } from "../../../../Data/icons.js";


export default function Legend({ children }) {
    const Hint = ICONS.hint;

    return (
        <legend>
            <p>{children}</p>
            <Hint />
        </legend>
    )
}