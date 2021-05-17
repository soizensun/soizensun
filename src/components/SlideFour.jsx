import React from 'react'
import Styled from 'styled-components'

export default function SlideFour() {
    return (
        <Container>
            <Center>
                <Header>
                    Experience
                </Header>
                <Topic1>
                    more detail in <A href="https://www.linkedin.com/in/kritpavinchaiwong-868b641aa/" target="_blank">linkedin</A>
                </Topic1>

                <div style={{ marginBottom: "75px" }}></div>
                <Topic>
                    <Emoji>👨🏻‍💻</Emoji>
                    Software engineer at <Effect6>KBTG</Effect6> - KASIKORN Business Technology Group<Duration>Jun 2021 - present</Duration>
                </Topic>
                <Topic>
                    <Emoji>💻</Emoji>
                    <Effect5>Full-stack Developer</Effect5> <span style={{ color: "#9FC136" }}>android</span> and web path time<Duration>2019 - present</Duration>
                </Topic>
                <Topic>
                    <Emoji>👨🏻‍🏫</Emoji>
                    Teacher assistant in Fundamental Programming Concepts at KU. In <span style={{ color: "#3471A1" }}>py</span><span style={{ color: "#F6CB3E" }}>thon</span> language<Duration>Feb 2021 - Mar 2021</Duration>
                </Topic>
                <Topic>
                    <Emoji>✍🏻</Emoji>
                    Software engineer Intrenship at <Effect4>SCB</Effect4> – Siam Commercial Bank<Duration>Jun 2020 - Oct 2020</Duration>
                </Topic>
                <Topic>
                    <Emoji>⛺</Emoji>
                    <Effect3>Lecturer and Organize</Effect3> in Dev camp #8 organized by com sci KU. In Basic <span style={{ color: "#61dbfb" }}>ReactJs</span> and <span style={{ color: "#f0db4f" }}>JavaScript</span> ES6.
                </Topic>
                <Topic>
                    <Emoji>🤴🏻</Emoji>
                    Be a Leader's computer sci student<Duration>2018 - 2021</Duration>
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

const Header = Styled.span`
        &{
        font-size : 62px;
        /* text-align: left; */
        font-weight: bold;
        display: inline;
        position: relative;
        letter-spacing: 2px;
        color: #45B39D; 
    }
    &:after {
        content: "Experience";
        position: absolute; 
        left: 4px; 
        top: 4px;
        width: 400px;
        color: #F7F9F980;   
    }
    &:hover {
        display: inline;
        position: relative;
        letter-spacing: 2px;
        color: ##45B39Dcc;
        left: -1px; 
        top: -1px;

        &:after {
            content: "Experience";
            position: absolute; 
            left: 5px; 
            top: 5px;
            width: 400px;
            color: #F7F9F98C;   
        }
    }
`
    // letter-spacing: 12px;
    // font-size: 55px;
	// text-align: center;
	// color: white;
	// font-weight: 100;
    // font-style: italic;
    // text-shadow: 3px 3px 0px #eb452bE6, 
    //               6px 6px 0px #efa032E6,
    //                9px 9px 0px #46b59bE6, 
    //               12px 12px 0px #017e7fE6,
    //               15px 15px 0px #052939E6;

const Topic1 = Styled.div`
    font-size : 29px;
    text-align: left;
    margin-top: -8px;
    color: white;
    letter-spacing: 1px;
`

const A = Styled.a`
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🍭</text></svg>"), auto;
    color: #0B66C3;
    text-decoration: none;
`


const Effect3 = Styled.span`
    & {
        padding-right: 5px;
        /* padding-bottom: 7px; */
        /* background: linear-gradient(to right, #ff9800 0%, #ff9800 3px, transparent 5px); */
        background: linear-gradient(to bottom, #85C1E9B3 0%, #85C1E9B3 5px, transparent );
	    background-repeat: repeat-x;
	    background-size: 100%;
        color: white;
        letter-spacing: 1px;
        padding-left: 5px;
        font-size: 23px;
    }
    
    &:hover {
        background: linear-gradient(to bottom, #85C1E9 0%, #85C1E9 5px, transparent );
    }
`

const Effect4 = Styled.span`
    & {
        padding-right: 5px;
        /* padding-bottom: 7px; */
        /* background: linear-gradient(to right, #017e7f 0%, #017e7f 3px, transparent 5px); */
        background: linear-gradient(to bottom, #AF7AC5B3 0%, #AF7AC5B3 5px, transparent );
	    background-repeat: repeat-x;
	    background-size: 100%;
        color: white;
        letter-spacing: 1px;
        padding-left: 5px;
        font-size: 23px;
    }
    
    &:hover {
        background: linear-gradient(to bottom, #AF7AC5 0%, #AF7AC5 5px, transparent );
    }
`

const Effect5 = Styled.span`
    & {
        padding-right: 5px;
        /* padding-bottom: 7px; */
        /* background: linear-gradient(to right, #017e7f 0%, #017e7f 3px, transparent 5px); */
        background: linear-gradient(to bottom, #46b59bB3 0%, #46b59bB3 5px, transparent );
	    background-repeat: repeat-x;
	    background-size: 100%;
        color: white;
        letter-spacing: 1px;
        padding-left: 5px;
        font-size: 23px;
    }
    
    &:hover {
        background: linear-gradient(to bottom, #46b59b 0%, #46b59b 5px, transparent );
    }
`

const Effect6 = Styled.span`
    & {
        padding-right: 5px;
        /* padding-bottom: 7px; */
        /* background: linear-gradient(to right, #017e7f 0%, #017e7f 3px, transparent 5px); */
        background: linear-gradient(to bottom, #00ACD7B3 0%, #00ACD7B3 5px, transparent );
	    background-repeat: repeat-x;
	    background-size: 100%;
        color: white;
        letter-spacing: 1px;
        padding-left: 5px;
        font-size: 23px;
    }
    
    &:hover {
        background: linear-gradient(to bottom, #00ACD7 0%, #00ACD7 5px, transparent );
    }
`