import React from 'react'
import Styled from 'styled-components'
import ProjectContainer2 from './ProjectContainer2'


export default function SlideFive() {
    return (
        <Container>
            <Center>
                <Effect>
                    Projects(2)
                </Effect>
                <Topic1>
                    more projects in <A href="https://github.com/soizensun" target="_blank"><u>Github</u></A>
                </Topic1>
                <Container2>
                    <ProjectContainer2/>
                </Container2>
            </Center>
        </Container>
    )
}

const Center = Styled.div`
    text-align: center;
    margin: auto;
    padding: 20px;
`

const Container = Styled.div`
    display: flex;
    min-height: 100vh;
`

const Container2 = Styled.div`
    display: flex;
    align-items: center;
    margin: 30px;
    /* background-color: red; */
`

const Effect = Styled.span`
    &{
        font-size : 72px;
        font-weight: bold;
        display: inline;
        position: relative;
        letter-spacing: 2px;
        color: rgba(0,0,255,0.5);
    }
    &:after {
        content: "Projects(2)";
        position: absolute; 
        left: 4px; 
        top: 4px;
        /* width: 400px; */
        color: rgba(255,0,0,0.5);   
    }
    &:hover {
        display: inline;
        position: relative;
        letter-spacing: 2px;
        color: rgba(0,0,255,0.5);
        left: -1px; 
        top: -1px;

        &:after { 
            content: "Projects(2)";
            position: absolute; 
            left: 6px; 
            top: 5px;
            /* width: 400px; */
            color: rgba(255,0,0,0.5);   
        }
    }
`

const Topic1 = Styled.div`
    font-size : 25px;
    text-align: center;
    margin-top: -13px;
    margin-bottom: 70px;
    letter-spacing: 1px;
`

const A = Styled.a`
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🍭</text></svg>"), auto;
    color: #312F2E;
`