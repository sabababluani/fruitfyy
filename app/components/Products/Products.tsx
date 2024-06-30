import { useState, useEffect } from 'react';
import styles from './Products.module.scss';
import Product from '../Product/Product';
import Empty from '../Empty/Empty';

const Products = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        const fetchedProducts = [
            { src: 'apple.png', title: "Gori's Apple", price: '5$', color: 'Green' },
            { src: 'pear.png', title: "Pear", price: '3$', color: 'also green' },
            { src: 'peach.png', title: "Peach", price: '7$', color: 'Red' },    
        ];
        setProducts(fetchedProducts);
        setIsEmpty(fetchedProducts.length === 0);
    }, []);

    return (
        <div className={styles.wrapper}>
            {
                isEmpty ? <Empty /> : products.map((product, index) => (
                    <Product
                        key={index}
                        src={product.src}
                        title={product.title}
                        price={product.price}
                        color={product.color}
                    />
                ))
            }
        </div>
    );
}

export default Products;
