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
    <h1>Getting Started</h1>
    
    <div className="container my-5 py-2">
        <div className="row">
            <div className="col columns d-flex flex-column">
                <h4 className="headings">Symptoms</h4>
                <h3 className="headings">Symptom Checker</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="col">
                <img src="https://document-export.canva.com/DGDNo/DAE9YgDGDNo/36/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220408%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220408T181150Z&X-Amz-Expires=64896&X-Amz-Signature=00084e62ce94e6b82b0f0b34058c40d2f2d038b55c31ac41a4fd8bd9d311c669&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2009%20Apr%202022%2012%3A13%3A26%20GMT"></img>
            </div>
        </div>
    </div>
    <div className="container py-2">
        <h3 className="bannertitle">Talking about your health means sharing information about how you feel physically, emotionally, and mentally.</h3> 
        <div className="container px-5">
        <p className="py-2 px-4">Knowing how to describe your symptoms and bring up other concerns will help you become a partner in your health care.A symptom is evidence of a disease or disorder in the body. Examples of symptoms include pain, fever, a lump or bump, unexplained weight loss or gain, or having a hard time sleeping.
        Be clear and concise when describing your symptoms.</p>
        </div>
    </div>
    <div className="container d-flex mt-2 pt-2 flex-column justify-content-center align-items-center">
        <div class="card text-white bg-dark mb-3 step">
             <div class="card-header">Choose</div>
                <div class="card-body">
                    <button type="button" class="btn btn-primary m-2">Adult</button>
                    <button type="button" class="btn btn-primary m-2">Child</button>
                </div>
            </div>
          
           
                {/* <div class="row">
                    <div className="col-4"></div>
                    <div class="col-4 columns">
                        Adult Symptoms
                    <ul>
                        <li><button type="button" class="btn btn-primary my-1">Primary</button></li>
                        <li><button type="button" class="btn btn-primary my-1">Primary</button></li>
                        <li><button type="button" class="btn btn-primary my-1">Primary</button></li>
                        <li><button type="button" class="btn btn-primary my-1">Primary</button></li>
                    </ul>
                    </div>
                    <div class="col-4 columns">Child Symptoms
                    <ul>
                    <li><button type="button" class="btn btn-primary my-1">Primary</button></li>
                    <li><button type="button" class="btn btn-primary my-1">Primary</button></li>
                    <li><button type="button" class="btn btn-primary my-1">Primary</button></li>
                    <li><button type="button" class="btn btn-primary my-1">Primary</button></li>
                    </ul>
                    </div>
                   
                </div> */}

        </div>
    </>
  );
};

export default Step1;
