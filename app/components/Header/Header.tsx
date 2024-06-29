import Button from "../Inputs/Button/Button";
import Input from "../Inputs/Input/Input";
import styles from './Header.module.scss'


const Header = () => {


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                    <img src="/Frutify.png" />
                </div>
                <div className={styles.containerWrapper}>
                    <div className={styles.container}>
                        <Button mode="default" children="+ New Product" />
                        <Button mode="default" children="Shop" />
                    </div>
                    <div>
                        <Input src="/Search Icon.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;