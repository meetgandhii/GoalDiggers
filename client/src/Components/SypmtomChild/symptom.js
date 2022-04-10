import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useCallback, useState, useEffect } from "react";
import { useStore } from "../../zusstand/useStore.js";
import Axios from "axios";

import "./symptom.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// var symptomName;

// const changeValue = (a)=>{
//    symptomName = a;
// }

const SymptomChild = () => {
  // const [symptom, setSymptom] = useState("");
  const symptom = useStore((state) => state.symptom);

  const handleChange = (value) => {
    // setSymptom(value);
    useStore.setState({symptom: value})
    

    //  changeValue(symptom);
  };

  // useEffect(() => {
  //   Axios({
  //     method: "POST",
  //     data: {
  //       symptom: symptom,
  //     },
  //     withCredentials: true,
  //     url: "http://localhost:3001/",
  //   })
  //     .then((data) => {
  //       if (data.data == "Successfully Authenticated") {
  //         navigate("/home");
  //         console.log(data);
  //       } else {
  //         setError("Incorrect username or password");
  //         setTimeout(() => {
  //           setError("");
  //         }, 5000);
  //       }
  //     })
  //     .catch((error) => {
  //       setError("Incorrect username or password");
  //       setTimeout(() => {
  //         setError("");
  //       }, 5000);
  //     });
  // }, []);

  return (
    <div className="container sym">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Choose a Symptom
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Symptom Name"
          name="radio-buttons-group"
        >
          <div className="rad">
            <Row>
              <Col sm>
                {/* works     */}
                <FormControlLabel
                  className="radio"
                  value="1"
                  control={<Radio />}
                  label="Nausea or vomiting in children"
                  onClick={() => handleChange("Nausea or vomiting in children")}
                />
              </Col>
              <Col sm>
                {/* works     */}
                <FormControlLabel
                  className="radio"
                  value="2"
                  control={<Radio />}
                  label="Sore throat in children"
                  onClick={() => handleChange("Sore throat in children")}
                />
              </Col>
              <Col sm>
                {/* works     */}
                <FormControlLabel
                  className="radio"
                  value="3"
                  control={<Radio />}
                  label="Abdominal pain in children"
                  onClick={() => handleChange("Abdominal pain in children")}
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="4"
                  control={<Radio />}
                  label="Cough in children"
                  onClick={() => handleChange("Cough in children")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="5"
                  control={<Radio />}
                  label="Ear problems in children"
                  onClick={() => handleChange("Ear problems in children")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="6"
                  control={<Radio />}
                  label="Headaches in children"
                  onClick={() => handleChange("Headaches in children")}
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="7"
                  control={<Radio />}
                  label="Joint pain or muscle pain in children"
                  onClick={() =>
                    handleChange("Joint pain or muscle pain in children")
                  }
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="8"
                  control={<Radio />}
                  label="Nasal congestion in children"
                  onClick={() => handleChange("Nasal congestion in children")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="9"
                  control={<Radio />}
                  label="Skin rashes in children"
                  onClick={() => handleChange("Skin rashes in children")}
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="10"
                  control={<Radio />}
                  label="Wheezing in children"
                  onClick={() => handleChange("Wheezing in children")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="11"
                  control={<Radio />}
                  label="Urinary problems in children"
                  onClick={() => handleChange("Urinary problems in children")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="12"
                  control={<Radio />}
                  label="Fever in children"
                  onClick={() => handleChange("Fever in children")}
                />
              </Col>
            </Row>
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

// export var symptomName;
export default SymptomChild;
