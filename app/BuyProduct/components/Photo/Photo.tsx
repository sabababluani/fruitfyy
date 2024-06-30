import styles from './Photo.module.scss';

type Props ={
    src: string
}

const Photo = (props: Props) => {
    return (
        <div className={styles.container}>
            <img src={props.src} />
        </div>
    )
}


export default Photo;