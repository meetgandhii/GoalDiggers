import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import medicine from "../../Images/medPlaceholder.png";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from '../../Components/Card/card';

import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './medicinepage.css';

const Medicinepage=()=>{
    return(
        <>
        <div className="medicinepage">
            <div className="container pt-4">
                <div className="row py-3">
                    <div className="col-4">
                        
                    <ProductCard/>

                    </div>
                    <div className="col-4">
                        
                    <ProductCard/>

                    </div>
                    <div className="col-4">
                        
                    <ProductCard/>

                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-4">
                        
                    <ProductCard/>

                    </div>
                    <div className="col-4">
                        
                    <ProductCard/>

                    </div>
                    <div className="col-4">
                        
                    <ProductCard/>

                    </div>
                </div>
            </div>
        </div>
        {/* <script src="medicinepagejs.js">

        </script> */}
        </>
    
    )
}

export default Medicinepage;