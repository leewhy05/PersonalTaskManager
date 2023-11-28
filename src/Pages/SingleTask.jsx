import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import UpdateTask from "../Component/UpdateTask";


const SingleTask = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const {userId} = useParams();
    const navigate = useNavigate();
  
    let getData = async () => {
      try {
        setIsLoading(true);
  
        let dataGotten = await axios.get(
          `https://taskmanager-dfcj.onrender.com/api/task/${userId}`
        );
        console.log(dataGotten.data.user);
        setData(dataGotten.data.user);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    
  const handleDelete = async (userId) => {
    try {
      await axios.delete(
        `https://taskmanager-dfcj.onrender.com/api/task/${userId}`
      );
      navigate("/AllTask");
    } catch (error) {
      console.log(error);
    }
  };
   
    useEffect(() => {
      getData();
      document.title = `tasks | ${data.name}`;
    }, []);
    return (
      <>
        <h2 className="container">
          {isLoading && <Spinner animation="border" />}
        </h2>
  
        <main className="container pt-5 mt-5 d-flex justify-content-center align-items-center">
          <div className=" w-100 text-center">
            <h2>TASK TITLE:  {data.taskTitle} </h2> 
             <h2>Description:  {data.description} </h2>
            <h2>TAG:  {data.tag} </h2>
            <div className="d-flex gap-5 justify-content-center ">
           <Link to={`/EditTask/${userId}`}> <button
                className="btn btn text-light "
                style={{ backgroundColor: "#974FD0" }}
              >
               Edit Task
              </button>
              </Link>
              
              <button
                className="btn btn-danger "
                onClick={() => handleDelete(data._id)}
              >
                DeleteTask
              </button>
            </div>
          </div>
        </main>
      </>
    );
  };
  
  export default SingleTask;