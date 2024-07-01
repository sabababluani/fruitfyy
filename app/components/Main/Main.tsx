import DiscountCard from "../DiscountCard/DiscountCard";
import Filters from "../Filters/Filters";
import Products from "../Products/Products";
import styles from './Main.module.scss';

const Main = () => {

    return (
        <div className={styles.containerWrapper}>
            <div className={styles.wrap}>
                <div className={styles.container}>
                    <Filters />
                    <div className={styles.wrapper}>
                        <DiscountCard productDiscount="Gori's Apple" />
                        <Products />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;