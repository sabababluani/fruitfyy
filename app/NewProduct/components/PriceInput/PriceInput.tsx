import Input from '@/app/components/Inputs/Input/Input';
import styles from './PriceIput.module.scss';


const PriceInput = () => {
    return (
        <div className={styles.container}>
            <div className={styles.price}>
                <p>Price</p>
                <Input mode="medium" value='0' src="price.png " />
            </div>
            <div className={styles.sale}>
                <p>Sale</p>
                <Input mode="small" value="20" src="percent.png" />
            </div>
        </div>
    )
}

export default PriceInput;