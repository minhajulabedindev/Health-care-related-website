import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import img from "./Work_6.jpg";

const Sucess = () => {
  const history = useHistory();
  const handleBtn = () => {
    history.push("/services");
  };
  return (
    <div className="p-3">
      <h1>You got the service </h1>
      <h5>Now you come our Hospital</h5>
      <img className="w-50 mx-auto" src={img} alt="" />
      <br />
      <Button onClick={handleBtn} className="btn-sm rounded-pill">
        Go To Service
      </Button>
    </div>
  );
};

export default Sucess;
