import { useState, useEffect } from 'react';
import styles from './Products.module.scss';
import Product, { Fruit } from '../Product/Product';
import Empty from '../Empty/Empty';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState<Fruit[]>([]);
    const [isEmpty, setIsEmpty] = useState(true);

    if(products.length > 0 ){
        setIsEmpty(false)
    }
    useEffect(() => {
        axios.get('http://10.10.51.4:3000/products')
            .then(result => {
                setProducts(result.data);
                setIsEmpty(result.data.length === 0);
            });
    }, []);

    const handleDeleteProduct = (index: number) => {
        const productId = products[index].id
        axios.delete(`http://10.10.51.4:3000/products/${productId}`)
            .then(result => {
                const newProducts = [...products];
                newProducts.splice(index, 1);
                setProducts(newProducts);
                setIsEmpty(newProducts.length === 0);
            })
    }
    return (
        <div className={styles.wrapper}>
            {isEmpty ? (
                <Empty />
            ) : (
                products.map((product, index) => (
                    <Product
                        onDelete={() => handleDeleteProduct(index)}
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
