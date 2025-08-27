import { useNavigate } from 'react-router-dom'
import classes from './DropContent.module.css'
import { useContext } from 'react';
import { RecapContext } from '../../store/NavigationContext.jsx';

export default function DropContent() {
    const navigate = useNavigate();
    const ctx = useContext(RecapContext);

    return (
        <div className={`${classes.content} ${ctx.dropState ? classes.show : ''}`}>
            <ul className={classes.list}>
                <li>
                    <button onClick={() => { navigate('/'); ctx.dropStateSet() }}>
                        Chemistry
                    </button>
                </li>

                <li>
                    <button onClick={() => { navigate('/'); ctx.dropStateSet() }}>
                        Computer
                    </button>
                </li>

                <li>
                    <button onClick={() => { navigate('/'); ctx.dropStateSet() }}>
                        Language
                    </button>
                </li>

                <li>
                    <button onClick={() => { navigate('/'); ctx.dropStateSet() }}>
                        Animal
                    </button>
                </li>
            </ul>
        </div>
    )
}