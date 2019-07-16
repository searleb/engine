import styled from 'styled-components'

export default styled.div`
  overflow: hidden;
  
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    transform: translate(-50%, -50%);
    border-style: solid;
    border-width: 2.5rem;
    border-radius: 100%;
    border-color: ${props => props.theme.primary};
    box-sizing: content-box;
    transition: border-color ${props => props.theme.transitionDurationMs}ms ease;
  }
`


