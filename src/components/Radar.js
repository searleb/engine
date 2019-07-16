import React from 'react'
import styled, { css } from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow: hidden;
`

const shared = css`
  overflow: hidden;
  border-style: solid;
  border-width: 0.75rem;
  border-color: ${props => props.theme.secondary};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wave = styled.div`
  ${shared};
  width: 200%;
  height: 200%;
  transform: translate(-50%);
`

const InnerWave = styled.div`
  ${shared}
  width: 55%;
  height: 55%;
`

const Container = styled.div`
  overflow: hidden
`

const Radar = () => (
  <Container>
    <Wave>
      <InnerWave />
    </Wave>
  </Container>
)

export default () => (
  <Grid>
    <Radar />
    <Radar />
    <Radar />
    <Radar />
  </Grid>
)