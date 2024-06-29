import { ReactNode } from "react";
import styles from './Button.module.scss';


interface Props {
    children?: ReactNode,
    className?: string,
    mode?: 'inline' | 'default' | 'full',
    onClick?: () => void,
}

const Button = (props: Props) => {

    const classes = [styles.container, props.className];
    if (props.mode === 'default') classes.push(styles.default)
    if (props.mode === 'full') classes.push(styles.full);
    if (props.mode === 'inline') classes.push(styles.inline);



        return (
            <div className={classes.join(' ').trim()}>
                <button><p>{props.children}</p></button>
            </div>
        )
}

export default Button;