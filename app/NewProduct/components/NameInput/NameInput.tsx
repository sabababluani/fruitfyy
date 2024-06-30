import styles from './NameInput.module.scss';
import Input from "@/app/components/Inputs/Input/Input";


type Props = {
    title: string
}

const NameInput = (props: Props) => {
    return (
        <div className={styles.container}>
            <p>{props.title}</p>
            <Input mode='long' />
        </div>
    )
}

export default NameInput;