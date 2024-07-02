import Link from 'next/link'
import Button from '../Inputs/Button/Button'
import styles from './Product.module.scss'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export interface Fruit {
    id: number;
    title: string;
    price: string;
    category: string;
    description?: string;
    image: string;
    onDelete?: () => void;
}

const Product = (props: Fruit) => {
    const router = useRouter();

    const pencil = <img src="pencil.png" />;
    const garbage = <img src='trash.png' />;

    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [product, setProduct] = useState<Fruit>();

    useEffect(() => {
        axios.get(`http://10.10.51.4:3000/products/${id}`)
            .then(result => {
                setProduct(result.data);
            });
    }, [id]);


    return (
        <div className={styles.wrapper}>
            <div className={styles.photoContainer}>
                <div className={styles.editRemoveContainer}>
                    <Button children={pencil} mode='full' />
                    <Button children={garbage} mode='full' onClick={props.onDelete} />
                </div>
                <div className={styles.photo}>
                    <img src={props.image} />
                </div>
            </div>
            <div className={styles.paragraphContainer}>
                <div className={styles.title}>
                    <p>{props.title}</p>
                    <span>{props.category}</span>
                </div>
                <div className={styles.price}>
                    <p>{props.price}$</p>
                </div>
            </div>
            <div className={styles.button}>
                <Link href={`/BuyProduct?id=${props.id}`}>
                    <Button children='Buy Now' mode='inline' />
                </Link>
            </div>
        </div>
    );
}

export default Product;
