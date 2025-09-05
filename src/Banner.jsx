import './App.css';
import {useState} from 'react';
const Banner=()=>
{
    const [ban,setBan]=useState(false);
    return(
        <div className="banner">
            {ban?<img src="logo_gif.jpeg"/>:<img src="logo1_gif.jpeg"/>}

            </div>
            )
        }
    export default Banner;