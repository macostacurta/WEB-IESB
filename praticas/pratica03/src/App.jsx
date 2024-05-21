import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Novo from "./pages/Novo";
import Erro404 from "./pages/Erro404";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element = {<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/Novo" element={<Novo />} />
          </Route>
          <Route path="/*" element={<Erro404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
