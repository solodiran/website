import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    return ( 
        <Navbar className='navbar'>
            <Container>
                <Navbar.Brand>
                    Solodiran
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
 
                    <Nav.Item>
                        <Nav.Link href='/produk'>Produk</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href='/berita'>Berita</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href='/kesenian'>Kesenian</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href='/wisata'>Wisata</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Container>
        </Navbar>
     );
}
 
export default NavBar;