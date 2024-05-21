import { useState } from "react";

export default function Novo() {

  const nome = useState();
  const telefone = useState();
  const erroNome = useState();
  const erroTelefone = useState();
  const novo = {nome, telefone};

  function handleSubmit(){
  
  }

  return (
    <>
      <h2>Novo Contato</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Nome">Nome:</label>
        <input type="text" id="nome" name="nome" value={nome} onChange={(event) => setNome(event.target.value)}/>
      </form>
    </>
  );
}
