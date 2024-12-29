import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Mock_Data from "../mocks/menulist.json";
import { Provider } from "react-redux";
import reduxStore from "../../utils/reduxStore";
import "@testing-library/jest-dom";
import HeaderComponent from "../HeaderComponent";
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_Data);
    },
  });
});

it("Should render menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={reduxStore}>
          <HeaderComponent />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordHead = screen.getByText("Biryani (8)");
  fireEvent.click(accordHead);

  expect(screen.getAllByTestId("fooditems").length).toBe(8);

  const addbtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addbtn[0]);

  expect(screen.getByText("Cart : 1 Items")).toBeInTheDocument();
});
