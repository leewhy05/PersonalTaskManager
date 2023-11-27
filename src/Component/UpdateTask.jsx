import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useParams, useNavigate } from "react-router-dom";

const UpdateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const { _id } = useParams();

 

  let getData = async () => {
    try {
      let dataGotten = await axios.get(
        `https://taskmanager-dfcj.onrender.com/api/task/${_id}`
      );
      console.log(dataGotten.data.tasks);
      setTaskTitle(dataGotten.data.tasks.taskTitle);
      setDescription(dataGotten.data.tasks.description);
      setTag(dataGotten.data.tasks.tag);
    } catch (error) {
      console.log(error);
    } finally {
      //   setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button className="bg- border-0" style={{ backgroundColor: "#974FD0" }} onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method="POST">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput" className="fw-bold">
                {" "}
                taskTitle:
              </Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder="type a task"
                value={taskTitle}
                onChange={(e)=>setTaskTitle(e.target.value) }
                className="fw-bold"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput" className="fw-bold">
                {" "}
                Description
              </Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder="type an description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="fw-bold"
              />
            </Form.Group>
            <Form.Group className="mb-3 fw-bold">
              <Form.Label htmlFor="disabledSelect">Tag</Form.Label>
              <Form.Select
                id="disabledSelect"
                onChange={(e) => setTag(e.target.value)}
                value={tag}
              >
                <option>----</option>
                <option value="urgent">urgent</option>
                <option value="important">important</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
           
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateTask;
