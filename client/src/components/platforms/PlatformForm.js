import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const PlatformForm = ({ addPlatform, id, name, purchased, model, image, updatePlatform }) => {
  const [platform, setPlatform] = useState({ name: '', purchased: '', model: '', image: '' })

  useEffect( () => {
    if (id) {
      setPlatform({ name, purchased, model, image })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updatePlatform(id, platform)
    } else {
      addPlatform(platform)
    }
    setPlatform(({ name: '', purchased: '', model: '', image: '' }))
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Platform Name</Form.Label>
          <Form.Control 
            type="text"
            name="name"
            value={platform.name}
            onChange={(e) => setPlatform({ ...platform, name: e.target.value })} 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Model</Form.Label>
          <Form.Control 
            type="model"
            name="model"
            value={platform.model}
            onChange={(e) => setPlatform({ ...platform, model: e.target.value })} 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Purchased: </Form.Label>
          <Form.Control 
            type="date"
            name="purchased"
            value={platform.purchased}
            onChange={(e) => setPlatform({ ...platform, purchased: e.target.value })} 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image: </Form.Label>
          <Form.Control 
            type="text"
            name="image"
            value={platform.image}
            onChange={(e) => setPlatform({ ...platform, image: e.target.value })} 
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
    </>
  )
}

export default PlatformForm;