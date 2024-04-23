import Container from "../components/Container";
import Titulo from "../components/Titulo";

function Login(props) {
  return (
    <>
      <Container>
        <Titulo text="Login" />
        <button onClick={props.onLogar}>Entrar</button>
      </Container>
    </>
  );
}

export default Login;
