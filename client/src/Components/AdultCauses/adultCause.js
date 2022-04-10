import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import "./adultCause.css";

const AdultCause = () => {
  return (
    <div className="container sym">
      <Typography>
        These diseases and conditions match at least one of the factors you
        selected. Those with the most matches are listed first.
      </Typography>
      <div className="container my-2 cause">
        <div>
          <Button  component={Link} to="/medicine" type="button">
          Acute sinusitis
          </Button>
        </div>
        <div>
          <Button  component={Link} to="/medicine" type="button">
          Chronic sinusitis
          </Button>
        </div>
        <div>
          <Button  component={Link} to="/medicine" type="button">
          Commmon Cold
          </Button>
        </div>
    </div>
    </div>
  );
};

export default AdultCause;
