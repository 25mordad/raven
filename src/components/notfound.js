import React  from 'react';
import Container from 'react-bootstrap/Container';
import notfound from "../images/notfound.jpg";

const Notfound = () => {

  return (
    <Container className ="">
    <a href="/">
             <img   class="img-fluid" alt="Responsive notfound"  src={notfound} /> </a>
  </Container>
  );
}
export default Notfound;
