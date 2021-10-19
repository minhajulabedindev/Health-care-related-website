import React, { useEffect, useState } from "react";
import Servece from "./Servece";

const Services = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("./service.info.json.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div>
      <div className="container">
        <hr />
        <div className="row">
          {info.map((infoDoc) => (
            <Servece info={infoDoc}></Servece>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
