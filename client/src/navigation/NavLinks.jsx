import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const NavLinks = props => {

return (
  <React.Fragment>
    <li>
      <Link to="/contact/sendEmail" exact>Contact</Link>
    </li>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/About">About</Link>
    </li>
          {/* <Link to={"/About"}>
               <MenuItem onClick={handleClose}>About</MenuItem>
            </Link>

            <Link to={"/contact/sendEmail"}>
               <MenuItem onClick={handleClose}>Contact Us</MenuItem>
            </Link> */}
    </React.Fragment>
)

}

export default NavLinks;

