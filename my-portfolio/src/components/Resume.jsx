import React from 'react'
import resume from '../assets/images/resume.png';
import './Resume.css'

function Resume() {
  return (
    <>
      <div id='resume-container'>
      <h1 className="resume-header">Resumé</h1>
      <img id="resume" src={resume} alt="resume"/>
        </div>
        </>
    
  )
}

export default Resume
