import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <footer>
        <p>© 2021 Robert Tea</p>
      </footer>
    </Container>
  );
}

// Styling
const Container = styled.div`
  footer {
    background-color: var(--bgColor2);
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 1rem;
    top: 100%;
    bottom: 0;
    position: relative;
    clear: both;
  }

  @media (max-width: 950px) {
    footer p {
      font-size: 0.9rem;
    }
  }
`;
