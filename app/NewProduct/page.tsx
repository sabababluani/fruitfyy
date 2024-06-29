import Button from "../components/Inputs/Button/Button";
import NameInput from "./components/NameInput/NameInput";
import styles from './page.module.scss';

const NewProduct = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Add new fruit</h1>
            <NameInput />
            <div>
                <div>
                    <label htmlFor="4">Name</label>
                    <Button children='Choose File' mode="default" />
                </div>
                <div>
                    <p>No file chosen</p>
                </div>
            </div>

            <div>
                <label htmlFor="5">Description</label>
                <input type="text" id="5" />
            </div>
            <div>
                <Button mode='inline' children='Add fruit' />
            </div>
        </div>
    )
}

export default NewProduct;