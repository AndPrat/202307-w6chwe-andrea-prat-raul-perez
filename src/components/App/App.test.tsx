import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { usersMock } from "../../mocks/userMocks";
import { setupStore } from "../../store";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text Friends & Foes inside a heading", () => {
      const expectedHeading = "Friends & Foes";
      const store = setupStore({
        usersStore: {
          users: usersMock,
        },
      });

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
});
