import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
// import Link from 'link-react';
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        {/* <h4>
          My <span className="green">services</span>
        </h4> */}
        <h1>My <span className="green">Projects</span></h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            // href='https://weather-app-4e0p.onrender.com/'
            // Icon={MdDesignServices}
            // image={'/weatherApp.png'}
            title={"Weather App"}
            disc={"A simple weather app to get the current weather for any city in the world. The user's query is sent to the Open Weather API, and the response is processed to display relevant information. Try it out!"}
            // link={'https://weather-app-4e0p.onrender.com/'}
          />
        </Slide>
        <Slide direction="up">
          <Card
            // Icon={FiCodesandbox}
            title={"Random Dog App"}
            disc={`Having a bad day? Or are you just plain bored out of your mind? Not to worry, Random Dog App is here to occupy yourself.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"MCU Heroes App"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
