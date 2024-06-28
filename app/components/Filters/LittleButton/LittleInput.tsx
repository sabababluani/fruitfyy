import styles from './LittleInput.module.scss';

type Props = {
    placeholder: string;
}

const LittleInput = (props: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <input type="text" placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default LittleInput;