import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MainNavbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    if (user) {
      return (
        <>
          <Nav.Link>
            <Link to="/platforms">
              Platforms
            </Link>
          </Nav.Link>
          <Nav.Link onClick={() => handleLogout()}>
            Logout
          </Nav.Link>
        </>
      )
    } else {
      return (
        <>
          <Nav.Link>
            <Link to="/login">
              Login
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/register">
              Register
            </Link>
          </Nav.Link>
        </>
      )
    }
  }

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              Audios!
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            { rightNavItems() }
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedNavbar;