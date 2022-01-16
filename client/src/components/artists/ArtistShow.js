import { ArtistConsumer } from '../../providers/ArtistProvider';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Modal, Button } from 'react-bootstrap';
import ArtistForm from './ArtistForm';
import Moment from 'react-moment';

const ArtistShow = ({ updateArtist }) => {
  const params = useParams()
  const [artist, setArtist] = useState({ name: '', album: '', image: '', active: '' })
  const [editing, setEdit] = useState(false)

  useEffect(() => {
    axios.get(`/api/platforms/${params.platformId}/artists/${params.artistId}`)
      .then( res => setArtist(res.data))
      .catch( err => console.log(err))
  }, [])

  const { name, image, active } = artist
  return (
    <>
      <h1>{name}</h1>
      <h3>Established: 
        <Moment format='MM/DD/YYYY'>
          {active}
        </Moment>
      </h3>
      <Image src={image} roundedCircle style={{ width: '250px'}} />
      <Button variant="warning" onClick={() => setEdit(true)}>
        Edit
      </Button>

      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ArtistForm
            {...artist}
            platformId={params.platformId}
            id={params.artistId}
            updateArtist={updateArtist}
            setEdit={setEdit}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEdit(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const ConnectedArtistShow = (props) => (
  <ArtistConsumer>
    { value => <ArtistShow {...props} {...value} />}
  </ArtistConsumer>
)

export default ConnectedArtistShow;