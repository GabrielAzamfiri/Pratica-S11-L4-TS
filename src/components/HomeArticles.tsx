import { useEffect, useState } from "react";
import { Welcome } from "../interfaces/IArticles";
import { Button, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link,  useNavigate } from "react-router-dom";

const HomeArticles = () => {
  const [objArticles, setObjArticles] = useState<Welcome>();
  const navigate = useNavigate();
  const fetchArticles = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");

      if (resp.ok) {
        const objArticles = await resp.json();

        setObjArticles(objArticles);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Epic-Articles</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row className="mt-5">
        {objArticles?.results.map((art, index) => {
          return (
            <Col xs={10} sm={6} lg={3} key={index} className="my-3">
              <Card onClick={()=> navigate("/Details/" + art.id)}>
                <Card.Img variant="top" src={art.image_url} />
                <Card.Body>
                  <Card.Title>{art.title}</Card.Title>
                  <Card.Text>{art.published_at}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default HomeArticles;
