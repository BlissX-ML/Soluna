import { useEffect, useState } from "react";
import ScrollScreen from "../components/HomePage/ScrollScreen.jsx";

let images = [
    { src: './images/homepage/screen1.jpg', title: 'Grass', description: 'This is a beautiful place.' },
    { src: './images/homepage/screen2.png', title: 'Dogs', description: 'Freedom??!!' }
]

export default function Homepage() {
    const [imageInd, setImageInd] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageInd(prev => (prev + 1) % images.length);   // 图片切换
        }, 5000);

        return () => clearInterval(interval)
    }, [])

    return (
        <section>
            <ScrollScreen
                curInd={imageInd}
                images={images}
            />
            <h1>Homepage</h1>
            <p>BlissXML\Soluna\src\pages\Homepage.js</p>
        </section>
    )
}