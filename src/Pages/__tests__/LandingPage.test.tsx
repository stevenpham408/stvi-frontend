import React from 'react';
import ReactDOM from 'react-dom'
import LandingPage from '../LandingPage'

it("should render button correctly", () => {
    const root = document.createElement("div");
    ReactDOM.render(<LandingPage/>, root)
    expect(root.querySelector("Button")!.textContent).toBe("Register");
});

it("should send user to /register page on click", () => {
    const root = document.createElement("div");
    ReactDOM.render(<LandingPage/>, root)
    expect(root.getElementsByClassName("registerHref")[0].getAttribute("href")).toBe("/register");
});