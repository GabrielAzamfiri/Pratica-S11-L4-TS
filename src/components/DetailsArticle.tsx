import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Result } from "../interfaces/IArticles";

const DetailsArticle = () => {
  const params = useParams();
  const idArticle = params.idArticle;

  const [selectArticle, setSelectArticle] = useState<Result>();

  const mYFetchArticle = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/" + idArticle);

      if (resp.ok) {
        const myArticle = await resp.json();

        setSelectArticle(myArticle);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    mYFetchArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const published = new Date(selectArticle?.published_at).toLocaleDateString()
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
      <Row className="justify-content-center my-5">
        <Col xs={10} >
          <h1>{selectArticle?.title}</h1>
          <img src={selectArticle?.image_url} alt="poster article" className="w-100"  />
          <p> Published: {selectArticle?.published_at} </p>
          <p>Summary: {selectArticle?.summary}</p>
          <p>Updated at : {selectArticle?.updated_at}</p>
          <p>Launches: {selectArticle?.launches[0] ? selectArticle?.launches[0].provider : "None" }</p>
          <p>Events: {selectArticle?.events[0] ? selectArticle?.events[0].provider : "None"}</p>

        </Col>
      </Row>
    </Container>
  );
};

export default DetailsArticle;
