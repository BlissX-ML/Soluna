import { Outlet } from "react-router-dom";
import RecapNav from "../components/Recap/RecapNav";
import classes from './RecapAside.module.css';

export default function RecapAside() {
    return (
        <section className={classes.container}>
            <RecapNav />
            <main className={classes.mainContent}>
                <Outlet />
            </main>
        </section>
    )
}