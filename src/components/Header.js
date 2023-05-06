import { NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"
import catLogo from '../assets/meet_meow_logo.png'


const Header = () => {
  return (
    <Nav className="header-nav" pills >
      <NavItem>
        <NavLink to="/">
          <img
            src={catLogo}
            alt="Cat Tinder logo with two cats"
            className="cat-logo"
            />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
          to="/catIndex"
          style={({ isActive }) => ({
          color: isActive ? '#ffff' : '#ffff',
        })}
        >
          Meet all of our Purrr Friends
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
          to="/catnew"
          style={({ isActive }) => ({
          color: isActive ? '#ffff' : '#ffff',
        })}
        >
          Add a Cat
        </NavLink>
      </NavItem>
    </Nav>
  )
}


export default Header
