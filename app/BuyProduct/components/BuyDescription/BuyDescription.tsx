import Button from "@/app/components/Inputs/Button/Button";
import styles from './BuyDescription.module.scss'


type Props = {
    title: string
    description: string
    price: string
}
const BuyDescription = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrap}>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
                <div>
                    <span>{props.price}</span>
                </div>
            </div>
            <div className={styles.last}>
                <Button mode="streach" children='Buy Now' />
            </div>
        </div>
    )
}

export default BuyDescription;