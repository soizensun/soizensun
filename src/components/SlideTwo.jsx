import React from 'react'
import Styled from 'styled-components'

export default function SlideTwo() {
    return (
        <Container>
            <Center>
                <Topic>
                    me ? and
                    <br/>
                    How to contact ?
                </Topic>
                My name is
                Kritpavin Chaiwong 
                <br/>
                23 years old
                <br/>
                You can call me zen
                <br/>
                I am software engineer at KBTG 💰
                <div>
                    
                </div>
                
            </Center>
            
        </Container>
    )
}

const Center = Styled.div`
    /* background-color: greenyellow; */
    /* width: 370px;
    height: 250px; */
    text-align: left;
    margin: auto;
    padding: 20px;
`

const Container = Styled.div`
  display: flex;
  min-height: 100vh;
`
const Topic = Styled.div`
    font-size : 56px;
    text-align: left;
    font-weight: bold;
    margin: 0px;
    color: white;
    letter-spacing: 5px;
`

