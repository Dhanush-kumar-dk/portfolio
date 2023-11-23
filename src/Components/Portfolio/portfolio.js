import React from 'react'
import './portfolio.css'
import web from '../../Components/Assests/web-protfolio.jpg'
const portfolio = () => {
  return (
    <section id='portfolio'>
        <h2 className='port-title'>My portfolio</h2>
        <span className='portdesc'>i take pride in attention to the smallest details </span>
        <div className='portfolio-container'>
            <img src={web} alt='' className='portfolio-img'/>
            <img src={web} alt='' className='portfolio-img'/>
            <img src={web} alt='' className='portfolio-img'/>
            <img src={web} alt='' className='portfolio-img'/>
            <img src={web} alt='' className='portfolio-img'/>
            <img src={web} alt='' className='portfolio-img'/>
            </div>
            <button className='workbtn'>
                see more
            </button>
    </section>
  )
}

export default portfolio
