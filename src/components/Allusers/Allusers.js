import React , { useState, useEffect } from 'react';
import Api from '../../api/index';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Allusers = () => {
  const [users, setUsers] = useState();
  const [networkerror, setNetworkerror] = useState(0);

  useEffect(() => {

    const getData = async () => {
      try {
        const resp = await Api("https://jsonplaceholder.typicode.com/users")
        setUsers(resp.data);
      } catch (e) {
        console.log(e);
        setNetworkerror(1);
      }
    }
    getData();

  }, []);

  return (

    (!users)?
    <>
    {networkerror ? <div className="red m-4 p-4" ><i className="fa fa-ban fa-5x "/><h2>Network Error </h2> <p className="black">Please try again later </p></div> : <Spinner  className="p-3 m-5" animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>}

    </>:
      <Container >
         <Row  className=" d-flex flex-row"  lg={2}>
          {users.map( (u) =>
            (
           <Col key={u.id}>
             <Card className=" Left  User-h m-2 pt-1">
              <Card.Body>
              <a href={"/user/"+u.id}><Row>
                  <Col> <i className="fa fa-user-circle fa-3x"/> </Col>
                  <Col sm={11}><h3> {u.name}, @{u.username}</h3></Col>
               </Row></a>
                <blockquote className="blockquote">
                <p>Company: {u.company.name},{u.company.catchPhrase}</p>
                <p>  {u.email} </p>
                <footer className="blockquote-footer">  www.{u.website}  </footer>
                </blockquote>
              </Card.Body>
             </Card>
            </Col>

           ) )}

           </Row>
       </Container>
  );
}

export default Allusers;
