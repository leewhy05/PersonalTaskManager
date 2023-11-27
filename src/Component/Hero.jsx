import React from "react";
import Group from "../assets/Component 1.svg";
import "../style/Hero.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <main className="container pt-5">
      <div className="row justify-content-between align-items-center gap-4">
        <div className="col-lg-6 pt-5">
          <h2>
            Improve Productivity By Managing{" "}
            <span className="" style={{ color: "#974FD0" }}>
              Your User
            </span>
          </h2>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur. Ut nisl nisl cursus massa
            sed. Turpis ac aliquet lacinia justo turpis amet at arcu. Diam
            vulputate suspendisse aliquam enim sagittis cursiodio ultrices.
            Condimentum lacus nunc rhoncus massa. Tortorstiu ultricies neque
            aliquam sit non. Diam vehicula dignissimepei pellentesque eros
            vitae. Viverra in vitae nunc lorem eget lciou imperdiet tortor. Ac
            mauris vel non amet eget egestas inoriou pellentesque commodo amet.
            Facilisi sed ut nisi pellentesque diam egestas et turpis donor amet.
          </p>
          <div className="d-flex gap-3">
            <button
              className="btn btn- btn-lg"
              style={{ backgroundColor: "#974FD0" }}
            >
              <Link to={"/NewTask"} className="text-decoration-none text-light">
                {" "}
                + NEW TASK
              </Link>
            </button>
            <button
              className="btn btn- text-light btn-lg"
              style={{ backgroundColor: "#974FD0" }}
            >
              <Link to={"/AllTask"} className="text-decoration-none text-light">
                {" "}
                ALL TASK
              </Link>
            </button>
          </div>
        </div>
        <div className="col-lg-4">
          <img
            src={Group}
            alt={Group}
            className="img-fluid img-thumbnail scale"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
