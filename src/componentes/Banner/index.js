import styles from './Banner.module.css';
import circulo from 'assets/circulo.jpg';
import minhaFoto from 'assets/minhaFoto.jpg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Bem vindo!
                </h1>
                <p className={styles.paragrafo}>
                    Soccer News é o seu portal essencial para ficar por dentro de tudo no mundo do futebol. Oferecemos as últimas notícias, análises e atualizações em tempo real sobre ligas, torneios e transferências. Esteja sempre informado com nossa cobertura abrangente e conteúdo de alta qualidade.
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circulo} src={circulo} aria-hidden={true}></img>
                <img className={styles.minhaFoto} src={minhaFoto} alt="Jogadores comemorando"></img>
            </div>
        </div>
    )
}