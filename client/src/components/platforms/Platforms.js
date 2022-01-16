import { useEffect, useState } from 'react';
import { PlatformConsumer } from '../../providers/PlatformProvider';
import PlatformList from './PlatformList';
import { Button } from 'react-bootstrap';
import PlatformForm from './PlatformForm';

const Platforms = ({ platforms, getAllPlatforms, addPlatform }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllPlatforms()
  }, [])

  return (
    <>
      <h1>All Platforms</h1>
      { adding ?
          <>
            <PlatformForm addPlatform={addPlatform} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button>
          </>
        :
        <Button variant="info" onClick={() => setAdding(true)}>Add Platform</Button>
      }
      <PlatformList platforms={platforms} />
    </>
  )
}



const ConnectedPlatform = (props) => (
  <PlatformConsumer>
    { value => <Platforms {...props} {...value} />}
  </PlatformConsumer>
)

export default ConnectedPlatform;