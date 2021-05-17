import React from 'react'
import Styled from 'styled-components'
import { Tooltip } from 'evergreen-ui'

export default function StackContainerSmall(props) {
    return (
        <div>
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
    margin-top: 30px;
    flex-wrap: wrap;
    justify-content: center;
    /* background-color: red; */
`

const Logo = Styled.div`
    &{
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
        margin: 12px;
        background-image: url(${props => props.imageUrl || "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"});
        background-size: ${props => {
        let width = props.width + "px"
        let height = props.height + "px"
        return width + " " + height
    }};
    }


    &:hover{
        margin-right: 17px;
        margin-left: 17px;

        /* margin-bottom: 60px; */
    }

`