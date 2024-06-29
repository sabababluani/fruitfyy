import Button from "../Inputs/Button/Button";
import Select from "../Inputs/Select/Select";
import LittleInput from "./LittleButton/LittleInput";
import styles from './Filters.module.scss';

const Filters = () => {
    return (
        <div className={styles.container}>
            <h4>Filter</h4>
            <div className={styles.categoryContainer}>
                <p>Category</p>
                <Select title="All" style={{ width: '294px' }} />
            </div>
            <div className={styles.priceContainer}>
                <p>Price</p>
                <div className={styles.littleContainer}>
                    <LittleInput placeholder="Min" />
                    <LittleInput placeholder="Max" />
                </div>
            </div>
            <div className={styles.saleContainer}>
                <p>Sale</p>
                <img src="/Search.png" />
            </div>
            <div className={styles.button}>
                <Button children='Apply' mode="inline" />
            </div>
        </div>
    )
}


export default Filters;