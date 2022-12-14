import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dressing from "../../imgs/dressing.png";
import food from "../imgs/../food.png";
import restaurants from "../../imgs/restaurants.png";


import Carousel from 'react-bootstrap/Carousel';
import Footer from "./footer";

const Home = () => {
  const style1 = {textAlign:'center'};
  const style2 = {fontSize: '4rem'};
  const style3 = {color: 'blue'};
  const style4 = {fontWeight: 'bold'};
  const style5 = {fontSize: '2rem'};
  const myImageStyle = { width: '800px', height: '400px' };
  return (
      <div>
        <h style={{...style1, ...style2, ...style3, ...style4}}>Welcome to Blind Date Platform</h>
        <hr></hr>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
                style={myImageStyle}
                className="d-block w-100"
                src={restaurants}
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
                src={food}
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
                src={dressing}

            />
            <Carousel.Caption>
              <h3 style={{...style3,...style5,...style4}}>At Dressing crossroads?</h3>
              <p style={{...style3,...style5, ...style4}}>
              Find experts in matters surrounding dressing for all your questions
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Footer/>
      </div>

  )

};

export default Home;
