import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import img from "./3828559.jpg";
const NotFounds = () => {
  const history = useHistory();
  const handleBtn = () => {
    history.push("/home");
  };
  return (
    <div>
      <img className="w-50 mx-auto" src={img} alt="" />
      <br />
      <Button onClick={handleBtn} className="btn-sm rounded-pill">
        Go Home
      </Button>
    </div>
  );
};

export default NotFounds;
