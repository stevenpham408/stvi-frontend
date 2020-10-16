import React from 'react';
import LoginPage from '../LoginPage'
import '@testing-library/jest-dom'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import axios from 'axios'
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

const mockedAxios = axios as jest.Mocked<typeof axios>
const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        push: mockHistoryPush
    }),
}));

it("should pass login with correct credentials", async () => {
    const { getByText, getByPlaceholderText } = render(<MemoryRouter> <LoginPage/> </MemoryRouter>)
    mockedAxios.post.mockImplementationOnce(() => Promise.resolve({
        data: {},
        status: 200,
        config: {},
        headers: {
            crossDomain: true, 
            'Access-Control-Allow-Origin' : 'http://localhost:4040',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }))

   fireEvent.change(getByPlaceholderText("Username"), {
       target: {value: "validuser"},
   });

   fireEvent.change(getByPlaceholderText("Password"), {
       target: {value: "validpw"},
   });

   act(() => {
       fireEvent.click(getByText(/Log in/i));
   });    

   await waitFor(() => (expect(mockHistoryPush).toHaveBeenCalledWith('/userpage')));
})

it("should fail login with wrong/nonexistant credentials", async () => {
    const { getByText, getByPlaceholderText } = render(<LoginPage/>)

    fireEvent.change(getByPlaceholderText("Username"), {
        target: {value: "jason"},
    });

    fireEvent.change(getByPlaceholderText("Password"), {
        target: {value: "password123"},
    });

    act(() => {
        fireEvent.click(getByText(/Log in/i));
    });

    expect(axios.post).toHaveBeenCalled();
    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent(/Login failed. Please double-check your credentials and try again./i);
});

it("should fail login with all missing fields", async () => {
    const { getByText, getByPlaceholderText } = render(<LoginPage/>)

    fireEvent.change(getByPlaceholderText("Username"), {
        target: {value: ""},
    });

    fireEvent.change(getByPlaceholderText("Password"), {
        target: {value: ""},
    });

    act(() => {
        fireEvent.click(getByText(/Log in/i));
    });

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent("Fill in the missing field(s) and try again.");
});

it("should fail login with username field missing", async () => {
    const { getByText, getByPlaceholderText } = render(<LoginPage/>)

    fireEvent.change(getByPlaceholderText("Username"), {
        target: {value: ""},
    });

    fireEvent.change(getByPlaceholderText("Password"), {
        target: {value: "password123"},
    });

    act(() => {
        fireEvent.click(getByText(/Log in/i));
    });

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent("Fill in the missing field(s) and try again.");
});

it("should fail login with all missing fields", async () => {
    const { getByText, getByPlaceholderText } = render(<LoginPage/>)

    fireEvent.change(getByPlaceholderText("Username"), {
        target: {value: ""},
    });

    fireEvent.change(getByPlaceholderText("Password"), {
        target: {value: ""},
    });

    act(() => {
        fireEvent.click(getByText(/Log in/i));
    });

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent("Fill in the missing field(s) and try again.");
});

it("should fail login with password field missing", async () => {
    const { getByText, getByPlaceholderText } = render(<LoginPage/>)

    fireEvent.change(getByPlaceholderText("Username"), {
        target: {value: "username123"},
    });

    fireEvent.change(getByPlaceholderText("Password"), {
        target: {value: ""},
    });

    act(() => {
        fireEvent.click(getByText(/Log in/i));
    });

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent("Fill in the missing field(s) and try again.");
});