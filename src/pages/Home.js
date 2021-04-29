import React from "react"
import {  Link } from "react-router-dom"
import './Home.css'


import { Button } from 'react-bootstrap'
//Images
import banner from './images/image3.jpg';

export default function Home() {
    return (
        <div>
        <div  className="banner">
            <div className="bannerimage" style={{ background: `url(${banner})`, backgroundSize: "cover" }}/>
            <div className="bannertext">
                <h1 className="banner-h1">Welcome to my Shop</h1>
                <p className="banner-p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem minus corporis v..
            </p>
                <p>
                    <Button className="banner-button" variant="primary"><Link style={{color:"white"}}to="/shop">Shop now</Link></Button>
                </p>
            </div>
            </div>
            <section className="section">
                <h1>Our Store</h1>
                <h2>You will love it!</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, ratione. Ut ad molestiae sint veritatis, atque repellendus voluptates quis ab facere ipsum nobis temporibus. Aliquam officiis cum voluptate at dolorem?</p>
            </section>
        </div>
        
    );
}