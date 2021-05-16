import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'


const Blogpost = ({row}) => {

  let url = "/post/"+ row.id
  return (
    <div>
      <Col  style={{margin:"1rem"}}>
        <Card className="Left" >
          <Card.Img variant="top" src="https://via.placeholder.com/600/808e8c" />
            <Card.Body className="Card-h">
              <Card.Title><a href={url}>{row.title}</a></Card.Title>
              <Card.Text>
                  {row.body}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </div>
  );
}

export default Blogpost;
