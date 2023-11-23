import React from 'react'
import './progress.css'
import { Line } from 'rc-progress'

const Progress = () => {
  return (
    <section id='prog'>
        <div className='progbars'>
            <h2 className='prog-title'>hello</h2>
            <div className='prog-bat'>
                <h2 className='prog-head'> html</h2>
                <Line percent={10} strokewidth={2} trailwidth={2} strokeColor="green" trailColor='lightgreen'strokeLinecap='round' />
            </div>
            <div className='prog-bat'>
                <h2 className='prog-head'> html</h2>
                <Line percent={10} strokewidth={2} trailwidth={2} strokeColor="red" trailColor='lightblue'strokeLinecap='round' />
            </div>
            <div className='prog-bat'>
                <h2 className='prog-head'> html</h2>
                <Line percent={10} strokewidth={2} trailwidth={2} strokeColor="lightblue" trailColor='blue'strokeLinecap='round' />
            </div>
            <div className='prog-bat'>
                <h2 className='prog-head'> html</h2>
                <Line percent={10} strokewidth={2} trailwidth={2} strokeColor="lightblue" trailColor='blue'strokeLinecap='round' />
            </div>
        </div>
    </section>
  )
}

export default Progress