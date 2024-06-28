import styles from './Select.module.scss';

interface Props {
    title: string,
    style?: React.CSSProperties;
}

const Select = (props: Props) => {

    return (
        <div className={styles.container}>
            <select style={props.style}>
                <option>{props.title}</option>
            </select>
        </div>
    )
}

export default Select; 