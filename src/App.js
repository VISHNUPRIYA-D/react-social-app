import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NewPost from "./NewPost";
import Logo from "./Logo";
import Nav from "./Nav";
import Missing from "./Missing";
import Post from "./Post";
import NavIcon from "./NavIcon";
import HeaderContain from "./HeaderContain";
import Edit from "./Edit";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <main>
      <DataProvider>
        <div className="header">
          <Logo />
          <Nav />
         <HeaderContain />
        </div>
        <NavIcon />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<Post />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/about" element={<About />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </DataProvider>
    </main>
  );
};

export default App;
