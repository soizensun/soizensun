import React from 'react'
import Styled from 'styled-components'
import StackContainer from './StackContainer'

export default function SlideThree() {
    return (
        <Container>
            <Center>
                skill
                <StackContainer>
                    
                </StackContainer>
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
