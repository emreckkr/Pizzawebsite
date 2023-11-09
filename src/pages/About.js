import React from 'react';
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className='aboutBottom' > 
        <h1>
        ABOUT US
        </h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
        </div>
    </div>
  )
}

export default About