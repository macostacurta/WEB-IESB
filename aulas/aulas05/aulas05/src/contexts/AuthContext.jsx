import { createContext, useState } from "react";

const AuthContext = createContext({});

function AuthContextProvider(props) {
  const [user, setUser] = useState({});

  function login(email, senha) {
    if (email === "jose@email.br" && senha === "abcd1234") {
      setUser({ email, logado: true });
    }
  }

  function logout() {
    setUser({ email: null, logado: false });
  }

  const contexto = {
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={contexto}>
      {props.children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthContextProvider};