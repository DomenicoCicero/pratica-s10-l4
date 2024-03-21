import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const SingleBook = props => {
  const [asin, setAsin] = useState(props.book.asin);

  const sendAsin = () => {
    props.asinBook(asin);
  };

  const diselected = () => {
    if (props.asinComparated === props.book.asin) {
      props.asinBook(null);
    }
  };

  const title = props.book.title.length < 25 ? props.book.title : props.book.title.slice(0, 23) + "...";

  return (
    <Col xs={6} md={4} lg={3} xl={2} key={props.book.asin}>
      <Card
        className={`${props.card} ${props.asinComparated === props.book.asin ? "selected" : ""}`}
        data-testid={"card"}
      >
        <Card.Img
          variant="top"
          src={props.book.img}
          className={props.image}
          onClick={e => {
            sendAsin();
            diselected();
          }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{props.book.category}</Card.Text>
          <Card.Text className="text-danger text-decoration-underline">{props.book.price + "$"}</Card.Text>
          <Button variant="success" className="button">
            Compra
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
