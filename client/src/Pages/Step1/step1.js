// import { Grid,Card } from "@mui/material";
import React from "react";
import ProductCard from "../../Components/Card/card";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./step1.css";

import adult from './adult.png'
import child from './child.png'
import sample from "./home.gif"


const Step1 = () => {
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Zilla+Slab:wght@300&display=swap');
            </style>
            <div className="step1" >
                <div className="container">
                    <div className="row">
                        <div id="adult">
                            <h3 id="head">Select Whether you are a Child or an Adult</h3>
                            <a href="/step2_adult"><img className="choice hov" src={adult}></img></a>
                            <a href="/step2_child"><img className="choice hov" src={child}></img></a>
                            
                        </div>
                        <div className="col d-flex justify-content-center align-items-center"></div>
                    </div>
                    <div className="pad"></div>
                </div>

                {/* <div className="container d-flex mt-2 pt-2 flex-column justify-content-center align-items-center">
                    <div class="card text-white bg-dark mb-3 step">
                        <div class="card-header">Symptom Checker</div>
                        <div class="card-body">
                            <div>Choose</div>
                            <a><img src={adult}></img></a>
                            <button type="button" class="btn btn-primary m-2">
                                
                            </button>
                            <button type="button" class="btn btn-primary m-2">
                                Child
                            </button>
                        </div>
                    </div>

                </div> */}
            </div>

        </>
    );
};

export default Step1;
