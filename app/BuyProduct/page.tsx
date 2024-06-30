import Button from "../components/Inputs/Button/Button";
import BuyDescription from "./components/BuyDescription/BuyDescription";
import Photo from "./components/Photo/Photo";
import styles from './page.module.scss';

const BuyProduct = () => {
    return (
        <div className={styles.wrapper}> 
            <Photo src="apple.png"/>
            <BuyDescription title={"sd"} description={"asd"} price={"das"}/>
        </div>
    )
}

export default BuyProduct;