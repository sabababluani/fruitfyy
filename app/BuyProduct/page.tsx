'use client'

import { useEffect, useState } from "react";
import Button from "../components/Inputs/Button/Button";
import { Fruit } from "../components/Product/Product";
import BuyDescription from "./components/BuyDescription/BuyDescription";
import styles from './page.module.scss';
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation';

const BuyProduct = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [prod, setProd] = useState<Fruit>();

    useEffect(() => {
        if (id) {
            axios.get(`http://10.10.51.4:3000/products/${id}`)
                .then(result => {
                    setProd(result.data);
                });
        }
    }, [id]);

    return (
        <div className={styles.wrapper}>
            {prod && (
                <>
                    <div className={styles.container}>
                        <img src={prod.image} alt={prod.title} />
                    </div>
                    <BuyDescription
                        title={prod.title}
                        description={prod.description || ''}
                        price={prod.price}
                    />
                </>
            )}
        </div>
    );
}

export default BuyProduct;
