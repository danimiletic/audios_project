import { useEffect, useState } from 'react';
import { AlbumConsumer } from '../../providers/AlbumProvider';
import AlbumList from './AlbumList';
import { useParams } from 'react-router-dom';
import AlbumForm from './AlbumForm';
import { Button, Modal } from 'react-bootstrap';

const Albums = ({ getAllAlbums, albums, addAlbum }) => {
  const [adding, setAdd] = useState(false);

  const params = useParams()

  useEffect( () => {
    getAllAlbums(params.artistId)
  }, [])

  return (
    <>
      <h1>All Albums</h1>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Album</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AlbumForm
            addAlbum={addAlbum}
            artistId={params.artistId}
            setAdd={setAdd}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAdd(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <AlbumList albums={albums} artistId={params.artistId} />
    </>
  )
}

const ConnectedAlbums = (props) => (
  <AlbumConsumer>
    { value => <Albums {...props} {...value} />}
  </AlbumConsumer>
)

export default ConnectedAlbums;