import Map from "./Map";
import RecommendMap from "./RecommendMap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Body() {
    return (
      <div>
        <Row>
            <Col md={1}></Col>
            <Col md={7}><Map /></Col>
            <Col md={1}></Col>
            <Col md={3}><RecommendMap /></Col>
        </Row>
      </div>
    );
  }

  export default Body;
  