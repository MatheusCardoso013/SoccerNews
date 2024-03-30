import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import NaoEncontrada from "paginas/NaoEncontrada";
import BannerPost from "componentes/BannerPost";
import styles from './Post.module.css';
import PostCard from "componentes/PostCard";

export default function Post() {
    const parametros = useParams();
    console.log(parametros)

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 3)


    return (
        <Routes>
            <Route path="*" element={<BannerPost />}>
                <Route index element={<PostModelo
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}>

                    {post.texto}

                    <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>

                    <ul className={styles.postsRecomendados}>
                        {postsRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))}
                    </ul>
                </PostModelo>} />
            </Route>
        </Routes>
    )
}