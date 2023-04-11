import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Homepage.css";
const Homepage = () => {
  const [file, setFile] = useState(null);
  let navigate = useNavigate();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(file);
    const formData = new FormData();
    formData.append("image", file);

    const url = `${process.env.REACT_APP_AI_URL}/predict-disease`;

    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const diagnosis = response.data;
        console.log(diagnosis.diseaseDescription);
        navigate("/diagnosis", { state: diagnosis });
      })
      .catch((error) => {
        console.error(error);
      });
    // handle file upload logic here
  };

  return (
    <div className="container">
      <div className="row">
        {/* <div className="col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-sm-12 col-xs-12"> */}
        <div className="col-12 mt-4">
          <div className="card">
            <div className="card-body">
              <h3>Welcome !!</h3>
              <hr />
              <div className="d-flex flex-column flex-md-row justify-content-between gap-4">
                <div className="text-center p-4 left-div flex-grow-1">
                  <h5>Importance of plant disease detection</h5>
                  <p>
                    <br />
                    The detection of plant disease is of vital importance in
                    practical agricultural production. It scrutinizes the
                    plant's growth and health condition and guarantees the
                    regular operation and harvest of the agricultural planting
                    to proceed successfully. <br />
                    <br />
                    Upload your image in the box beside to get a AI diagnosis
                    report!
                  </p>
                </div>
                <div className="text-center p-4 middle-div flex-grow-1">
                  <h5 className="mb-4">Upload Image</h5>
                  <form
                    onSubmit={handleSubmit}
                    className="d-flex align-items-center flex-column"
                  >
                    <div className="form-group text-center">
                      <input
                        type="file"
                        className="form-control-file"
                        onChange={handleFileChange}
                      />
                      <button
                        type="submit"
                        className="btn btn-primary text-center submit-btn"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <center>
            <button
              className="btn btn-primary mt-5 mb-5"
              onClick={() => navigate("/chatbot")}
            >
              Contact our expert
            </button>
            &nbsp;
            <button
              className="btn btn-primary mt-5 mb-5"
              onClick={() => navigate("/weather")}
            >
              Weather information
            </button>
            &nbsp;
            {/* <button
              className="btn btn-primary mt-5 mb-5"
              onClick={() => navigate("/diagnosis")}
            >
              Show result
            </button> */}
          </center>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Homepage;
