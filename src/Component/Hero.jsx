import React from 'react'
import Group from '../assets/Component 1.svg'
import '../style/Hero.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


const Hero = () => {
  return (
    <div className='container-fluid row justify-content-center align-items-center hero mt-5'>
        <div className=' col-lg-6 left-hero  '> 
        <h2 className='manage'>Manage your Tasks on <br /> <span>Task duty</span></h2>
        <div className='title'>

        <p className='fs-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga earum, enim quia incidunt quod ipsam dicta deleniti ex sunt recusandae facere veritatis nisi, id molestias officia possimus iste hic itaque ratione repellat saepe quis porro repudiandae? Totam beatae voluptatibus nemo dignissimos atque, delectus, ab, quibusdam in placeat quos excepturi reprehenderit?</p>
        <Link to='/AllTask'><Button className='w-75 fs-4' style={{backgroundColor:'#974FD0'}} variant="secondary">Go  to my tasks</Button>{' '}</Link>
        </div>


        </div>
       
        <div className='col-lg-5 pt-3 align-items-end justify-content-end'>
            <img className='hero-pics' src={Group} alt="" />
        </div>

    </div>
  )
}

export default Hero