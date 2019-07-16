import styled from 'styled-components'

export default styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.secondary ? props.theme.secondary : props.theme.primary};
`