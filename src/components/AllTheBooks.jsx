import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";

const AllTheBooks = props => {
  const [book, setBook] = useState(fantasy);

  return (
    <Container>
      <Button onClick={() => setBook(fantasy)}>Fantasy</Button>
      <Button onClick={() => setBook(history)}>History</Button>
      <Button onClick={() => setBook(horror)}>Horror</Button>
      <Button onClick={() => setBook(romance)}>Romance</Button>
      <Button onClick={() => setBook(scifi)}>Scifi</Button>
      <Row>
        {book.map(book => {
          const title = book.title.length < 25 ? book.title : book.title.slice(0, 23) + "...";

          return (
            <Col xs={6} md={4} lg={3} xl={2} key={book.asin}>
              <Card className={props.card}>
                <Card.Img variant="top" src={book.img} className={props.image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text className="text-danger text-decoration-underline">{book.price + "$"}</Card.Text>
                  <Button variant="success" className="button">
                    Compra
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
