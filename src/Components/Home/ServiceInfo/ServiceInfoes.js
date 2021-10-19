import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./ServiceInfoes.css";

const ServiceInfoes = (props) => {
  const history = useHistory();
  const { name, img, discription } = props.unitInfo;

  const btnHandler = () => {
    history.push(`/services`);
  };
  return (
    <div className="col-sm-6 col-md-6 col-lg-4  mt-5">
      <div className="p-3 border rounded-3 hov">
        <h3>{name}</h3>
        <div
          className="hover-overlay hover-zoom hover-shadow"
          style={{ maxWidth: "22rem" }}
        >
          <img className="w-100 p-1 rounded-pill" src={img} alt="" />
        </div>

        <h6>{discription}</h6>

        <Button
          onClick={btnHandler}
          variant="outline-primary"
          className=" btn  rounded-pill btn-sm"
        >
          Take the services
        </Button>
      </div>
    </div>
  );
};

export default ServiceInfoes;
