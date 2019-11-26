import { createGlobalStyle } from 'styled-components'

export const palette = [
    "#00c795",
    "#7a7a7a",
    "#6061c6",
    "#9063cd",
    "#f65275"
]

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    transition: background ${props => props.theme.transitionDurationMs}ms ${props => props.theme.transitionEase};
  }

  html, body {
    background: #222;
    font-size: 20px;
  }

  body {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`

export default {
  primary: palette[0],
  secondary: '#fff',
  transitionDurationMs: 2500,
  transitionEase: 'cubic-bezier(0.46, 0.07, 0.6, 0.88)',
}
