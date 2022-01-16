import { useEffect, useState } from 'react';
import { ArtistConsumer } from '../../providers/ArtistProvider';
import ArtistList from './ArtistList';
import { useParams } from 'react-router-dom';
import ArtistForm from './ArtistForm';
import { Button, Modal } from 'react-bootstrap';

const Artists = ({ getAllArtists, artists, addArtist }) => {
  const [adding, setAdd] = useState(false);

  const params = useParams()

  useEffect( () => {
    getAllArtists(params.platformId);
  }, [])

  return (
    <>
      <h1>All Artists</h1>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Artist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ArtistForm
            addArtist={addArtist}
            platformId={params.platformId}
            setAdd={setAdd}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAdd(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ArtistList artists={artists} platformId={params.platformId} />
    </>
  )
}

const ConnectedArtists = (props) => (
  <ArtistConsumer>
    { value => <Artists {...props} {...value} />}
  </ArtistConsumer>
)

export default ConnectedArtists;