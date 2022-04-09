// import { Grid,Card } from "@mui/material";
import React from "react";
import ProductCard from "../../Components/Card/card";
import { Button,Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './step1.css'
const Step1 = () => {
  return (
    <>
    <div>Step1</div>
    <div className="container">
    <h4 className="headings">Symptoms</h4>
    <h3 className="headings">Symptom Checker</h3>
    </div>
    <div className="container d-flex mt-5 pt-5 justify-content-center">
        
        <div className="card step" >
        {/* <img src="..." class="card-img-top" alt="..."> */}
            {/* <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div> */}
            <div class="container">
                <div class="row">
                    <div class="col">Adult Symptoms
                    <ul>
                        <li>ahjsbdhj</li>
                        <li>ahjsbdhj</li>
                        <li>ahjsbdhj</li>
                        <li>ahjsbdhj</li>
                        <li>ahjsbdhj</li>
                    </ul>
                    </div>
                    <div class="col">Child Symptoms
                    <ul>
                        <li>ahjsbdhj</li>
                        <li>ahjsbdhj</li>
                        <li>ahjsbdhj</li>
                        <li>ahjsbdhj</li>
                        <li>ahjsbdhj</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Step1;
