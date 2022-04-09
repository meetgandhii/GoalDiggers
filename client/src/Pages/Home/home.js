import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "../../Components/Card/card";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Grid container paddingLeft="15px" paddingRight="15px" spacing={2}
      >
      <ProductCard/>
      </Grid>
    </>
  );
};

export default Home;
