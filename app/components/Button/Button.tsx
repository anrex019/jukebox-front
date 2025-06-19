import styles from './Button.module.scss';
import { buttonCardPropsInterfaces } from './interfaces/button-card-props.intarfaces';

const Button = (props: buttonCardPropsInterfaces) => {
        return (
            <button disabled={props.disabled} className={styles.buttonStyles}>
                {props.title}
            </button>
        )
}
export default Button;