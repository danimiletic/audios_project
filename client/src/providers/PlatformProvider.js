import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const PlatformContext = React.createContext();
export const PlatformConsumer = PlatformContext.Consumer;

const PlatformProvider = ({ children }) => {
  const [platforms, setPlatforms] = useState([])

  const navigate = useNavigate()

  const getAllPlatforms = () => {
    axios.get('/api/platforms')
      .then( res => setPlatforms(res.data) )
      .catch( err => console.log(err) )
  }

  const addPlatform = (platform) => {
    axios.post('/api/platforms', { platform })
      .then( res => setPlatforms([...platforms, res.data]))
      .catch( err => console.log(err) )
  }

  const updatePlatform = (id, platform) => {
    axios.put(`/api/platforms/${id}`, { platform })
      .then( res => {
        const newUpdatedPlatforms = platforms.map( p => {
          if (p.id === id) {
            return res.data
          }
          return p
        })
        setPlatforms(newUpdatedPlatforms)
        navigate('/platforms')
      })
      .catch( err => console.log(err) )
  }

  const deletePlatform = (id) => {
    axios.delete(`/api/platforms/${id}`)
      .then( res => {
        setPlatforms(platforms.filter( p => p.id !== id))
        alert(res.data.message)
        navigate('/platforms')
      })
      .catch( err => console.log(err) )
  }
 
  return (
    <PlatformContext.Provider value={{
      platforms,
      getAllPlatforms: getAllPlatforms,
      addPlatform: addPlatform, 
      updatePlatform: updatePlatform, 
      deletePlatform: deletePlatform,
    }}>
      { children }
    </PlatformContext.Provider>
  )
}

export default PlatformProvider;