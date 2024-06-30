import Link from 'next/link'
import Button from '../Inputs/Button/Button'
import styles from './Product.module.scss'

type Props = {
    src: string,
    title: string,
    price: string,
    color: string
}

const Product = (props: Props) => {

    const pencil = <img src="pencil.png" />
    const garbage = <img src='trash.png' />
    return (
        <div className={styles.wrapper}>
            <div className={styles.photoContainer}>
                <div className={styles.editRemoveContainer}>
                    <Button children={pencil} mode='full' />
                    <Button children={garbage} mode='full' />
                </div>
                <div className={styles.photo}>
                    <img src={props.src} />
                </div>
            </div>
            <div className={styles.paragraphContainer}>
                <div className={styles.title}>
                    <p>{props.title}</p>
                    <span>{props.color}</span>
                </div>
                <div className={styles.price}>
                    <p>{props.price}</p>
                </div>
            </div>
            <div className={styles.button}>
                <Link href='/BuyProduct'>
                    <Button children='Buy Now' mode='inline' />
                </Link>
            </div>
        </div>
    )
}

export default Product;