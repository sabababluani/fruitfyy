import styles from './NameInput.module.scss';
import Input from "@/app/components/Inputs/Input/Input";


const NameInput = () => {
    return (
        <div className={styles.container}>
            <p>Name</p>
            <Input mode='long' />
        </div>
    )
}

export default NameInput;