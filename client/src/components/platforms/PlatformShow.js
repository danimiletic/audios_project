import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import { Button, Image } from 'react-bootstrap';
import { PlatformConsumer } from '../../providers/PlatformProvider';
import PlatformForm from './PlatformForm';
import Artists from '../artists/Artists';


const PlatformShow = ({ updatePlatform, deletePlatform }) => {
  const params = useParams();
  const [platform, setPlatform] = useState({ name: '', purchased: '', model: '', image: '' })
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/platforms/${params.platformId}`)
      .then( res => setPlatform(res.data))
      .catch( err => console.log(err))
  }, [])

  const { name, purchased, model, image, id } = platform
  return (
    <>
      { editing ? 
        <>
          <PlatformForm 
            {...platform}
            updatePlatform={updatePlatform}
          />
          <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
          <br />
        </>
        :
        <>
          <h1>{name}</h1>
          <h3>Model: {model}</h3>
          <h5>Purchased:
            <Moment format='MM/DD/YYYY'>
              {purchased}
            </Moment> 
          </h5>
          <Image src={image}/>
          <Button 
            variant="warning" 
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant="danger"
            onClick={() => deletePlatform(id)}
          >
            Delete
          </Button>
        </>
      }
      <Artists platformId={id} />
    </>
  )
}

const ConnectedPlatformShow = (props) => (
  <PlatformConsumer>
    { value => <PlatformShow {...props} {...value} /> }
  </PlatformConsumer>
)

export default ConnectedPlatformShow;