import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function PreSlide() {
  const { height, width } = useWindowDimensions();
  const goToTarget = () => {
    document
      .getElementById("target")
      .scrollIntoView({ block: "end", behavior: "smooth" });
  };

  return (
    <Container>
      <Center>
        <Effect>Warning</Effect>

        <Topic2>I am lazy to make this website responsiveness.</Topic2>

        <br />

        <Topic4>Please join this web in laptop.</Topic4>
        <Topic4 style={{ margin: "-5px" }}>or</Topic4>
        <Topic4>
          at least <b>1185</b> px screen width.
        </Topic4>

        <br />

        <Topic5>
          Your screen width are <b>{width}</b> px.
        </Topic5>
        {width > 1185 ? <Button onClick={goToTarget}>visit</Button> : <div></div>}

        <Contact>
          <A href="https://github.com/soizensun" target="_blank">
            <Icon>
              <AiFillGithub />
            </Icon>
          </A>
          <A
            href="https://www.linkedin.com/in/kritpavinchaiwong-868b641aa/"
            target="_blank"
          >
            <Icon>
              <AiFillLinkedin />
            </Icon>
          </A>
          <A href="https://www.facebook.com/millizen.chaiwong/" target="_blank">
            <Icon>
              <AiFillFacebook />
            </Icon>
          </A>
          <A href="https://www.instagram.com/soizensun/" target="_blank">
            <Icon>
              <AiFillInstagram />
            </Icon>
          </A>
        </Contact>
        <div style={{ fontSize: "25px" }}>
          <Topic3>You can scroll if you're a stubborn boy.</Topic3> 👉
        </div>
      </Center>
    </Container>
  );
}

const Container = Styled.div`
    display: flex;
    min-height: 100vh;
`;

const Center = Styled.div`
    /* background-color: red; */
    margin: auto;
    text-align: center;
    color: white;
`;

const Topic = Styled.div`
    font-size : 80px;
    text-align: left;
    font-weight: bold;
    margin: 0px;
    color: #17202A;
`;

const Effect = Styled.span`
    &{
        font-size : 72px;
        font-weight: bold;
        display: inline;
        position: relative;
        letter-spacing: 3px;
        color: white; 
    }
    &:after {
        content: "Warning";
        position: absolute; 
        left: 6px; 
        top: 5px;
        color: rgb(231, 76, 60, 0.7);   
    }

`;

const Topic3 = Styled.span`
    font-size : 16px;
    color: rgb(255,255,255,0.7);
`;

const Topic2 = Styled.div`
    font-size : 23px;
    color: white;
`;

const Topic4 = Styled.div`
    font-size : 19px;
    color: black;
`;

const Button = Styled.button`
    &{
        margin: 23px 0 0 0;
        padding: 15px 25px;
        font-size: 21px;
        text-align: center;
        outline: none;
        color: black;
        background-color: #F4D03F;
        border: none;
        border-radius: 10px;
        box-shadow: 0 9px #999;
        font-family: 'Prompt', sans-serif;
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🍭</text></svg>"), auto;
    }
    &:hover{
        background-color: #F1C40F
    }
    &:active{
        background-color: #F1C40F;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
   
`;

const Topic5 = Styled.div`
    font-size : 21px;
    color: white;
`;

const Icon = Styled.span`
    &{
        font-size: 29px;
        color: #f8f8f8;
        margin-right: 10px;
        transition: 0.4s;
    }
    &:hover{
        font-size: 35px;
        margin-right: 12px;
    }
`;

const Contact = Styled.div`
    margin-top: 30px;
    height: 60px;
    text-align: center;
    /* display: flex; */
    align-items: flex-end;
`;

const A = Styled.a`
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🍭</text></svg>"), auto;

`;
