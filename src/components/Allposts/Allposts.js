import React , { useState, useEffect } from 'react';
import Api from '../../api/index';
import Blogpost from './Blogpost/Blogpost';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import 'font-awesome/css/font-awesome.min.css';
import Button from 'react-bootstrap/Button'

const Allposts = () => {
  const [posts, setPosts] = useState();
  const [networkerror, setNetworkerror] = useState(0);

  useEffect(() => {

    const getData = async () => {
      try {
        const resp = await Api("https://jsonplaceholder.typicode.com/posts")
        setPosts(resp.data);
      } catch (e) {
        console.log(e);
        setNetworkerror(1);
      }
    }
    getData();

  }, []);

  return (
      (!posts)?

      <>
      {networkerror ? <div className="red m-4 p-4" ><i className="fa fa-ban fa-5x "/><h2>Network Error </h2> <p className="black">Please try again later </p></div> : <Spinner  className="p-3 m-5" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>}

      </>
      :
         <container-sm >
            <Jumbotron fluid>
              <Container className="Left" >
                <h1>JSON Placeholder Blog</h1>
                    <p>
                    Free fake API for testing and prototyping.Powered by JSON Server + LowDB.
                  </p>
                  </Container>
                 </Jumbotron>

                <Container>
                    <Row sm={2} lg={3}>
                        {posts.map( (p) =>
                      (
                        <Blogpost key={p.id} row={p} />
                    ) )}
                    </Row>
               </Container>
          </container-sm>

  );
}

export default Allposts;
