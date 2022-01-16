import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const ArtistForm = ({ addArtist, platformId, setAdd, name, image, active, updateArtist, setEdit, id }) => {
  const [artist, setArtist] = useState({ name: '', image: '', active: '' })

  useEffect( () => {
    if (id) {
      setArtist({ name, image, active })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateArtist(platformId, id, artist)
      setEdit(false)
    } else {
      addArtist(platformId, artist)
      setAdd(false)
    }
    setArtist({ name: '', image: '', active: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            name='name'
            value={artist.name}
            onChange={(e) => setArtist({ ...artist, name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Active</Form.Label>
          <Form.Control 
            type="date" 
            name='active'
            value={artist.active}
            onChange={(e) => setArtist({ ...artist, active: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control 
            type="text" 
            name='image'
            value={artist.image}
            onChange={(e) => setArtist({ ...artist, image: e.target.value })}
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

export default ArtistForm;