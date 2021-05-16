import React , { useState, useEffect } from 'react';
import Api from '../../api/index';
import Blogpost from './Blogpost/Blogpost';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';


const Allposts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
 
    const getData = async () => {
      const resp = await Api("https://jsonplaceholder.typicode.com/posts")
      setPosts(resp.data);
    }
    getData();
  
  }, []);

  return (
      (!posts)?
      
      <Spinner  className="p-3 m-5" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>:
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
