import React from 'react'
import styled from 'styled-components'
import Square from './Square'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(4, 25%);
  grid-template-areas:
    "step1 . step2 ."
    ". step3 . step4"    
    "step5 . step6 ."
    ". step7 . step8"    
`

export default () => (
  <Grid>
    <Square style={{ gridArea: 'step1' }} />    
    <Square style={{ gridArea: 'step2' }} />    
    <Square style={{ gridArea: 'step3' }} />    
    <Square style={{ gridArea: 'step4' }} />    
    <Square style={{ gridArea: 'step5' }} />    
    <Square style={{ gridArea: 'step6' }} />    
    <Square style={{ gridArea: 'step7' }} />    
    <Square style={{ gridArea: 'step8' }} />    
  </Grid>
)
