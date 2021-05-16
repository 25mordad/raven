import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Allposts from './components/Allposts/Allposts.js';
import Allusers from './components/Allusers/Allusers.js';
import Singlepost from './components/Allposts/Singlepost.js';
import Userposts from './components/userposts.js';
import Notfound from './components/notfound.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function App() {
  return (

    <div className="App">
       <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="/">JSONBLOg</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/users">Users</Nav.Link>
                </Nav>
            </Navbar>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Allposts} />
          <Route path="/post/:id" component={Singlepost} />
          <Route path="/user/:id" component={Userposts} />
          <Route path="/users" exact component={Allusers} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
