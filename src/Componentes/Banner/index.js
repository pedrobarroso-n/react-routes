import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Só testando essa bagaça aqui!
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido}
                    aria-hidden={true} //acessibilidade
                />
                <img 
                    className={styles.minhaFoto} 
                    src={minhaFoto}
                    alt="Minha foto vai aqui, sou feio"
                />
            </div>
        </div>
    )
}