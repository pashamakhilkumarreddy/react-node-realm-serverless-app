import { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Loader = styled.div`
  &,
  &:after {
    border-radius: 50%;
    width: ${(props) => props.width}rem;
    height: ${(props) => props.height}rem;
  }
  & {
    margin: 5rem auto;
    font-size: 0.6rem;
    position: relative;
    text-indent: -9999em;
    border-top: 0.5rem solid #ff6b6b;
    border-right: 0.5rem solid #5f7470;
    border-bottom: 0.5rem solid #889696;
    border-left: 0.5rem solid #fff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: loader 1.1s infinite linear;
    animation: loader 1.1s infinite linear;
  }
  @-webkit-keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const PageLoader = ({ width = 5, height = 5 }) => {
  return <Loader width={width} height={height} />;
};

PageLoader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default memo(PageLoader);
