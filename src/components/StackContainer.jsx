import React from 'react'
import Styled from 'styled-components'
import { Tooltip } from 'evergreen-ui'

export default function StackContainer() {
    return (
        <Container>
            <Tooltip content="Learn more about a feature">
                <Logo>
                    asdf
                </Logo>
            </Tooltip>

            <Logo> </Logo>
            <Logo> </Logo>
            <Logo> </Logo>
            <Logo> </Logo>
        </Container>
    )
}

const Container = Styled.div`
    display: flex;
    flex-direction: row;
    background-color: green;
    padding: 20px;
`

const Logo = Styled.div`
    background-color: red;
    height: 100px;
    width: 100px;
    margin: 5px;
`