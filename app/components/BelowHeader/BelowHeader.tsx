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
                    <Select values={[
                        {
                            value: 'low-to-high',
                            title: 'Price low to high'
                        },
                        {
                            value: 'high-to-low',
                            title: 'Price high to low'
                        }
                    ]} />   
                </div>
            </div>
        </div>
    )
}

export default BelowHeader;