import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import Header from "../Header/Header";
import ServiceInfo from "../ServiceInfo/ServiceInfo";

const Home = () => {
  const history = useHistory();
  const btnHandler = () => {
    history.push(`/about`);
  };
  return (
    <div>
      {" "}
      <div className="container my-5">
        <Header></Header>
      </div>
      <div className="row container  m-lg-5 p-lg-5">
        <div className="col-sm-12 col-md-6 col-lg-6 mt-lg-5 pt-lg-5">
          <h2>Health Service Hospital</h2>
          <p>
            Hospitals are health care institutions providing patient treatment
            with specialized staff and equipment. A general hospital is best
            type since it is provided with emergency department. Specialized
            hospitals include trauma centers, rehabilitation hospitals children
            hospitals etc. hospitals are provided with outpatient department and{" "}
            <br /> some chronic treatment units.
          </p>
          <Button
            onClick={btnHandler}
            variant="outline-primary"
            className=" btn  rounded-pill btn-sm"
          >
            More info
          </Button>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img
            className="w-100"
            src="https://image.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <ServiceInfo></ServiceInfo>
      </div>{" "}
      <img
        src="https://image.freepik.com/free-vector/hospital-room-with-ultrasound-scanner-illustration_1262-16534.jpg"
        alt=""
      />
    </div>
  );
};

export default Home;
