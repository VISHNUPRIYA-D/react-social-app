import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'


const HeaderContain = () => {
  const {isOpen} =useContext(DataContext)
  const className = isOpen ? "show" : "";
  return (
    <div className={`header-container ${className}`}>
      <ul className="contains">
          <li>
            <Link to={"/"} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="link">
              About
            </Link>
          </li>
          <li>
            <Link to={"/newpost"} className="link">
              Newpost
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default HeaderContain
