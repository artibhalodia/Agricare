import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";

import myImage from "../../img/plant-dis.jpg";

import "./DiagnosisDisplay.css";

function DiagnosisDisplay() {
  const location = useLocation();
  const diagnosis = location.state;
  console.log("inside diagnosis display");
  console.log(diagnosis);

  const handleClick = () => {
    window.open(diagnosis.supplementBuyLink, "_blank");
  };
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Card className="card-st">
          <Row>
            <Col md={5}>
              <Card.Img
                variant="top"
                src={diagnosis.diseaseImageUrl}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  padding: "10px",
                }}
              />
            </Col>
            <Col md={7}>
              <Card.Body>
                <Card.Title>
                  <Card.Header className="card-header-st text-stl">
                    {diagnosis.diseasePrediction}
                  </Card.Header>
                </Card.Title>
                <Card.Text>{diagnosis.diseaseDescription}</Card.Text>

                <Card.Header className="card-header-st text-stl">
                  Prevention Steps
                </Card.Header>
                <Card.Text>{diagnosis.preventionSteps}</Card.Text>
                <Card.Header className="card-header-st text-stl">
                  Supplements
                </Card.Header>
                {/* <Card.Img
                  variant="top"
                  src={diagnosis.supplementImageUrl}
                  style={{
                    width: "20%",
                    height: "20%",
                    objectFit: "cover",
                    padding: "10px",
                  }}
                /> */}
                <Card
                  style={{
                    width: "20rem",
                    margin: "0 auto",
                    marginTop: "10px",
                  }}
                >
                  <Card.Img variant="top" src={diagnosis.supplementImageUrl} />
                  <Card.Body>
                    <Card.Title>{diagnosis.supplementName}</Card.Title>
                    <Button
                      variant="primary"
                      onClick={handleClick}
                      style={{ margin: "0 auto", display: "block" }}
                    >
                      buy supplement
                    </Button>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
}

export default DiagnosisDisplay;
