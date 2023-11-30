import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  background-color: #5271ff; 
  padding: 50px; /* Adjusted padding for better responsiveness */
  margin: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
`;

const ButtonColumn = styled.div`
  flex: 1;
  text-align: center;
  margin: 10px;
`;

const Button = styled.button`
  background-color: #ffffff;
  color: black;
  border-radius: 37px;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  position: relative;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 2px solid transparent;
  box-sizing: border-box;
  transform: translateY(0);
  cursor: pointer;
  font-weight: 400;
  line-height: 1.7;
  letter-spacing: -0.01rem;
  border: none;
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  }
`;

const VerticalLine = styled.div`
  background-color: #ffffff;
  width: 2px;
  height: 200px; 
`;

const ButtonSection = () => {
  return (
    <ButtonContainer>
      <ButtonColumn>
        <h1 className='text-white text-3xl mb-4'>Hire software developers today</h1>
        <Button>Contact with us</Button>
      </ButtonColumn>
      <VerticalLine />
      <ButtonColumn>
        <h1 className='text-white text-3xl mb-4'>Join the developer network</h1>
        <Button>Join AugmntX</Button>
      </ButtonColumn>
    </ButtonContainer>
  );
};

export default ButtonSection;
