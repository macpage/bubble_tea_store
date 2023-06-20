import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      <NavLink to="/Home" className={'navlink'}>
        Home
      </NavLink>
      <NavLink to="/About" className={'navlink'}>
        About
      </NavLink>
      <NavLink to="/Login">
        <button id="login">Login</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
