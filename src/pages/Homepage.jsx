import { useEffect } from "react";
import { useDispatch } from "react-redux";

import ScrollScreen from "../components/HomePage/ScrollScreen.jsx";

export default function Homepage() {
    const dispatch = useDispatch()

    useEffect(() => {
        // const interval = setInterval(() => { setImageInd(prev => (prev + 1) % totals); }, 5000);
        const interval = setInterval(() => dispatch({ type: 'right' }), 5000);
        return () => clearInterval(interval)
    }, [])

    return (
        <section>
            <ScrollScreen />
            <h1>Homepage</h1>
            <p>BlissXML\Soluna\src\pages\Homepage.js</p>
        </section>
    )
}