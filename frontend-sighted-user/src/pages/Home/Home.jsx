<<<<<<< Updated upstream
import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
=======
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import blinddate1 from "../../imgs/blinddate1.png";
import blinddate2 from "../../imgs/blinddate2.png";
 import "./home.css";


import Carousel from 'react-bootstrap/Carousel';
import Footer from "./footer";

const Home = () => {
  const style1 = {textAlign:'center'};
  const style2 = {fontSize: '4rem'};
  const style3 = {color: '#0dcaf0'};
  const style4 = {fontWeight: 'bold'};
  const style5 = { fontSize: '2rem' };
  
  const myImageStyle = { width: '200px', height: '300px' };
  
  return (
      <div>
      <h style={{ ...style1, ...style2, ...style3, ...style4 }}>Welcome to Blind Date Platform</h>
      
        <hr></hr>
        <Carousel>
          <Carousel.Item interval={500}>
            <img
                style={myImageStyle}
                className="d-block w-100"
                src={blinddate1}
                alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{...style3,...style5, ...style4}} >Ask about Dos and Donts</h3>
              <p style={{...style3,...style5, ...style4}}>Get to know and share tips on what to do or not do in a blind date!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
                style={myImageStyle}
                className="d-block w-100"
                src={blinddate2}
alt=""
            />
            <Carousel.Caption>
              <h3 style={{...style3,...style5, ...style4}}>Love Food?</h3>
              <p style={{...style3,...style5, ...style4}}>Meet fellow Food Enthuasists and exchange knowledge on issues surrounding food.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
                className="d-block w-100"
                style={myImageStyle}
                src={blinddate1}

            />
            <Carousel.Caption>
              <h3 style={{...style3,...style5,...style4}}>At Dressing crossroads?</h3>
              <p style={{...style3,...style5, ...style4}}>
              Find experts in matters surrounding dressing for all your questions
              </p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
      <div class="row">
  <div class="column">
    <h2 style={{...style3,...style5, ...style4}}  >Who Are We?</h2>
    <p> A platform for visually impaired users.
                    The users of this platform can ask questions and post pictures to ask for advice,
                    tips or just to educate themselves on different subjects. The users can ask questions like where to go on a date,
                    what restaurants have an online menu or a menu that is suitable for visually impaired people or
                    even sexually explicit questions, as long as they are to help each other.
                    Users can also report other users, questions or answers when needed,
                    to keep the platform a safe space for the users.</p>
  </div>
  
  <div class="column">
    <h2  style={{...style3,...style5, ...style4}}         >Visually Impaired</h2>
          <p>The platform offers excellent use for persons who have vision loss completely or partially,aimed at providing a space and the tools
            needed to ask any question as well as answer questions.At the moment this functionality isnt fully developed but in future
            the platform will include audio and video notes amongsth other useful functionalities that suit visually impaired persons.</p>
  </div>
  
  <div class="column">
    <h2   style={{...style3,...style5, ...style4}}       >Sighted User</h2>
          <p> Blind Date platform also offers a chance for sighter users to be able to interact by asnwering or posting their questions as well.As need be
            ,sighted users can also help visually impaired users in the platform with granted authority.</p>
  </div>
      </div>
      <hr></hr>
      <br></br>
        <Footer/>
      </div>
>>>>>>> Stashed changes

  return (
    <div>Home</div>
  )
}

export default Home