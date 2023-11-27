import React, { useEffect, useState } from "react";
import "../style/AllStyle.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";
import UpdateTask from "../Component/UpdateTask";

const AllTask = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function getData() {
    try {
      setLoading(true);
      const fetcher = await axios.get(
        "https://taskmanager-dfcj.onrender.com/api/task"
      );
      console.log(fetcher.data.user);
      setData(fetcher.data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const { userId } = useParams();
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://taskmanager-dfcj.onrender.com/api/task/${userId}`
      );
      navigate("/AllUser");
    } catch (error) {}
  };
  useEffect(() => {
    document.title = "All-TASK || page";
    getData();
  }, []);
  return (
    <div className="container lag">
      <div className=" mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <Link className="text-decoration-none text-dark">
            <h1>My Task</h1>
          </Link>
          <Link to={"/NewTask"} className="text-decoration-none text-dark">
            <h3 style={{ color: "#974FD0" }}>+ Add to My Task</h3>
          </Link>
        </div>

        {loading && <Spinner animation="border" />}
        <div className="container pt-5 row justify-content-between align-items-center gap-3">
          {data && data.lenght < 1 ? (
            <h2 className="" style={{ color: "#974FD0" }}>
              No Users yet...create one
            </h2>
          ) : (
            data.map((datum) => {
              const { _id, taskTitle, description, tag } = datum;
              return (
                <div className="card col-lg-5 p-3 shadow-sm" key={_id}>
                  <div className="d-flex justify-content-between align-items-center gap-3 border-bottom border-3">
                    <div className="fw-bold fs-5">
                      <p>{tag}</p>
                    </div>
                    <div className="d-flex justify-content-end align-items-center gap-3 ">
                      <button
                        className="fw-bold fs-5 text-light"
                        style={{ backgroundColor: "#974FD0" }}
                      >
                        <UpdateTask/>
                      </button>
                      <button
                        className="fw-bold fs-5"
                        onClick={() => handleDelete(data._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <Link
                    className="text-decoration-none"
                    to={`/SingleTask${_id}`}
                  >
                    <h2 className="">{taskTitle}</h2>
                    <p>{description}</p>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Link onClick={scrollToTop}>
        <p className="text-center fs-4 mt-5" style={{ color: "#974FD0" }}>
          Back to Top
        </p>
      </Link>
    </div>
  );
};

export default AllTask;
