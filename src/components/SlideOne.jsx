import React from 'react'
import Styled from 'styled-components'

export default function SlideOne() {
    return (
        <Container>
            <Center>
                <div>
                    <Topic1>
                        Welcome to my
                    </Topic1>
                    <Topic1 style={{ fontSize: "25px" }}>
                        interactive resume
                    </Topic1>
                </div>

                <Topic>
                    I' m <Name>Z E N</Name>
                </Topic>

                <div>
                    <Topic2>
                        I was fascinated in eating 🥣
                    </Topic2>
                    <Topic2>
                        and the <u>software development</u>.
                    </Topic2>
                    <br />
                    <br />
                    <div style={{ fontSize: "23px" }}>
                        <Topic3>scroll for next</Topic3> 👉
                    </div>
                </div>
            </Center>
        </Container>
    )
}

const Topic = Styled.div`
    font-size : 72px;
    text-align: left;
    font-weight: bold;
    margin: 0px;
    color: #17202A;
`

const Topic1 = Styled.div`
    font-size : 17px;
    margin-top: -8px;
`

const Topic2 = Styled.div`
    font-size : 24px;
    color: #17202A;
`

const Topic3 = Styled.span`
    font-size : 18px;
    color: #17202Ab3;
`

const Name = Styled.span`
    &{
        display: inline;
        position: relative;
        letter-spacing: -5px;
        color: rgba(0,0,255,0.5); 
    }
    &:after {
        content: "Z E N";
        position: absolute; 
        left: 4px; 
        top: 4px;
        width: 170px;
        color: rgba(255,0,0,0.5);   
    }
    &:hover {
        display: inline;
        position: relative;
        letter-spacing: -5px;
        color: rgba(0,0,255,0.5);

        &:after {
            content: "Z E N";
            position: absolute; 
            left: 5px; 
            top: 5px;
            width: 170px;
            color: rgba(255,0,0,0.5);   
        }
    }
`

const Center = Styled.div`
    /* background-color: red; */
    text-align: left;
    margin: auto;
    padding: 30px;
`

const Container = Styled.div`
  display: flex;
  min-height: 100vh;
`



