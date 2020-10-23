import React from 'react';
import ReactDOM from 'react-dom'
import LandingPage from '../LandingPage'

it("should render button correctly", () => {
    const root = document.createElement("div");
    ReactDOM.render(<LandingPage/>, root)
    expect(root.querySelectorAll("Button")[0]!.textContent).toBe("LOGIN");
    expect(root.querySelectorAll("Button")[1]!.textContent).toBe("Register for free");

});

it("should send user to /register page on click", () => {
    const root = document.createElement("div");
    ReactDOM.render(<LandingPage/>, root)
    expect(root.getElementsByClassName("registerHref")[0].getAttribute("href")).toBe("/register");
});