import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
function Header() {
    return (
      <div>
        <h1>Header</h1>
        <Button> Hi</Button>
        <SignIn />
        <SignUp />
      </div>
    );
  }
  
  export default Header;
  