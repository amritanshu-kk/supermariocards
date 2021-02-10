import React from 'react';
import styled, { keyframes } from 'styled-components';
import Background from '../styling/background';
import {ReactComponent as Logo} from '../../assets/super-mario-cards-logo.svg';


class SplashView extends React.Component {

  componentDidMount() {

    setTimeout(this.props.handler, 3000);
  }

  render() {
    return (
      <React.Fragment>
        <Main className="main">
          <Background  />
          <StyledLogo className="splash-logo" />
        </Main>
      </React.Fragment>
    )
  }
}

export default SplashView;

const HeaderHeight = "70px";
const pulse = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.0;
  }
  60% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(0.9);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Main = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  padding: ${HeaderHeight} 20px 0 20px;
  box-sizing: border-box;
  text-align: center;

  .background {
    bottom: initial;
  }
`
const StyledLogo = styled(Logo)`
  position: relative;
  height: 100%;

  &.splash-logo {
    height: auto;
    width: 700px;
    top: 20px;

    animation: ${pulse} 2s ease-in-out;
  }
`
