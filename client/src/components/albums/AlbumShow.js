import { AlbumConsumer } from '../../providers/AlbumProvider';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Modal, Button } from 'react-bootstrap';
import AlbumForm from './AlbumForm';
import Moment from 'react-moment';

const AlbumShow = ({ updateAlbum }) => {
  const params = useParams()
  const [album, setAlbum] = useState({ name: '', image: '', duration: 0.0, released: '' })
  const [editing, setEdit] = useState(false)

  useEffect(() => {
    axios.get(`/api/artists/${params.artistId}/albums/${params.albumId}`)
      .then( res => setAlbum(res.data))
      .catch( err => console.log(err))
  }, [])

  const { name, image, duration, released } = album
  return (
    <>
      <h1>{name}</h1>
      <h3>Released: 
        <Moment format='MM/DD/YYY'>
          {released}
        </Moment>
      </h3>
      <h3>Duration: {duration}</h3>
      <Image src={image} roundedCircle style={{ width: '250px'}} />
      <Button variant="warning" onClick={() => setEdit(true)}>
        Edit
      </Button>

      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AlbumForm
            {...album}
            artistId={params.artistId}
            id={params.albumId}
            updateAlbum={updateAlbum}
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

const ConnectedAlbumShow = (props) => (
  <AlbumConsumer>
    { value => <AlbumShow {...props} {...value} />}
  </AlbumConsumer>
)

export default ConnectedAlbumShow;