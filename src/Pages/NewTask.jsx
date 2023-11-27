import React, { useState } from 'react'
import '../style/newTask.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Arrow from '../assets/eva_arrow-ios-back-fill.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const NewTask = () => {
  const scrollToTop =()=>{
    window.scroll({top:0, behavior:'smooth'})
  };

  const [taskTitle, setTaskTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState ('');
    const navigate = useNavigate();
    
   async function handleSubmit(e) {
    e.preventDefault()
      try {
         const data = await axios.post('https://taskmanager-dfcj.onrender.com/api/task', {
            taskTitle,
            description,
            tag
          })
         console.log(data);
         if(data.status === 201){
            alert(data.data.msg)
            navigate('/AllTask')
            console.log(data);
         }

      } catch (error) {
        console.log(error);
        alert(error.response.data.msg.message)
      }
        
    }
  return (
<div className='container'>
<div className='mt-4'>
<Link to={'/'} className='text-decoration-none text-dark fs-1 fw-bold'><img src={Arrow} alt={Arrow} /><span className=''>New Task</span></Link>
</div>


<div className="fieldset-container m-5 h-25">
      <h5 className="fieldset-title fs-4"> Task Title</h5>
      <input type="text" className='w-100'value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} placeholder='E.g Project Defense, Assignment ...' />
      
    </div>
<div className="fieldset-containers m-5 ">
      <h5 className="fieldset-title fs-4"> Description</h5>
      <input type="text" className='w-100' value={description}
       onChange={(e)=>setDescription(e.target.value)}  placeholder='Briefly describe your task...' />
      
    </div>
<div className="fieldset-container m-5 ">
      <h5 className="fieldset-title fs-4"> Tags</h5>
      <Form.Select aria-label="Default select example" value={tag}
       onChange={(e)=>setTag(e.target.value)} className='bord'>
      <option>----</option>
      <option value="urgent">urgent</option>
      <option value="important">important</option>
    </Form.Select>
      
    </div>
    <div>
      <button className="btn btn- text-light fs-4 fw-bold btn-lg w-100" type="submit" onClick={handleSubmit} style={{backgroundColor:'#974FD0'}}>Done</button>
    </div>
    <Link to={'/NewTask'} onClick={scrollToTop} ><p className='text-center fs-4 mt-5' style={{color:'#974FD0'}}>Back to Top</p></Link>
</div>

  )
}

export default NewTask