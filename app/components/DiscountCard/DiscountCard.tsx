import styles from './DiscountCard.module.scss';


type Props = {
    productDiscount: string;
}

const DiscountCard = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>Special Offer for </h2>
                <h3>&nbsp;{props.productDiscount}</h3>
            </div>
            <div className={styles.sale}>
                <h4>SALE</h4>
            </div>
        </div>
    )
}

export default DiscountCard;