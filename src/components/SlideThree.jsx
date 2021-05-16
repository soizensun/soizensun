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
`

const Container2 = Styled.div`
    display: flex;
    min-height: 100vh;
`

const Topic = Styled.div`
    font-size : 21px;
    color: #17202A;
`

