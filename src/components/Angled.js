import styled, { css } from 'styled-components'

const shared = css`
  width: 100%;
  border-style: solid;
  border-width: 0;
  border-top-width: 1.25rem;
  border-left-width: 1.25rem;
  border-color: ${props => props.theme.secondary};
`

export default styled.div`
  ${shared};
  overflow: hidden;
  
  &::after {
    ${shared};
    content: "";
    height: 100%;
    display: block;
    transform: translate(25%, 25%);
  }
`


