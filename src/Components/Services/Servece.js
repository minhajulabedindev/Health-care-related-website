import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Servece = (props) => {
  const history = useHistory();
  const {
    special,
    name,
    img,
    discription,

    price1,
    price2,
    price3,
    price4,
    price5,
    price6,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    doctor1,
    doctor3,
    doctor2,
    doctor4,
    doctor5,
    doctor6,
  } = props.info;

  const btnHandler = () => {
    history.push("./success");
  };
  return (
    <div className="col-sm-6 col-md-6 col-lg-12  mt-5">
      <div className="p-3 border border rounded-3 ">
        <h3 className="m-4">{name}</h3>
        <hr />
        <div className="">
          <div className="col-sm-6 col-md-5 col-lg-12 ">
            <div className="row">
              <div className="col-sm-6 col-md-5 col-lg-6 ">
                <img
                  className="w-100 text-start p-4 border rounded-3 hov"
                  src={img}
                  alt=""
                />
              </div>
              <div className="col-sm-6 col-md-5 col-lg-6 align ">
                <h6>{discription}</h6>
              </div>
            </div>

            <h6 className=" align ">{discription}</h6>
          </div>

          <div className="col-sm-6 col-md-7 col-lg-12 ">
            <div className="row mt-5 ms-lg-5 me-sm-5">
              <h3>There are our doctor</h3>

              <div className=" col-lg-4  ">
                <div className="p-3 border hov m-3 rounded-3">
                  <img className="w-100 " src={img1} alt="" />
                  <h5>{doctor1}</h5>

                  <strong>{special}</strong>
                  <p>price: $ {price1}</p>
                  <Button
                    onClick={btnHandler}
                    variant="outline-success"
                    className="btn-sm rounded-pill "
                  >
                    Get the service
                  </Button>
                </div>
              </div>
              <div className=" col-lg-4 ">
                <div className="p-3   hov m-3 border rounded-3">
                  <img className="w-100 " src={img2} alt="" />
                  <h5>{doctor2}</h5>
                  <strong>{special}</strong>

                  <p>price: $ {price2}</p>
                  <Button
                    onClick={btnHandler}
                    variant="outline-success"
                    className="btn-sm rounded-pill "
                  >
                    Get the service
                  </Button>
                </div>
              </div>
              <div className=" col-lg-4 ">
                <div className="p-3  hov m-3 border rounded-3 ">
                  <img className="w-100 " src={img3} alt="" />
                  <h5>{doctor3}</h5>
                  <strong>{special}</strong>

                  <p>price: $ {price3}</p>
                  <Button
                    onClick={btnHandler}
                    variant="outline-success"
                    className="btn-sm rounded-pill "
                  >
                    Get the service
                  </Button>
                </div>
              </div>
              <div className="col-lg-4  ">
                <div className="p-3  hov m-3border rounded-3">
                  <img className="w-100 " src={img4} alt="" />
                  <h5>{doctor4}</h5>
                  <strong>{special}</strong>

                  <p>price: $ {price4}</p>
                  <Button
                    onClick={btnHandler}
                    variant="outline-success"
                    className="btn-sm rounded-pill "
                  >
                    Get the service
                  </Button>
                </div>
              </div>
              <div className=" col-lg-4">
                <div className="p-3  hov m-3  border rounded-3">
                  <img className="w-100 " src={img5} alt="" />
                  <h5>{doctor5}</h5>
                  <strong>{special}</strong>
                  <p>price: $ {price5}</p>

                  <Button
                    onClick={btnHandler}
                    variant="outline-success"
                    className="btn-sm rounded-pill "
                  >
                    Get the service
                  </Button>
                </div>
              </div>
              <div className=" col-lg-4 ">
                <div className="p-3 hov m-3 border rounded-3  ">
                  <img className="w-100 " src={img6} alt="" />
                  <h5>{doctor6}</h5>
                  <strong>{special}</strong>
                  <p>price: $ {price6}</p>
                  <Button
                    onClick={btnHandler}
                    variant="outline-success"
                    className="btn-sm rounded-pill "
                  >
                    Get the service
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

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

export default Servece;
