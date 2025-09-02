import classes from './mdxWrapper.module.css'

export default function mdxWrapper({ children }) {
    return (
        <div className={classes.mdxWrapper}>
            {children}
        </div>
    )
}