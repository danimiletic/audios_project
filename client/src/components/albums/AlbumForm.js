import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const AlbumForm = ({ addAlbum, artistId, setAdd, name, image, duration, released, updateAlbum, setEdit, id }) => {
  const [album, setAlbum] = useState({ name: '', image: '', duration: 0.0, released: '' })

  useEffect( () => {
    if (id) {
      setAlbum({ name, image, duration, released })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateAlbum(artistId, id, album)
      setEdit(false)
    } else {
      addAlbum(artistId, album)
      setAdd(false)
    }
    setAlbum({ name: '', image: '', duration: 0.0, released: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            name='name'
            value={album.name}
            onChange={(e) => setAlbum({ ...album, name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Released</Form.Label>
          <Form.Control 
            type="date" 
            name='released'
            value={album.released}
            onChange={(e) => setAlbum({ ...album, released: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Duration: </Form.Label>
          <Form.Control 
            type="text" 
            name='duration'
            value={album.duration}
            onChange={(e) => setAlbum({ ...album, duration: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control 
            type="text" 
            name='image'
            value={album.image}
            onChange={(e) => setAlbum({ ...album, image: e.target.value })}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default AlbumForm;