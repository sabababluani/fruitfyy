import { useState, useEffect } from 'react';
import styles from './Products.module.scss';
import Product, { Fruit } from '../Product/Product';
import Empty from '../Empty/Empty';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState<Fruit[]>([]);
    const [isEmpty, setIsEmpty] = useState(true);
    
    useEffect(() => {
        axios.get('http://10.10.51.4:3000/products')
            .then(result => {
                setProducts(result.data);
                setIsEmpty(result.data.length === 0);
                console.log(result.data);
                
            });
    }, []);
    
 
    
    return (
        <div className={styles.wrapper}>
            {isEmpty ? (
                <Empty />
            ) : (
                products.map((product, index) => (
                    <Product
      
                        key={index}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                    />
                ))
            )}
        </div>
    );
}

export default Products;
