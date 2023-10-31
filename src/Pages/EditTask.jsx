import React from 'react'
import '../style/newTask.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Arrow from '../assets/eva_arrow-ios-back-fill.svg'

const EditTask = () => {
    const scrollToTop =()=>{
        window.scroll({top:0, behavior:'smooth'})
      };
      return (
    <div className='container'>
    <div className='mt-4'>
    <Link to={'/AllTask'} className='text-decoration-none text-dark fs-1 fw-bold'><img src={Arrow} alt={Arrow} /><span className=''>Edit Task</span></Link>
    </div>
    
    
    <div className="fieldset-container m-5 h-25">
          <h5 className="fieldset-title fs-4"> Task Title</h5>
          <h4>Project Completion</h4>
          
        </div>
    <div className="fieldset-containers m-5 ">
          <h5 className="fieldset-title fs-4"> Description</h5>
          <p className='fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sit in aliquam pretium. Diam consectetur at tincidunt sed non tempus faucibus posuere eu. Nisi, luctus turpis pharetra quis nunc nulla. At lectus faucibus mattis ante eleifend ac arcu. Nibh morbi adipiscing leo tempus non dolor viverra cras. Sapien in nulla cum fermentum auctor lectus orci. Felis tincidunt lacus, fermentum laoreet sit sit. Lacus, orci pretium, etiam justo lacus. Amet, ultrices eget auctor euismod vitae diam.</p>
          
        </div>
    <div className="fieldset-container m-5 ">
          <h5 className="fieldset-title fs-4"> Tags</h5>
          <Form.Select aria-label="Default select example" className='bord'>
          <option className=''><span>URGENT</span>  <span>IMPORTANT</span></option>
          <option value="1">urgent</option>
          <option value="2">important</option>
        </Form.Select>
          
        </div>
        <div>
          <button className="btn btn- text-light fs-4 fw-bold btn-lg w-100" style={{backgroundColor:'#974FD0'}}>Done</button>
        </div>
        <Link onClick={scrollToTop} ><p className='text-center fs-4 mt-5' style={{color:'#974FD0'}}>Back to Top</p></Link>
    </div>
    
      )
    }
    
export default EditTask