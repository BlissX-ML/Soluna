import React, { createContext, useMemo, useRef, useState } from "react";

export const RecapContext = createContext({
    dropState: false,
    dropStateSet: () => { },
    dropOpen: () => { },
    dropClose: () => { }
})

export function NavigationContext({ children }) {
    const [dropList, setDropList] = useState(false);

    const timer = useRef(null);

    function open() {
        clearTimeout(timer.current);
        setDropList(true);
    }

    function close() {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setDropList(false), 120);
    }

    function setDrop() {
        setDropList(prev => !prev)
    }

    const ctx = useMemo(
        () => ({
            dropState: dropList,
            dropStateSet: setDrop,
            dropOpen: open,
            dropClose: close
        }), [dropList, setDrop, open, close]
    )

    return <RecapContext.Provider value={ctx}>{children}</RecapContext.Provider>
}