import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <footer>
        <p>© 2021 Robert Tea</p>
        <div class="icon">
          <a
            href="https://www.linkedin.com/in/robert-tea-4866a2146/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/robteaw" target="_blank" rel="noreferrer">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </Container>
  );
}

// Styling
const Container = styled.div`
  footer {
    max-width: 81.25rem;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    padding-right: 3.125rem;
    padding-left: 3.125rem;
    align-items: center;
    justify-content: space-between;
  }

  .icon i {
    color: var(--btnText);
    margin-left: 1.5rem;
    cursor: pointer;
  }

  .icon i:hover {
    color: var(--btnColor);
  }

  @media (max-width: 950px) {
    footer p {
      font-size: 0.9rem;
    }
  }
`;
