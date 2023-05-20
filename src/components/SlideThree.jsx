import React from 'react'
import Styled from 'styled-components'
import StackContainer from './StackContainer'
import { languages } from '../util/languages';
import { stacks } from '../util/stack'
import { mores } from '../util/more'
import { interest } from '../util/interest'

export default function SlideThree() {


    return (
        <Container2>
            <Center>
                <Effect>Skills</Effect>
                <Container>
                    <StackContainer renderLogo={languages} content={"Languages"}/>
                    <StackContainer renderLogo={stacks} content={"Library & Framework"}/>
                    <StackContainer renderLogo={mores} content={"More"}/>
                    <StackContainer renderLogo={interest} content={"Interest"}/>
                </Container>
                <Topic>
                    I'm interested in <u>web dev</u> and <u>android dev</u>. 📱
                </Topic>
                <Topic>
                    I'm also interested in <u>tech startup</u> and <u>progressive web app</u>. 🍎
                </Topic>
            </Center>
        </Container2>


    )
}

const Center = Styled.div`
    margin: auto;
    text-align: center;
`

const Container = Styled.div`
    display: flex;
    align-items: center;
    margin: 30px;
    /* background-color:red; */
    height: 320px;
`

const Container2 = Styled.div`
    display: flex;
    min-height: 100vh;
`

const Topic = Styled.div`
    font-size : 21px;
    color: #17202A;
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
        content: "Skill";
        position: absolute; 
        left: 4px; 
        top: 4px;
        /* width: 100px; */
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
            content: "Skill";
            position: absolute; 
            left: 6px; 
            top: 5px;
            /* width: 400px; */
            color: rgba(255,0,0,0.5);   
        }
    }
`
