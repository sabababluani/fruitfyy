import Input from '@/app/components/Inputs/Input/Input';
import styles from './Description.module.scss'

const Description = () => {
    return (
        <div className={styles.container}>
            <p>Description</p>
            <Input mode='fat'/>
        </div>
    )
}

export default Description;