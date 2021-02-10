import styled from 'styled-components';
import { BLUE } from './colors';

export const Button = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  font-size: 0;

  .icon {
    font-size: 2.5rem;
  }
`;

export const FormButton = styled(Button)`
  background-color: ${BLUE.normal};
  border: none;
  box-shadow: 0px 5px 0px 0px ${BLUE.shadow};
  border-radius: 10px;
  color: white;
  display: inline-block;
  font-size: 24px;
  padding: 15px 20px 10px 20px;
  position: relative;
  width: 242px;
  transition: background 200ms;

  &:hover {
    box-shadow: 0px 4px 0px 0px ${BLUE.shadow};
    top: 1px;
  }

  &:active {
    background-color: darken(${BLUE.normal}, 7%);
    box-shadow: 0px 1px 0px 0px ${BLUE.shadow};
    top: 4px;
  }
`
