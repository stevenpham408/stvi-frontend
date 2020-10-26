import React from 'react';
import ReactDOM from 'react-dom'
import LandingPage from '../LandingPage'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

const root = document.createElement("div");
ReactDOM.render(<BrowserRouter><LandingPage/></BrowserRouter>, root)

it("should render button correctly", () => {
    expect(root.querySelectorAll("Button")[0]!.textContent).toBe("LOGIN");
    expect(root.querySelectorAll("Button")[1]!.textContent).toBe("Register for Free");
});