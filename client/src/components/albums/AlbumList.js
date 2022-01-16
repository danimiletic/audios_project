import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AlbumList = ({ albums, artistId }) => {

  return (
    <>
      <Container>
        <Row xs={1} md={3}>
          { albums.map( a => 
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={a.image} />
                  <Card.Body>
                    <Card.Title>{a.name}</Card.Title>
                    <Card.Text>
                      Duration: {a.duration}
                    </Card.Text>
                    <Card.Text>
                      Released: {a.released}
                    </Card.Text>
                    <Link to={`/${artistId}/albums/${a.id}`}>
                      <Button variant="primary">Show</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            )
          }
        </Row>
      </Container>
    </>
  )
}

export default AlbumList;