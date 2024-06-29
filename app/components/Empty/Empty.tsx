import styles from './Empty.module.scss';


const Empty = () => {
    return (
        <div className={styles.container}>
            <img src="box.png" />
            <p>No Results</p>
        </div>
    )
}

export default Empty;