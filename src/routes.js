import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Resultados from "./paginas/Resultados";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="resultados" element={<Resultados />} />
        </Route>

        <Route path="posts/:id" element={<Post />}/>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes> 

      <Rodape />
    </BrowserRouter>

  );
}

export default AppRoutes;
