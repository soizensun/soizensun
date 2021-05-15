import React, {useEffect, useState} from 'react'
import Styled from 'styled-components'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export default function SlideTwo() {
    const [age, setAge] = useState("");

    useEffect(() => {
        const dateString = "1997-10-15";
          const now = new Date();
  
          const yearNow = now.getFullYear();
          const monthNow = now.getMonth();
          const dateNow = now.getDate();
  
          const dob = new Date(dateString);
  
          const yearDob = dob.getFullYear();
          const monthDob = dob.getMonth();
          const dateDob = dob.getDate();
  
          let yearAge = yearNow - yearDob;
          let monthAge;
  
          if (monthNow >= monthDob) {
              monthAge = monthNow - monthDob;
          } else {
              yearAge--;
              monthAge = 12 + monthNow - monthDob;
          }
  
          let dateAge;
          if (dateNow >= dateDob) {
              dateAge = dateNow - dateDob;
          } else {
              monthAge--;
              dateAge = 31 + dateNow - dateDob;
  
              if (monthAge < 0) {
                  monthAge = 11;
                  yearAge--;
              }
          }
  
          const age = {
              years: yearAge,
              months: monthAge,
              days: dateAge
          };
  
          const yearString = (age.years > 1) ? " years" : " year";
          const monthString = (age.months > 1) ? " months" : " month";
          const dayString = (age.days > 1) ? " days" : " day";
  
          let ageString = "";
  
          if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
              ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old";
          } else if ((age.years === 0) && (age.months === 0) && (age.days > 0)) {
              ageString = "Only " + age.days + dayString + " old!";
          } else if ((age.years > 0) && (age.months === 0) && (age.days === 0)) {
              ageString = age.years + yearString + " old. Happy Birthday 🍰🎈";
          } else if ((age.years > 0) && (age.months > 0) && (age.days === 0)) {
              ageString = age.years + yearString + " and " + age.months + monthString + " old";
          } else if ((age.years === 0) && (age.months > 0) && (age.days > 0)) {
              ageString = age.months + monthString + " and " + age.days + dayString + " old";
          } else if ((age.years > 0) && (age.months === 0) && (age.days > 0)) {
              ageString = age.years + yearString + " and " + age.days + dayString + " old";
          } else if ((age.years === 0) && (age.months > 0) && (age.days === 0)) {
              ageString = age.months + monthString + " old.";
          } else {
              ageString = "Oops! Could not calculate age!";
          }
  
          setAge(ageString)
    }, []);

    return (
        <Container>
            <Center>
                <Topic>
                    <Effect2>About me</Effect2>
                </Topic>
                <Topic style={{ marginBottom: "30px" }}>
                    & How to contact 🤙🏻
                </Topic>

                <br />

                <Topic2>
                    <Emoji>🙋🏻‍♂</Emoji> My name is <Effect>Kritpavin Chaiwong</Effect>
                </Topic2>
                <Topic2>
                    <Emoji>📐</Emoji> You can call me <Effect4>Zen</Effect4>
                </Topic2>
                <Topic2>
                    <Emoji>👦🏻</Emoji> I'm <Effect3>{age}</Effect3>
                </Topic2>
                <Topic2>
                    <Emoji>👨🏻‍💻</Emoji> I'm software engineer at <Effect5>KBTG</Effect5>
                </Topic2>

                <Contact>
                    <A href="https://github.com/soizensun" target="_blank">
                        <Icon>
                            <AiFillGithub />
                        </Icon>
                    </A>
                    <A href="https://www.linkedin.com/in/kritpavinchaiwong-868b641aa/" target="_blank">
                        <Icon>
                            <AiFillLinkedin />
                        </Icon>
                    </A>
                    <A href="https://www.facebook.com/millizen.chaiwong/" target="_blank">
                        <Icon>
                            <AiFillFacebook />
                        </Icon>                        
                    </A>
                    <A href="https://www.instagram.com/soizensun/" target="_blank">
                        <Icon>
                            <AiFillInstagram />
                        </Icon>                        
                    </A>
                </Contact>
                
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

const Topic = Styled.div`
    font-size : 29px;
    text-align: left;
    margin: 0px;
    color: white;
    letter-spacing: 1px;
`

const Topic2 = Styled.div`
    font-size : 21px;
    color: #f8f8f8;
    margin-top: 10px;
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

const Effect = Styled.span`
    & {
        padding-right: 7px;
        padding-bottom: 7px;
        /* background: linear-gradient(to right, #052939 0%, #052939 3px, transparent 5px); */
        background: linear-gradient(to bottom, #052939B3 0%, #052939B3 5px, transparent );
	    background-repeat: repeat-x;
	    background-size: 100%;
        color: white;
        letter-spacing: 1px;
        padding-left: 10px;
        font-size: 23px;
    }
    
    &:hover {
        background: linear-gradient(to bottom, #052939 0%, #052939 5px, transparent );
    }
`

const Effect3 = Styled.span`
    & {
        padding-right: 7px;
        padding-bottom: 7px;
        /* background: linear-gradient(to right, #ff9800 0%, #ff9800 3px, transparent 5px); */
        background: linear-gradient(to bottom, #ff9800B3 0%, #ff9800B3 5px, transparent );
	    background-repeat: repeat-x;
	    background-size: 100%;
        color: white;
        letter-spacing: 1px;
        padding-left: 10px;
        font-size: 23px;
    }
    
    &:hover {
        background: linear-gradient(to bottom, #ff9800 0%, #ff9800 5px, transparent );
    }
`

const Effect4 = Styled.span`
    & {
        padding-right: 7px;
        padding-bottom: 7px;
        /* background: linear-gradient(to right, #017e7f 0%, #017e7f 3px, transparent 5px); */
        background: linear-gradient(to bottom, #017e7fB3 0%, #017e7fB3 5px, transparent );
	    background-repeat: repeat-x;
	    background-size: 100%;
        color: white;
        letter-spacing: 1px;
        padding-left: 10px;
        font-size: 23px;
    }
    
    &:hover {
        background: linear-gradient(to bottom, #017e7f 0%, #017e7f 5px, transparent );
    }
`

const Effect5 = Styled.span`
    & {
        padding-right: 7px;
        padding-bottom: 7px;
        /* background: linear-gradient(to right, #017e7f 0%, #017e7f 3px, transparent 5px); */
        background: linear-gradient(to bottom, #46b59bB3 0%, #46b59bB3 5px, transparent );
	    background-repeat: repeat-x;
	    background-size: 100%;
        color: white;
        letter-spacing: 1px;
        padding-left: 10px;
        font-size: 23px;
    }
    
    &:hover {
        background: linear-gradient(to bottom, #46b59b 0%, #46b59b 5px, transparent );
    }
`

const Emoji = Styled.span`
    margin-right: 15px;
`

const Icon = Styled.span`
    &{
        font-size: 29px;
        color: #f8f8f8;
        margin-right: 10px;
        transition: 0.4s;
    }
    &:hover{
        font-size: 35px;
        margin-right: 12px;
    }
`

const Contact = Styled.div`
    margin-top: 40px;
    /* background-color: red; */
    height: 60px;
    /* text-align: center; */
    display: flex;
    align-items: flex-end;
`

const A = Styled.a`
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🍭</text></svg>"), auto;

`