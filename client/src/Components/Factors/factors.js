import React from "react";
import { Card, Row ,Col} from "react-bootstrap";
import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useStore } from "../../zusstand/useStore.js";
import { useCallback, useState, useEffect } from "react";

import "./factors.css";

const childFactors = ['Children_Nausea_Or_Vomit_Full','Children_Sore_Troath_Full'];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Factors = () => {

  const sym= useStore(state => state.symptom);
  useEffect(() => {
    // console.log(0);
    console.log(sym)
  }, [sym])



  return (
    <div className="container sym">

    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Relieved By</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Symptom Name"
        name="radio-buttons-group"
      >
        <div className="rad">
        <Row>
         <Col sm>
        <FormControlLabel  className="radio" value="1" control={<Radio />} label="Symptom Name" />
        </Col> 
        <Col sm>
        <FormControlLabel  className="radio" value="2" control={<Radio />} label="Symptom Name" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="3" control={<Radio />} label="Symptom Name" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="4" control={<Radio />} label="Symptom Name" />
        </Col>
        </Row>  
       
        </div>
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Accompanied By</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Symptom Name"
        name="radio-buttons-group"
      >
        <div className="rad">
        <Row>
         <Col sm>
        <FormControlLabel  className="radio" value="1" control={<Radio />} label="Symptom Name" />
        </Col> 
        <Col sm>
        <FormControlLabel  className="radio" value="2" control={<Radio />} label="Symptom Name" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="3" control={<Radio />} label="Symptom Name" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="4" control={<Radio />} label="Symptom Name" />
        </Col>
        </Row>  
       
        </div>
      </RadioGroup>
    </FormControl>


<FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Accompanied By</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Symptom Name"
        name="radio-buttons-group"
      >
        <div className="rad">
        <Row>
         <Col sm>
        <FormControlLabel  className="radio" value="1" control={<Radio />} label="Symptom Name" />
        </Col> 
        <Col sm>
        <FormControlLabel  className="radio" value="2" control={<Radio />} label="Symptom Name" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="3" control={<Radio />} label="Symptom Name" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="4" control={<Radio />} label="Symptom Name" />
        </Col>
        </Row>  
       
        </div>
      </RadioGroup>
    </FormControl>

</div>
  );
};

export default Factors;
