import React , { useState, useEffect }   from 'react';
import Api from '../../api/index';
import { useParams } from "react-router-dom";
import Postcomments from './Postcomments/Postcomments';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';


const Singlepost = () => {

  let { id } = useParams();
  const [post, setPost] = useState();
  const [users, setUsers] = useState();
  const [author, setAuthor] = useState();
  // const [comments, setComments] = useState();

  useEffect(() => {
  //
  //
    const getData = async () => {
      const resp = await Api("https://jsonplaceholder.typicode.com/posts/"+id)
     
      setPost(resp.data);
    }
    const getUsers = async () => {
      const allUsers = await Api("https://jsonplaceholder.typicode.com/users")
      
      setUsers(allUsers.data);
    }
    
    getData();
    getUsers();

  }, [id]);


  useEffect(() => {
    if (post && users) {
     
      const aut = users.filter( u => u.id === post.userId );
     
      setAuthor(aut[0]);

    }
  }, [users,post]);

  return (
    (!author)?
     <Spinner  className="p-3 m-5" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>:
      <div>
        <Jumbotron fluid>
          <Container className="Left">
            <h2>{post.title}</h2>
            <p> {post.body}</p>
            <p><span className="black"> Author:</span> {author.name}</p>
           <span className="black"> User:</span> <a href={"/user/"+author.id}> @{author.username}</a>
          </Container>
        </Jumbotron>
       <Postcomments id={id} />
      </div>

  );
}

export default Singlepost;
