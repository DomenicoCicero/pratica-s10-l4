import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";
import { useEffect, useState } from "react";

const MyButtonGroup = props => {
  const [genre, setGenre] = useState(fantasy);

  useEffect(() => {
    props.changeGenre(genre);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre]);

  return (
    <Container className="mb-2">
      <Button className="me-1 bg-info border-0 text-black" onClick={() => setGenre(fantasy)}>
        Fantasy
      </Button>
      <Button className="me-1 bg-warning border-0 text-black" onClick={() => setGenre(history)}>
        History
      </Button>
      <Button className="me-1 bg-danger border-0" onClick={() => setGenre(horror)}>
        Horror
      </Button>
      <Button className="me-1 bg-success border-0" onClick={() => setGenre(romance)}>
        Romance
      </Button>
      <Button className="me-1 bg-primary border-0" onClick={() => setGenre(scifi)}>
        Scifi
      </Button>
    </Container>
  );
};

export default MyButtonGroup;
