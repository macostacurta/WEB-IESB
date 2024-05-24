import { useContext, useState } from "react";
import ContatosContext from "../contexts/ContatosContex";
import { useNavigate } from "react-router-dom";


export default function Novo() {

  const navigate = useNavigate()

  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [erroTelefone, setErroTelefone] = useState()
  const [erroNome, setErroNome] = useState()

  const novo = {nome, telefone};
  const {incluirContato} = useContext(ContatosContext)


   function handleSubmit(event){
    event.preventDefault();
    incluirContato({nome, telefone})
    navigate("/");
    
  }

  return (
    <>
      <h2>Novo Contato</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <input type="text" id="nome" name="nome" placeholder="Nome" value={nome} onChange={(event) => setNome(event.target.value)}/>
        {erroNome && <p className="erro"> {erroNome} </p>}
        <br/>
        <label htmlFor="telefone">Telefone: </label>
        <input type="text" id="telefone" name="telefone" placeholder="Telefone" value={telefone} onChange={(event) => setTelefone(event.target.value)}/>
        {erroTelefone && <p className="erro"> {erroTelefone} </p>}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
