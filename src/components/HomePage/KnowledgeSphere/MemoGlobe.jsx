import Glob from "./Glob.jsx";
import classes from './MemoGlobe.module.css'

export default function MemoGlobe() {
    return (
        <main className={classes.memoGlobe}>
            <Glob src="/recap/computer" delay={-1}>Computer Related</Glob>
            <Glob src="/recap/chemistry" delay={0.6}>Chemistry Related</Glob>
            <Glob src="/recap/language" delay={-0.3}>Language Related</Glob>
            <Glob src="/recap/animal" delay={0}>Animal Related</Glob>
        </main>
    )
}