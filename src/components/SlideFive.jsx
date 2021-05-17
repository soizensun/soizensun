import React from 'react'
import Styled from 'styled-components'

export default function SlideFive() {
    return (
        <Container>
            <Center>
                <Effect>
                    Project
                </Effect>
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

const Effect = Styled.span`
    &{
        font-size : 72px;
        /* text-align: left; */
        font-weight: bold;
        display: inline;
        position: relative;
        letter-spacing: 2px;
        color: rgba(0,0,255,0.5); 
    }
    &:after {
        content: "Project";
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
            content: "Project";
            position: absolute; 
            left: 6px; 
            top: 5px;
            width: 400px;
            color: rgba(255,0,0,0.5);   
        }
    }
`