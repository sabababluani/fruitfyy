import Button from "../components/Inputs/Button/Button";
import BuyDescription from "./components/BuyDescription/BuyDescription";
import Photo from "./components/Photo/Photo";
import styles from './page.module.scss';

const BuyProduct = () => {
    return (
        <div className={styles.wrapper}> 
            <Photo src="apple.png"/>
            <BuyDescription title={"Apple"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} price={"6$"}/>
        </div>  
    )
}

export default BuyProduct;