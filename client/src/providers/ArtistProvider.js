import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ArtistContext = React.createContext();
export const ArtistConsumer = ArtistContext.Consumer;

const ArtistProvider = ({ children }) => {
  const [artists, setArtists] = useState([])

  const navigate = useNavigate()

  const getAllArtists = (platformId) => {
    axios.get(`/api/platforms/${platformId}/artists`)
      .then( res => setArtists(res.data))
      .catch( err => console.log(err))
  }

  const addArtist = (platformId, artist) => {
    axios.post(`/api/platforms/${platformId}/artists`, { artist } )
      .then( res => setArtists([...artists, res.data]))
      .catch( err => console.log(err))
  }

  const updateArtist = (platformId, id, artist) => {
    axios.put(`/api/platforms/${platformId}/artists/${id}`, { artist })
      .then( res => {
        const newUpdatedArtists = artists.map( a => {
          if (a.id === id) {
            return res.data
          }
          return a
        })
        setArtists(newUpdatedArtists)
        navigate(`/platforms/${platformId}`)
      })
      .catch( err => console.log(err))
  }

  return (
    <ArtistContext.Provider value={{
      artists,
      getAllArtists: getAllArtists, 
      addArtist: addArtist, 
      updateArtist: updateArtist, 
    }}>
      { children }
    </ArtistContext.Provider>
  )
}

export default ArtistProvider;