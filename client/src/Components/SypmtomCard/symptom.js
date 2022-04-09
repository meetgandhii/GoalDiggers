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
        <Row>
        <Col sm>
        <FormControlLabel  className="radio" value="5" control={<Radio />} label="Symptom Name" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="6" control={<Radio />} label="Symptom Name" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="7" control={<Radio />} label="Symptom Name" />
        </Col>
        <Col sm>
        <FormControlLabel  className="radio" value="8" control={<Radio />} label="Symptom Name" />
        </Col>
        </Row>
        </div>
      </RadioGroup>
    </FormControl>



    {/* <Grid container spacing={4} columns={12}>
  <Grid item xs={6} >
    <Item>Symptom Name</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>Symptom Name</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>Symptom Name</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>Symptom Name</Item>
  </Grid>
</Grid> */}
</div>
  );
};

export default Symptom;
