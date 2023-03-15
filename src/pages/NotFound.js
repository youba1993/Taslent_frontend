import { Container } from "react-bootstrap";

function NotFound() {
  return (
    <Container className="my-5 text-center">
      <h1>404</h1>
      <p>Oops, we couldn't find the page you were looking for.</p>
      <a href="/">Home Page</a>
    </Container>
  );
}

export default NotFound;
