import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Detail from "./Detail";

const Details = () => {
  const { id, name } = useParams({});
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("./serviceInfo.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  console.log(info);

  return (
    <div className="container">
      <h1>Department of our health care Hospital</h1>
      <hr />
      <div className="row">
        {info.map((unitInfo) => (
          <Detail unitInfo={unitInfo}></Detail>
        ))}
      </div>
    </div>
  );
};

export default Details;
