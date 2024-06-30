import Button from "../components/Inputs/Button/Button";
import Input from "../components/Inputs/Input/Input";
import Description from "./components/Description/Description";
import NameInput from "./components/NameInput/NameInput";
import PriceInput from "./components/PriceInput/PriceInput";
import styles from './page.module.scss';

const NewProduct = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Add new fruit</h1>
            <NameInput title="Name" />
            <PriceInput />
            <div className={styles.container}>
                <div>
                    <p>Name</p>
                    <div className={styles.wrap}>
                        <Button children='Choose File' mode="default" />
                        <p>No file chosen</p>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <Description/>
            <div>
                <Button mode='streach' children='Add fruit' />
            </div>
        </div>
    )
}

export default NewProduct;