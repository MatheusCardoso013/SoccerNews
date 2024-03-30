import { Outlet, useParams } from 'react-router-dom';
import styles from '../Banner/Banner.module.css';
import posts from "json/posts.json";

export default function BannerPost() {
    const parametros = useParams();


    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    return (
        <>
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    {post.chamada}
                </h1>
                <p className={styles.paragrafo}>
                    {post.subchamada}
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circulo} src={`/assets/posts/${post.id}/capa.png`} aria-hidden={true}></img>
                <img className={styles.minhaFoto} src={`/assets/posts/${post.id}/capa2.png`} alt="Jogadores comemorando"></img>
            </div>
        </div>

        <Outlet />
        </>
    )
}