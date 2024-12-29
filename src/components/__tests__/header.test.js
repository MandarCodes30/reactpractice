import { fireEvent, render, screen } from "@testing-library/react"
import HeaderComponent from "../HeaderComponent"
import { Provider } from "react-redux"
import reduxStore from "../../utils/reduxStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";

it("Should render Header Component",()=>{
    render(
        <BrowserRouter>
        <Provider store={reduxStore}>
        <HeaderComponent/>
        </Provider>
        </BrowserRouter>
    )
})

it("Should render Login Button",()=>{
    render(
        <BrowserRouter>
        <Provider store={reduxStore}>
        <HeaderComponent/>
        </Provider>
        </BrowserRouter>
    )

    const buttonLogin = screen.getByRole("button",{name: "Login"});

    expect(buttonLogin).toBeInTheDocument();
})

it("Should render Login nav",()=>{
    render(
        <BrowserRouter>
        <Provider store={reduxStore}>
        <HeaderComponent/>
        </Provider>
        </BrowserRouter>
    )

    const navText = screen.getByText(/Grocery/);

    expect(navText).toBeInTheDocument();
})

it("Should render LogOut Button",()=>{
    render(
        <BrowserRouter>
        <Provider store={reduxStore}>
        <HeaderComponent/>
        </Provider>
        </BrowserRouter>
    )

    const buttonLogin = screen.getByRole("button",{name: "Login"});

    fireEvent.click(buttonLogin);

    const buttonLogout = screen.getByRole("button",{name: "LogOut"});

    expect(buttonLogout).toBeInTheDocument();
})