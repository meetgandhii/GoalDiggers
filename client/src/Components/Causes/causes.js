import React from "react";
import { Card, Row ,Col} from "react-bootstrap";
import { Grid, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import "./causes.css";

const Causes = () => {
  return (
    <div className="container sym">
     <Typography>These diseases and conditions match at least one of the factors you selected. Those with the most matches are listed first.</Typography>
    <div className="container cause">
    <div>
      
    <Button component={Link} to="/" type="button">
    Gastritis
</Button>
</div>
<div>
<Button component={Link} to="/" type="button">
Peptic ulcer
</Button>
</div>
{/* <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Accompanied By</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Symptom Name"
        name="radio-buttons-group"
      >
        <div className="rad">
        <Row>
         <Col sm>
        <FormControlLabel  className="radio" value="1" control={<Radio />} label="Gastritis" />
        </Col> 
        <Col sm>
        <FormControlLabel  className="radio" value="2" control={<Radio />} label="Peptic ulcer" />
        </Col>
        </Row>  
       
        </div>
      </RadioGroup>
    </FormControl> */}

    </div>

</div>
  );
};

export default Causes;
