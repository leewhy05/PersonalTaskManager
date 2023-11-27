import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";


const SingleTask = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    
    const navigate = useNavigate();
  
    let getData = async () => {
      try {
        setIsLoading(true);
  
        let dataGotten = await axios.get(
          `https://taskmanager-dfcj.onrender.com/api/task/${userId}`
        );
        console.log(dataGotten.data.Task);
        setData(dataGotten.data.Task);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
  
   
  
    useEffect(() => {
      getData();
      document.title = `task | ${data.name}`;
    }, []);
    return (
      <>
        <h2 className="container">
          {isLoading && <Spinner animation="border" />}
        </h2>
  
        <main className="container pt-5 mt-5 d-flex justify-content-center align-items-center">
          <div className=" w-100 text-center">
            <h2>TASK TITLE:  {data.name} </h2>
            <h2>EMAIL:  {data.description} </h2>
            <h2>TAG:  {data.tag} </h2>
            <div className="d-flex gap-5 justify-content-center ">
            <button
                className="btn btn-danger "
                onClick={() => handleDelete(data._id)}
              >
                UpdateTask
              </button>
              
              <button
                className="btn btn-danger "
               
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