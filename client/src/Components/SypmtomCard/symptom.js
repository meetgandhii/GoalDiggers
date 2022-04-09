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


import "./symptom.css";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Symptom = () => {
  return (
    <div className="container sym">

<FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Choose a Symptom</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Symptom Name"
        name="radio-buttons-group"
      >
        <div className="rad">
        <Row>
         <Col sm>
        <FormControlLabel  className="radio" value="1" control={<Radio />} label="Abdominal pain in adults" />
        </Col> 
        <Col sm>
        <FormControlLabel  className="radio" value="2" control={<Radio />} label="Nasal congestion in adults" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="3" control={<Radio />} label="Sore throat in adults" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="4" control={<Radio />} label="Blood in stool in adults" />
        </Col>
        </Row>  
        <Row>
        <Col sm>
        <FormControlLabel  className="radio" value="5" control={<Radio />} label="Chest pain in adults" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="6" control={<Radio />} label="Cough in adults" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="7" control={<Radio />} label="Diarrhea in adults" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="8" control={<Radio />} label="Difficulty swallowing in adults" />
        </Col>
        </Row>
        <Row>
        <Col sm>
        <FormControlLabel  className="radio" value="9" control={<Radio />} label="Eye discomfort in adults" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="10" control={<Radio />} label="Foot pain in adults
" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="11" control={<Radio />} label="Heart palpitations in adults" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="12" control={<Radio />} label="Low back pain in adults" />
        </Col>
        </Row>
        </div>
      </RadioGroup>
    </FormControl>



    
</div>
  );
};

export default Symptom;
