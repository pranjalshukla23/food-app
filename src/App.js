import Pages from "./pages/Pages";
import Category from './components/Category'
import {BrowserRouter} from 'react-router-dom'
import Search from './components/Search'
import styled from 'styled-components'
import {GiKnifeFork} from "react-icons/gi";
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Nav>
                <GiKnifeFork />
                <Logo to='/'> Delicious </Logo>
            </Nav>
            <Search />
            <Category />
            <Pages />
        </BrowserRouter>

    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Helvetica Neue";
`;

const Nav = styled.div`
  padding: 0rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg{
    font-size: 2rem;
  }
`

export default App;
