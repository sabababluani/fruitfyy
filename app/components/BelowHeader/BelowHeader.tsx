import Select from '../Inputs/Select/Select';
import styles from './BelowHeader.module.scss';

const BelowHeader = () => {
    return (
        <div className={styles.belowHeaderContainer}>
            <div className={styles.belowHeader}>
                <div>
                    <img src="/Group 1.png" alt="" />
                </div>
                <div className={styles.select}>
                    <Select title="Price high to low" style={{width : '300px'}} />
                </div>
            </div>
        </div>
    )
}

export default BelowHeader;