import React from "react";
import "../styles/Desktop24.css";
import Profile from "../images/image-9-Ybf.png";
import QRcode from "../images/image-9.png";
import Cross from "../images/group.png";
import Download from "../images/icons8-download-30-1.png";
import Share from "../images/group-zyb.png";
import Printer from "../images/icons8-print-24-1.png";

import QRCode from 'react-qr-code'

import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";


const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #ecf0f3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  width: fit-content;
  margin-top: 20px;
  max-width: 1000px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #3f51b5;
  font-size: 2em;
  margin-block-start: 0.5em; /* Adjusted spacing */
  margin-block-end: 0.5em; /* Adjusted spacing */
`;

const Subtitle = styled.h2`
  color: #777;
  font-size: 1.5em;
  margin-block-start: 0.3em; /* Adjusted spacing */
  margin-block-end: 0.3em; /* Adjusted spacing */
`;

const SelectInput = styled.select`
  margin: 5px 0; /* Adjusted spacing */
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
`;

const TextInput = styled.input`
  margin: 5px 0; /* Adjusted spacing */
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
`;

const Button = styled.button`
  background-color: #3f51b5;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2f3e9e;
  }
`;

const QRCodeImage = styled.img`
  width: 50%;
  margin-top: 10px; /* Adjusted spacing */
  margin-bottom: 10px; /* Adjusted spacing */
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 5px; /* Adjusted spacing */
`;

const Final = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = location.state.user;
  const formObj = location.state.qrcode;
  let qrValue = formObj.medicine1 + " " + formObj.quantity1 + " " + formObj.medicine2 + " " + formObj.quantity2 + " " + formObj.medicine3 + " " + formObj.quantity3 + " " + formObj.medicine4 + " " + formObj.quantity4

  const onButtonClick = () => {
    // navigate('/first')
  }
  // console.log(location.state)

  return (
    <Container>
      <Card>
        <ProfileImage src={Profile} />
        <Title>Name : {user.name}</Title>
        <Title>Age : {user.age}</Title>
        <Subtitle>{formObj.medicine1} {formObj.quantity1}</Subtitle>
        <Subtitle>{formObj.medicine2} {formObj.quantity2}</Subtitle>
        <Subtitle>{formObj.medicine3} {formObj.quantity3}</Subtitle>
        <Subtitle>{formObj.medicine4} {formObj.quantity4}</Subtitle>
        <QRCode value={qrValue} alt="QR Code" />
        <Button onClick={onButtonClick}>Done</Button>
      </Card>
    </Container>
  );
};

export default Final;
