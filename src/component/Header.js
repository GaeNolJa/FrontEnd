import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SearchBar from "./SearchBar";
import gaenolja from '../img/gaenolja.png';
function Header() {
    return (
      <div>
          <br></br>
          <Row>
            <Col md={3}>
            <img src={gaenolja} alt="Logo" width={195} height={73}/>
            </Col>
            <Col md={7}><SearchBar /></Col>
            <Col md={1}><SignIn /></Col>
            <Col md={1}><SignUp /></Col>  
          </Row>
      </div>
    );
  }
  
  export default Header;
  