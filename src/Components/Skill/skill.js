import React from 'react'
import './skill.css'
import ui from '../../Components/Assests/figma-logo.png'
import c from '../../Components/Assests/c-logo.png'
import py from '../../Components/Assests/python.png'
const skill = () => {
  return (
    <section id='skills'>
        <span className='skilltitle'>What i do</span>
        <span className='skilldesc'> process</span>
        <div className='skillbar'>
            <div className='skillbars'>
                <img src={ui} className='skillbarimg' alt=''/>
                <div className='skillbartext'>
                    <h2> ui designer</h2>
                    <p>this is a demo text</p>
                </div>
            </div>
            <div className='skillbars'>
                <img src={c} className='skillbarimg' alt=''/>
                <div className='skillbartext'>
                    <h2> c programmer</h2>
                    <p>this is a demo text</p>
                </div>
            </div>
            <div className='skillbars'>
                <img src={py} className='skillbarimg' alt=''/>
                <div className='skillbartext'>
                    <h2> python developer</h2>
                    <p>this is a demo text</p>
                </div>
            </div>
            </div>
    </section> 
    )
}

export default skill
