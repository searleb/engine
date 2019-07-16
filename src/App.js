import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Circle from './components/Circle'
import { ThemeProvider, keyframes } from 'styled-components'
import theme, { palette, GlobalStyles } from './theme'
import Donut from './components/Donut'
import Square from './components/Square'
import Stairs from './components/Stairs'
import Checker from './components/Checker'
import Angled from './components/Angled'
import HalfCurve from './components/HalfCurve'
import DoubleCurve from './components/DoubleCurve'
import Radar from './components/Radar'

const Center = styled.div`
  display: flex;
  justify-content: center;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(4, 100px);
  opacity: 0;
  animation-name: ${fadeIn};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`

function App() {
  const [randomTheme, setRandomTheme] = useState(theme);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomTheme({
        ...theme,
        primary: palette[Math.floor(Math.random() * palette.length)]
      })
    }, theme.transitionDurationMs);
    return () => clearInterval(interval);
  })

  return (
    <ThemeProvider theme={randomTheme}>
      <>
        <GlobalStyles />
        <Center>
          <Grid >
            <Circle />
            <Donut />
            <Square />
            <Stairs />
            <Circle />
            <Angled />
            <Checker />
            <Square secondary />
            <HalfCurve />
            <DoubleCurve />
            <Circle />
            <Radar />
          </Grid>
        </Center>
      </>
    </ThemeProvider>
  );
}

export default App
