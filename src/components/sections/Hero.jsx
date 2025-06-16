import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import { personalInfo, socialLinks } from '../../data/portfolioData';

import developerAnimation from '../../assets/animations/developer-animation.json';

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
  padding: 0 5%;
  gap: 2rem;
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const Greeting = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #F8F8F2; 
  
  span {
    color: #66D9EF; 
  }
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #bdbeba; 
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  a {
    font-size: 2rem;
    color: #F8F8F2;
    transition: color 0.3s ease, transform 0.3s ease;
    &:hover {
      color: #A6E22E; 
      transform: translateY(-3px);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.a`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #AE81FF; 
  color: #F8F8F2;
  border: 2px solid #AE81FF;

  &:hover {
    background-color: transparent;
    color: #AE81FF;
  }
`;

const AnimationContent = styled.div`
  flex: 1;
  max-width: 500px;
`;

const Hero = () => {
  return (
    <HeroWrapper id="hero"> 
      <TextContent>
        <Greeting>
          {personalInfo.greeting} <span>{personalInfo.name}</span> 👋
        </Greeting>
        <IntroText>{personalInfo.intro}</IntroText>
        <SocialLinksContainer>
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              <link.icon />
            </a>
          ))}
        </SocialLinksContainer>
        <ButtonContainer>
          <Button href={socialLinks.find(l => l.name === 'email').url}>CONTACT ME</Button>
          <Button href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">DOWNLOAD MY RESUME</Button>
        </ButtonContainer>
      </TextContent>
      <AnimationContent>
        <Lottie animationData={developerAnimation} loop={true} />
      </AnimationContent>
    </HeroWrapper>
  );
};

export default Hero;