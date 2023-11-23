import React from 'react'
import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import logo from '../../Components/Assests/logo.png'
import menu from '../../Components/Assests/menu.png'
import letter from '../../Components/Assests/letter.png'

const Navbar = () => {
  const [showmenu,setshowmenu] =useState(false);
  return (
  <nav className='navbar'>
    <img src={logo} alt =""  className='nav-logo'/>
    <div className='desktopmenu'>
      <Link activeClass='active' to='main' spy={true} smooth={true}  offset={-100} duration={500} className='desktopmenulist'>Home</Link>                
      <Link activeClass='active' to='skills' spy={true} smooth={true}offset={-100}  duration={500}className='desktopmenulist '>About</Link>
      <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100}  duration={500}className='desktopmenulist'>Portfoilo</Link>
     {/*} <Link activeClass='active' to='home' smooth={true} duration={500} className='desktopmenulist'>Work</Link>
      <Link activeClass='active' to='home' smooth={true} duration={500} className='desktopmenulist'>Clinets</Link>*/}
      </div>
      <button className='desktop-btn' onClick={()=>{
        document.getElementById('clients').scrollIntoView({behavior:'smooth'});
      }}>
        <img src={letter} alt='' className='desktopbtnimg' />
        Contact
      </button>
      <img src={menu} alt ="menu"  className='nav-img'onClick={()=>setshowmenu(!showmenu)}/>
    <div className='navmenu'  style={{display:showmenu? 'flex':'none'}}>
      <Link activeClass='active' to='main' spy={true} smooth={true}  offset={-100} duration={500} className='navmenulist' onClick={()=>setshowmenu(false)}>Home</Link>                
      <Link activeClass='active' to='skills' spy={true} smooth={true}offset={-100}  duration={500}className='navmenulist 'onClick={()=>setshowmenu(false)}>About</Link>
      <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100}  duration={500}className='navmenulist'onClick={()=>setshowmenu(false)}>Portfoilo</Link>
      <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100}  duration={500}className='navmenulist'onClick={()=>setshowmenu(false)}>Contact</Link>
     {/*} <Link activeClass='active' to='home' smooth={true} duration={500} className='desktopmenulist'>Work</Link>
      <Link activeClass='active' to='home' smooth={true} duration={500} className='desktopmenulist'>Clinets</Link>*/}
      </div>
    </nav>
  )
}

export default Navbar