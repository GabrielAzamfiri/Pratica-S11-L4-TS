import { useEffect, useState } from "react";
import { Welcome } from "../interfaces/IArticles";
import { Button, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link,  useNavigate } from "react-router-dom";
import Article from "./Article";

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
            <Article key={index} art={art}/>
           
          );
        })}
      </Row>
    </Container>
  );
};

export default HomeArticles;
