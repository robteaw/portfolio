import React from "react";
import styled from "styled-components";

export default function ScrollDown() {
  return (
    <Container>
      <div className="scroll-down">
        <a href="#about">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </a>
      </div>
    </Container>
  );
}

// Styling
const Container = styled.div`
  height: 19rem;
  align-items: center;
  .scroll-down {
    position: relative;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 34px;
    cursor: pointer;
  }
  .mousey {
    width: 3px;
    padding: 10px 15px;
    height: 35px;
    border: 2px solid #fff;
    border-radius: 25px;
    opacity: 0.75;
    box-sizing: content-box;
    &:hover {
      background-color: var(--mouseHover);
    }
  }
  .scroller {
    width: 3px;
    height: 10px;
    border-radius: 25%;
    background-color: #fff;
    animation-name: scroll;
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
    animation-iteration-count: infinite;
  }
  @keyframes scroll {
    0% {
      opacity: 0;
    }
    10% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }
`;
