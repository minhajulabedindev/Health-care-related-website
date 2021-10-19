import React, { useEffect, useState } from "react";
import ServiceInfoes from "./ServiceInfoes";

const ServiceInfo = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("./serviceInfo.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div className="container">
      <h3>Department of our health care Hospital</h3>
      <hr />
      <div className="row">
        {info.map((unitInfo) => (
          <ServiceInfoes unitInfo={unitInfo}></ServiceInfoes>
        ))}
      </div>
    </div>
  );
};

export default ServiceInfo;
