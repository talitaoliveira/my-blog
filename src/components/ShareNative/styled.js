import styled from "styled-components"
import { ShareAlt as Share } from 'styled-icons/boxicons-regular/ShareAlt'

export const ShareIcon = styled(Share)`
  display: flex;
  width: 30px;
  height: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  cursor: pointer;
  border: 2px solid var(--texts);
  padding: 5px;
  border-radius: 5px;
  color: var(--texts);

  &:hover{
    color: var(--highlight) ;
    border-color: var(--highlight);
}
`
