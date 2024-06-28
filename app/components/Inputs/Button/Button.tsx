import { ReactNode } from "react";
import styles from './Button.module.scss';


interface Props {
    children?: ReactNode,
    className?: string,
    mode?: 'inline' | 'default' | 'full',
    onClick?: () => void,
}

const Button = (props: Props) => {
    return (
        <div className={props.mode === 'default' ? styles.default : styles.inline}>
            <button><p>{props.children}</p></button>
        </div>
    )
}

export default Button;