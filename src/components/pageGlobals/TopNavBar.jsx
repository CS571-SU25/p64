import { Container, Nav, Navbar, Button } from "react-bootstrap";

export default function TopNavBar() {
  return (
    <Navbar
      variant="dark"
      sticky="top"
      expand="lg"
      style={{
        padding: "1rem 0",
        background: "#010a2b",
        color: "#ffffff",
      }}
      collapseOnSelect
    >
      <Container fluid>
        <Navbar.Toggle />
        <Navbar.Brand
          href="/#"
          style={{
            marginLeft: "0.3rem",
          }}
        >
          Chapman Pickleball Coaching
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link
              href="#coaching-opportunities"
              style={{
                color: "#ffffff",
              }}
            >
              Coaching Opportunities
            </Nav.Link>
            <Nav.Link
              href="#booked-lessons"
              style={{
                color: "#ffffff",
              }}
            >
              Booked Lessons
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
              href="#about"
              style={{
                color: "#ffffff",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#contact"
              style={{
                color: "#ffffff",
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className="ms-auto" href={"#book-lesson"} variant="primary">
          Book a Lesson
        </Button>
      </Container>
    </Navbar>
  );
}
