import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Result } from "../interfaces/IArticles";

interface SingleArtProps {
    art: Result;
 
  }
const Article = ({ art}: SingleArtProps)=>{
    const navigate = useNavigate();
    return (
        <Col xs={10} sm={6} lg={3}  className="my-3">
        <Card onClick={()=> navigate("/Details/" + art.id)}>
          <Card.Img variant="top" src={art.image_url} />
          <Card.Body>
            <Card.Title>{art.title}</Card.Title>
            <Card.Text>{art.published_at}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    )
}

export default Article;
