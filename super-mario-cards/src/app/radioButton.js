import React from 'react';
import styled from 'styled-components';

import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import { BROWN } from './styling/colors';

function RadioButton (props) {

  const name = props.difficulty.toLowerCase();
  const visible = props.checked ? "active" : "";

  return (
    <FormGroup className="form-group">
      <Arrow className={`arrow ${visible}`} />
      <input type="radio" name="difficulty" id={name}
          value={props.difficulty}
          checked={props.checked}
          onChange={props.changeHandler } />
      <label htmlFor={name}>{name}</label>
    </FormGroup>
  );
}

export default RadioButton;

const FormGroup = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  label {
    font-size: 24px;
    text-transform: capitalize;
  }

  input[type="radio"] {
    visibility: hidden;
    margin: 0 10px;
  }
`

const Arrow = styled(RightArrow)`
  fill: ${BROWN};
  display: inline-block;
  vertical-align: middle;
  height: 32px;
  width: auto;

  &:not(.active) {
    visibility: hidden;
  }
`
