import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Platforms from './components/platforms/Platforms';
import PlatformShow from './components/platforms/PlatformShow';
import { Container } from 'react-bootstrap';
import ArtistShow from './components/artists/ArtistShow';
import AlbumShow from './components/albums/AlbumShow';


const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Container>
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<ProtectedRoute />}>
              <Route path='/platforms' element={<Platforms />} />
              <Route path='/platforms/:platformId' element={<PlatformShow />} />
              <Route path='/:platformId/artists/:artistId' element={<ArtistShow />} />
              <Route path='/:artistId/albums/:albumsId' element={<AlbumShow />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/*' element={<Nomatch />} />
          </Routes>
        </>
      </Container>
    </FetchUser>
  </>
)

export default App;