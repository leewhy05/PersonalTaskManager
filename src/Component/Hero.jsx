import React from 'react'
import Group from '../assets/Component 1.svg'
import '../style/Hero.css'


const Hero = () => {
  return (
    <div className='container popping'>
<div className='row justify-content-between align-items-center'>
    <div className='style col-lg-8 fs-2'>
    <h1>Manage your Tasks on</h1>
    <h1 style={{color:'#974FD0'}}>TaskDuty</h1>
    <div>
    <p className='text-secondary fs-3 w-100 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>
    </div>
    <div className='style'>
    <button style={{backgroundColor:'#974FD0'}} className="btn btn text-light btn-lg">Go to My Task</button>
    </div>
    </div>
    <div className='style col-lg-4'>
        <img src={Group}alt={Group} className='lh-base' />
    </div>
</div>


    </div>
  )
}

export default Hero