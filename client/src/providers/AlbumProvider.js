import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AlbumContext = React.createContext();
export const AlbumConsumer = AlbumContext.Consumer;

const AlbumProvider = ({ children }) => {
  const [albums, setAlbums] = useState([])

  const navigate = useNavigate()

  const getAllAlbums = (artistId) => {
    axios.get(`/api/artists/${artistId}/albums`)
      .then( res => setAlbums(res.data))
      .catch( err => console.log(err))
  }

  const addAlbum = (artistId, album) => {
    axios.post(`/api/artists/${artistId}/albums`, { album } )
      .then( res => setAlbums([...albums, res.data]))
      .catch( err => console.log(err))
  }

  const updateAlbum = (artistId, id, album) => {
    axios.put(`/api/artists/${artistId}/albums/${id}`, { album })
      .then( res => {
        const newUpdatedAlbums = albums.map( a => {
          if (a.id === id) {
            return res.data
          }
          return a
        })
        setAlbums(newUpdatedAlbums)
        navigate(`/artists/${artistId}`)
      })
      .catch( err => console.log(err))
  }

  return (
    <AlbumContext.Provider value={{
      albums,
      getAllAlbums: getAllAlbums, 
      addAlbum: addAlbum, 
      updateAlbum: updateAlbum, 
    }}>
      { children }
    </AlbumContext.Provider>
  )
}

export default AlbumProvider;