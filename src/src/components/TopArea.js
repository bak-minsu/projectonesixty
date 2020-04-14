import React from 'react';
import { FaHome, FaHotel, FaBook } from 'react-icons/fa';
import { Link } from "react-router-dom";

function TopArea() {
  return (
    <header>
      <div id="toparea" className="border">
        <h1>HST 160 What-If Project</h1>
      </div>
      <NavBar/>
    </header>
  )
}

function NavBar() {
  return (
    <nav>
      <NavButton icon={<FaHome/>} text={"Home"} route={"/"}/>
      <NavButton icon={<FaHotel/>} text={"About"} route={"/about"}/>
      <NavButton icon={<FaBook/>} text={"Sources"} route={"/sources"}/>
    </nav>
  )
}

function NavButton({text, route, icon}) {
  return (
    <Link to={route}>
      <div className="nav-button">
        {icon}
        <p>{text}</p>
      </div>
    </Link>
  )
}

export default TopArea;