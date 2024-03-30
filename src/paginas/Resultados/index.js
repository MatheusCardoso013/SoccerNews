import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/resultados_capa.png";
import styles from './Resultados.module.css';
import jogos from "json/jogos.json"
import Jogos from "componentes/Jogos";

export default function Resultados({jogo}) {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Resultados">
        
            <h3 className={styles.subtitulo}>Jogos Passados</h3>

            <ul>
                {jogos.map((jogo) => (
                    <li  key={jogo.id}>
                        <Jogos jogo={jogo} />
                    </li>
                ))}
            </ul>
        
        </PostModelo>
    )
}