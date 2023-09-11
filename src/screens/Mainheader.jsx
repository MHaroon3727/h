import { Outlet } from 'react-router-dom'
import React  from 'react';
import { Navbar } from 'react-bootstrap';

function Home() {
  return (
    <>
    
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Home