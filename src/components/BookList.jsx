import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = props => {
  const [search, setSearch] = useState("");
  const [asinBook, setAsinBook] = useState("");

  const handleAsin = data => {
    setAsinBook(data);
  };

  return (
    <Container>
      <Row>
        <Form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Book</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci un libro da cercare"
              onChange={e => {
                setSearch(e.target.value);
              }}
              value={search}
            />
          </Form.Group>
        </Form>
      </Row>

      <Row>
        <Col xs={8}>
          <Row>
            {props.arrayBooks
              .filter(book => book.title.includes(search))
              .map(filteredBook => {
                return (
                  <SingleBook
                    book={filteredBook}
                    image="image"
                    card="card"
                    button="button"
                    asinBook={handleAsin}
                    asinComparated={asinBook}
                    key={filteredBook.asin}
                  />
                );
              })}
          </Row>
        </Col>
        <Col xs={4}>{asinBook && <CommentArea asin={asinBook} />}</Col>
      </Row>
    </Container>
  );
};

export default BookList;
