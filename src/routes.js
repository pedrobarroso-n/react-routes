import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Inicio from './Paginas/Inicio';
import SobreMim from './Paginas/SobreMim';
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>

      {/* 
        -> Aclopando as rotas acima será renderezida assim:
        <PaginaPadrao>
           <Inicio/>
        <PaginaPadrao/>

        <PaginaPadrao>
          <SobreMim/>
        <PaginaPadrao/>
        -> temos uma rota pai que força a renderizacao junto de suas filhas
      */}

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
