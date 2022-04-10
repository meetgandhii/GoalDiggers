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

import "./factorsChild.css"

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
{/* Blue-colored skin or lips
Chills or sweating
Cough
Difficult or painful swallowing
Difficult or raspy breathing
Enlarged, tender glands (lymph nodes) in neck
Fever
Headache or facial pain
Heartburn
Hoarse or muffled voice
Mild body aches
Red, swollen tonsils
Runny or stuffy nose
Skin rash
Sneezing
Watery eyes
White patches or pus on tonsils
Yellow or greenish phlegm or discharge from nose */}
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Accompanied By
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
                  label="Blue-colored skin or lips"
                  onClick={() => handleChange("Blue-colored skin or lips")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="2"
                  control={<Radio />}
                  label="Chills or sweating"
                  onClick={() => handleChange("Chills or sweating")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="3"
                  control={<Radio />}
                  label="Cough"
                  onClick={() => handleChange("Cough")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="4"
                  control={<Radio />}
                  label="Difficult or painful swallowing"
                  onClick={() => handleChange("Difficult or painful swallowing")}
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="5"
                  control={<Radio />}
                  label="Enlarged, tender glands (lymph nodes) in neck"
                  onClick={() => handleChange("Enlarged, tender glands (lymph nodes) in neck")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="6"
                  control={<Radio />}
                  label="Fever"
                  onClick={() => handleChange("Fever")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="7"
                  control={<Radio />}
                  label="Headache or facial pain"
                  onClick={() => handleChange("Headache or facial pain")}
                />
              </Col>
              <Col sm>
                <FormControlLabel
                  className="radio"
                  value="8"
                  control={<Radio />}
                  label="Heartburn"
                  onClick={() => handleChange("Heartburn")}
                />
              </Col>
            </Row>
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ChildFactors;
