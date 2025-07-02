import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
    >
      <Container>
        <Navbar.Brand href="/">Chapman Pickleball Coaching</Navbar.Brand>
        <Nav>
          <Nav.Link href="#coaching-opportunities">
            Coaching Opportunities
          </Nav.Link>
          <Nav.Link href="#book-lesson">Book a Lesson</Nav.Link>
          <Nav.Link href="#favorite-products">Favorite Products</Nav.Link>
          <Nav.Link href="#about-me">About Me</Nav.Link>
          <Nav.Link href="#contact-me">Contact Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
