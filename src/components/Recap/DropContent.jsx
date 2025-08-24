import { useNavigate } from 'react-router-dom'
import classes from './DropContent.module.css'

export default function DropContent({ drop, onChange }) {
    const navigate = useNavigate();

    return (
        <div className={drop ? `${classes.content} ${classes.show}` : `${classes.content} `}>
            <ul className={classes.list}>
                <li>
                    <button onClick={() => { navigate('/'); onChange(!drop) }}>
                        Chemistry
                    </button>
                </li>
                <li>
                    <button onClick={() => { navigate('/'); onChange(!drop) }}>
                        Computer
                    </button>
                </li>
                <li>
                    <button onClick={() => { navigate('/'); onChange(!drop) }}>
                        Language
                    </button>
                </li>
                <li>
                    <button onClick={() => { navigate('/'); onChange(!drop) }}>
                        Animal
                    </button>
                </li>
            </ul>
        </div>
    )
}