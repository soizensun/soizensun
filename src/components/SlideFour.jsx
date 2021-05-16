import React from 'react'
import Styled from 'styled-components'

export default function SlideFour() {
    return (
        <Container>
            <Center>
                <Effect2>
                    Experience
                </Effect2>
                <Topic1>
                    more detail in <A>linkedin</A>

                </Topic1>

                <div style={{ marginBottom: "75px" }}></div>
                <Topic>
                    <Emoji>👨🏻‍🏫</Emoji>
                    Teacher assistant in Fundamental Programming Concepts at KU. In python language<Duration>Feb 2021 - Mar 2021</Duration>
                </Topic>
                <Topic>
                    <Emoji>⛺</Emoji>
                    Lecturer and Organize in Dev camp #8 organized by com sci KU. In Basic <span style={{color: "#61dbfb"}}>ReactJs</span> and <span style={{color: "#f0db4f"}}>JavaScript</span> ES6.
                </Topic>
                <Topic>
                    <Emoji>🤴🏻</Emoji>
                    Be a Leader's com sci student<Duration>2018 - 2021</Duration>
                </Topic>
                <Topic>
                    <Emoji>👩🏻‍💻</Emoji>
                    Full-stack Developer <span style={{color: "#31DD80"}}>android</span> and web path time<Duration>2019 - present</Duration>
                </Topic>
                <Topic>
                    <Emoji>✍🏻</Emoji>
                    Software engineer Intrenship at <span style={{color: "#6e3bb6"}}>SCB</span> – Siam Commercial Bank<Duration>Jun 2020 - Oct 2020</Duration>
                </Topic>
            </Center>

        </Container>
    )
}

const Topic = Styled.div`
    font-size : 21px;
    color: whitesmoke;
    margin-top: 15px;
`

const Center = Styled.div`
    text-align: left;
    margin: auto;
    padding: 20px;
`

const Container = Styled.div`
    display: flex;
    min-height: 100vh;
`

const Emoji = Styled.span`
    margin-right: 15px;
`

const Duration = Styled.span`
    font-size : 14px;
    margin-left: 20px;
    color: #F5F5F580;
`

const Effect2 = Styled.span`
    letter-spacing: 12px;
    font-size: 55px;
	text-align: center;
	color: white;
	font-weight: 100;
    font-style: italic;
    text-shadow: 3px 3px 0px #eb452bE6, 
                  6px 6px 0px #efa032E6,
                   9px 9px 0px #46b59bE6, 
                  12px 12px 0px #017e7fE6,
                  15px 15px 0px #052939E6;
`

const Topic1 = Styled.div`
    font-size : 29px;
    text-align: left;
    margin: 0px;
    color: white;
    letter-spacing: 1px;
`

const A = Styled.span`
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🍭</text></svg>"), auto;
    color: #0B66C3;
`