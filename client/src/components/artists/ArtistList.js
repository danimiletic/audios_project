import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArtistList = ({ artists, platformId }) => {

  return (
    <>
      <Container>
        <Row xs={1} md={3}>
          { artists.map( a => 
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={a.image} />
                  <Card.Body>
                    <Card.Title>{a.name}</Card.Title>
                    <Card.Text>
                      Years Active: {a.active}
                    </Card.Text>
                    <Link to={`/${platformId}/artists/${a.id}`}>
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

export default ArtistList;