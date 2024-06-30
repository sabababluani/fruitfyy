import styles from './Input.module.scss';

type Props = {
    src?: string,
    classname?: string,
    mode?: 'long' | 'fat' | 'small' | 'medium',
    value?: string,
    placeHolder?: string
}

const Input = (props: Props) => {

    const classes = [styles.container, props.classname];

    if (props.mode === 'long') classes.push(styles.long);
    if (props.mode === 'medium') classes.push(styles.medium);
    if (props.mode === 'small') classes.push(styles.small);
    if (props.mode === 'fat') classes.push(styles.fat);

    return (

        <div className={classes.join(' ').trim()} >
            <input type="text" placeholder={props.placeHolder} value={props.value} />
            <img src={props.src} />
        </div>
    )
}

export default Input;