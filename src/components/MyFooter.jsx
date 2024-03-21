import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const MyFooter = () => {
  return (
    <div>
      <Container fluid className="bg-dark d-none d-sm-block py-3 mt-3">
        <Row className="justify-content-center">
          <Col xs={3}>
            <h4 className="text-white">EMAIL</h4>
            <p className="text-white">info@gmail.it</p>
            <p className="text-white">about@gmail.it</p>
            <p className="text-white">books@gmail.it</p>
          </Col>
          <Col xs={3}>
            <h4 className="text-white">PHONE</h4>
            <p className="text-white">0012003034</p>
            <p className="text-white">0123456789</p>
          </Col>
          <Col xs={3}>
            <h4 className="text-white">HOURS</h4>
            <p className="text-white">Monday:8am - 5pm</p>
            <p className="text-white">Tuesday:8am - 5pm</p>
            <p className="text-white">Wednesday:8am - 5pm</p>
            <p className="text-white">Thursday:8am - 5pm</p>
            <p className="text-white">Friday:8am - 5pm</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyFooter;
