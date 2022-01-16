import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PlatformList = ({ platforms }) => {
  return(
    <>
      <ListGroup>
        { platforms.map( p => 
          <Link to={`/platforms/${p.id}`}>
            <ListGroup.Item>{p.name}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

export default PlatformList;