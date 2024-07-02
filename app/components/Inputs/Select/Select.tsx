import styles from './Select.module.scss';

interface Values {
    value?: string;
    title?: string;
}

interface Props {
    title?: string,
    style?: React.CSSProperties;
    onChange?: (item: string) => void;
    values?: Values[]
}

const Select = (props: Props) => {

    return (
        <div className={styles.container}>
            <select style={props.style}>
                {
                    props.values?.map(item => <option value={item.value}>{item.title}</option>)
                }
            </select>
        </div>
    )
}

export default Select; 