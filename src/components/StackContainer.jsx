import React from 'react'
import Styled from 'styled-components'
import { Tooltip } from 'evergreen-ui'

export default function StackContainer(props) {
    return (
        <div>
            <Header>{props.content}</Header>
            <Container>
                {
                    props.renderLogo.map(logo =>
                        <Tooltip content={logo.name} >
                            <Logo imageUrl={logo.imageUrl} width={logo.width} height={logo.height}></Logo>
                        </Tooltip>
                    )
                }
            </Container>
            
        </div>

    )
}

const Container = Styled.span`
    display: flex;
    background-color: #081E2C;
    padding: 15px;
    margin: 8px;
    border-radius: 8px;
    flex-wrap: wrap;
    justify-content: center;
`

const Logo = Styled.div`
    &{
            /* background-color: red; */
        transition: 0.4s;
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🍭</text></svg>"), auto;
        height: ${props => {
        let height = props.height + "px"
        return height
    }};
        width: ${props => {
        let width = props.width + "px"
        return width
    }};
        /* margin-left: 15px;
        margin-right: 15px;
        margin-top: 10px;
        margin-bottom: 10px; */
        margin: 15px;
        background-image: url(${props => props.imageUrl || "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"});
        background-size: ${props => {
        let width = props.width + "px"
        let height = props.height + "px"
        return width + " " + height
    }};
    }


    &:hover{
        /* margin-right: 25px;
        margin-left: 25px; */

        margin-bottom: 60px;
    }

`

const Header = Styled.div`
    font-size : 24px;
    color: #17202A;
`