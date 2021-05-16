import React , { useState, useEffect }   from 'react';
import Container from 'react-bootstrap/Container';
import 'font-awesome/css/font-awesome.min.css';
import Spinner from 'react-bootstrap/Spinner';
import Api from '../../../api/index';
import Card from 'react-bootstrap/Card';


const Postcomments = ({id}) => {

  const [comments, setComments] = useState();

  useEffect(() => {

  const getComments = async () => {
    const allComments = await Api("https://jsonplaceholder.typicode.com/posts/"+id+"/comments")

    setComments(allComments.data);
  }
  getComments();

}, [id]);

  return (

    (!comments)?
       <Spinner  className="p-3 m-5" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>:
      <Container className="Left">
        {comments.map( (c) =>
          (
            <div key={c.id} >
              <Card  className="m-2" border="secondary">
                <Card.Header>
                <i className="fa fa-comments fa-2x"/> {c.name} </Card.Header>
                <Card.Body>
                <Card.Text> {c.body}</Card.Text>
                  <Card.Title> <i className="fa fa-envelope" /> {c.email}</Card.Title>
                </Card.Body>
              </Card>
            </div>
        ) )}
      </Container>

    );
    }

export default Postcomments;
