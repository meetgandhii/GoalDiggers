import React from "react";
import { Card, Row ,Col} from "react-bootstrap";
import { Grid, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

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

    </div>

</div>
  );
};

export default Causes;
