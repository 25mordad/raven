import React , { useState, useEffect }   from 'react';
import Api from '../api/index';
import { useParams } from "react-router-dom";
import Blogpost from './Allposts/Blogpost/Blogpost';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import 'font-awesome/css/font-awesome.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from "react-router-dom";

const Userposts = () => {

  let { id } = useParams();
  const [posts, setPosts] = useState();
  const [author, setAuthor] = useState();
  let history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const resp = await Api("https://jsonplaceholder.typicode.com/posts")

      if (resp.data) {
        const filterbyuser = resp.data.filter( p => parseInt(p.userId) === parseInt(id));
        if (filterbyuser.length === 0 ) {
          history.push('/404');
        }
        setPosts(filterbyuser);
      }
    }

    const getUser = async () => {
      const resp = await Api("https://jsonplaceholder.typicode.com/users")

      const activeuser = resp.data.filter( u => parseInt(u.id) === parseInt(id));

      setAuthor(activeuser[0]);
    }
    getUser();
    getData();

  }, [id,history]);

  return (
      (!posts)?
      <Spinner  className="p-3 m-5" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>:
       <Container>
        <Row>
         {(!author)?
          <Spinner  className="p-3 m-5" animation="border" role="status">
           <span className="sr-only">Loading...</span>
          </Spinner>:
            <Card className="Card-w Left m-2">
              <Card.Body>
              <Row>
                <Col> <i className="fa fa-user-circle fa-5x"/> </Col>
              </Row>

                <blockquote className="blockquote mt-2 pt-2">
                <p> {author.name} @ {author.username} </p>
                <p>Company: {author.company.name},{author.company.catchPhrase}</p>
                <p>  {author.email} </p>
                <footer className="blockquote-footer">  www.{author.website}  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          }

        </Row>
        <Row sm={2} lg={3}>
            {posts.map( (p) =>
          (
            <Blogpost key={p.id} row={p} />
        ) )}
        </Row>

    </Container>
  );
}

export default Userposts;
