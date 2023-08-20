import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { usersMock } from "../../mocks/userMocks";
import { setupStore } from "../../store";
import App from "./App";

describe("Given an App component", () => {
  const store = setupStore({
    usersStore: {
      users: usersMock,
    },
  });

  describe("When it is rendered", () => {
    test("Then it should show the text Friends & Foes inside a heading", () => {
      const expectedHeading = "Friends & Foes";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
  describe("When the 'ADD USER' link is clicked", () => {
    test("Then it should show a page with an 'Add friend, or enemy' text as a header", async () => {
      const expectedText = "Add friend, or enemy";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>,
      );

      const link = screen.getByRole("link", { name: "Add user" });

      await userEvent.click(link);

      expect(
        screen.getByRole("heading", {
          name: expectedText,
        }),
      ).toBeInTheDocument();
    });
  });
});
