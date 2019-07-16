import React from 'react'
import styled from 'styled-components'
import Square from './Square'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(4, 25%);
  grid-template-areas:
    "corner1 . . step4"
    ". . step3 ."    
    ". step2 . ."
    "step1 . . corner2"    
`

export default () => (
  <Grid>
    <Square secondary style={{ gridArea: 'corner1'}}/>
    <Square secondary style={{ gridArea: 'step4'}}/>
    <Square secondary style={{ gridArea: 'step3'}}/>
    <Square secondary style={{ gridArea: 'step2'}}/>
    <Square secondary style={{ gridArea: 'step1'}}/>
    <Square secondary style={{ gridArea: 'corner2'}}/>
  </Grid>
)
