import styles from './PostModelo.module.css';

export default function PostModelo({ fotoCapa, titulo, children }) {
    return (
        <article className={styles.postmodeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            >
            </div>
            <h2 className={styles.titulo}>
                {titulo}
            </h2>
            <div className={styles.postmodeloContainer}>
                {children}
            </div>
        </article>
    )
}