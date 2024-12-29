const { render, act, screen, fireEvent } = require("@testing-library/react")
import { BrowserRouter } from "react-router"
import BodyComponent from "../BodyComponent"
import Mock_Data from "../mocks/reslistData.json"
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(Mock_Data)
        }
    })
})
it("should render body component with search button",async ()=>{
    await act(async()=>{
    render(
    <BrowserRouter><BodyComponent/></BrowserRouter>)
});
const cardsbeforeSearch = screen.getAllByTestId("resCard")

expect(cardsbeforeSearch.length).toBe(20);
const searchButton = screen.getByRole("button",{name:"Search"});
const searchInput = screen.getByTestId("searchInput");

fireEvent.change(searchInput,{target:{value:"kfc"}})
fireEvent.click(searchButton);

const cards = screen.getAllByTestId("resCard")
console.log("cradsss",cards)
expect(cards.length).toBe(1);
})

it("should render body component with search button",async ()=>{
    await act(async()=>{
    render(
    <BrowserRouter><BodyComponent/></BrowserRouter>)
});
const cardsbeforeFilter = screen.getAllByTestId("resCard")

expect(cardsbeforeFilter.length).toBe(20);

const filterButton = screen.getByRole("button",{name:"Top Rated Restaurant"})
fireEvent.click(filterButton);

const filteredCards = screen.getAllByTestId("resCard");
expect(filteredCards.length).toBe(5);

})