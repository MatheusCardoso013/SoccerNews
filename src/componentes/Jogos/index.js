import styles from './Jogos.module.css'


export default function Jogos({jogo}) {
    return (
        <div className={styles.jogos}>
            <h4 className={styles.nomeTime}>{jogo.timeCasa}</h4>
            <div className={styles.divJogos}>
                <img src={`/assets/equipes/${jogo.timeCasa}.png`} className={styles.imgTimes}></img>
                <p className={styles.placar}>{jogo.placarCasa}</p>
                <p>X</p>
                <p className={styles.placar}>{jogo.placarFora}</p>
                <img src={`/assets/equipes/${jogo.timeFora}.png`} className={styles.imgTimes}></img>
            </div>
            <h4 className={styles.nomeTime}>{jogo.timeFora}</h4>
        </div>
    )

}