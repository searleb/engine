import React from 'react'
import styled from 'styled-components'

const Semi = styled.div`
  width: 100%;
  height: 100%;
  border-width: 1.25rem;
  border-style: solid;
  border-color: ${props => props.theme.secondary};
  display: block;
  border-radius: 100%;
  box-sizing: border-box;
  background: #000;
  position: relative;
  border-top-color: #000;
  border-left-color: #000;
  
  &:first-child {
    transform: translateY(-50%) rotate(45deg);
    z-index: 2;
  }
  
  &:last-child {
    transform: translateY(-100%) rotate(45deg);
  }
`

const Container = styled.div`
  overflow: hidden;
  position: relative;
`

export default () => (
  <Container>
    <Semi />
    <Semi />
  </Container>
)