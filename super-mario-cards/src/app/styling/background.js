import React from 'react';
import styled from 'styled-components'

import { ReactComponent as FullBackground } from '../../assets/background.svg';

const Background = (props) => {
  return (
    <BackgroundScene className="background" />
  )
}

export default Background;

const BackgroundScene = styled(FullBackground)`
  position: absolute;
  height: calc(100vh - 70px);
  width: auto;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 0;
  min-height: 500px;
`
