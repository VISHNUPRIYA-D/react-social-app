import { GiHamburgerMenu } from "react-icons/gi";
import React, { useContext } from 'react'
import DataContext from "./context/DataContext";

const NavIcon = () => {
  const {handleHam} = useContext(DataContext);
  return (
    <div>
      <GiHamburgerMenu className="nav-icon" onClick={handleHam}/>
    </div>
  )
}

export default NavIcon
