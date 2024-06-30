import Button from "@/app/components/Inputs/Button/Button";
import styles from './BuyDescription.module.scss'


type Props = {
    title: string
    description : string
    price : string
}
const BuyDescription = (props :Props) => {
    return (
        <div className={styles.container}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div>
                <span>{props.price}</span>
            </div>
            <Button />
        </div>
    )
}

export default BuyDescription;