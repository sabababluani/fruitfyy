import Link from "next/link";
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
                        <Link href='/NewProduct'>
                            <Button mode="default" children="+ New Product" />
                        </Link>
                        <Link href='../'>
                            <Button mode="default" children="Shop" />
                        </Link>
                    </div>
                    <div>
                        <Input src="/Search Icon.png" placeHolder="Search" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;