import React from "react";
import { Card } from "react-bootstrap";
import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

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
    <Grid container spacing={4} columns={12}>
  <Grid item xs={6}>
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
</Grid>
</div>
  );
};

export default Symptom;
