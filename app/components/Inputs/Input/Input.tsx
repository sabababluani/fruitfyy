import styles from './Input.module.scss';


const Input = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <input type="text" placeholder='Search'/>
                <img src="/Search Icon.png"  />
            </div>
        </div>
    )
}

export default Input;