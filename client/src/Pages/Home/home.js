import React from "react";
import ProductCard from "../../Components/Card/card";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";
import './home.css';
import logo from './symptoms.png'

const Home = () => {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');
      </style>
      <div className="home">
        <h3 className="headings" id="head2">Symptom Checker</h3>
        <div className="container py-5">
          <div className="row">
            <div className="col columns d-flex flex-column">
              <div className="container d-flex flex-column infobox justify-content-center align-items-center">


                <p className="bodd">
                  <div>Hello User! We, at Goal Diggers, are here to help you in figuring out which medicines you would require for the symptoms you enter on the next page. Our results are developed on an intelligent model based classification and we strive to provide you with the most accurate results possible.</div>
                  <div className="py-2">We possess an extensive database on medicines distributed in this country along with their company names and MRP. We not only identify the disease(s) you might be affected with, but also provide multiple medicines and drugs for the same.</div>

                </p>

              </div>
            </div>
            <div className="col">
              {/* <video width="320" height="240" loop autoPlay>
                <source src={logo} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img id="translogo" src={logo}></img>
            </div>

          </div>
        </div>
        <div className="container py-2">
          <div className="container mb-3 infobox ">
            <div className="container d-flex align-items-center justify-content-center"> <a id="beechme" href="/step1"><button className="btn-grad">Click me to proceed</button></a></div>
            <h3 className="bannertitle ">
              Talking about your health means sharing information about how you
              feel physically, emotionally, and mentally.
            </h3>
            <div className="container px-5">
              <p className="py-2 px-4">
                Knowing how to describe your symptoms and bring up other
                concerns will help you become a partner in your health care.A
                symptom is evidence of a disease or disorder in the body.
                Examples of symptoms include pain, fever, a lump or bump,
                unexplained weight loss or gain, or having a hard time sleeping.
                Be clear and concise when describing your symptoms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
