import React, { useState } from "react";
// import sun from "../images/sun.png";
// import moon from "../images/moon.png";
import toggle from "../images/toggle.png";
import styled from "styled-components";

export default function Toggle() {
  // Theme switch
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  // Icon change
  //   const [icon, setIcon] = useState(moon);
  //   const changeIcon = () => setIcon(!icon);

  return (
    <Container>
      <img
        src={toggle}
        alt=""
        id="toggle"
        className={theme === "dark" ? clickedClass : ""}
        onClick={(e) => switchTheme(e)}
      />
      {/* <img
        src={icon ? moon : sun}
        alt=""
        id="toggle"
        className={theme === "dark" ? clickedClass : ""}
        onClick={changeIcon}
      /> */}
    </Container>
  );
}

// Styling
const Container = styled.div`
  #toggle {
    height: 2rem;
    padding: 0 1.5rem;
    border: none;
    cursor: pointer;
  }
`;
