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
                    <Topic1 style={{ fontSize: "25px"}}>
                        interactive resume
                    </Topic1>
                </div>

                <Topic>
                    I' m <Name>Z E N</Name> 
                </Topic>

                <div>
                    <Topic2>
                    I was fascinated in <u>programming</u> 💻
                    </Topic2>
                    <Topic2>
                    the <u>software development</u> and eating 🥣.
                    </Topic2>
                    <br/>
                    <Topic3>
                    scroll for next 👉 comming soon.
                    </Topic3>
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
    font-size : 23px;
    color: #17202A;
`

const Topic3 = Styled.div`
    font-size : 18px;
    
    /* font-weight: bold; */
    color: #17202A;
`

const Name = Styled.span`
    color: white;
`

const Center = Styled.div`
    width: 470px;
    height: 330px;
    text-align: left;
    margin: auto;

`

const Container = Styled.div`
  display: flex;
  min-height: 100vh;
`



