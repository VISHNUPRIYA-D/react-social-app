import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import DataContext from './context/DataContext';

const Nav = () => {
  const {search, setSearch, handleSubmit} = useContext(DataContext);
  return (
    <form onSubmit={handleSubmit} className='search-side'>
      <input type="text" 
      name="search" 
      id="search"
      placeholder='Search somthing'
      value={search}
      onChange = {(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="submit-btn">
      <FaSearch />
    </button>

    </form>
  )
}

export default Nav
