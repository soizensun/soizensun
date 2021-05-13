import React from 'react'
import Styled from 'styled-components'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

export default function SlideTwo() {
    return (
        <Container>
            <Center>
                <Topic>
                    <Effect2>About me</Effect2>
                </Topic>
                <Topic style={{ marginBottom: "30px" }}>
                    & How to contact 🤙🏻
                </Topic>

                <br />

                <Topic2>
                    <Emoji>🙏</Emoji> My name is <Effect>Kritpavin Chaiwong</Effect>.
                </Topic2>
                <Topic2>
                    <Emoji>👵</Emoji> I'm <Effect3>23</Effect3> years old.
                </Topic2>
                <Topic2>
                    <Emoji>🥓</Emoji> You can call me <Effect4>Zen</Effect4>.
                </Topic2>
                <Topic2>
                    <Emoji>👨🏻‍💻</Emoji> I'm software engineer at KBTG.
                </Topic2>

                <Contact>
                    <a href="https://github.com/soizensun">
                        <GithubIcon>
                            <AiFillGithub />
                        </GithubIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/kritpavinchaiwong-868b641aa/">
                        <LinkinIcon>
                            <AiFillLinkedin />
                        </LinkinIcon>
                    </a>
                    <a href="https://www.facebook.com/millizen.chaiwong/">
                        <FacebookIcon>
                            <AiFillFacebook />
                        </FacebookIcon>                        
                    </a>

                </Contact>

            </Center>



        </Container>
    )
}

const Center = Styled.div`
    text-align: left;
    margin: auto;
    padding: 20px;
`

const Container = Styled.div`
    display: flex;
    min-height: 100vh;
`

const Topic = Styled.div`
    font-size : 29px;
    text-align: left;
    margin: 0px;
    color: white;
    letter-spacing: 1px;
`

const Topic2 = Styled.div`
    font-size : 21px;
    color: #f8f8f8;
    margin-top: 10px;
`

const Effect = Styled.span`
    & {
        background: linear-gradient(to right, #052939 0%, #052939 3px, transparent 5px);
	    background-repeat: repeat-x;
	    background-size: 100%;
        color: white;
        letter-spacing: 2px;
        padding-left: 10px;
        text-decoration: none;
        font-size: 23px;
    }
    
    &:hover {
        background: linear-gradient(to right, #052939 0%, #052939 5px, transparent );
    }
`

const Effect2 = Styled.span`
    letter-spacing: 12px;
    font-size: 55px;
	text-align: center;
	color: white;
	font-weight: 700;
    font-style: italic;
    text-shadow: 3px 3px 0px #eb452bb3, 
                  6px 6px 0px #efa032b3,
                   9px 9px 0px #46b59bb3, 
                  12px 12px 0px #017e7fb3,
                  15px 15px 0px #052939b3;
`

const Effect3 = Styled.span`
    & {
        background: linear-gradient(to right, #ff9800 0%, #ff9800 3px, transparent 5px);
	    background-repeat: repeat-x;
	    background-size: 100%;
        color: white;
        letter-spacing: 2px;
        padding-left: 10px;
        text-decoration: none;
        font-size: 23px;
    }
    
    &:hover {
        background: linear-gradient(to right, #ff9800 0%, #ff9800 5px, transparent );
    }
`

const Effect4 = Styled.span`
    & {
        background: linear-gradient(to right, #017e7f 0%, #017e7f 3px, transparent 5px);
	    background-repeat: repeat-x;
	    background-size: 100%;
        color: white;
        letter-spacing: 2px;
        padding-left: 10px;
        text-decoration: none;
        font-size: 23px;
    }
    
    &:hover {
        background: linear-gradient(to right, #017e7f 0%, #017e7f 5px, transparent );
    }
`

const Emoji = Styled.span`
    margin-right: 15px;
`

const GithubIcon = Styled.span`
    font-size: 30px;
    color: #f8f8f8;
    margin-right: 10px;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:30px;'><text y='50%'>🍖</text></svg>"), auto;
`

const LinkinIcon = Styled.span`
    font-size: 30px;
    color: #f8f8f8;
    margin-right: 10px;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:30px;'><text y='50%'>🍖</text></svg>"), auto;
`

const FacebookIcon = Styled.span`
    font-size: 30px;
    color: #f8f8f8;
    margin-right: 10px;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:30px;'><text y='50%'>🍖</text></svg>"), auto;
`

const Contact = Styled.div`
    /* background-color: red; */
    margin-top: 50px;
    text-align: right;
`