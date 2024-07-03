'use client'

import { useForm } from 'antd/es/form/Form';
import { Form, Input, Select, Button, message } from 'antd';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss'
import axios from 'axios';
import { useState } from 'react';

const EditProduct = () => {

    const [form] = useForm();
    const router = useRouter();
    const [edit, setEdit] = useState()
    
    const onFinish = (editvalues: any) => {
        axios.put('http://10.10.51.4:3000/products', editvalues)
            .then((response) => {
                message.success('Product added successfully!');
                form.resetFields();
            })
            .catch((error) => {
                message.error('Failed to add product. Please try again.');
                console.error('Error adding product:', error);
            });

        setEdit(editvalues);
    };
    console.log(edit, 'dsasadsa');

    return (
        <div className={styles.wrapper}>

            <Form
                autoComplete="off"
                form={form}
                onFinish={onFinish}
                className={styles.formwrapper}
            >
                <div className={styles.inputwrapper}>
                    <h4 className={styles.label}>title</h4>
                    <Form.Item
                        name="title"
                        rules={[
                            { required: true, message: 'title სავალდებულოა' },
                        ]}
                    >
                        <Input
                            type="text"
                            placeholder="Name"
                            className={styles.input}
                            autoComplete="off"
                        />
                    </Form.Item>
                </div>

                <div className={styles.inputwrapper}>
                    <h4 className={styles.label}>მაქსიმალური ქულა</h4>
                    <Form.Item
                        name="price"
                        rules={[
                            { required: true, message: 'ქულა სავალდებულოა' },
                        ]}
                    >
                        <Input
                            type="Number"
                            placeholder="Price"
                            className={styles.input}
                            autoComplete="off"
                        />
                    </Form.Item>
                </div>

                <div className={styles.inputwrapper}>
                    <h4 className={styles.label}>category</h4>
                    <Form.Item
                        name="category"
                        className={styles.selectwrapper}
                        rules={[{ required: true, message: 'category მითითება სავალდებულოას' }]}
                    >
                        <Input
                            type="text"
                            placeholder="Name"
                            className={styles.input}
                            autoComplete="off"
                        />
                    </Form.Item>
                </div>

                <div className={styles.inputwrapper}>
                    <h4 className={styles.label}>Description</h4>
                    <Form.Item
                        className={styles.selectwrapper}
                        name="description"
                        rules={[{ required: true, message: 'Description არჩევა სავალდებულოა' }]}
                    >
                        <Input
                            type="text"
                            placeholder="description"
                            className={styles.input}
                            autoComplete="off"
                        />
                    </Form.Item>
                </div>

                <div className={styles.inputwrapper}>
                    <h4 className={styles.label}>Description</h4>
                    <Form.Item
                        className={styles.selectwrapper}
                        name="image"
                        rules={[{ required: true, message: 'Description არჩევა სავალდებულოა' }]}
                    >
                        <Input
                            type="text"
                            placeholder="URl"
                            className={styles.input}
                            autoComplete="off"
                        />
                    </Form.Item>
                </div>
                <Form.Item>
                    <Button
                        type="primary"
                        onClick={() => form.submit()}
                        className={styles.button}
                    >
                        დამატება
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditProduct;
