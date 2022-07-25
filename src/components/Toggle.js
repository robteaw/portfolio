import React, {useState} from 'react'
import sun from "../images/sun.png";
import moon from "../images/moon.png";
import styled from "styled-components";

export default function Toggle() {
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
    }

  return (
    <Container>
    <button
    id="toggle"
    className={theme === "dark" ? clickedClass : ""}
    onClick={(e) => switchTheme(e)}
  ></button></Container>
  )
}

// Styling
const Container = styled.div`
    #toggle {
        background: transparent url("./images/moon.png") no-repeat center;
        height: 3rem;
        width: 3rem;
        margin: 0 2rem;
        border: none;
        cursor: pointer;
    }

`