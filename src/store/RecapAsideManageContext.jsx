import { createContext, useMemo, useState } from "react";
import { RECAP_NAV } from "../Data/recap";


export const recapAsideContext = createContext({
    key: '',
    handleState: (curCategory) => { }
})

const initialCategory = RECAP_NAV[0].key;

export function RecapAsideManageContext({ children }) {
    const [selectCategory, setSelectCategory] = useState(initialCategory);  // 把第一个选项视作默认

    function handleChangeCategory(curCategory) {
        setSelectCategory(curCategory);
    }

    const ctx = useMemo(() => ({
        key: selectCategory,
        handleState: handleChangeCategory
    }), [selectCategory])

    return <recapAsideContext.Provider value={ctx}>{children}</recapAsideContext.Provider>
}