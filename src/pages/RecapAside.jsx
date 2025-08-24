import { Outlet } from "react-router-dom";
import RecapNav from "../components/Recap/RecapNav";

export default function RecapAside() {
    return (
        <section className="recap-container">
            <RecapNav />
            <main className="recap-content">
                <Outlet />
            </main>
        </section>
    )
}