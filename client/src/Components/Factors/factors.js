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
import { useStore } from "../../zusstand/useStore.js";
import { useCallback, useState, useEffect } from "react";

import "./factors.css"

const childFactors = [
  "Children_Nausea_Or_Vomit_Full",
  "Children_Sore_Troath_Full",
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ChildFactors = () => {
  const sym = useStore((state) => state.symptom);
  useEffect(() => {
    // console.log(0);
    console.log(sym);
  }, [sym]);

  const factor = useStore((state) => state.factor);

  const handleChange = (value) => {
    // setSymptom(value);
    useStore.setState({factor: value})
 
  };

  return (
    <div className="container sym">
     <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Nasal Congestion is
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Symptom Name"
          name="radio-buttons-group"
        >
          <div className="rad">
            <Row className="factor">
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="1"
                  control={<Radio />}
                  label="New or recent"
                  onClick={() => handleChange("New or recent")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="2"
                  control={<Radio />}
                  label="Ongoing or persistent"
                  onClick={() => handleChange("Ongoing or persistent")}
                />
              </Col>   
            </Row>
          </div>
        </RadioGroup>
      </FormControl>
      </div>
      <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Nasal Discharge is
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Nasal Discharge"
          name="radio-buttons-group"
        >
          <div className="rad">
            <Row className="factor">
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="1"
                  control={<Radio />}
                  label="Clear or watery"
                  onClick={() => handleChange("Clear or watery")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="2"
                  control={<Radio />}
                  label="Yellow or greenish"
                  onClick={() => handleChange("Yellow or greenish")}
                />
              </Col>   
            </Row>
          </div>
        </RadioGroup>
      </FormControl>
      </div>

      <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Accompanieed By
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Nasal"
          name="radio-buttons-group"
        >
          <div className="rad">
            <Row className="factor">
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="1"
                  control={<Radio />}
                  label="Bad breath"
                  onClick={() => handleChange("Bad breath")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="2"
                  control={<Radio />}
                  label="Cough"
                  onClick={() => handleChange("Cough")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="3"
                  control={<Radio />}
                  label="Sore throat"
                  onClick={() => handleChange("Sore throat")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="3"
                  control={<Radio />}
                  label="Watery eyes"
                  onClick={() => handleChange("Watery eyes")}
                />
              </Col>   
            </Row>
          </div>
        </RadioGroup>
      </FormControl>
      </div>

    </div>
  );
};

export default ChildFactors;
