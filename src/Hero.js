import React from "react";
import './App.css';
const Hero = ({handleLogout}) =>{
    return(
        <section className="hero">
            <nav>
            Welcome
            <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}
export default Hero;