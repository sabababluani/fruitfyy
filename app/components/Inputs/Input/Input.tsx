'use client'

import { useState } from 'react';
import styles from './Input.module.scss';

type Props = {
    src?: string,
    classname?: string,
    mode?: 'long' | 'fat' | 'small' | 'medium',
    value?: string,
    placeHolder?: string,  
    inputValue?: string
}

const Input = (props: Props) => {

    const [text, setText] = useState(props.value)

    const onChange = (e: any) => {
        setText(e.target.value);
    }    

    const classes = [styles.container, props.classname];

    if (props.mode === 'long') classes.push(styles.long);
    if (props.mode === 'medium') classes.push(styles.medium);
    if (props.mode === 'small') classes.push(styles.small);
    if (props.mode === 'fat') classes.push(styles.fat);

    return (

        <div className={classes.join(' ').trim()} >
            <input type="text" placeholder={props.placeHolder} value={props.inputValue} onChange={() => onchange}  />
            <img src={props.src} />
        </div>
    )
}

export default Input;