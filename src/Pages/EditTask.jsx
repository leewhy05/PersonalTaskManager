import React, { useState, useEffect } from "react";
import "../style/newTask.css";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from "react-router-dom";
import Arrow from "../assets/eva_arrow-ios-back-fill.svg";
import axios from "axios";

const EditTask = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const { userId} = useParams();
  const navigate = useNavigate()

 

  let getData = async () => {
    try {
      let dataGotten = await axios.get(
        `https://taskmanager-dfcj.onrender.com/api/task/${userId}`
      );
      console.log(dataGotten);
      console.log(dataGotten.data.user);
      setTaskTitle(dataGotten.data.user.taskTitle);
      setDescription(dataGotten.data.user.description);
      setTag(dataGotten.data.user.tag);
    } catch (error) {
      console.log(error);
    } finally {
      //   setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  async function handleUpdate(userId) {
    try {
        await axios.patch(`https://taskmanager-dfcj.onrender.com/api/task/${userId}`, {
          taskTitle,
          description,
          tag
       })
      navigate('/AllTask')
       

    } catch (error) {
      console.log(error);
      alert(error.response.data.msg.message)
    }
      
  }
  return (
    <div className="container">
      <div className="mt-4">
        <Link
          to={"/AllTask"}
          className="text-decoration-none text-dark fs-1 fw-bold"
        >
          <img src={Arrow} alt={Arrow} />
          <span className="">Edit Task</span>
        </Link>
      </div>

      <div className="fieldset-container m-5 h-25">
        <h5 className="fieldset-title fs-4"> Task Title</h5>
        <input
          type="text"
          className="w-100"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </div>
      <div className="fieldset-containers m-5 ">
        <h5 className="fieldset-title fs-4"> Description</h5>
        <input
          type="text"
          className="w-100"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="fieldset-container m-5 ">
        <h5 className="fieldset-title fs-4"> Tags</h5>
        <Form.Select
          aria-label="Default select example"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="bord"
        >
          <option className="">-- --</option>
          <option value="urgent">urgent</option>
          <option value="important">important</option>
        </Form.Select>
      </div>
      <div>
        <button
          className="btn btn- text-light fs-4 fw-bold btn-lg w-100"
          style={{ backgroundColor: "#974FD0" }}
          onClick={() =>{handleUpdate(userId)}}
        >
          Done
        </button>
      </div>
      <Link onClick={scrollToTop}>
        <p className="text-center fs-4 mt-5" style={{ color: "#974FD0" }}>
          Back to Top
        </p>
      </Link>
    </div>
  );
};

export default EditTask;
