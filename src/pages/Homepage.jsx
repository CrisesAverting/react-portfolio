import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Homepage() {
    function buttonListener(){
        alert("Hi");
    }
    return (
        <>
        <Link to="./about" >About Me</Link>
        <Link to="./about" >About Me</Link>
        <Link to="./about" >About Me</Link>
        
        <Button onClick={buttonListener}>Do stuff</Button>
        </>
      
    );
}