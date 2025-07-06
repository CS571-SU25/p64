import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function TopNavBar() {
  return (
    <Navbar
      fixed="top"
      style={{
        padding: "1rem",
        background: "#010a2b",
        color: "#ffffff",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="/"
          style={{
            color: "#ffffff",
          }}
        >
          Chapman Pickleball Coaching
        </Navbar.Brand>
        <Nav className="me-auto my-2 my-lg-0">
          <Nav.Link
            href="#coaching-opportunities"
            style={{
              color: "#ffffff",
            }}
          >
            Coaching Opportunities
          </Nav.Link>
          <Nav.Link
            href="#favorite-products"
            style={{
              color: "#ffffff",
            }}
          >
            Favorite Products
          </Nav.Link>
          <Nav.Link
            href="#about-me"
            style={{
              color: "#ffffff",
            }}
          >
            About Me
          </Nav.Link>
          <Nav.Link
            href="#contact-me"
            style={{
              color: "#ffffff",
            }}
          >
            Contact Me
          </Nav.Link>
        </Nav>
        <Button className="d-flex" href={"#book-lesson"} variant="primary">
          Book a Lesson
        </Button>
      </Container>
    </Navbar>
  );
}
